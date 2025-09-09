import type { PluginListenerHandle } from '@capacitor/core';

export interface IWebviewOverlayPlugin {
    /**
     * Open a webview with the given URL
     */
    open(options: OpenOptions): Promise<void>;

    /**
     * Close an open webview.
     */
    close(): Promise<void>;

    /**
     * Load a url in the webview.
     */
    loadUrl(options: {url: string}): Promise<void>;

    /**
     * Get snapshot image
     */
    getSnapshot(): Promise<{src: string}>;

    show(): Promise<void>;
    hide(): Promise<void>;

    toggleFullscreen(): Promise<void>;
    goBack(): Promise<{ canGoBack: boolean }>;
    goForward(): Promise<{ canGoForward: boolean }>;
    reload(): Promise<void>;
    
    handleNavigationEvent(options: {allow: boolean}): Promise<void>;

    updateDimensions(options: Dimensions): Promise<void>;

    evaluateJavaScript(options: {javascript: string}): Promise<{result: string}>;

    addListener(eventName: 'pageLoaded' | 'updateSnapshot' | 'progress' | 'navigationHandler' | 'miniAppCallback', listenerFunc: (...args: any[]) => void): PluginListenerHandle;
}

interface OpenOptions extends Dimensions {
    /**
     * The URL to open the webview to
     */
    url: string;

    javascript?: string;
    injectionTime?: ScriptInjectionTime;
    userAgent?: string;
}

interface Dimensions {
    width: number;
    height: number;
    x: number;
    y: number;
}

export enum ScriptInjectionTime {
    atDocumentStart,
    atDocumentEnd
}

/**
 * Represents the change (delta) in the x and y coordinates, typically used for adjusting the position of an element relative to its current position.
 */
export interface Position {
    /**
     * Represents the change in the horizontal direction (x axis). A positive value moves the element to the right, and a negative value moves it to the left.
     */
    deltaX: number;
    /**
     * Represents the change in the vertical direction (y axis). A positive value moves the element downward, and a negative value moves it upward.
     */
    deltaY: number;
}
