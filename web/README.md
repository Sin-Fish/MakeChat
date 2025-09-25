# Web接口模块

处理HTTP请求和响应，实现RESTful API。

## 主要职责

- REST API端点定义
- 请求/响应DTO转换
- 输入验证和异常处理

## 包结构

org.example.web/
├── controller/ # REST控制器
├── dto/ # 数据传输对象
├── validation/ # 输入验证
└── config/ # Web配置

## 契约定义位置

- API契约文件：`src/main/resources/contract/`
- OpenAPI规范：`openapi.yaml`

## 注意事项

- 遵循RESTful设计原则
- 所有API必须先定义契约后实现
- 输入输出使用DTO，不直接暴露领域模型
