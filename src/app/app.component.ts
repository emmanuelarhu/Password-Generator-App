import { Component, HostBinding, inject } from "@angular/core";
import { PasswordCopyComponent } from "./components/password-copy/password-copy.component";
import { PasswordStrengthDisplayComponent } from "./components/password-strength-display/password-strength-display.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { PasswordLengthComponent } from "./components/password-length/password-length.component";
import { PasswordGeneratorService } from "./services/password-generator/password-generator.service";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        PasswordCopyComponent,
        PasswordStrengthDisplayComponent,
        CheckboxComponent,
        PasswordLengthComponent,
    ],
    template: `
        <section class="w-[95vw] sm:w-[80vw] md:w-[540px] flex flex-col gap-4">
            <h2 class="text-center text-grey font-bold">Password Generator</h2>
            <pg-password-copy></pg-password-copy>
            <div class="flex flex-col gap-4 px-4 py-8 bg-dark">
                <pg-password-length></pg-password-length>
                <span class="flex flex-col gap-3 mt-2">
                    <pg-checkbox
                        (emitCheckValue)="
                            passwordService.setIncludeUppercase($event)
                        "
                        title="Include Uppercase Letters"
                    ></pg-checkbox>
                    <pg-checkbox
                        (emitCheckValue)="
                            passwordService.setIncludeLowercase($event)
                        "
                        title="Include Lowercase Letters"
                    ></pg-checkbox>
                    <pg-checkbox
                        (emitCheckValue)="
                            passwordService.setIncludeNumbers($event)
                        "
                        title="Include Numbers"
                    ></pg-checkbox>
                    <pg-checkbox
                        (emitCheckValue)="
                            passwordService.setIncludeSymbols($event)
                        "
                        title="Include Symbols"
                    ></pg-checkbox>
                </span>
                <pg-password-strength-display></pg-password-strength-display>
                <button
                    [disabled]="
                        !passwordService.disableGeneratePasswordButton()
                    "
                    (click)="passwordService.generateNewPassword()"
                    class="transition-all ease-linear duration-200 outline-success w-full h-[65px] border-2 text-black hover:text-success border-transparent hover:border-success
                   font-bold bg-success hover:bg-transparent group disabled:pointer-events-none"
                >
                    GENERATE
                    <span
                        class="text-2xl group-hover:text-success transition-all ease-linear duration-200"
                        >→</span
                    >
                </button>
            </div>
        </section>
    `,
})
export class AppComponent {
    title = "password-generator";
    passwordService = inject(PasswordGeneratorService);

    @HostBinding("class") get pgClass() {
        return "flex items-center justify-center w-screen h-screen bg-black";
    }
}
