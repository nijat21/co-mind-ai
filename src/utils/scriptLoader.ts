
export interface AnalyticsScript {
  id: string;
  src?: string;
  innerHTML?: string;
  async?: boolean;
  defer?: boolean;
}

export class ScriptLoader {
  private loadedScripts: Set<string> = new Set();

  loadScript(script: AnalyticsScript): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        console.warn('ScriptLoader: Cannot load scripts on server-side');
        resolve();
        return;
      }

      // Check if script is already loaded
      if (this.loadedScripts.has(script.id)) {
        console.log(`Script ${script.id} already loaded`);
        resolve();
        return;
      }

      const scriptElement = document.createElement('script');
      scriptElement.id = script.id;
      
      if (script.src) {
        scriptElement.src = script.src;
        scriptElement.async = script.async ?? true;
        scriptElement.defer = script.defer ?? false;
        
        scriptElement.onload = () => {
          this.loadedScripts.add(script.id);
          console.log(`Script loaded: ${script.id}`);
          resolve();
        };
        
        scriptElement.onerror = () => {
          console.error(`Failed to load script: ${script.id}`);
          reject(new Error(`Failed to load script: ${script.id}`));
        };
      } else if (script.innerHTML) {
        scriptElement.innerHTML = script.innerHTML;
        this.loadedScripts.add(script.id);
      }

      document.head.appendChild(scriptElement);
      
      // If it's an inline script, resolve immediately
      if (script.innerHTML) {
        console.log(`Inline script executed: ${script.id}`);
        resolve();
      }
    });
  }

  removeScript(scriptId: string): void {
    if (typeof window === 'undefined') return;
    
    const scriptElement = document.getElementById(scriptId);
    if (scriptElement) {
      scriptElement.remove();
      this.loadedScripts.delete(scriptId);
      console.log(`Script removed: ${scriptId}`);
    }
  }

  isScriptLoaded(scriptId: string): boolean {
    return this.loadedScripts.has(scriptId);
  }
}

export const scriptLoader = new ScriptLoader();
