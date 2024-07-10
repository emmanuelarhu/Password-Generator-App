import { computed, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class PasswordGeneratorService {
    maximumPasswordLength = signal(25);
    minimumPasswordLength = signal(8);
    passwordLength = signal(10);
    includeUppercase = signal(false);
    includeLowercase = signal(false);
    includeNumbers = signal(false);
    includeSymbols = signal(false);
    isCopiedPassword = signal(false);
    generatedPassword = signal("");

    passwordStrength = computed(() => {
        const length = this.generatedPassword().length;
        const hasLowercase = /[a-z]/.test(this.generatedPassword());
        const hasUppercase = /[A-Z]/.test(this.generatedPassword());
        const hasNumber = /\d/.test(this.generatedPassword());
        const hasSymbol = /[!@#$%^&*()_+\-={};':"|,.<>/?]+/.test(
            this.generatedPassword(),
        );

        let score = 0;

        if (length >= 8) {
            score++;
        }
        if (length > 10) {
            score++;
        }
        if (hasLowercase && hasUppercase) {
            score++;
        }
        if (hasNumber) {
            score++;
        }
        if (hasSymbol) {
            score++;
        }

        if (hasLowercase && hasUppercase && hasNumber && hasSymbol) {
            score = 4;
        }

        switch (score) {
            case 1:
                return "too weak!";
            case 2:
                return "weak";
            case 3:
                return "medium";
            case 4:
                return "strong";
            default:
                return "invalid";
        }
    });

    disableGeneratePasswordButton = computed(() => {
        return (
            this.includeNumbers() ||
            this.includeLowercase() ||
            this.includeUppercase() ||
            this.includeSymbols()
        );
    });

    setIncludeUppercase(val: boolean) {
        this.includeUppercase.set(val);
    }

    setIncludeLowercase(val: boolean) {
        this.includeLowercase.set(val);
    }

    setIncludeNumbers(val: boolean) {
        this.includeNumbers.set(val);
    }

    setIncludeSymbols(val: boolean) {
        this.includeSymbols.set(val);
    }

    generateNewPassword() {
        let allChars = "";
        let password = "";
        if (this.includeUppercase()) {
            allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (this.includeLowercase()) {
            allChars += "abcdefghijklmnopqrstuvwxyz";
        }
        if (this.includeNumbers()) {
            allChars += "0123456789";
        }
        if (this.includeSymbols()) {
            allChars += "[!@#$%^&*()_-={};':\"|,.<>/?]+";
        }

        for (let i = 0; i < this.passwordLength(); i++) {
            password += allChars.charAt(
                Math.floor(Math.random() * allChars.length),
            );
        }

        this.generatedPassword.set(password);
    }

    getPasswordLength() {
        return this.passwordLength();
    }

    getGeneratedPassword() {
        return this.generatedPassword();
    }

    async copyPasswordToClipboard() {
        await navigator.clipboard.writeText(this.generatedPassword());
        this.isCopiedPassword.set(true);
        setTimeout(() => {
            this.isCopiedPassword.set(false);
        }, 2000);
    }
}
