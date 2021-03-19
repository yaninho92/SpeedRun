import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciceIDPage } from './exerciceID.page';

describe('ExerciceIDPage', () => {
  let component: ExerciceIDPage;
  let fixture: ComponentFixture<ExerciceIDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceIDPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciceIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
