# İçerik

- HTML
- CSS
- JavaScript

## npm

> npm init
> Node Package Management için package.json dosyası oluşturur.

> script

| script | açıklama                                                           |
| ------ | ------------------------------------------------------------------ |
| **start**  | npm start komutu ile birlikte çalıştırılacak script belirler.      |
| **server** | npm run server komutu ile birlikte çalıştırılacak script belirler. |


## git

> git init

> git config --global user.email "email"

> git config --global user.name "name"

> git switch -c "brancname"

> git branch -a

> git checkout "branchname"

> git merge "branchname"

> git branch -d "branchname"

> git push origin -d "branchname"

## JavaScript
### Array üzerinde dolaşma (traverse)
```js
for (let person of arr) {
  const element = document.createElement("div");
  element.innerHTML = `${person.id} ${person.name} ${person.age}`;
  document.getElementById("root").append(element);
}
```
[Zafer CÖMERT](http://www.zafercomert.com) 