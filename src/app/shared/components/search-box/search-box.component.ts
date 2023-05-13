import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  
  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSuscription? : Subscription;
  
  @Input()  
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';
  
  @Output()
  public OnValue = new EventEmitter<string>();
  
  @Output()
  public OnDebounce = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(1000) 
      )
      .subscribe( value => {
        this.OnDebounce.emit(value);
      })
    }
    
  ngOnDestroy(): void {
      this.debouncerSuscription?.unsubscribe();
    }
  
  emitValue(value: string): void {
    this.OnValue.emit(value);
  }

  onKeyPress(searchTerm : string){
    this.debouncer.next(searchTerm)
  }
}
