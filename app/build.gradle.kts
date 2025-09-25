plugins {
    java
    id("org.springframework.boot") version "3.2.0"
    id("io.spring.dependency-management") version "1.1.4"
    application
}

application {
    mainClass.set("org.example.app.MakeChatApplication")
}

dependencies {
    implementation(project(":web"))
    implementation(project(":core"))
    implementation(project(":data"))
    implementation("org.springframework.boot:spring-boot-starter")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}