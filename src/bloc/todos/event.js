class Event {
  constructor() {
    if (new.target === Event) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}

export class Load extends Event {}
