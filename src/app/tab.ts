/**
 * Anything to do with tabs should use this file
 */

import * as ui from "./ui";

export interface ComponentProps {
    url: string;
}

export interface Tab<P extends ComponentProps> {
    getTitle(): string;
    component: { new (p: P): ui.React.Component<any, any>; };
}

/** If no filepath is provided `cwd` is used */
export function getUrl(protocol: string, filePath?: string) {
    return protocol + (filePath ? filePath : process.cwd);
}