import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() className: string = 'btn btn-primary'; // Default class
  @Input() type: string = 'submit'; // Default button type
  @Input() disabled: boolean = false; // Button disabled state
  @Output() onClick = new EventEmitter<Event>(); // Event emitter for clicks

  handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}
