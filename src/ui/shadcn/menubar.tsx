import { type ComponentProps } from "react"; // 05.09.26
import { cn } from "@/utils/classnames";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Menubar as MenubarPrimitive } from "radix-ui";

export function Menubar({ className, ...rest }: ComponentProps<typeof MenubarPrimitive.Root>) {
    return <MenubarPrimitive.Root data-slot="menubar" className={cn("flex h-8 items-center gap-0.5 rounded-lg border p-0.75", className)} {...rest} />;
}

export function MenubarMenu({ ...rest }: ComponentProps<typeof MenubarPrimitive.Menu>) {
    return <MenubarPrimitive.Menu data-slot="menubar-menu" {...rest} />;
}

export function MenubarGroup({ ...rest }: ComponentProps<typeof MenubarPrimitive.Group>) {
    return <MenubarPrimitive.Group data-slot="menubar-group" {...rest} />;
}

export function MenubarPortal({ ...rest }: ComponentProps<typeof MenubarPrimitive.Portal>) {
    return <MenubarPrimitive.Portal data-slot="menubar-portal" {...rest} />;
}

export function MenubarRadioGroup({ ...rest }: ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
    return <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...rest} />;
}

export function MenubarTrigger({ className, ...rest }: ComponentProps<typeof MenubarPrimitive.Trigger>) {
    return (
        <MenubarPrimitive.Trigger
            data-slot="menubar-trigger"
            className={cn("flex items-center rounded-sm px-1.5 py-0.5 text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted", className)}
            {...rest}
        />
    );
}

export function MenubarContent({ className, align = "start", alignOffset = -4, sideOffset = 8, ...rest }: ComponentProps<typeof MenubarPrimitive.Content>) {
    return (
        <MenubarPortal>
            <MenubarPrimitive.Content
                data-slot="menubar-content"
                align={align}
                alignOffset={alignOffset}
                sideOffset={sideOffset}
                className={cn(menubarContentClasses, className)}
                {...rest}
            />
        </MenubarPortal>
    );
}

const menubarContentClasses = "\
p-1 \
min-w-36 \
origin-(--radix-menubar-content-transform-origin) \
\
bg-popover \
text-popover-foreground \
duration-100 \
ring-1 \
ring-foreground/10 \
\
data-[side=bottom]:slide-in-from-top-2 \
data-[side=left]:slide-in-from-right-2 \
data-[side=right]:slide-in-from-left-2 \
data-[side=top]:slide-in-from-bottom-2 \
\
data-open:animate-in \
data-open:fade-in-0 \
data-open:zoom-in-95 \
\
rounded-lg \
shadow-md \
overflow-hidden \
z-50";

export function MenubarItem({ className, inset, variant = "default", ...rest }: ComponentProps<typeof MenubarPrimitive.Item> & { inset?: boolean; variant?: "default" | "destructive"; }) {
    return (
        <MenubarPrimitive.Item
            data-slot="menubar-item"
            data-inset={inset}
            data-variant={variant}
            className={cn(menubarItemClasses, className)}
            {...rest}
        />
    );
}

const menubarItemClasses = "\
group/menubar-item relative px-1.5 py-1 \
text-xs \
\
focus:bg-accent \
focus:text-accent-foreground \
\
not-data-[variant=destructive]:focus:**:text-accent-foreground \
\
data-inset:pl-7 \
data-[variant=destructive]:text-destructive \
data-[variant=destructive]:focus:bg-destructive/10 \
data-[variant=destructive]:focus:text-destructive \
data-[variant=destructive]:*:[svg]:text-destructive! \
\
dark:data-[variant=destructive]:focus:bg-destructive/20 \
data-disabled:pointer-events-none data-disabled:opacity-50 \
\
[&_svg]:shrink-0 \
[&_svg]:pointer-events-none \
[&_svg:not([class*='size-'])]:size-4 \
\
rounded-md \
outline-hidden \
select-none \
cursor-default \
\
flex items-center gap-1.5";

export function MenubarCheckboxItem({ className, children, checked, inset, ...rest }: ComponentProps<typeof MenubarPrimitive.CheckboxItem> & { inset?: boolean; }) {
    return (
        <MenubarPrimitive.CheckboxItem
            data-slot="menubar-checkbox-item"
            data-inset={inset}
            className={cn(menubarCheckboxItemClasses, className)}
            checked={checked}
            {...rest}
        >
            <span className="pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
                <MenubarPrimitive.ItemIndicator>
                    <CheckIcon
                    />
                </MenubarPrimitive.ItemIndicator>
            </span>
            {children}
        </MenubarPrimitive.CheckboxItem>
    );
}

const menubarCheckboxItemClasses = "\
relative pl-7 pr-1.5 py-1 text-xs \
\
focus:bg-accent \
focus:text-accent-foreground \
focus:**:text-accent-foreground \
\
data-inset:pl-7 \
data-disabled:pointer-events-none \
\
[&_svg]:shrink-0 \
[&_svg]:pointer-events-none \
\
rounded-md \
outline-hidden \
select-none \
cursor-default \
flex items-center gap-1.5";

export function MenubarRadioItem({ className, children, inset, ...rest }: ComponentProps<typeof MenubarPrimitive.RadioItem> & { inset?: boolean; }) {
    return (
        <MenubarPrimitive.RadioItem
            data-slot="menubar-radio-item"
            data-inset={inset}
            className={cn(menubarRadioItemClasses, className)}
            {...rest}
        >
            <span className="pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
                <MenubarPrimitive.ItemIndicator>
                    <CheckIcon
                    />
                </MenubarPrimitive.ItemIndicator>
            </span>
            {children}
        </MenubarPrimitive.RadioItem>
    );
}

const menubarRadioItemClasses = "\
relative pl-7 pr-1.5 py-1 text-xs \
\
data-inset:pl-7 \
data-disabled:pointer-events-none \
data-disabled:opacity-50 \
\
focus:bg-accent \
focus:text-accent-foreground \
focus:**:text-accent-foreground \
\
[&_svg]:shrink-0 \
[&_svg]:pointer-events-none \
[&_svg:not([class*='size-'])]:size-4 \
\
rounded-md \
outline-hidden \
select-none \
cursor-default \
flex items-center gap-1.5";

export function MenubarLabel({ className, inset, ...rest }: ComponentProps<typeof MenubarPrimitive.Label> & { inset?: boolean; }) {
    return (
        <MenubarPrimitive.Label
            data-slot="menubar-label"
            data-inset={inset}
            className={cn("px-1.5 py-1 text-sm font-medium data-inset:pl-7", className)}
            {...rest}
        />
    );
}

export function MenubarSeparator({ className, ...rest }: ComponentProps<typeof MenubarPrimitive.Separator>) {
    return (
        <MenubarPrimitive.Separator
            data-slot="menubar-separator"
            className={cn("-mx-1 my-1 h-px bg-border", className)}
            {...rest}
        />
    );
}

export function MenubarShortcut({ className, ...rest }: ComponentProps<"span">) {
    return (
        <span
            data-slot="menubar-shortcut"
            className={cn("ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground", className)}
            {...rest}
        />
    );
}

export function MenubarSub({ ...rest }: ComponentProps<typeof MenubarPrimitive.Sub>) {
    return <MenubarPrimitive.Sub data-slot="menubar-sub" {...rest} />;
}

export function MenubarSubTrigger({ className, inset, children, ...rest }: ComponentProps<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean; }) {
    return (
        <MenubarPrimitive.SubTrigger
            data-slot="menubar-sub-trigger"
            data-inset={inset}
            className={cn(menubarSubTriggerClasses, className)}
            {...rest}
        >
            {children}
            <ChevronRightIcon className="ml-auto size-4" />
        </MenubarPrimitive.SubTrigger>
    );
}

const menubarSubTriggerClasses = "\
px-1.5 py-1 text-xs \
\
data-inset:pl-7 \
data-open:bg-accent \
data-open:text-accent-foreground \
\
focus:bg-accent \
focus:text-accent-foreground \
\
[&_svg:not([class*='size-'])]:size-4 \
\
rounded-md \
outline-none \
select-none \
cursor-default \
flex items-center gap-1.5";

export function MenubarSubContent({ className, ...rest }: ComponentProps<typeof MenubarPrimitive.SubContent>) {
    return (
        <MenubarPrimitive.SubContent
            data-slot="menubar-sub-content"
            className={cn(menubarSubContentClasses, className)}
            {...rest}
        />
    );
}

const menubarSubContentClasses = "\
p-1 min-w-32 \
\
origin-(--radix-menubar-content-transform-origin) \
text-popover-foreground \
bg-popover \
ring-1 \
ring-foreground/10 \
duration-100 \
\
data-[side=bottom]:slide-in-from-top-2 \
data-[side=left]:slide-in-from-right-2 \
data-[side=right]:slide-in-from-left-2 \
data-[side=top]:slide-in-from-bottom-2 \
\
data-open:animate-in \
data-open:fade-in-0 \
data-open:zoom-in-95 \
\
data-closed:animate-out \
data-closed:fade-out-0 \
data-closed:zoom-out-95 \
\
rounded-lg \
shadow-lg \
overflow-hidden \
z-50";
