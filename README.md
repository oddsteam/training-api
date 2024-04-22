# Training API

## Local

- node v20

- npm i

- npm run start

### run docker

- Docker compose up -d

### seed data

- npm run seed

### URI DB
Ø
change .env file variable URI_DB follow below URI

```
mongodb://root:example@localhost:27017/TrainingService?authSource=admin
```

---

กรณีที่ต้องการใช้ email service ให้ทำการ set up ดังนี้

1. ติดตั้ง [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
1. configure aws credentials ด้วย command `aws configure` (credentials อยู่ใน discord)

## Deployment

- ใส่ Tag `1.x.x-dev` เพื่อ Deploy เข้าเครื่อง Dev
- ใส่ Tag `1.x.x-prod` เพื่อ Deploy เข้าเครื่อง Prod
