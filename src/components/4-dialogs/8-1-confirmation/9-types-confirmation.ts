import { type ReactNode } from "react";
import { atom } from "jotai";

export type ConfirmationUi = {
    title: string;
    icon?: ReactNode;
    message: ReactNode;
    buttonOk: string;
    buttonCancel?: string;
    isDafaultOk: boolean;
};

export type ConfirmationData = {
    ui: ConfirmationUi;
    resolve: (ok: boolean) => void;
};

// TS can pick the read-only `atom(read)` overload when `strictNullChecks` is off
// (because `undefined` becomes assignable to function types). Casting the value
// keeps us on the intended `atom(initialValue)` (writable) overload.
export const isOpenConfirmDialogAtom: PA<ConfirmationData | undefined> =
    atom<ConfirmationData | undefined>(undefined as ConfirmationData | undefined);

export const doAsyncExecuteConfirmDialogAtom = atom(
    null,
    async (_get, set, ui: ConfirmationUi): Promise<boolean> => {
        return await new Promise<boolean>(
            (resolve) => {
                set(isOpenConfirmDialogAtom, { ui, resolve });
            }
        );
    },
);
