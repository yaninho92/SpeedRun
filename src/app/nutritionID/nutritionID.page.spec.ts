import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutritionIDPage } from './nutritionID.page';

describe('NutritionIDPage', () => {
  let component: NutritionIDPage;
  let fixture: ComponentFixture<NutritionIDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionIDPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
