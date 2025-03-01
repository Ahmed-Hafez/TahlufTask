import { Component, inject, OnInit } from '@angular/core';
import { FormBuilderComponent } from './features/form-builder/form-builder.component';
import { MockService } from './core/services/mock/mock.service';
import { Observable } from 'rxjs';
import { Control } from './shared/models/control.model';

@Component({
  selector: 'app-root',
  imports: [FormBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mockService = inject(MockService);
  controls: Control[] = [];

  ngOnInit(): void {
    this.getControls().subscribe((controls) => {
      this.controls = controls;
    });
  }

  getControls(): Observable<Control[]> {
    return this.mockService.getControls();
  }
}
