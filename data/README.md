# 数据访问模块

负责数据持久化和数据库操作。

## 主要职责

- JPA实体定义和数据映射
- Repository接口实现
- 数据库迁移脚本管理

## 包结构

org.example.data/
├── repository/ # 数据访问接口
├── entity/ # JPA实体（与core domain映射）
└── migration/ # 数据库迁移

## 注意事项

- 依赖core模块获取领域模型
- JPA实体应与core domain分离但映射
- 事务管理在此模块配置
