import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { KantoComponent } from './kanto-component';

describe('KantoComponent', () => {
  let component: KantoComponent;
  let fixture: ComponentFixture<KantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(KantoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
