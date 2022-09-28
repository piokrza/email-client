import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class FormService {
  protected _form!: FormGroup<any>;
  protected _form$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(this._form);

  protected constructor(protected formBuilder: FormBuilder) {}

  protected get customValidators(): any {
    return {};
  }

  abstract get config(): any;

  buildForm(): void {
    this._form = this.formBuilder.group(this.config, this.customValidators);
    this._form$?.next(this._form);
  }

  form$(): Observable<FormGroup> {
    return this._form$.asObservable();
  }
}
