import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaSettingComponent } from './text-area-setting.component';

describe('TextAreaSettingComponent', () => {
  let component: TextAreaSettingComponent;
  let fixture: ComponentFixture<TextAreaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
