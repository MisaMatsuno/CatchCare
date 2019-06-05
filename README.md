# README

To run the project, in an repo out side of the project:
```
$ gem install foreman
```
In the project repo:
```
$ bundle && yarn
$ bin/rails db:migrate
$ foreman start -f Procfile.dev -p 3000
```

The pages partially implemented (6.5):

```
/index
/forum
/solution
/products/1
/cart
/designer
/login
/myaccount
/myaccount/:id/personalinfo
/myaccount/new
```
