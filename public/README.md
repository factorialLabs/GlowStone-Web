# PBB-Web

``` js
var Table = {
    _id: int,
    status: enum (Status.Reserved, Status.Available, Status.Occupied),
    groupId: int,
    capacity: int,
    reservationId: int
}
```

```js
var User = {
    _id: int,
    tableId: int,
    balance: float,
    reservationId: int,
    orderId: int,
    paid: bool
```

```js
var Admin = {
    tableId: list int,
    groupId: list int,
    orderId: list int,
    reservationId: list int,
    foods: Foods,
    adminId: int
}
```

```js
var Order = {
    _id: int,
    foods: list int,
    tableId: int,
    userId: int,
    status: enum
}
```

```js
var Group = {
    _id: int,
    userId: list int,
    size: int,
    tableId: int
}
```

```js
var Reservation = {
    _id: int,
    time: Date,
    tableId: int,
    size: int,
    userId: int
}
```

```
var Food = {
    _id: int,
    name: string,
    description: string,
    price: float,
    image: string (href to discrete URL)    
}
```