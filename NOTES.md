##

- Typescript
- GraphQL
- Redux
- Nest.js
- db
- Tailwind Styled Components ?
- Nookies for dark mode - [https://github.com/maticzav/nookies]

## Timesheet

```js
{
  type: string,
  owner: User,
  editors: []: User,
  participants: [
    {
      id:,
      name, surname,
      days: {
        status...
        ... many-to-many
      }
    }
  ],
  actionHistory: ActionHistory,
  days: Days,
}
```

## User

```js
{
  id: UUID,
  name: string,
  surname: string,
  email?: string,
  img: string/URL,
  favColor: color | string,
  authPolicy: ???,
  ...rest
}
```

## Days

```js
{
  id,
  comments: Comments
  location,
}
```

## Comments

```js
{
  id,
  comment,
  user: User,
  location?: Location
}
```
