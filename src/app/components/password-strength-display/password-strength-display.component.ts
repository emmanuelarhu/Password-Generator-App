import { Component, HostBinding, inject } from "@angular/core";
import { cn } from "../../utility/functions";
import { PasswordGeneratorService } from "../../services/password-generator/password-generator.service";
import { UpperCasePipe } from "@angular/common";

@Component({
    selector: "pg-password-strength-display",
    standalone: true,
    imports: [UpperCasePipe],
    template: `
        <span class="uppercase text-grey font-medium">strength</span>
        <div class="flex items-center gap-1.5">
            <span class="text-ash mr-1.5 font-bold text-xl">{{
                passwordService.passwordStrength() | uppercase
            }}</span>
            <span
                [class]="
                    cn('w-2.5 h-7 border-[3px]', {
                        'border-error bg-error':
                            passwordService.passwordStrength() === 'too weak!',
                        'border-orange bg-orange':
                            passwordService.passwordStrength() === 'weak',
                        'border-yellow bg-yellow':
                            passwordService.passwordStrength() === 'medium',
                        'border-success bg-success':
                            passwordService.passwordStrength() === 'strong'
                    })
                "
            ></span>
            <span
                [class]="
                    cn('w-2.5 h-7 border-[3px]', {
                        'border-orange bg-orange':
                            passwordService.passwordStrength() === 'weak',
                        'border-yellow bg-yellow':
                            passwordService.passwordStrength() === 'medium',
                        'border-success bg-success':
                            passwordService.passwordStrength() === 'strong'
                    })
                "
            ></span>
            <span
                [class]="
                    cn('w-2.5 h-7 border-[3px]', {
                        'border-yellow bg-yellow':
                            passwordService.passwordStrength() === 'medium',
                        'border-success bg-success':
                            passwordService.passwordStrength() === 'strong'
                    })
                "
            ></span>
            <span
                [class]="
                    cn('w-2.5 h-7 border-[3px]', {
                        'border-success bg-success':
                            passwordService.passwordStrength() === 'strong'
                    })
                "
            ></span>
        </div>
    `,
})
export class PasswordStrengthDisplayComponent {
    cn = cn;
    passwordService = inject(PasswordGeneratorService);

    @HostBinding("class") get pgClass() {
        return "flex items-center justify-between px-4 h-[72px] bg-black";
    }
}
