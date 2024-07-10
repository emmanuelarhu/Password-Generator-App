import { Component, HostBinding, inject } from "@angular/core";
import { PasswordGeneratorService } from "../../services/password-generator/password-generator.service";
import { cn } from "../../utility/functions";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "pg-password-length",
    standalone: true,
    imports: [FormsModule],
    template: `<span class="flex items-center justify-between w-full">
            <span class="text-ash font-semibold capitalize"
                >character length</span
            >
            <span class="text-success font-bold">{{
                passwordGeneratorService.getPasswordLength()
            }}</span>
        </span>
        <input
            [min]="passwordGeneratorService.minimumPasswordLength()"
            [max]="passwordGeneratorService.maximumPasswordLength()"
            class="w-full h-2 bg-black"
            type="range"
            [(ngModel)]="passwordGeneratorService.passwordLength"
        /> `,
    styleUrls: ["./password-length.component.scss"],
})
export class PasswordLengthComponent {
    cn = cn;
    passwordGeneratorService = inject(PasswordGeneratorService);

    @HostBinding("class") get pgClass() {
        return "flex items-center gap-4 w-full flex flex-col gap-4 ";
    }
}
