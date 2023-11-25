import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputValidation]'
})
export class InputValidationDirective {
  @Input() successMessage: string = 'Success!';
  @Input() errorMessage: string = 'Le champ doit être rempli.';
  constructor(private el: ElementRef) { }

  @HostListener('input') onInput() {
    this.setValidationClasses();
  }

  @HostListener('focusout') onFocusout() {
    this.setValidationClasses();
  }

  private setValidationClasses(): void {
    const input: HTMLInputElement = this.el.nativeElement;

    if (input.validity.valid) {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }
  }

}
