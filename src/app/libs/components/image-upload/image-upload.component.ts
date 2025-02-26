
import { CommonModule } from '@angular/common';
import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploadComponent),
      multi: true,
    },
  ],
})
export class ImageUploadComponent implements ControlValueAccessor {
  images: string[] = [];
  isDragOver = false;
  disabled = false;

  // Callbacks
  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  // File selection via file input or drag/drop
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length) {
      this.handleFiles(files);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer && event.dataTransfer.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  // Process each file and update images array
  private handleFiles(files: FileList): void {
    Array.from(files).forEach((file: File) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          // Create new array reference so change detection fires
          this.images = [...this.images, reader.result as string];
          this.onChange(this.images);
          this.cdr.markForCheck();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Clear all images
  clear(): void {
    this.images = [];
    this.onChange(this.images);
  }

  // ControlValueAccessor Methods
  writeValue(value: string[]): void {
    this.images = value || [];
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
