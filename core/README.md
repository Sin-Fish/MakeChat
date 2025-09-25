# 核心业务模块

包含业务逻辑、领域模型和业务规则。

## 主要职责

- 领域模型定义（Entity、Value Object）
- 业务逻辑实现（Service层）
- 业务规则验证

## 包结构

org.example.core/
├── domain/ # 领域模型
├── service/ # 业务服务
├── exception/ # 业务异常
└── event/ # 领域事件


## 注意事项

- 不依赖其他业务模块（除utilities、list）
- 保持业务逻辑的纯净性
- 所有外部依赖通过接口抽象
