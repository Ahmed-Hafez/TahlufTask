import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxSettingComponent } from './textbox-setting.component';

describe('TextboxSettingComponent', () => {
  let component: TextboxSettingComponent;
  let fixture: ComponentFixture<TextboxSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextboxSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextboxSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
