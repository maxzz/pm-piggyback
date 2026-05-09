"use client";
import * as React from "react"; // 05.08.26
import { cn } from "@/utils/classnames";
import { XIcon } from "lucide-react";
import { Button } from "@/ui/shadcn/button";
import { Dialog as DialogPrimitive } from "radix-ui";

function Dialog({ ...rest }: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot="dialog" {...rest} />;
}

function DialogTrigger({ ...rest }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...rest} />;
}

function DialogPortal({ ...rest }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...rest} />;
}

/**
 * @example
 * <DialogClose asChild>
 *     <Button variant="outline">
 *         Close
 *     </Button>
 * </DialogClose>
 */
function DialogClose({ ...rest }: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close data-slot="dialog-close" {...rest} />;
}

const dialogOverlayClasses = "\
fixed inset-0 z-50 isolate \
\
bg-background/80 \
duration-100 \
\
supports-backdrop-filter:backdrop-blur-xs \
\
data-open:animate-in \
data-open:fade-in-0 \
data-closed:animate-out \
data-closed:fade-out-0"; // original has bg-black/10 

function DialogOverlay({ className, ...rest }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay data-slot="dialog-overlay" className={cn(dialogOverlayClasses, className)} {...rest} />
    );
}

export const DialogContentClasses = "\
fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 \
p-6 \
w-full md:w-full max-w-lg \
\
bg-background \
\
data-open:animate-in \
data-open:fade-in-0 \
data-open:zoom-in-95 \
\
data-closed:animate-out \
data-closed:fade-out-0 \
data-closed:zoom-out-95 \
\
border sm:rounded-lg shadow-lg \
duration-200 \
grid gap-4";
//tm:
//data-open:slide-in-from-left-1/2 \
//data-open:slide-in-from-top-[48%] \
//data-closed:slide-out-to-left-1/2 \
//data-closed:slide-out-to-top-[48%] \
//original: "
// fixed top-1/2 left-1/2 z-50 
// grid 
// w-full 
// max-w-[calc(100%-2rem)] 
// -translate-x-1/2 
// -translate-y-1/2 
// gap-4 
// rounded-xl 
// bg-popover 
// p-4 
// text-sm 
// text-popover-foreground 
// ring-1 ring-foreground/10 duration-100 
// outline-none 
// sm:max-w-sm 
//
// data-open:animate-in 
// data-open:fade-in-0 
// data-open:zoom-in-95 
//
// data-closed:animate-out 
// data-closed:fade-out-0 
// data-closed:zoom-out-95
// "

function DialogContent({ className, children, showCloseButton = true, ...rest }: React.ComponentProps<typeof DialogPrimitive.Content> & { showCloseButton?: boolean; }) {
    return (
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Content data-slot="dialog-content" className={cn(DialogContentClasses, className)} {...rest}>
                {children}

                {showCloseButton && (
                    <DialogPrimitive.Close data-slot="dialog-close" asChild>
                        <Button
                            variant="ghost"
                            className="absolute top-2 right-2"
                            size="icon-sm"
                        >
                            <XIcon />
                            <span className="sr-only">Close</span>
                        </Button>
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </DialogPortal>
    );
}

function DialogHeader({ className, ...rest }: React.ComponentProps<"div">) {
    return (
        <div data-slot="dialog-header" className={cn("flex flex-col gap-2", className)} {...rest} />
    );
}

function DialogFooter({ className, showCloseButton = false, children, ...rest }: React.ComponentProps<"div"> & { showCloseButton?: boolean; }) {
    return (
        <div data-slot="dialog-footer" className={cn("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className)} {...rest}>
            {children}

            {showCloseButton && (
                <DialogPrimitive.Close asChild>
                    <Button variant="outline">
                        Close
                    </Button>
                </DialogPrimitive.Close>
            )}
        </div>
    );
}

function DialogTitle({ className, ...rest }: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot="dialog-title"
            className={cn("font-heading text-base leading-none font-medium", className)}
            {...rest}
        />
    );
}

function DialogDescription({ className, ...rest }: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className)}
            {...rest}
        />
    );
}

export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
};
