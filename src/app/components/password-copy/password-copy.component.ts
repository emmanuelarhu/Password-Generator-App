import { Component, HostBinding, inject } from "@angular/core";
import { PasswordGeneratorService } from "../../services/password-generator/password-generator.service";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: "pg-password-copy",
    standalone: true,
    imports: [NgOptimizedImage],
    template: `
        <span
            class="text-ash text-2xl font-bold pointer-events-none max-w-[90%] overflow-clip"
            >{{
                passwordService.getGeneratedPassword() || "Generate password"
            }}</span
        >
        <div class="flex flex-col items-center justify-center gap-2">
            <button
                [disabled]="!passwordService.generatedPassword().length"
                (click)="passwordService.copyPasswordToClipboard()"
                class="outline-success"
            >
                <img
                    ngSrc="../../../assets/copy.svg"
                    alt="copy"
                    height="24"
                    width="21"
                />
            </button>
            @if (passwordService.isCopiedPassword()) {
                <span
                    class="text-xs text-success/80 absolute bottom-1 pointer-events-none"
                    >Copied</span
                >
            }
        </div>
    `,
})
export class PasswordCopyComponent {
    passwordService = inject(PasswordGeneratorService);

    @HostBinding("class") get pgClass() {
        return "flex items-center justify-between px-4 h-[80px] relative bg-dark";
    }
}
