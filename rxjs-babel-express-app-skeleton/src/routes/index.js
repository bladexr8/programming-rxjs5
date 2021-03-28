import express from 'express';
import { of } from 'rxjs';

const router = express.Router();

let observableText;

of('Hello RxJS World!').subscribe((result) => {
  console.log(`Result = ${result}`);
  observableText = result;
  // document.body.appendChild(text);
});
console.log(`observableText Type = ${typeof observableText}`);
console.log(`observableText Length = ${observableText.length}`);
console.log(`observableText = ${observableText}`);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', observableText });
});

export default router;
