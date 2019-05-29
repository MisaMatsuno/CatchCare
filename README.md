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

The pages partially implemented (5/29):

```
/index
/forum
/solution
/designer
/myaccount
/myaccount/1/personalinfo
/myaccount/new
```
