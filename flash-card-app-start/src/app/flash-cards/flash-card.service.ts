import { Injectable } from "@angular/core";

import { FlashCard } from "../shared/flash-card.model";

@Injectable()
export class FlashCardService {

private flashCards: FlashCard[] = [
  new FlashCard('Immutable', 'Not subject to change, unchangeable'),
  new FlashCard('.get()', 'Retrieves the first value for a parameter'),
  new FlashCard('getAll()', 'Retrieves all values for a parameter'),
  new FlashCard('HTML', 'HyperText Markup Language'),
  new FlashCard('http', 'hypertext transfer protocol'),
  new FlashCard('Observables', 'An interface to handle common asynchronous operations using an EventEmitter class')
];

constructor() {}

}
