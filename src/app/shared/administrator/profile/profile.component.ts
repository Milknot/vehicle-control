import { Component, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export default class ProfileComponent {
    username = computed(() => "test")
    userForm!: FormGroup
    constructor() {
        this.userForm = new FormGroup({
            test: new FormControl<number | null>(null, [
                Validators.required
            ]),
        })
    }
}
