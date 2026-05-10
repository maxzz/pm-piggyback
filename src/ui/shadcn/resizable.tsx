"use client";
import { cn } from "@/utils/classnames"; // 05.09.26
import * as ResizablePrimitive from "react-resizable-panels";

export function ResizablePanelGroup({ className, ...rest }: ResizablePrimitive.GroupProps) {
    return (
        <ResizablePrimitive.Group data-slot="resizable-panel-group" className={cn("flex h-full w-full aria-[orientation=vertical]:flex-col", className)} {...rest} />
    );
}

export function ResizablePanel({ ...rest }: ResizablePrimitive.PanelProps) {
    return <ResizablePrimitive.Panel data-slot="resizable-panel" {...rest} />;
}

export function ResizableHandle({ withHandle, className, ...rest }: ResizablePrimitive.SeparatorProps & { withHandle?: boolean; }) {
    return (
        <ResizablePrimitive.Separator data-slot="resizable-handle" className={cn(resizableSeparatorClasses, className)} {...rest}>
            {withHandle && (
                <div className="z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border" />
            )}
        </ResizablePrimitive.Separator>
    );
}

const resizableSeparatorClasses = "\
relative \
w-px \
bg-border \
ring-offset-background \
\
after:absolute \
after:inset-y-0 \
after:left-1/2 \
after:w-1 \
after:-translate-x-1/2 \
\
focus-visible:ring-1 \
focus-visible:ring-ring \
focus-visible:outline-hidden \
\
aria-[orientation=horizontal]:h-px \
aria-[orientation=horizontal]:w-full \
aria-[orientation=horizontal]:after:left-0 \
aria-[orientation=horizontal]:after:h-1 \
aria-[orientation=horizontal]:after:w-full \
aria-[orientation=horizontal]:after:translate-x-0 \
aria-[orientation=horizontal]:after:-translate-y-1/2 \
[&[aria-orientation=horizontal]>div]:rotate-90 \
\
flex items-center justify-center";
