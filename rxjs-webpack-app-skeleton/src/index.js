import { of } from 'rxjs';

of('Hello RxJS World!').subscribe((result) => {
    console.log(`Result = ${result}`);
    let text = document.createTextNode(result);
    document.body.appendChild(text);
  });
  