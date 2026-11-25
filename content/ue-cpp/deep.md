> 四份文件：[速背](./速背.md) ｜ [深读](./深读.md) ｜ [自测](./自测.md) ｜ [计划](./计划.md)

<a id="toc"></a>

**本文件目录**

- [第 1 章 · 语言基础 ①：类型、值与参数传递](#ch1)
  - [单元 1 值传递与引用传递](#unit-1)
  - [单元 2 C 和 C++ 的区别](#unit-2)
  - [单元 3 左值、右值与 std::move](#unit-3)
  - [单元 4 列表初始化](#unit-4)
  - [单元 5 数组与指针](#unit-5)
  - [单元 6 sizeof 与 strlen](#unit-6)
  - [单元 7 nullptr 与 NULL](#unit-7)
  - [单元 8 指针与引用](#unit-8)
  - [单元 9 整型宽度：short、int、long、long long](#unit-9)
  - [单元 10 常量指针与指针常量](#unit-10)
  - [单元 11 函数指针](#unit-11)
  - [单元 12 函数指针与指针函数](#unit-12)
  - [单元 13 静态局部变量、全局变量、局部变量](#unit-13)
- [第 2 章 · 语言基础 ②：关键字、转换与命名空间](#ch2)
  - [单元 14 std::move 的作用与实现原理](#unit-14)
  - [单元 15 static 的作用与工程场景](#unit-15)
  - [单元 16 const 的作用与理解](#unit-16)
  - [单元 17 #define 与 const 的本质区别](#unit-17)
  - [单元 18 std::string_view 与 const char*](#unit-18)
  - [单元 19 extern 与 extern "C"](#unit-19)
  - [单元 20 explicit 的作用](#unit-20)
  - [单元 21 final 关键字](#unit-21)
  - [单元 22 四种类型转换](#unit-22)
  - [单元 23 this 指针](#unit-23)
  - [单元 24 #include 的两种写法（尖括号与引号）](#unit-24)
  - [单元 25 命名空间](#unit-25)
  - [单元 26 auto 与 decltype](#unit-26)
- [第 3 章 · 内存与生命周期](#ch3)
  - [单元 27 大端序与小端序](#unit-27)
  - [单元 28 new/malloc、delete/free 的区别](#unit-28)
  - [单元 29 new 和 delete 为什么必须配对](#unit-29)
  - [单元 30 堆内存与栈内存](#unit-30)
  - [单元 31 尾递归优化与栈内存管理](#unit-31)
  - [单元 32 memcpy、memmove、strcpy 的区别](#unit-32)
  - [单元 33 深拷贝、浅拷贝与标准拷贝构造](#unit-33)
  - [单元 34 C++ 内存分区](#unit-34)
  - [单元 35 智能指针的种类与所有权](#unit-35)
  - [单元 36 全局变量的存放与头文件定义问题](#unit-36)
  - [单元 37 返回值优化 RVO 与 NRVO](#unit-37)
  - [单元 38 shared_from_this 的作用与限制](#unit-38)
  - [单元 39 内存对齐与对象布局](#unit-39)
  - [单元 40 RAII 与异常安全](#unit-40)
- [第 4 章 · 面向对象与对象模型](#ch4)
  - [单元 41 struct 与 class 的区别](#unit-41)
  - [单元 42 C++ 面向对象的三大特性](#unit-42)
  - [单元 43 访问修饰符](#unit-43)
  - [单元 44 多重继承与菱形继承](#unit-44)
  - [单元 45 重载与重写的区别](#unit-45)
  - [单元 46 构造函数与析构函数](#unit-46)
  - [单元 47 构造函数的种类](#unit-47)
  - [单元 48 虚函数与虚函数表](#unit-48)
  - [单元 49 虚函数与对象模型进阶](#unit-49)
- [第 5 章 · 模板、STL 与并发](#ch5)
  - [单元 50 模板实现一定要写在头文件中吗](#unit-50)
  - [单元 51 模板与编译期](#unit-51)
  - [单元 52 移动语义与完美转发](#unit-52)
  - [单元 53 STL 容器复杂度与迭代器失效](#unit-53)
  - [单元 54 多线程与内存序](#unit-54)
- [第 6 章 · UE ①：UObject 与 GC](#ch6)
  - [Q01 UObject 的完整生命周期是怎样的？](#ue-unit-01)
  - [Q02 GC 如何判定一个 UObject 可达？](#ue-unit-02)
  - [Q03 为什么 UPROPERTY 是必要的？](#ue-unit-03)
  - [Q04 NewObject、SpawnActor、CreateDefaultSubobject 有什么区别？](#ue-unit-04)
  - [Q05 为什么 UObject 不能用 new/delete？](#ue-unit-05)
  - [Q06 Outer 是什么？对象命名有什么讲究？](#ue-unit-06)
  - [Q07 GC 卡顿从哪来，怎么优化？](#ue-unit-07)
  - [Q08 UObject 的销毁和 Actor 的销毁有什么不同？](#ue-unit-08)
- [第 7 章 · UE ②：反射系统](#ch7)
  - [Q09 UCLASS / UPROPERTY / UFUNCTION 各自做什么？](#ue-unit-09)
  - [Q10 .generated.h 是什么，为什么必须最后一个 include？](#ue-unit-10)
  - [Q11 UHT 的工作流程是怎样的？](#ue-unit-11)
  - [Q12 反射系统到底能做什么？](#ue-unit-12)
  - [Q13 GENERATED_BODY 和 GENERATED_UCLASS_BODY 有什么区别？](#ue-unit-13)
  - [Q14 反射系统有哪些限制？](#ue-unit-14)
- [第 8 章 · UE ③：引用类型与智能指针](#ch8)
  - [Q15 裸指针和 TObjectPtr 有什么区别，该怎么选？](#ue-unit-15)
  - [Q16 TWeakObjectPtr 的语义和适用场景？](#ue-unit-16)
  - [Q17 TSharedPtr、TSharedRef、TUniquePtr 有什么区别？](#ue-unit-17)
  - [Q18 什么时候该用共享指针？](#ue-unit-18)
  - [Q19 循环引用会泄漏吗？UObject 和共享指针有何不同？](#ue-unit-19)
  - [Q20 IsValid 和 nullptr 判断有什么区别？](#ue-unit-20)
  - [Q21 TSoftObjectPtr 和 TSubclassOf 分别解决什么问题？](#ue-unit-21)
- [第 9 章 · UE ④：Actor 与 Component 生命周期](#ch9)
  - [Q22 讲一下 Actor 的完整生命周期。](#ue-unit-22)
  - [Q23 构造函数里能做什么、不能做什么？](#ue-unit-23)
  - [Q24 BeginPlay 和 PostInitializeComponents 有什么区别？](#ue-unit-24)
  - [Q25 Actor 的 Tick 是怎么被调用的？](#ue-unit-25)
  - [Q26 EndPlay 和 Destroy 有什么区别？](#ue-unit-26)
  - [Q27 Component 的生命周期是怎样的？](#ue-unit-27)
  - [Q28 SpawnActor 内部做了什么？什么时候用 Deferred？](#ue-unit-28)
- [第 10 章 · UE ⑤：蓝图与 C++ 互调](#ch10)
  - [Q29 C++ 如何调用蓝图实现的逻辑？](#ue-unit-29)
  - [Q30 蓝图如何调用 C++？](#ue-unit-30)
  - [Q31 BlueprintNativeEvent 和 BlueprintImplementableEvent 有什么区别？](#ue-unit-31)
  - [Q32 怎么把 C++ 属性安全地暴露给蓝图？](#ue-unit-32)
  - [Q33 什么时候用 C++，什么时候用蓝图？](#ue-unit-33)
  - [Q34 蓝图之间有哪些通信方式？](#ue-unit-34)
- [第 11 章 · UE ⑥：委托（Delegate）](#ch11)
  - [Q35 单播、多播、动态委托有什么区别？](#ue-unit-35)
  - [Q36 动态委托的底层原理是什么？](#ue-unit-36)
  - [Q37 AddDynamic、AddUObject、AddRaw、AddSP、AddLambda 有什么区别？](#ue-unit-37)
  - [Q38 多播委托的调用顺序和返回值是怎样的？](#ue-unit-38)
  - [Q39 委托的生命周期怎么管，什么时候必须解绑？](#ue-unit-39)
  - [Q40 委托、接口、直接调用，怎么选？](#ue-unit-40)
- [第 12 章 · UE ⑦：网络同步](#ch12)
  - [Q41 Server、Client、NetMulticast 三种 RPC 有什么区别？](#ue-unit-41)
  - [Q42 属性同步是怎么做的？](#ue-unit-42)
  - [Q43 Authority 和 Ownership 分别是什么？](#ue-unit-43)
  - [Q44 客户端预测与回滚是怎么做的？](#ue-unit-44)
  - [Q45 状态同步和 RPC 怎么选？](#ue-unit-45)
  - [Q46 网络相关性（Relevancy）是什么？](#ue-unit-46)
  - [Q47 Reliable 和 Unreliable 怎么选？带宽怎么控？](#ue-unit-47)
  - [Q48 网络同步常见坑有哪些？](#ue-unit-48)
- [第 13 章 · UE ⑧：性能与内存](#ch13)
  - [Q49 Tick 开销怎么优化？](#ue-unit-49)
  - [Q50 对象池怎么做？](#ue-unit-50)
  - [Q51 GC 卡顿怎么优化？](#ue-unit-51)
  - [Q52 内存分析有哪些手段？](#ue-unit-52)
  - [Q53 CPU 性能怎么定位？](#ue-unit-53)
  - [Q54 大资源怎么加载才不卡？](#ue-unit-54)
  - [Q55 内存泄漏怎么排查？](#ue-unit-55)
- [第 14 章 · UE ⑨：工程与构建](#ch14)
  - [Q56 UE 的模块怎么划分？](#ue-unit-56)
  - [Q57 什么是 IWYU？为什么能加快编译？](#ue-unit-57)
  - [Q58 编译时间太长怎么优化？](#ue-unit-58)
  - [Q59 常见编译错误怎么定位？](#ue-unit-59)
  - [Q60 UHT 报错和普通编译报错怎么区分？](#ue-unit-60)
  - [Q61 API 宏是做什么的？](#ue-unit-61)
  - [Q62 插件和模块有什么区别？](#ue-unit-62)
- [第 15 章 · UE ⑩：高频踩坑](#ch15)
  - [Q63 空指针和无效对象怎么判？](#ue-unit-63)
  - [Q64 悬垂指针是怎么产生的，怎么防？](#ue-unit-64)
  - [Q65 Tick 里做什么会出事？](#ue-unit-65)
  - [Q66 为什么构造函数里 GetWorld() 是空的？](#ue-unit-66)
  - [Q67 委托没解绑会怎样？](#ue-unit-67)
  - [Q68 多线程里能碰 UObject 吗？](#ue-unit-68)

---

<a id="ch1"></a>
# 第 1 章 · 语言基础 ①：类型、值与参数传递

> 对应题库第 1、2、3、4、10、11、17、21、22、23、24、25、26 题。
> 返回 [速背卡片](./速背.md)。

---

<a id="unit-1"></a>
## D1 · 单元 1 值传递与引用传递

> 来源：题库第 1 题 ｜ 速背卡：[1](./速背.md#cpp-01) ｜ 自测：[sel-1 · 第 1 题](./自测.md#sel-1) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：值传递复制一份数据、引用传递只绑定别名，选哪种本质是在回答“这份数据归谁、要不要改到原对象”。

**学完能做到**
- 写代码：写出 `T`、`T&`、`const T&` 三个重载，并统计出各自的拷贝次数。
- 讲出来：说清拷贝成本、别名修改、临时量生命周期延长三件事。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 传引用不占参数空间，所以一定比传值快 | 引用底层通常按指针传，仍有一次间接访问；小对象或本来就要副本时，传值配移动可能更快 |
| `const T&` 形参一定不会构造对象 | 绑定临时量时会先构造临时对象再绑定，只是不拷贝实参；生命周期延长不等于没有构造成本 |
| 引用参数可以接收空值，只是不推荐 | 不存在“空引用”：`int& r = *p;` 在 `p` 为空时就是 UB；可选参数要用 `T*` 或 `std::optional<T>` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 值传递执行拷贝初始化，形参是独立对象 | 大对象（`std::string`、`std::vector`）每次调用都是 O(n) 拷贝；只有确实需要副本时才传值 |
| 引用形参是实参的别名，不构造新对象 | 只读大对象用 `const T&` 免拷贝；要写回调用方用 `T&` |
| `const T&` 能绑定临时对象，并把临时量生命周期延长到引用作用域结束 | 可以安全接收字面量和表达式结果，但把引用存成成员或返回出去就会悬垂 |
| 引用在语言层面不是对象：不能为空、不能重新绑定、没有“引用的引用” | 底层通常按指针实现，`sizeof(引用)` 得到的是被引用类型的大小，仍有间接访问成本 |

**设计动机**：C++ 用拷贝构造把“传值”定义成一次真实的对象创建，用引用把“别名”定义成零构造的间接访问；两条规则合起来，签名本身就能表达所有权——按值 = 我拿走一份，`T&` = 我会改你传进来的对象，`const T&` = 我只读。`const&` 允许绑定临时量并延长其寿命，是为了让调用处能直接写表达式（`f("abc")`、`f(a + b)`）而不用手工加中间变量，否则只读参数会逼出大量临时变量声明。

**版本差异**：C++98 下按值传参必然是一次拷贝；C++11 引入移动语义后，按值形参可以接收右值并以移动构造接收（配 `std::move`）；引用绑定与 `const&` 延长临时量寿命的规则两版一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 只读大对象，不想拷贝 | `void f(const std::string& s)` |
| 必须修改调用方对象 | `void f(std::string& s)` |
| 需要一份可修改副本，或要把对象移动进来 | `void f(std::string s)`，调用处配 `std::move` |
| 可选输出参数 | 指针 `T*` 或 `std::optional<T>`，不要用“空引用” |

```cpp
#include <string>

struct Counted {
    static inline int copies = 0;          // C++17
    Counted() = default;
    Counted(const Counted&) { ++copies; }  // 只统计拷贝构造
};

void byValue(Counted) {}
void byRef(Counted&) {}
void byConstRef(const Counted&) {}

int main() {
    Counted c;
    byValue(c);      // copies == 1
    byRef(c);        // copies == 1
    byConstRef(c);   // copies == 1
}
```

出处：参数传递与引用绑定规则见 ISO C++ 标准 [expr.call]、[dcl.ref]；值类别定义见 cppreference “Value categories”（https://en.cppreference.com/w/cpp/language/value_category）。上面的示例是可独立编译的最小工程代码，拷贝次数由自定义拷贝构造直接观测。

**可观察验证**

```cpp
#include <cstdio>
#include <utility>

struct Counted {
    static inline int copies = 0, moves = 0;
    Counted() = default;
    Counted(const Counted&) { ++copies; }
    Counted(Counted&&) noexcept { ++moves; }
};

void byValue(Counted) {}
void byRef(Counted&) {}
void byConstRef(const Counted&) {}
void byRvalueRef(Counted&&) {}

int main() {
    Counted c;
    byValue(c);                  // 唯一一次拷贝
    byRef(c);
    byConstRef(c);
    byRvalueRef(std::move(c));   // 走移动构造，不拷贝
    byConstRef(Counted{});       // 绑定临时量：构造一次，不拷贝 c
    std::printf("copies=%d moves=%d\n", Counted::copies, Counted::moves);  // 1 0
}
```

- 输出 `copies=1 moves=0` 就是判据：三个形参里只有 `byValue` 复制构造了一次，`T&`/`const T&` 不拷贝，`byRvalueRef` 只是把右值绑定成引用、不构造新对象——`std::move` 本身不搬任何东西。
- `byConstRef(Counted{})` 能通过编译但会构造一个临时对象：`const&` 延长的是临时量寿命，不是“省掉对象构造”。
- 加 `-S` 生成汇编（或 `objdump -d` 搜拷贝构造符号）：`byValue` 的调用点前有一次拷贝构造调用，`byRef`/`byConstRef` 的调用点前没有。

### ③ 面试怎么讲

**30 秒口述稿**

> 值传递会把实参拷贝一份给形参，函数里改的是副本，原对象不受影响；引用传递不产生新对象，形参就是实参的别名，函数里的修改会直接作用在实参上。工程上判断标准是有没有所有权、要不要改：只读大对象用 `const&`，需要写回用 `&`，需要副本或要把对象移动进来才按值。引用在语言层面不是对象，不能为空、不能重新绑定，底层一般用指针实现。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 引用能重新绑定吗？ | 不能。`int& r = a; r = b;` 是把 `b` 的值赋给 `a`，不是让 `r` 改绑到 `b`。 |
| `const&` 绑定临时量安全吗？ | 安全，临时量生命周期延长到引用生命周期结束；但存成成员或返回出去就悬垂。 |
| 传值一定比传引用慢吗？ | 不一定。小对象、可移动对象、本来就需要副本时，传值可能更快，还能配合移动语义。 |
| 为什么 `f(int)` 和 `f(const int)` 不能重载？ | 按值参数的顶层 `const` 不参与重载决议，两者签名被视为相同。 |
| 引用占内存吗？ | 语言不保证；常见 ABI 用指针实现，但优化后可能完全消失，不能依赖它“零成本”。 |

### ④ 真实坑

1. **对象切片**：`void f(Base b); Derived d; f(d);` 只拷贝 `Base` 子对象，`Derived` 部分被切掉，也不会发生动态绑定。
2. **返回局部变量的引用**：`const std::string& f() { std::string s; return s; }` 返回悬垂引用，调用方一读就 UB。
3. **把 `const&` 存成成员**：`struct S { S(const std::string& x) : r(x) {} const std::string& r; }; S s(std::string("tmp"));` 构造语句结束后临时量销毁，`s.r` 悬垂。
4. **引用成员破坏赋值**：类里有引用成员时，编译器生成的拷贝赋值运算符会被定义为 deleted，容器里存放该类会编译失败。

### ⑤ 练习

**A 写**：实现上面的 `Counted` 和三个函数，要求输出拷贝次数 `1 / 1 / 1`；再加 `void take(Counted&&)`，验证右值引用调用不产生拷贝。不得修改函数签名。

**提示**：① 计数成员用 `static inline int`，在三个函数里各打一次印，才能分清哪个数字来自哪次调用；② 验证“引用不是独立对象”看 `sizeof(r)` 与被引用类型是否相等，不要看地址；③ 右值引用那一路必须写 `std::move(c)`，直接传 `c` 编译不过，报错本身就是“左值不能绑右值引用”的证据。

验收标准：`g++ -std=c++17 -Wall -Wextra` 无警告；运行输出严格为 `1 1 1 0`；能解释每个数字来自哪一次构造。

**B 讲**：2 分钟口述“值传递、引用传递、`const` 引用分别什么时候用”。必须覆盖拷贝成本、别名修改、生命周期延长三个点，并主动举一个对象切片的反例。

验收标准：不看稿讲完；三个点各有一句明确结论；反例代码能口述出来。

> ↑ 返回[目录](#toc)

---

<a id="unit-2"></a>
## D1 · 单元 2 C 和 C++ 的区别

> 来源：题库第 2 题 ｜ 速背卡：[2](./速背.md#cpp-02) ｜ 自测：[sel-1 · 第 2 题](./自测.md#sel-1) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：C 是面向过程的最小抽象，C++ 在兼容 C 的链接模型上叠加了类型安全、抽象能力和零开销泛型。

**学完能做到**
- 写代码：用 `extern "C"` 正确包住 C 头文件，并用 RAII 包装一个 C 资源。
- 讲出来：从类型安全、抽象机制、链接模型三个层面各说一条差异。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| C 是 C++ 的子集，C 代码可以原样用 C++ 编译器编 | 只是“几乎兼容”：`void*` 隐式转换、`malloc` 返回值直赋、`restrict`、变长数组在 C++ 下都不合法 |
| `extern "C"` 会改变函数的调用约定 | 它只改语言链接和名字修饰；调用约定由平台 ABI 决定，函数体仍是普通 C/C++ 代码 |
| C++ 里没法直接用 C 的库，因为 C 没有类和异常 | 能，只要有头文件和目标库：用 `extern "C"` 声明，链接时把 C 目标文件带上即可 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| C++ 有类、模板、异常、命名空间、引用、重载；C 没有 | C 代码可以用 C++ 编译器编译，但反过来不成立；迁移时要处理隐式转换和关键字冲突 |
| C 的 `void*` 可隐式转任意对象指针，C++ 不允许 | 老 C 代码里 `malloc` 的返回值直接赋给 `T*`，在 C++ 下会编译失败 |
| C++ 的名字修饰（name mangling）与 C 不同 | C++ 调 C 函数必须用 `extern "C"`，否则链接期找不到符号 |
| C 允许变长数组、`restrict` 等特性，标准 C++ 不支持 | 跨语言头文件要用宏隔离，不能假设 C 的扩展在 C++ 可用 |

**设计动机**：C++ 要复用海量既有 C 代码，就不能另造一套运行模型，于是沿用 C 的调用约定、对象布局和链接模型，只额外加上名字修饰与类型检查。`extern "C"` 就是留给链接器的接口：它声明“这个符号按 C 规则命名”，从而让两种语言的目标文件能拼进同一个可执行文件。反过来，C++ 用 RAII 把资源释放点绑到作用域，是因为 C 的“谁申请谁释放”完全靠调用方自觉，跨库边界时最容易漏。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 在 C++ 中调用 C 库 | 头文件里用 `#ifdef __cplusplus extern "C" { ... }` 包住声明 |
| 管理 C 资源（`FILE*`、`malloc`） | 用 `std::unique_ptr` 配自定义 deleter，不要在业务代码里裸写 `fclose/free` |
| 替代裸数组 | `std::array<T,N>` 或 `std::vector<T>` |
| 类型转换 | 用 `static_cast` 等四种 C++ 转换，而不是 C 风格强制转换 |

```cpp
// legacy_c.h：C 和 C++ 都能包含
#ifndef LEGACY_C_H
#define LEGACY_C_H
#ifdef __cplusplus
extern "C" {
#endif
int legacy_add(int a, int b);
#ifdef __cplusplus
}
#endif
#endif
```

```cpp
#include <cstdio>
#include <memory>

struct FileCloser {
    void operator()(std::FILE* f) const noexcept { if (f) std::fclose(f); }
};
using FilePtr = std::unique_ptr<std::FILE, FileCloser>;

FilePtr openFile(const char* path) {
    return FilePtr(std::fopen(path, "rb"));
}
```

出处：语言链接规则见 ISO C++ 标准 [dcl.link]；`std::unique_ptr` 的 deleter 用法见 cppreference（https://en.cppreference.com/w/cpp/memory/unique_ptr）。示例只依赖标准库 `<cstdio>`、`<memory>`。

**可观察验证**

```cpp
#include <cstdio>
#include <type_traits>

extern "C" int legacy_add(int a, int b) { return a + b; }   // C 链接：符号名不做修饰
int cpp_add(int a, int b) { return a - b; }                 // C++ 链接：符号会被修饰

static_assert(!std::is_convertible_v<void*, int*>);   // C 允许，C++ 不允许
int main() {
    std::printf("%d %d\n", legacy_add(1, 2), cpp_add(3, 4));
}
```

```plaintext
g++ -std=c++17 -c main.cpp -o main.o && nm main.o | grep -E "legacy_add|cpp_add"
# legacy_add 显示为 T legacy_add（未修饰）；cpp_add 显示为 T _Z7cpp_addii（已修饰）
```

- 上面 `nm` 的结果是 `T legacy_add`（未修饰）与 `T _Z7cpp_addii`（已修饰）；删掉 `extern "C"` 重编，`legacy_add` 也变成 `_Z10legacy_addii`，一旦实现放在 C 目标文件里，链接就报 `undefined reference`——这就是“必须写 `extern "C"`”的可运行证据。
- `void*` 能隐式转 `int*` 是 C 的规则，C++ 取消了它，所以 `static_assert(!std::is_convertible_v<void*, int*>)` 才能通过——这也正是 `int* p = malloc(n);` 从 C 迁到 C++ 会编译失败的原因。

### ③ 面试怎么讲

**30 秒口述稿**

> C 是面向过程的语言，核心是函数加结构体；C++ 在兼容 C 的基础上加了类、模板、异常、命名空间、引用和重载。差异我一般分三层说：类型安全上，C++ 不允许 `void*` 隐式转换；抽象上，C++ 用 RAII 和模板做零开销抽象；链接上，C++ 有名字修饰，所以调 C 接口必须 `extern "C"`。另外 C 的变长数组、`restrict` 不是标准 C++。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| C 代码能直接当 C++ 编译吗？ | 多数可以，但 `void*` 隐式转换、`malloc` 返回值、关键字冲突会报错，需要逐个修。 |
| `extern "C"` 改的是什么？ | 只改语言链接和名字修饰，不改调用约定本身；函数体仍是普通代码。 |
| C++ 为什么保留 C 的兼容性？ | 为了复用海量 C 库和既有生态，代价是语法和隐式转换规则更复杂。 |
| C 的 `struct` 和 C++ 的 `struct` 一样吗？ | C 的 `struct` 只有数据；C++ 的 `struct` 是类，默认 public，可以有成员函数、继承、模板。 |

### ④ 真实坑

1. **忘写 `extern "C"`**：C++ 文件里直接 `#include "legacy_c.h"`，编译通过、链接报 `undefined reference`，因为符号名被修饰了。
2. **`void*` 隐式转换**：把 C 代码里的 `int* p = malloc(n);` 拿到 C++ 编译，直接报错；应写 `static_cast<int*>(std::malloc(n))`。
3. **异常穿过 C 栈帧**：C 代码通常没有异常表，C++ 异常跨过 C 回调边界可能无法正确展开；跨语言边界用错误码，C 回调内部自己 `try/catch`。
4. **把 C 的扩展当标准**：`int a[n];` 变长数组、`restrict` 在 GCC 下能用，换成 MSVC 或标准 C++ 就失败。

### ⑤ 练习

**A 写**：写一个 `legacy_c.h` + `legacy_c.c` 提供 `int legacy_add(int,int)`，再写 `main.cpp` 用 `extern "C"` 调用；同时用 `std::unique_ptr<std::FILE, FileCloser>` 打开并读取一个文件。要求 C 文件用 C 编译器编译、C++ 文件用 C++ 编译器编译，最后链接成一个可执行文件。

**提示**：① C 文件和 C++ 文件分别用 `gcc -c` 与 `g++ -c` 编译，最后统一用 `g++` 链接，才能同时拿到 C 运行库；② 复现链接错误时先 `nm` 看符号名再看报错，把“名字修饰 → 找不到”这条链走完；③ 验证 RAII 是否真的关闭文件，改成在析构里打日志、并在中途 `return` 提前退出。

验收标准：链接无 `undefined reference`；故意删掉 `extern "C"` 后能复现链接错误并解释原因；`FilePtr` 离开作用域后文件确实关闭。

**B 讲**：2 分钟讲“C 和 C++ 的核心差异”。必须覆盖类型安全、抽象机制、链接模型三层，并说明一个 C 代码迁移到 C++ 的具体修改点。

验收标准：三层各至少一条；迁移点给出修改前后代码；能回答“`extern "C"` 改的是什么”。

> ↑ 返回[目录](#toc)

---

<a id="unit-3"></a>
## D1 · 单元 3 左值、右值与 `std::move`

> 来源：题库第 3 题 ｜ 速背卡：[3](./速背.md#cpp-03) ｜ 自测：[sel-1 · 第 3 题](./自测.md#sel-1) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：左值是有身份的对象，右值是临时或即将销毁的值；`std::move` 不搬任何东西，只是把表达式标记成“可以被搬空”。

**学完能做到**
- 写代码：写出能区分左值/右值的重载，并用 `std::move` 触发移动构造。
- 讲出来：说清 lvalue / prvalue / xvalue 三分法，以及 `std::move` 只是类型转换。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `std::move` 会移动对象、顺手清空源对象 | 它只是一个到 `T&&` 的 `static_cast`，不碰任何字节；真正搬资源的是移动构造/移动赋值 |
| 移动之后源对象就不能再用了 | 源对象处于“有效但未指定”状态：可以析构、重新赋值、调用无前置条件的成员，只是不能依赖原值 |
| 只要类型写了移动构造，就一定不会拷贝 | 源是 `const` 时匹配不到 `T&&`；移动构造不是 `noexcept` 时，`std::vector` 扩容等场景会退回复制以保证异常安全 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 左值有身份、可取地址；纯右值（prvalue）是临时值；将亡值（xvalue）是“可以被移动”的对象 | C++11 起值类别是三分法，不是简单的“左/右”二分 |
| 右值引用 `T&&` 只能绑定右值，用来识别“这个对象可以被搬空” | 移动构造/移动赋值靠它重载；绑定后源对象进入“有效但未指定”状态 |
| `std::move(x)` 等价于 `static_cast<T&&>(x)` | 它本身不移动、不修改、不释放任何资源；真正干活的是移动构造/移动赋值 |
| 命名变量即使是 `T&&` 类型，表达式仍然是左值 | `void f(T&&); T&& r = ...; f(r);` 编译失败，必须 `f(std::move(r))` |

**设计动机**：语言无法在运行期可靠判断“这个对象还有没有人要”，于是把“即将销毁、可以被搬空”做成静态属性（右值），让重载决议替编译器选出移动版本。`std::move` 被设计成纯类型转换而不是函数调用，是为了让“搬不搬”完全由类型和重载决定：调用处零开销，对 `int` 这类平凡类型也不会白做无用功。如果 `std::move` 自己执行搬移，它就必须知道每个类型的内部结构，`const` 源对象、不可移动类型的边界全会变得模棱两可。

**版本差异**：lvalue/prvalue/xvalue 三分法与右值引用、`std::move`、移动构造都是 C++11 引入；C++98 只有左右值二分和拷贝语义，`std::auto_ptr` 那种“复制即窃取”的写法在 C++11 被弃用、C++17 移除。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 把资源从源对象搬走 | 定义移动构造/移动赋值，内部 `swap` 或接管指针后把源置空 |
| 把左值传给移动构造 | `std::string b = std::move(a);` |
| 函数模板同时接受左值和右值 | 用转发引用 `template<class T> void f(T&&)` 配 `std::forward<T>` |
| 只观察值类别、不移动 | 用 `const T&`，不要为了“省拷贝”乱写 `std::move` |

```cpp
#include <string>
#include <utility>

void sink(std::string&& s) { (void)s; }

int main() {
    std::string a = "hello";
    // sink(a);              // 错误：a 是左值，不能绑定到 std::string&&
    sink(std::move(a));      // OK：显式转成将亡值
    std::string&& r = std::move(a);
    // sink(r);              // 错误：r 本身是左值
    sink(std::move(r));      // OK
}
```

出处：值类别见 ISO C++ 标准 [basic.lval]；`std::move` 的等价实现见 cppreference（https://en.cppreference.com/w/cpp/utility/move），标准库声明在 `<utility>`。示例可独立编译。

**可观察验证**

```cpp
#include <cstdio>
#include <string>
#include <utility>

struct MoveCounted {
    static inline int moves = 0;
    MoveCounted() = default;
    MoveCounted(const MoveCounted&) { std::puts("copy"); }
    MoveCounted(MoveCounted&&) noexcept { ++moves; std::puts("move"); }
};

int main() {
    std::string a(64, 'x');            // 超过 SSO 阈值，必然堆分配
    const char* before = a.data();
    std::string b = std::move(a);      // 移动构造：直接接管堆缓冲
    std::printf("same buffer = %d\n", before == b.data());
    std::printf("a.size() = %zu\n", a.size());   // 未指定，通常是 0

    MoveCounted m;
    MoveCounted n = std::move(m);      // 打一次 move
    MoveCounted k = m;                 // 打一次 copy
    std::printf("moves = %d\n", MoveCounted::moves);   // 1
}
```

- `same buffer = 1` 说明移动构造没有新分配，只是把指针接过去；`a.size()` 的值不保证，不能写进断言。
- 自定义类型上更直接：`std::move` 那一行打出 `move`、`moves` 变成 1，而 `MoveCounted k = m;` 打出 `copy`——这就是“`std::move` 只改值类别、真正干活的是重载”的观测方式。
- 把 `std::move(a)` 换成 `a`：`same buffer` 变成 0，因为拷贝构造重新分配了缓冲——一个打印就分清了拷贝与移动。

### ③ 面试怎么讲

**30 秒口述稿**

> 左值是有名字、能取地址、生命周期不由当前表达式决定的对象；右值是临时值或者马上就要销毁的值。C++11 把它细分成 lvalue、prvalue、xvalue。右值引用的价值是让函数识别“这个对象可以被搬空”，从而走移动构造而不是拷贝。`std::move` 本身不搬东西，它只是一个到右值引用的 `static_cast`，真正搬资源的是移动构造和移动赋值。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `std::move` 之后源对象还能用吗？ | 能，但处于“有效但未指定”状态，只能析构、重新赋值或清空，不能假设原值还在。 |
| 为什么 `return std::move(x)` 不好？ | 会阻止 NRVO（返回值优化），而且 `x` 是 const 时 `std::move` 得到 `const T&&`，反而退化成拷贝。 |
| `T&&` 什么时候是万能引用？ | 发生在模板参数推导且形如 `T&&` 时；`std::vector<T>&&`、`const T&&` 都不是。 |
| 右值引用能绑定左值吗？ | 不能，除非显式 `std::move`；模板推导时引用折叠可以让 `T&&` 绑定左值。 |

### ④ 真实坑

1. **对 `const` 对象 `std::move`**：得到 `const T&&`，匹配不到 `T&&` 移动构造，静默退化成拷贝，性能问题很难发现。
2. **移动后继续读源对象**：`auto b = std::move(a); std::cout << a.size();` 结果由实现决定，不能依赖。
3. **`return std::move(local);`**：阻止 NRVO，是常见的“负优化”。
4. **在构造函数初始化列表移动参数后，又在函数体使用该参数**：参数已被搬空，后续读取是未指定值。

### ⑤ 练习

**A 写**：实现 `Buffer` 类，内部持有 `std::unique_ptr<int[]>` 和长度；实现拷贝构造、拷贝赋值、移动构造、移动赋值。要求移动后源对象的指针为 `nullptr`、长度为 0；用 `std::vector<Buffer>` 装入 3 个对象并观察不发生深拷贝。

**提示**：① 用计数器而不是打印内容证明“没有拷贝”，内容相同看不出走的是移动还是拷贝；② 测 `return std::move(x)` 时开 `-O2` 并在移动构造里打点，对比 NRVO 版本的调用次数；③ 判断“命名右值引用仍是左值”直接写 `sink(r)` 让编译器报错，比背结论记得牢。

验收标准：`-fsanitize=address,undefined` 下无报错；移动后访问源对象不崩溃且状态可预测；打印出拷贝/移动次数符合预期。

**B 讲**：3 分钟讲“左值、右值、将亡值与 `std::move` 的关系”。必须画出三类值的关系，并解释“`std::move` 不移动”这句话。

验收标准：能现场写出 `std::move` 的等价 `static_cast`；能解释为什么命名右值引用仍是左值；能说出一个 `return std::move` 的反例。

> ↑ 返回[目录](#toc)

---

<a id="unit-4"></a>
## D1 · 单元 4 列表初始化

> 来源：题库第 4 题 ｜ 速背卡：[4](./速背.md#cpp-04) ｜ 自测：[sel-1 · 第 4 题](./自测.md#sel-1) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：`{}` 想统一所有初始化，但它优先选择 `initializer_list` 并禁止窄化，所以“看起来一样”的写法可能选出完全不同的构造函数。

**学完能做到**
- 写代码：用 `{}` 完成聚合初始化、容器初始化和值初始化，并解释每次选择了哪个构造函数。
- 讲出来：说清 `{}` 与 `()` 在重载决议和窄化上的差异。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `{}` 只是 `()` 的另一种写法 | 两者重载决议不同：`{}` 优先 `initializer_list` 且禁止窄化，`()` 允许窄化、按普通重载决议 |
| `int x;` 和 `int x{};` 都只是声明，没差别 | 前者是默认初始化，局部变量内容未定义；后者是值初始化，内置类型一定是 0 |
| 空 `{}` 一律调用用户写的默认构造函数 | 只有用户提供的默认构造才被直接调用；否则先整体零初始化再调（隐式）默认构造 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `{}` 是统一初始化语法，可用于内置类型、聚合体、类、容器 | 一套写法覆盖大多数场景，减少“括号还是等号”的选择成本 |
| 列表初始化禁止窄化转换 | `int x{3.14}` 编译错误；用 `()` 则会静默截断，`{}` 更安全 |
| 类若有 `initializer_list` 构造函数，`{}` 会优先匹配它 | `std::vector<int> v{10}` 是“一个元素 10”，不是“10 个 0” |
| 空 `{}` 执行值初始化：内置类型置零，类调用默认构造 | `int x{};` 一定是 0，而 `int x;` 是未初始化 |

**设计动机**：C++03 的初始化有“等号、圆括号、花括号”好几套写法，而且窄化在圆括号里静默发生，`vector<int> v(10)` 这类“长度还是元素”的歧义只能靠记。统一成 `{}` 的目标是给“初值列表”一个明确的语法位置，同时用“禁止窄化”把隐式截断变成编译错误。代价是标准必须规定优先级：为了让容器和聚合体写法自然，`initializer_list` 构造函数被排在前面，这直接带来了 `v{10}` 与 `v(10)` 的语义分裂。

**版本差异**：`{}` 统一初始化与 `std::initializer_list` 是 C++11 引入；C++14 起带默认成员初始化器（NSDMI）的类型仍算聚合体，`struct P { int x = 0; int y; }; P p{1, 2};` 可编译，C++11 下同样的 `P` 不是聚合体。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 内置类型清零 | `int x{};`、`double d{};` |
| 聚合体按成员顺序初始化 | `Point p{1, 2};` |
| 容器放若干元素 | `std::vector<int> v{1, 2, 3};` |
| 容器放 N 个相同值 | `std::vector<int> v(3, 7);`，注意这里是圆括号 |

```cpp
#include <vector>

struct Point { int x; int y; };

int main() {
    int a{};                    // 0
    Point p{1, 2};              // 聚合初始化
    std::vector<int> v{1, 2, 3};
    // int b{3.14};             // 错误：窄化
    std::vector<int> three(3, 7); // 3 个 7
    std::vector<int> two{3, 7};   // 两个元素 3、7
}
```

出处：列表初始化规则见 ISO C++ 标准 [dcl.init.list]；聚合初始化见 [dcl.init.aggr]；可对照 cppreference “List initialization”（https://en.cppreference.com/w/cpp/language/list_initialization）。

**可观察验证**

```cpp
#include <cstdio>
#include <initializer_list>
#include <vector>

struct InitProbe {
    InitProbe() { std::puts("default"); }
    explicit InitProbe(int) { std::puts("(int)"); }
    InitProbe(std::initializer_list<int> l) {
        std::printf("initializer_list size=%zu\n", l.size());
    }
};

int main() {
    InitProbe a(3);        // (int)
    InitProbe b{3};        // initializer_list size=1
    InitProbe c{1, 2};     // initializer_list size=2

    std::vector<int> three(3, 7);   // 3 个 7
    std::vector<int> two{3, 7};     // 两个元素 3、7
    std::printf("three=%zu two=%zu\n", three.size(), two.size());   // 3 2

    // int d{3.14};        // 取消注释即复现窄化编译错误
    int e(3.14);           // 圆括号：静默截断成 3
    std::printf("e=%d\n", e);
}
```

- 输出顺序是 `(int)` → `initializer_list size=1` → `initializer_list size=2`：同一个类型，`()` 与 `{}` 走了不同构造函数。
- `three=3 two=2` 是容器版本的同一条规则：圆括号按“个数 + 初值”，花括号按“元素列表”。
- 取消 `int d{3.14};` 的注释，GCC/Clang 报 `narrowing conversion`；`int e(3.14)` 则静默得到 3，这是 `{}` 更安全的可复现证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 列表初始化就是统一用花括号初始化，好处是语法统一、禁止窄化、空花括号一定会值初始化。它的关键陷阱是重载优先级：如果类有 `initializer_list` 构造函数，花括号会优先选它，所以 `vector<int> v{10}` 是一个元素 10，而 `vector<int> v(10)` 才是 10 个默认值。工程上我倾向用 `{}` 做值初始化和聚合初始化，涉及容器大小和重复值时明确用圆括号。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `{}` 和 `()` 最大区别？ | `{}` 禁止窄化、优先 `initializer_list`、空 `{}` 值初始化；`()` 允许窄化、按普通重载决议。 |
| 为什么会优先 `initializer_list`？ | 标准规定列表初始化先考虑 `initializer_list` 构造函数，这是为了让容器和聚合体写法自然。 |
| `std::vector<int> v{10}` 是什么？ | 一个元素，值为 10；因为匹配了 `initializer_list<int>` 构造。 |
| 空 `{}` 对类做什么？ | 如果类有用户提供的默认构造就调用它，否则进行值初始化（成员按规则零初始化）。 |

### ④ 真实坑

1. **容器大小写错**：`std::vector<int> v{10};` 以为 10 个 0，实际 1 个 10，后续 `v[9]` 越界。
2. **`initializer_list` 抢占构造**：类同时有 `(int, int)` 和 `(initializer_list<int>)` 时，`{1,2}` 选后者，可能绕过你期望的普通构造。
3. **窄化在圆括号里静默发生**：`int x(3.14)` 得到 3，`int x{3.14}` 直接编译失败；从 `()` 改 `{}` 能提前暴露问题。
4. **聚合体成员顺序变化**：`Point p{1,2}` 依赖成员声明顺序，重构调整字段顺序后语义悄悄改变。

### ⑤ 练习

**A 写**：定义 `struct Pixel { int r, g, b; };` 和 `class Config`（含 `initializer_list<int>` 构造与 `(int,int)` 构造），分别用 `{}` 和 `()` 初始化，打印实际调用的构造函数与元素个数。

**提示**：① 容器测试同时打印 `size()` 和首元素，才能区分“3 个 7”与“两个元素 3、7”；② 复现窄化时保留完整报错，里面会直接指出哪一行发生了 `narrowing`；③ 给 `struct` 加一个构造函数，`{}` 的语义立刻改变——用这个对比体会“聚合体”的边界。

验收标准：能准确预测并验证 `Pixel{1,2,3}`、`Config{1,2}`、`Config(1,2)` 的行为；`int x{3.14}` 能复现编译错误；解释每个结果对应的标准规则。

**B 讲**：2 分钟讲“列表初始化的三个关键规则与两个坑”。必须包含禁止窄化、`initializer_list` 优先、空 `{}` 值初始化，以及 `vector{10}` 的反例。

验收标准：不看稿；能现场区分 `vector<int> v{10}` 与 `v(10)`；能说清为什么 `{}` 更安全。

> ↑ 返回[目录](#toc)

---

<a id="unit-5"></a>
## D1 · 单元 5 数组与指针

> 来源：题库第 10 题 ｜ 速背卡：[10](./速背.md#cpp-10) ｜ 自测：[sel-2 · 第 10 题](./自测.md#sel-2) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：数组类型自带长度，但一旦退化成指针长度就丢了；所有“数组长度算错”的 bug 都源于这个退化。

**学完能做到**
- 写代码：用模板或 `std::array` 在函数内保留数组长度，不再依赖 `sizeof`。
- 讲出来：说清 `arr`、`&arr`、`arr+1` 的类型和步长差异。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 数组名就是指针，`sizeof` 只是碰巧算对了 | 数组类型是 `T[N]`，只在大多数表达式里退化成 `T*`；`sizeof(arr)` 与 `sizeof(&arr[0])` 不同就是证据 |
| 函数形参 `int a[10]` 会保留长度 10 | 形参类型被调整为 `int*`，`10` 被忽略，函数内 `sizeof(a)` 是指针大小 |
| `std::array` 是“带长度的动态数组”，可以运行期改长度 | 它是固定长度聚合体，长度写进类型 `std::array<T,N>`；运行期可变的只有 `std::vector` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 数组类型是 `T[N]`，`sizeof(arr)` 得到总字节数 | 在数组所在作用域内可以算出长度；离开作用域就失效 |
| 数组在大多数表达式里退化为指向首元素的指针 | 传参后长度信息丢失，函数形参 `T a[]` 实际就是 `T*` |
| `&arr` 的类型是 `T(*)[N]`，`arr+1` 的步长是一个元素 | 对数组取地址得到“整个数组的指针”，算术步长是 `N*sizeof(T)` |
| 数组不能拷贝、不能赋值、不能按值返回 | 需要值语义时用 `std::array` 或 `std::vector` |

**设计动机**：数组退化来自 C 的调用约定——按值传递数组意味着整块拷贝，成本不可控，于是语言规定数组在表达式里转换成首元素指针，把长度交给程序员自己记。`std::array` 和 `std::span` 都是给这个历史设计打的补丁：前者把长度写进类型（编译期已知、可拷贝、可作为返回值），后者把“指针 + 长度”打包成轻量视图，让函数签名能同时携带地址和长度而不涉及所有权。

**版本差异**：`std::array`、`std::size`、`std::data` 是 C++11 引入，`std::span` 是 C++20；裸数组的退化规则从 C++98 到 C++20 没有变化。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 固定长度、可拷贝的数组 | `std::array<int, 4> a{};` |
| 函数接收数组并保留长度 | `template <std::size_t N> void f(const int (&a)[N]);` |
| 运行期长度 | `std::vector<int>` 或 `std::span`（C++20） |
| 遍历 | 范围 `for`，不要手写下标 |

```cpp
#include <array>
#include <cstddef>

template <std::size_t N>
constexpr std::size_t length(const int (&)[N]) { return N; }

int main() {
    int a[4]{};
    static_assert(sizeof(a) == 4 * sizeof(int));
    static_assert(length(a) == 4);

    std::array<int, 4> b{};
    static_assert(b.size() == 4);
}
```

出处：数组声明与退化规则见 ISO C++ 标准 [dcl.array]、[conv.array]；`std::array` 见 `<array>` 与 cppreference（https://en.cppreference.com/w/cpp/container/array）。示例可独立编译。

**可观察验证**

```cpp
#include <array>
#include <cstddef>
#include <cstdio>

void take(int a[10]) {                       // 形参被调整成 int*
    std::printf("sizeof in func = %zu\n", sizeof(a));
}

int main() {
    int a[10]{};
    static_assert(sizeof(a) == 10 * sizeof(int));
    static_assert(std::size(a) == 10);

    // sizeof 的操作数不求值，这里不会真的越界访问
    std::printf("sizeof(a)=%zu step(a+1)=%zu step(&a+1)=%zu\n",
                sizeof(a), sizeof(*(a + 1)), sizeof(*(&a + 1)));
    take(a);
}
```

- 输出 `sizeof(a)=40 step(a+1)=4 step(&a+1)=40`：`a+1` 的步长是一个元素，`&a+1` 的步长是整个数组——数值地址相同、类型不同。
- `sizeof in func = 8`（64 位）：形参已经退化成指针，长度只能靠模板参数 `N`、`std::array` 或 `std::span` 传进来。

### ③ 面试怎么讲

**30 秒口述稿**

> 数组的类型是“元素类型加长度”，所以 `sizeof` 能拿到总字节数；但数组在大多数表达式里会退化成首元素指针，长度就丢了。函数形参写 `int a[]` 其实等价于 `int*`，所以在函数里 `sizeof(a)` 得到的是指针大小。要保留长度可以用数组引用模板、`std::array` 或者 `std::span`。另外 `&arr` 是整个数组的指针，`arr+1` 才是一个元素的步长。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `arr` 和 `&arr` 有什么区别？ | `arr` 退化后是 `T*`，`&arr` 是 `T(*)[N]`；数值地址相同，但类型和步长不同。 |
| 为什么函数里 `sizeof(arr)` 不对？ | 形参已经退化成指针，`sizeof` 得到 8（64 位），不是数组总字节。 |
| 数组能直接赋值吗？ | 不能；需要逐元素拷贝，或改用 `std::array`/`std::vector`。 |
| 字符串字面量是什么类型？ | `const char[N]`（含结尾 `'\0'`），不能赋给 `char*`。 |

### ④ 真实坑

1. **函数内算长度**：`void f(int a[10]) { sizeof(a); }` 得到指针大小，和调用方数组长度无关。
2. **指针算术越界**：`int* p = a + 5;` 即使不解引用，只要超出“数组尾后一位”就是 UB。
3. **字符串字面量转 `char*`**：`char* p = "abc";` 在 C++11 起非法；应写 `const char*`。
4. **多维数组传参**：`void f(int a[][3])` 第二维必须写，否则无法计算步长；更推荐 `std::array<std::array<int,3>,N>`。

### ⑤ 练习

**A 写**：写三个版本的 `sum`：`int sum(int* p, int n)`、`template<size_t N> int sum(const int (&a)[N])`、`int sum(const std::array<int,4>& a)`。在 `main` 中用同一个数组调用三者，打印结果；再在第一个版本里打印 `sizeof(p)`，在第二个版本里 `static_assert(N == 4)`。

**提示**：① 三个版本 `sum` 用同一个数组调用，先 `assert` 结果相等再单独打印 `sizeof(p)`；② `static_assert(N == 4)` 放进模板函数，实例化时 `N` 不同会立刻编译失败，比运行时断言更早；③ 想直观看到退化，用 `typeid(a).name()` 分别打印数组与指针的类型名。

验收标准：三个结果一致；能解释第一个版本的 `sizeof` 为什么是 8；`static_assert` 编译通过；不出现越界访问。

**B 讲**：2 分钟讲“数组退化和三种保留长度的写法”。必须解释 `arr`、`&arr`、`arr+1` 的类型和步长。

验收标准：能画出示意图；能说明 `std::array` 相比裸数组多解决了哪两个问题（拷贝、长度）；能说出一个越界 UB 的例子。

> ↑ 返回[目录](#toc)

---

<a id="unit-6"></a>
## D1 · 单元 6 `sizeof` 与 `strlen`

> 来源：题库第 11 题 ｜ 速背卡：[11](./速背.md#cpp-11) ｜ 自测：[sel-2 · 第 11 题](./自测.md#sel-2) ｜ 耗时 10 min ｜ 难度 ★☆☆

**一句话**：`sizeof` 是编译期算“占多少字节”，`strlen` 是运行期数“到 `'\0'` 前有多少字节”，两者连计数口径都不同。

**学完能做到**
- 写代码：对数组、指针、字符串字面量分别正确求出容量与长度。
- 讲出来：说清 `sizeof` 是否包含 `'\0'`、是否在编译期求值。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `sizeof` 和 `strlen` 只是写法不同，结果差不多 | 口径不同：`sizeof` 求对象/类型的字节数且含 `'\0'`，`strlen` 运行期数到 `'\0'` 前的字节数 |
| `sizeof` 是库函数，有运行期开销 | 它是运算符，操作数不求值，编译期出结果（C99 变长数组那类扩展除外） |
| 对 `std::string` 求长度用 `strlen(s.c_str())` 是标准做法 | 长度用 `s.size()`；`c_str()` 只是保证补 `'\0'`，内容本身含 `'\0'` 时 `strlen` 会提前截断 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `sizeof` 是运算符，编译期求字节数（变长数组除外） | 没有运行期开销，但得到的是“类型大小”，不是“有效数据长度” |
| `strlen` 是 `<cstring>` 函数，运行期扫描到 `'\0'` | 对非 `'\0'` 结尾的缓冲区调用就是越界读，UB |
| `sizeof("abc")` 是 4，包含结尾 `'\0'`；`strlen("abc")` 是 3 | 分配缓冲区时用 `sizeof`，计算可见字符时用 `strlen` |
| `sizeof(指针)` 永远是指针大小，与指向数组多长无关 | 函数形参、`new[]` 返回的指针都无法用 `sizeof` 求容量 |

**设计动机**：C 用“以 `'\0'` 结尾的字符数组”表示字符串，不携带长度字段，所以长度只能靠扫描得到——这样字符串能直接嵌在更大缓冲里、也不用额外存一个长度。`sizeof` 作为运算符服务于内存布局（分配、序列化、`memcpy`），它不可能知道“有效数据到哪结束”。两者口径不同不是缺陷，而是“类型大小”和“运行期数据长度”两个问题的答案；真正的坑在于数组退化后长度丢失，`sizeof` 只能给出指针大小。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 求数组元素个数（数组仍在作用域内） | `sizeof(a) / sizeof(a[0])` 或 `std::size(a)` |
| 求 C 字符串长度 | `std::strlen(s)`，确保 `s` 以 `'\0'` 结尾 |
| 求 `std::string` 长度 | `s.size()`，O(1) |
| 分配能放下字符串的缓冲区 | `char buf[sizeof("abc")];`，别漏 `'\0'` |

```cpp
#include <cstdio>
#include <cstring>

int main() {
    char s[] = "abc";
    char* p = s;
    std::printf("%zu %zu %zu %zu\n",
                sizeof(s),        // 4：含 '\0'
                std::strlen(s),   // 3：不含 '\0'
                sizeof(p),        // 8（64 位）：指针大小
                sizeof(*p));      // 1：char
}
```

出处：`sizeof` 规则见 ISO C++ 标准 [expr.sizeof]；`strlen` 语义见 `<cstring>` 与 C 标准 7.24.6.3；可对照 cppreference（https://en.cppreference.com/w/cpp/language/sizeof）。

**可观察验证**

```cpp
#include <cstdio>
#include <cstring>
#include <string>

int main() {
    char a[] = "hello";
    char b[8] = "hello";               // 后 3 字节补 '\0'
    const char* p = a;
    std::string s = "hello";

    std::printf("a: sizeof=%zu strlen=%zu\n", sizeof(a), std::strlen(a));
    std::printf("b: sizeof=%zu strlen=%zu\n", sizeof(b), std::strlen(b));
    std::printf("p: sizeof=%zu strlen=%zu\n", sizeof(p), std::strlen(p));
    std::printf("s: sizeof=%zu size=%zu\n", sizeof(s), s.size());
}
```

- 输出 `6/5`、`8/5`、`8/5`、`32/5`（`std::string` 对象大小因实现而异）：容量口径与长度口径一目了然，只有数组还在作用域内时 `sizeof` 才能求容量。
- 把 `char buf[3] = {'a','b','c'}; std::strlen(buf);` 用 `-fsanitize=address`（Clang、Linux 上的 GCC 自带）构建运行，ASan 会报 `stack-buffer-overflow`——`strlen` 依赖结尾符，没有就是 UB。

### ③ 面试怎么讲

**30 秒口述稿**

> `sizeof` 是运算符，编译期就能算出类型占多少字节；`strlen` 是运行期函数，从指针开始一直数到 `'\0'`。对 `char s[] = "abc"`，`sizeof(s)` 是 4，包含结尾的 `'\0'`，`strlen(s)` 是 3，不包含。`sizeof` 对指针永远得到指针大小，所以数组传给函数后退化成指针，就再也不能用 `sizeof` 求长度了。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `sizeof` 一定在编译期吗？ | 对固定大小类型是；C99 的变长数组和 C++ 的 VLA 扩展可能在运行期求值，标准 C++ 不支持 VLA。 |
| `sizeof` 会求值表达式吗？ | 不会对操作数求值（除 VLA 外），所以 `sizeof(f())` 不调用 `f`。 |
| `strlen` 对 `std::string` 能用吗？ | 不能，`std::string` 不是以 `'\0'` 结尾的 C 字符串；用 `s.size()`。 |
| 为什么 `sizeof(p)/sizeof(p[0])` 在函数里错？ | `p` 已是指针，结果恒为 8/元素大小，不是数组长度。 |

### ④ 真实坑

1. **对 `new[]` 指针求容量**：`int* p = new int[10]; sizeof(p)` 是 8，不是 40。
2. **非 `'\0'` 结尾**：`char buf[3] = {'a','b','c'}; strlen(buf);` 越界读到随机内存，可能崩溃或泄露数据。
3. **中文按字节数**：UTF-8 下一个汉字通常 3 字节，`strlen` 得到的是字节数，不是“字数”。
4. **`sizeof` 与 `std::string`**：`sizeof(std::string)` 是对象本身大小（常见 32 字节），与内容长度无关。

### ⑤ 练习

**A 写**：写一个函数 `void report(const char* s)`，分别打印 `sizeof(s)`、`strlen(s)`；在 `main` 中对 `char a[] = "hello"`、`const char* b = "hello"`、`std::string c = "hello"` 调用并打印三者容量/长度。

**提示**：① 每个数字旁边写一行注释说明来源（类型大小还是扫描长度），别只打印数值；② 数数组元素用 `std::size(a)`，比 `sizeof(a)/sizeof(a[0])` 更不容易写错；③ 对 `std::string` 只调 `size()`，把 `strlen(s.c_str())` 留作反例实验。

验收标准：能解释每个数字；`report` 内 `sizeof(s)` 为 8；对 `std::string` 使用 `size()` 而非 `strlen`；不出现越界读。

**B 讲**：90 秒讲“`sizeof` 和 `strlen` 的区别”。必须说明求值时机、是否含 `'\0'`、数组与指针的差异。

验收标准：不看稿；三个差异各一句；能举一个“函数内 `sizeof` 失效”的例子。

> ↑ 返回[目录](#toc)

---

<a id="unit-7"></a>
## D1 · 单元 7 `nullptr` 与 `NULL`

> 来源：题库第 17 题 ｜ 速背卡：[17](./速背.md#cpp-17) ｜ 自测：[sel-2 · 第 17 题](./自测.md#sel-2) ｜ 耗时 10 min ｜ 难度 ★★☆

**一句话**：`NULL` 本质是整数 0，`nullptr` 才是真正的空指针类型；重载和模板会把这件事放大成编译错误或选错函数。

**学完能做到**
- 写代码：用 `nullptr` 消除 `f(int)` / `f(void*)` 的重载歧义。
- 讲出来：说清 `NULL` 的类型来源与 `std::nullptr_t` 的转换规则。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `NULL` 是空指针 | `NULL` 是整数常量（`0` 或 `__null`），不是指针类型 |
| `nullptr` 能直接赋给 `int` | 不能，它只隐式转指针和成员指针，这正是它更安全的地方 |
| 用 `NULL` 只是风格问题 | 在重载决议和模板推导里是语义问题：选错重载、甚至编译失败 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `NULL` 通常是宏 `0` 或 `__null`，类型是整数 | `f(NULL)` 在 `f(int)` 与 `f(void*)` 之间可能选 `int`，甚至歧义 |
| `nullptr` 的类型是 `std::nullptr_t` | 可隐式转任意指针/成员指针，不能隐式转整数 |
| `nullptr` 转 `bool` 是 `false` | `if (p)` 风格统一，不需要和 0 比较 |
| 模板推导时 `NULL` 推成整数类型（`int`/`long`/`long long` 视实现），`nullptr` 推成 `std::nullptr_t` | 泛型代码里传 `NULL` 会得到意外的实例化类型 |

**设计动机**：`nullptr` 是 C++11 给"空指针"补的独立类型。在此之前空指针只能借整数 `0`（或 `NULL`）表达，重载决议和模板推导只能把它当整数处理；`std::nullptr_t` 让"空指针"和"整数 0"在类型系统里彻底分开。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 初始化空指针 | `T* p = nullptr;` |
| 比较空指针 | `if (p == nullptr)` 或 `if (!p)` |
| 重载 `int` 与指针 | 调用处一律传 `nullptr` |
| 泛型代码表示空指针 | 用 `std::nullptr_t` 或直接 `nullptr` |

```cpp
#include <cstddef>

void f(int) {}
void f(void*) {}

template <class T> void g(T) {}

int main() {
    // f(NULL);   // GCC/Clang：NULL 是 __null，两个重载都可行 → 歧义，编译失败
    //            // 某些实现里 NULL 就是整数 0，会选 f(int)
    f(nullptr);   // 一定调用 f(void*)

    // g(NULL);   // NULL 是整数类型：GCC 64 位下 T 推导为 long long，不是指针
    g(nullptr);   // T 推导为 std::nullptr_t
}
```

出处：空指针字面量见 ISO C++ 标准 [lex.nullptr]；`NULL` 的定义见 `<cstddef>`；可对照 [cppreference · nullptr](https://en.cppreference.com/w/cpp/language/nullptr)。

**可观察验证**

```cpp
#include <cstddef>
#include <type_traits>

static_assert(std::is_same_v<decltype(nullptr), std::nullptr_t>);  // nullptr 有独立类型
static_assert(!std::is_convertible_v<std::nullptr_t, int>);        // 不能隐式转整数
static_assert(std::is_integral_v<decltype(NULL)>);                 // NULL 是整数类型，不是指针

int main() {}
```

- 把示例里的 `f(NULL)` 取消注释再编译：GCC/Clang 报 `call of overloaded 'f(NULL)' is ambiguous`——这是"NULL 不是指针"最直接的证据。
- 用 `static_assert(std::is_integral_v<decltype(NULL)>);` 可验证 `NULL` 是整数类型：GCC 下 `decltype(NULL)` 是 `long long`（32 位平台为 `long`），但都不是 `void*`。

### ③ 面试怎么讲

**30 秒口述稿**

> `NULL` 在 C 里就是整数 0 的宏，在 C++ 里可能是 `0` 或编译器内置的 `__null`，本质上不是指针类型。`nullptr` 是 C++11 引入的空指针字面量，类型是 `std::nullptr_t`，可以隐式转成任意指针，但不能转成整数。所以有 `f(int)` 和 `f(void*)` 重载时，`f(NULL)` 可能选错，`f(nullptr)` 一定选指针版本。新代码统一用 `nullptr`。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `NULL` 一定是 0 吗？ | 标准允许它是整数常量 0 或 `nullptr_t` 类型的值；常见实现是 `0` 或 `__null`。 |
| `nullptr` 能赋给 `int` 吗？ | 不能，没有隐式转换；这正是它比 `NULL` 安全的地方。 |
| `nullptr` 能转 `bool` 吗？ | 能，值为 `false`。 |
| 为什么模板里更要用 `nullptr`？ | `NULL` 会推成整数类型，导致实例化出错误的重载或编译失败。 |

### ④ 真实坑

1. **重载选错**：日志里看到 `f(NULL)` 调用了 `f(int)`，指针版本根本没执行。
2. **可变参数**：`printf("%p", NULL)` 传的是整数 0，和 `%p` 期望的 `void*` 不匹配，UB。
3. **模板推导**：`template<class T> void g(T); g(NULL);` 中 `T` 可能是 `long`，后续把 `T` 当指针用就编译失败。
4. **旧代码迁移**：把 `NULL` 全替换成 `nullptr` 后，某些把空指针当整数用的代码会报错——这是暴露了原本的隐患。

### ⑤ 练习

**A 写**：写 `void f(int)`、`void f(void*)`、`template<class T> void g(T)`，分别用 `NULL` 和 `nullptr` 调用，打印实际选中的重载/类型（用 `typeid` 或重载标记）。

**提示**：① 在重载里分别 `std::puts("int")` / `std::puts("void*")`，一眼看出选中哪个；② 在 `g` 里打印 `typeid(T).name()`（GCC 下 `g(NULL)` 得到 `long long`、`g(nullptr)` 得到 `std::nullptr_t`），或用 `std::is_integral_v<T>` 区分两类推导结果；③ `f(NULL)` 若报歧义，把报错信息抄进注释，正好当"NULL 不是指针"的证据。

验收标准：能解释 `f(NULL)` 的结果（因编译器而异）；`f(nullptr)` 必然走 `f(void*)`；`g(NULL)` 与 `g(nullptr)` 的 `T` 不同；编译无警告（必要时用 `-Wzero-as-null-pointer-constant` 观察）。

**B 讲**：90 秒讲"为什么现代 C++ 用 `nullptr` 替代 `NULL`"。必须覆盖类型、重载、模板三点。

验收标准：不看稿；能说出 `std::nullptr_t`；能举一个重载选错的例子。

> ↑ 返回[目录](#toc)

---

<a id="unit-8"></a>
## D1 · 单元 8 指针与引用

> 来源：题库第 21 题 ｜ 速背卡：[21](./速背.md#cpp-21) ｜ 自测：[sel-3 · 第 21 题](./自测.md#sel-3) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：指针是“可以改指向、可以为空”的对象，引用是“终身绑定、不能为空”的别名；两者解决的是不同的接口契约。

**学完能做到**
- 写代码：分别用指针和引用实现 `swap`，并说明各自适用场景。
- 讲出来：说清可空性、可重绑定性、`sizeof` 和底层实现的差异。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 引用就是“自动解引用的指针”，可以互换 | 语义不同：引用不能为空、不能重新绑定；指针可空、可重指向、可做算术 |
| 引用一定不占内存 | 语言不保证；常见 ABI 用指针实现，`sizeof(引用)` 给的是被引用类型大小，但结构体里仍占空间 |
| 引用参数比指针更安全，因为不会为空 | 安全来自“不可能有空引用”的契约；`int& r = *p;` 在 `p` 为空时照样是 UB，引用不做检查 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 指针是对象：可空、可重指向、可做算术、本身有地址 | 适合“可选参数”、数组遍历、动态数据结构 |
| 引用必须初始化、不能重新绑定、没有空引用 | 适合“必定存在”的参数/返回值，接口语义更强 |
| `sizeof(指针)` 是指针大小；`sizeof(引用)` 是被引用类型大小 | 模板/内存布局里不能把引用当指针算大小 |
| 引用底层通常用指针实现，`&r` 得到被引用对象地址 | 引用不是“零成本”的绝对保证，但语义上不占独立对象 |

**设计动机**：操作符重载和输出参数需要一个“必定存在”的别名——如果只能用指针，`operator<<`、拷贝赋值、`swap` 都得处理空指针，调用处还得写 `&`。引用把“绑定一次、终身有效”写进类型，被调用方就不需要空检查，调用方也不用显式取地址；指针则保留可空与可重指向，用于可选参数、容器遍历和动态结构。两者并存的意义是让签名直接表达契约：`T&` = 一定会给我一个对象，`T*` = 可能为空。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 参数必定存在且要修改 | `void f(T& x)` |
| 参数可选、可能为空 | `void f(T* x)`，调用方传 `nullptr` |
| 只读且避免拷贝 | `void f(const T& x)` |
| 需要重新绑定/遍历 | 指针或迭代器 |

```cpp
void swapPtr(int* a, int* b) {
    int t = *a; *a = *b; *b = t;
}

void swapRef(int& a, int& b) {
    int t = a; a = b; b = t;
}

int main() {
    int x = 1, y = 2;
    swapPtr(&x, &y);
    swapRef(x, y);
}
```

出处：指针与引用的声明规则见 ISO C++ 标准 [dcl.ptr]、[dcl.ref]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/reference）。

**可观察验证**

```cpp
#include <cstdio>
#include <type_traits>

struct RefHolder { int& r; };
static_assert(!std::is_copy_assignable_v<RefHolder>);   // 引用成员删除了拷贝赋值

int main() {
    int x = 1, y = 2;
    int* p = &x;
    int& r = x;

    std::printf("sizeof(int*)=%zu sizeof(int&)=%zu\n", sizeof(p), sizeof(r));   // 8 4
    p = &y;          // 指针可以重新指向
    r = y;           // 这不是重绑：等价于 x = y
    std::printf("&r==&x: %d, x=%d\n", &r == &x, x);
}
```

- `sizeof(int*)=8` 而 `sizeof(int&)=4`：引用在语言层面不是对象，取大小得到的是被引用类型。
- `static_assert(!std::is_copy_assignable_v<RefHolder>)` 编译通过，说明“引用成员让类不可赋值”是类型系统层面的删除，不是运行时限制。
- `p = &y` 后 `p` 指向变了，而 `&r == &x` 恒为真：引用无法重绑，`r = y` 只能是赋值。

### ③ 面试怎么讲

**30 秒口述稿**

> 指针是一个独立对象，保存地址，可以为空、可以重新指向、可以做算术；引用是已有对象的别名，必须初始化，之后不能改绑，也不存在空引用。所以接口上如果参数一定存在，用引用语义更强；如果参数可选，用指针。`sizeof` 上，指针得到指针大小，引用得到被引用类型大小。底层引用通常按指针实现，但语言层面它不是对象。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 引用占内存吗？ | 语言不保证；常见实现占一个指针大小，优化后可能消失。 |
| 能返回引用吗？ | 能，但必须保证被引用对象活得比引用久；返回局部变量引用是悬垂。 |
| 指针和引用能互相转换吗？ | 引用取地址得指针；指针解引用得左值，可绑定引用，但空指针解引用 UB。 |
| 为什么类里放引用成员要小心？ | 引用成员让默认拷贝赋值被删除，且构造后不能改绑。 |

### ④ 真实坑

1. **返回局部引用**：`int& f() { int x = 0; return x; }` 返回栈内存引用，调用即悬垂。
2. **引用成员破坏赋值**：`struct S { int& r; };` 的拷贝赋值被删除，放进 `std::vector` 会编译失败。
3. **空指针解引用**：`int& r = *p;` 当 `p == nullptr` 时 UB，引用本身不会帮你检查。
4. **误以为引用不占空间**：在结构体里大量使用引用成员，实际布局仍含指针，且失去值语义。

### ⑤ 练习

**A 写**：实现 `swapPtr` 和 `swapRef`，再写一个 `struct RefHolder { int& r; };`，尝试拷贝赋值并观察编译错误；改成 `int* p` 版本后恢复可赋值。

**提示**：① 用 `&r == &x` 验证别名语义，再对比 `&p != &x`（指针本身有地址）；② 复现 deleted 赋值错误时只看编译器第一行，后面是模板展开噪音；③ 区分“改指向”和“改值”就各写一行并打印地址，比背结论直观。

验收标准：两个 `swap` 结果正确；能复现引用成员的 deleted 赋值错误并解释；能说明为什么可选参数不用引用。

**B 讲**：2 分钟讲“指针与引用的五个区别”。必须覆盖可空性、重绑定、`sizeof`、底层实现、适用场景。

验收标准：五点齐全；每点配一句工程建议；能说出一个悬垂引用的例子。

> ↑ 返回[目录](#toc)

---

<a id="unit-9"></a>
## D1 · 单元 9 整型宽度：`short`、`int`、`long`、`long long`

> 来源：题库第 22 题 ｜ 速背卡：[22](./速背.md#cpp-22) ｜ 自测：[sel-3 · 第 22 题](./自测.md#sel-3) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：标准只保证“至少多少位”和相对大小，不保证字节数；跨平台代码里 `long` 是最容易埋雷的类型。

**学完能做到**
- 写代码：用 `<cstdint>` 的定宽类型写序列化/协议字段，并用 `static_assert` 锁定假设。
- 讲出来：说清 LP64 与 LLP64 的差异，以及有符号溢出的 UB。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `int` 就是 4 字节、`long` 就是 8 字节 | 标准只保证最小范围和相对大小；Windows（LLP64）的 `long` 是 4 字节，Linux/macOS（LP64）才是 8 字节 |
| 无符号溢出也是未定义行为 | 无符号按 \(2^N\) 回绕，行为有定义；有符号溢出才是 UB |
| `uint8_t` 相加会在 8 位回绕 | 小整型先提升到 `int` 再运算，`uint8_t(250)+uint8_t(10)` 得到 `int` 260，赋回 `uint8_t` 才截断 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 标准只规定最小范围和相对大小：`short <= int <= long <= long long` | 不能假设 `int` 一定是 4 字节、`long` 一定是 8 字节 |
| 常见数据模型：Linux/macOS 是 LP64（`long` 8 字节），Windows 是 LLP64（`long` 4 字节） | 同一份代码在 Windows 与 Linux 上 `sizeof(long)` 不同，协议/文件格式会错位 |
| 有符号整数溢出是 UB；无符号按 \(2^N\) 回绕 | 有符号溢出可能被优化成任意行为；无符号回绕可用于哈希但要注意逻辑 |
| 小整型参与运算先做整型提升到 `int` | `uint8_t + uint8_t` 实际按 `int` 计算，赋值回去才截断 |

**设计动机**：C 的整型宽度故意留给实现，是为了让每个平台挑最自然的字长（寄存器宽度、指针宽度），代价是同一份源码在不同 ABI 上宽度不同。`<cstdint>` 的定宽类型是对“需要精确宽度”的场景（协议、文件格式、序列化、哈希）的补救：当你要的是“恰好 32 位”而不是“至少 32 位”时，用带明确宽度的名字，并用 `static_assert` 守住假设。把有符号溢出定为 UB，则是为了让编译器能假设“加法不回绕”，从而做更激进的优化。

**版本差异**：`<cstdint>` 的定宽整型自 C++11 起进入标准（C99 已有同名头），C++98 只能靠 `<limits>` 和平台宏判断宽度；LP64 与 LLP64 的差异由平台 ABI 决定，与标准版本无关。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 明确 32 位/64 位字段 | `std::int32_t`、`std::uint64_t`（`<cstdint>`） |
| 表达大小/下标 | `std::size_t`，打印用 `%zu` |
| 表达“至少 64 位” | `std::int_least64_t` 或 `long long`（标准保证至少 64 位） |
| 编译期锁定假设 | `static_assert(sizeof(std::int32_t) == 4);` |

```cpp
#include <cstdint>
#include <limits>

static_assert(sizeof(std::int32_t) == 4);
static_assert(std::numeric_limits<std::uint32_t>::max() == 4294967295u);

int main() {
    std::uint8_t a = 250, b = 10;
    int sum = a + b;        // 提升为 int，260
    std::uint8_t c = static_cast<std::uint8_t>(a + b); // 260 % 256 = 4
    (void)sum; (void)c;
}
```

出处：整型范围与提升规则见 ISO C++ 标准 [basic.fundamental]、[conv.prom]；定宽类型见 `<cstdint>`；可对照 cppreference（https://en.cppreference.com/w/cpp/language/types）。

**可观察验证**

```cpp
#include <cstdint>
#include <cstdio>
#include <limits>
#include <type_traits>

static_assert(sizeof(std::int32_t) == 4);
static_assert(sizeof(std::uint64_t) == 8);
static_assert(std::is_signed_v<std::int32_t>);

int main() {
    std::printf("int=%zu long=%zu long long=%zu ptr=%zu\n",
                sizeof(int), sizeof(long), sizeof(long long), sizeof(void*));

    std::uint8_t a = 250;
    std::printf("a+10=%d, as uint8=%u\n", a + 10,
                static_cast<std::uint8_t>(a + 10));   // 260, 4
}
```

- 同一份程序在 Windows/MSVC 与 Linux/GCC 上各跑一次，`long` 那一项打印 4 与 8：LLP64 与 LP64 的差别就落在这一处，而 `static_assert(sizeof(std::int32_t) == 4)` 两平台都成立。
- `a+10` 打印 260 而不是 4，证明整型提升发生在 `int` 上；赋回 `uint8_t` 才截断。
- 用 `-fsanitize=undefined` 跑 `int x = INT_MAX; x += 1;`，UBSan 报 `signed integer overflow`；无符号版本不报——UB 与有定义回绕的分界由此可测。

### ③ 面试怎么讲

**30 秒口述稿**

> 标准只保证 `short <= int <= long <= long long` 和最小位宽，不保证具体字节数。实际平台常见两种模型：Linux/macOS 是 LP64，`long` 是 8 字节；Windows 是 LLP64，`long` 还是 4 字节，只有 `long long` 是 8 字节。所以跨平台协议要用 `<cstdint>` 的定宽类型。另一个点是溢出：有符号溢出是 UB，无符号才是按 \(2^N\) 回绕；小整型运算还会先提升到 `int`。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `int` 一定 4 字节吗？ | 不一定，标准只保证至少 16 位；主流平台是 4 字节。 |
| 为什么 `long` 在 Windows 是 4 字节？ | Windows 采用 LLP64 模型，保持与 32 位 ABI 兼容。 |
| 无符号溢出安全吗？ | 回绕有定义，但业务逻辑上仍可能是 bug；有符号溢出才是 UB。 |
| `size_t` 是什么？ | 无符号的 `sizeof` 结果类型，通常 64 位；打印用 `%zu`。 |

### ④ 真实坑

1. **跨平台结构体对齐错位**：用 `long` 写文件头，Windows 写 4 字节、Linux 读 8 字节，后续字段全部错位。
2. **有符号/无符号比较**：`for (int i = 0; i < v.size(); ++i)` 触发 `-Wsign-compare`，`size()` 超过 `INT_MAX` 时逻辑错误。
3. **有符号溢出 UB**：`int x = INT_MAX; x + 1;` 编译器可能假设不会溢出并优化掉检查。
4. **格式化字符串不匹配**：`printf("%d", size_t_value)` 是 UB，应用 `%zu`。

### ⑤ 练习

**A 写**：定义 `struct Header { std::uint32_t magic; std::uint16_t version; std::uint16_t flags; std::uint64_t length; };`，用 `static_assert` 锁定各字段大小，并打印 `sizeof(Header)`；再写一个 `long` 版本对比 Windows/Linux 差异（可用 `#ifdef _WIN32` 说明）。

**提示**：① 每个字段用 `static_assert(sizeof(...) == N)` 锁定，比口算可靠；② 打印 `sizeof(Header)` 与字段之和对比，才能看到对齐填充；③ 有符号溢出测试必须开 `-fsanitize=undefined`，否则优化器可能把检查整个删掉，看起来“没出问题”。

验收标准：定宽版本字段大小全部符合预期；能解释结构体总大小为何可能大于字段之和（对齐）；能说出一个跨平台 `long` 的 bug 场景。

**B 讲**：2 分钟讲“整型宽度与溢出的面试要点”。必须覆盖 LP64/LLP64、有符号溢出 UB、无符号回绕、整型提升。

验收标准：不看稿；能画出两种数据模型的字段宽度表；能解释 `uint8_t` 相加为什么不会在 8 位回绕。

> ↑ 返回[目录](#toc)

---

<a id="unit-10"></a>
## D1 · 单元 10 常量指针与指针常量

> 来源：题库第 23 题 ｜ 速背卡：[23](./速背.md#cpp-23) ｜ 自测：[sel-3 · 第 23 题](./自测.md#sel-3) ｜ 耗时 10 min ｜ 难度 ★★☆

**一句话**：`const` 修饰它左边的东西；左边没有类型就修饰右边，于是 `const int*` 和 `int* const` 锁住的根本不是同一个东西。

**学完能做到**
- 写代码：正确声明“指向常量的指针”“常量指针”“两者都 const”三种类型。
- 讲出来：说清顶层 `const` 与底层 `const`，以及它们在重载中的差异。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `const int*` 和 `int const*` 是不同的类型 | 两者完全等价，`const` 修饰的是 `int`，都表示“指向常量的指针” |
| `typedef int* P; const P p;` 锁住的是数据 | `const` 修饰 typedef 出来的指针类型本身，等价 `int* const`，锁的是指向 |
| `f(int*)` 和 `f(int* const)` 是两个重载 | 顶层 `const` 不参与重载决议，两者签名相同，编译报重复定义 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `const int* p`：指向常量的指针，锁 `*p`，不锁 `p` | 不能通过 `p` 改数据，但可以让 `p` 指向别处；常用于只读接口 |
| `int* const p`：常量指针，锁 `p`，不锁 `*p` | 指针本身不能改指向，但可以通过它修改数据；常用于固定缓冲区 |
| `const int* const p`：两者都锁 | 既不能改指向也不能改数据 |
| 顶层 `const` 不参与重载，底层 `const` 参与 | `f(int*)` 与 `f(const int*)` 可重载；`f(int*)` 与 `f(int* const)` 不可 |

**设计动机**：`const` 的位置歧义来自 C 的声明符语法——“`const` 修饰它左边的东西”这条规则允许限定符贴在类型旁边，也允许放在 `*` 之后，于是同一个 `const` 既能锁数据也能锁指针。语言保留这套语法是为了同时表达“只读数据 + 固定指向”的组合，代价是可读性差，工程上的对策是用 `using` 起别名、把锁的对象写进名字。顶层/底层 `const` 的区分则是为了在不改变调用语义的前提下支持“值不变”的实现约定：调用方看不出区别，所以顶层 `const` 不进签名。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 只读访问一块数据 | `const T* p` |
| 固定指向某个对象 | `T* const p = &obj;` |
| 只读且固定指向 | `const T* const p = &obj;` |
| 避免 typedef 陷阱 | 用 `using` + 明确 `const` 位置，或直接写完整类型 |

```cpp
int main() {
    int x = 1, y = 2;
    const int* p1 = &x;        // *p1 只读
    int* const p2 = &x;        // p2 只读
    const int* const p3 = &x;  // 都只读

    p1 = &y;      // 对
    // *p1 = 3;   // 错
    *p2 = 3;      // 对
    // p2 = &y;   // 错
    (void)p3;
}
```

出处：`const` 限定与顶层/底层 `const` 见 ISO C++ 标准 [dcl.const]、[conv.qual]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/cv）。

**可观察验证**

```cpp
#include <cstdio>
#include <type_traits>

int main() {
    int x = 1, y = 2;
    const int* p1 = &x;        // *p1 只读
    int* const p2 = &x;        // p2 只读

    p1 = &y;                   // 对：可以改指向
    *p2 = 3;                   // 对：可以改数据
    // *p1 = 3;                // 错：读只读对象
    // p2 = &y;                // 错：读只读变量

    static_assert(std::is_same_v<decltype(p1), const int*>);
    static_assert(std::is_same_v<decltype(p2), int* const>);
    std::printf("p1==&y: %d, x=%d\n", p1 == &y, x);
}
```

- 逐行取消注释再编译，能区分两类错误信息：“读只读对象”（底层 `const`）与“读只读变量”（顶层 `const`）。
- `decltype(p2)` 带着顶层 `const`，但按值传给 `template<class T> void f(T)` 时 `T` 推成 `int*`——顶层 `const` 在按值传参时被丢掉，这正是不进重载的原因。

### ③ 面试怎么讲

**30 秒口述稿**

> 记法就一句：`const` 修饰它左边的东西，左边没有类型就修饰右边。`const int*` 是“指向常量的指针”，不能改 `*p`，但可以改 `p`；`int* const` 是“常量指针”，不能改 `p`，但可以改 `*p`；两个都写就是都不能改。重载上看，顶层 `const` 不参与，底层 `const` 参与，所以 `f(int*)` 和 `f(const int*)` 可以重载，但 `f(int*)` 和 `f(int* const)` 不行。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `typedef int* P; const P p;` 是什么？ | `P` 是 `int*`，`const P` 是 `int* const`，即常量指针，不是指向常量的指针。 |
| 函数参数里的 `const` 有用吗？ | 对按值参数，顶层 `const` 只影响函数体，不影响签名；对指针/引用参数才有接口意义。 |
| 能把 `const int*` 传给 `int*` 吗？ | 不能，需要 `const_cast`，并且必须确保不写；否则 UB。 |
| 多级指针的 `const` 能随便转吗？ | 不能，`int**` 不能隐式转 `const int**`，否则可以通过它写入 const 对象。 |

### ④ 真实坑

1. **typedef 陷阱**：`typedef int* P; const P p = &x;` 以为锁了数据，实际锁的是指针。
2. **const_cast 后写入**：对真正 const 的对象 `const_cast` 去写是 UB，即使编译通过。
3. **多级指针转换**：把 `int**` 强转 `const int**` 会绕过 const 保护，标准禁止隐式转换。
4. **重载误判**：以为 `f(int*)` 和 `f(int* const)` 能重载，实际签名相同，编译报重复定义。

### ⑤ 练习

**A 写**：声明 `int x`、`int y`，分别写 `const int* p1`、`int* const p2`、`const int* const p3`，逐一尝试修改 `p` 和 `*p`，把编译错误注释保留并标注原因。

**提示**：① 写声明时从名字往左读，先找 `*` 再找 `const`，用一句话说出“锁谁”再写代码；② typedef 陷阱换成 `using P = int*; const P` 再试，规则一样，说明问题在顶层 `const` 而非 `typedef`；③ 重载测试要写两个函数定义而不是声明，才能真正触发重复定义错误。

验收标准：三种声明的可修改性完全正确；能解释每个编译错误；能写出 `typedef` 陷阱的等价代码。

**B 讲**：90 秒讲“常量指针与指针常量的区别”。必须包含记忆口诀、顶层/底层 const、重载规则。

验收标准：不看稿；能现场写出三种声明；能解释 `const P` 的陷阱。

> ↑ 返回[目录](#toc)

---

<a id="unit-11"></a>
## D1 · 单元 11 函数指针

> 来源：题库第 24 题 ｜ 速背卡：[24](./速背.md#cpp-24) ｜ 自测：[sel-3 · 第 24 题](./自测.md#sel-3) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：函数指针把“调用哪个函数”变成运行期数据，代价是签名必须精确匹配，否则就是 UB。

**学完能做到**
- 写代码：用函数指针实现回调表和 `qsort` 比较器，并用 `using` 简化声明。
- 讲出来：说清函数名退化、签名匹配、与 `std::function` 的取舍。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 函数指针不能指向 lambda | 无捕获 lambda 可隐式转成函数指针；有捕获的不能，因为要携带状态 |
| 函数指针必须写 `&f`，写 `f` 是错的 | 函数名在表达式里退化为指针，`f` 与 `&f` 等价 |
| 函数指针“零成本”，和直接调用一样快 | 通过指针的调用是间接调用（否则无法改指向），通常无法内联，热路径上频繁回调有开销 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 函数指针类型是 `返回类型 (*)(参数列表)` | 声明语法绕，建议用 `using Fn = int(*)(int,int);` |
| 函数名在表达式中退化为函数指针，`f` 与 `&f` 等价 | 传回调时写函数名即可 |
| 调用通过指针间接跳转，通常无法内联 | 热路径上大量回调可能有开销；模板/`std::function` 各有取舍 |
| 成员函数指针类型含类名，调用需要对象 | 普通函数指针不能指向成员函数 |

**设计动机**：C++ 继承 C 的“函数地址即值”模型，让调用目标在运行期决定（`qsort` 比较器、`pthread_create`、事件表），这是动态分派最轻的实现：只存一个地址，没有虚表、没有类型擦除。代价是签名必须精确匹配、不能携带状态——一旦需要捕获上下文，就得多存一份数据指针，这正是 `std::function` 和模板回调存在的原因。把“函数名退化为指针”写进语言，是为了让传回调像传变量一样自然，不用到处写 `&`。

**版本差异**：无捕获 lambda 到函数指针的隐式转换与 `std::function` 都是 C++11 引入，C++98 只能用具名函数或静态成员函数凑回调；函数指针本身的声明与调用语义两版一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 声明函数指针 | `using Cmp = int(*)(const void*, const void*);` |
| 回调表 | `std::array<Handler, N>`，`Handler` 是函数指针别名 |
| C 接口回调 | 直接把函数名传给 `qsort`、`pthread_create` |
| 需要捕获状态 | 用 `std::function` 或模板，而不是函数指针 |

```cpp
#include <cstdlib>

int cmpInt(const void* a, const void* b) {
    int lhs = *static_cast<const int*>(a);
    int rhs = *static_cast<const int*>(b);
    return (lhs > rhs) - (lhs < rhs);   // 避免减法溢出
}

int add(int a, int b) { return a + b; }

int main() {
    int (*fp)(int, int) = &add;
    int r = fp(1, 2);

    int arr[3] = {3, 1, 2};
    std::qsort(arr, 3, sizeof(int), cmpInt);
    (void)r;
}
```

出处：函数指针声明见 ISO C++ 标准 [dcl.fct]；`qsort` 的比较器签名见 `<cstdlib>`；可对照 cppreference（https://en.cppreference.com/w/cpp/language/pointer#Pointers_to_functions）。

**可观察验证**

```cpp
#include <cstdio>
#include <type_traits>

int add(int a, int b) { return a + b; }

int main() {
    int (*fp)(int, int) = add;          // 函数名直接退化

    static_assert(std::is_same_v<decltype(fp), int (*)(int, int)>);
    static_assert(std::is_same_v<decltype(&add), int (*)(int, int)>);
    static_assert(std::is_same_v<std::decay_t<decltype(add)>, int (*)(int, int)>);  // add 本身是函数类型

    int captured = 1;
    auto withCapture = [captured](int a) { return a + captured; };
    auto noCapture = [](int a, int b) { return a + b; };

    int (*lfp)(int, int) = noCapture;   // 可以：无捕获
    // int (*bad)(int) = withCapture;   // 不行：有捕获，报 cannot convert
    std::printf("%d %d\n", fp(1, 2), lfp(1, 2));
}
```

- 三个 `static_assert` 说明 `&add`、`add`（退化后）与 `fp` 都是 `int(*)(int,int)`，而 `decltype(add)` 本身是函数类型，要 `std::decay_t` 才变成指针。
- 取消 `bad` 那行注释会报 `cannot convert`；把捕获去掉就能过——捕获 lambda 不能转函数指针的边界在编译期就定死了。
- 用 `objdump -d` 看调用点：直接 `add(1,2)` 编成 `call add` 或被内联，`fp(1,2)` 编成寄存器间接调用——这是“无法内联”的可观测证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 函数指针就是指向函数的指针，类型由返回值和参数列表共同决定，写法是 `返回类型 (*)(参数)`。函数名在表达式里会退化成函数指针，所以传回调直接写函数名。它适合 C 接口回调、跳转表和策略表；缺点是不能捕获状态，而且签名必须完全匹配，强转后调用是 UB。需要捕获状态时用 `std::function` 或模板。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `f` 和 `&f` 有区别吗？ | 作为值使用时等价，都会得到函数指针；`&f` 更明确。 |
| 函数指针能指向 lambda 吗？ | 无捕获 lambda 可以隐式转换；有捕获的不能。 |
| 函数指针和 `std::function` 怎么选？ | 签名固定、无状态、热路径用函数指针；需要捕获/多态用 `std::function`，接受类型擦除开销。 |
| 成员函数指针怎么调用？ | `(obj.*pmf)(args)` 或 `(ptr->*pmf)(args)`，类型里要带类名。 |

### ④ 真实坑

1. **签名不匹配**：把 `int(*)(int)` 强转成 `int(*)(double)` 再调用，参数传递方式不同，UB。
2. **捕获 lambda 赋给函数指针**：编译失败；需要 `std::function` 或改为无捕获。
3. **成员函数指针混用**：把 `&Class::method` 赋给普通函数指针，编译失败；两者 ABI 不同。
4. **`qsort` 比较器减法溢出**：`return *a - *b;` 在极值下溢出，应改成三态比较。

### ⑤ 练习

**A 写**：实现四个函数 `add/sub/mul/div`，用 `using BinOp = int(*)(int,int);` 建立 `std::array<BinOp,4>` 跳转表，根据下标调用；再用函数指针实现 `qsort` 的 `int` 比较器。

**提示**：① 先写 `using BinOp = int(*)(int,int);` 再声明数组，跳转表一行就能看懂；② 比较器用 `(lhs > rhs) - (lhs < rhs)` 三态写法，用 `INT_MIN/INT_MAX` 测一遍；③ 传回调时函数名可以直接写，但显式 `&` 能避免和“调用”混淆。

验收标准：跳转表四个结果正确；`qsort` 后数组有序；比较器使用三态写法，极值测试不溢出；无编译警告。

**B 讲**：2 分钟讲“函数指针的声明、使用与替代方案”。必须覆盖声明语法、函数名退化、签名匹配、`std::function` 取舍。

验收标准：能现场写出 `using` 别名和数组声明；能解释为什么捕获 lambda 不能转函数指针；能说出一个签名不匹配的 UB 场景。

> ↑ 返回[目录](#toc)

---

<a id="unit-12"></a>
## D1 · 单元 12 函数指针与指针函数

> 来源：题库第 25 题 ｜ 速背卡：[25](./速背.md#cpp-25) ｜ 自测：[sel-3 · 第 25 题](./自测.md#sel-3) ｜ 耗时 8 min ｜ 难度 ★☆☆

**一句话**：函数指针是“指向函数的指针”，指针函数是“返回指针的函数”；名字顺序不同，本质一个是变量、一个是函数。

**学完能做到**
- 写代码：正确写出 `int* f(int)` 与 `int (*f)(int)`，并解释声明读法。
- 讲出来：说清“右左法则”和返回指针的生命周期要求。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| “函数指针”和“指针函数”是同一个东西的两种叫法 | 一个是变量（指向函数），一个是函数（返回指针）；`int (*f)(int)` 与 `int* f(int)` 完全不同 |
| 返回指针的函数一定返回堆内存，需要调用方 `delete` | 也可以返回传入对象或静态对象地址，关键是生命周期由谁保证，不是由返回类型决定 |
| 函数指针数组里可以放任意函数 | 元素是固定签名，所有元素必须同返回类型同参数列表；混签名只能强转，调用即 UB |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 指针函数：返回类型是指针的函数，如 `int* f(int)` | 调用得到指针，必须保证指向对象仍然存活 |
| 函数指针：指向函数的指针变量，如 `int (*f)(int)` | 可以改指向、做回调、放进数组 |
| 读法：从标识符出发，先向右看，再向左看 | `int (*f)(int)` 读作“f 是指针，指向接收 int 返回 int 的函数” |
| 函数指针数组：`int (*arr[3])(int)` | 常用于命令表/状态机，声明容易写错 |

**设计动机**：这两个概念容易混，是因为 C 的声明符语法把“函数”和“指针”的组合都塞进同一行：`int (*f)(int)` 与 `int* f(int)` 只差括号位置，却分别是变量声明和函数声明。语言保留这套语法，是为了让函数指针能出现在任何变量的位置（数组元素、结构体成员、参数），代价是声明难读。工程上的对策是先用 `using` 起别名再声明变量；返回指针的函数则必须显式写明生命周期契约，因为类型系统不区分“指向堆”“指向调用方对象”“指向静态区”。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 函数返回动态分配的对象 | `std::unique_ptr<T> make();`，比裸指针函数更安全 |
| 函数返回调用方对象的指针 | `T* find(T* begin, T* end);`，需文档说明生命周期 |
| 保存多个函数 | `using Fn = void(*)(); std::array<Fn,3> table;` |
| 声明复杂类型 | 先 `using`，再声明变量，避免“右左法则”出错 |

```cpp
int* identity(int* p) { return p; }        // 指针函数
int (*pick)(int) = nullptr;                // 函数指针
int (*table[2])(int) = {nullptr, nullptr}; // 函数指针数组

int main() {
    int x = 1;
    int* q = identity(&x);
    (void)q; (void)pick; (void)table;
}
```

出处：声明符语法见 ISO C++ 标准 [dcl.decl]、[dcl.fct]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/declarations）。

**可观察验证**

```cpp
#include <cstdio>
#include <type_traits>

int  add(int a, int b) { return a + b; }
int* identity(int* p) { return p; }

int (*pick)(int, int) = add;                  // 函数指针变量
using Fn = int (*)(int, int);
static_assert(std::is_same_v<decltype(pick), Fn>);                   // 别名只是语法糖
static_assert(std::is_same_v<decltype(&identity), int* (*)(int*)>);  // 指针函数：返回值是指针

int main() {
    int x = 7;
    int* q = identity(&x);
    std::printf("%d %d %d\n", pick(1, 2), (*pick)(2, 3), *q);
}
```

- 两个 `static_assert` 说明：`pick` 的类型里“指向函数”这一层在 `Fn`，而 `&identity` 的类型多一层“返回 `int*`”——括号的位置直接决定类型。
- `(*pick)` 与 `pick` 调用结果相同，因为函数指针会自动解引用：这也是“函数指针本身是变量”的证据（运行期还能改成别的同签名函数）。

### ③ 面试怎么讲

**30 秒口述稿**

> 这两个词顺序不同，本质也不同：指针函数是一个函数，返回值是指针，比如 `int* f(int)`；函数指针是一个指针变量，指向函数，比如 `int (*f)(int)`。读声明可以从名字出发，先右后左：`int (*f)(int)` 就是 f 先和 `*` 结合，说明是指针，再向右看到参数列表，说明指向函数。返回指针时必须保证指向对象活得够久，返回局部数组的指针就是悬垂。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `int* f(int)` 和 `int (*f)(int)` 怎么快速区分？ | 看 `*` 和名字是否被括号包住；包住的是函数指针，没包住的是返回指针的函数。 |
| 返回指针的函数怎么设计最安全？ | 返回 `std::unique_ptr`/`std::shared_ptr`，或返回指向调用方传入对象的指针。 |
| 函数指针数组怎么读？ | `int (*arr[3])(int)`：arr 是数组，元素是函数指针。 |
| 返回函数指针的函数怎么写？ | `int (*get())(int);`，建议用 `using Fn = int(*)(int); Fn get();`。 |

### ④ 真实坑

1. **返回局部数组指针**：`int* f() { int a[3]; return a; }` 返回栈内存，调用即悬垂。
2. **声明看错**：把 `int* f(int)` 当成函数指针，调用方式写错。
3. **函数指针数组越界**：命令表下标未校验，跳到非法地址。
4. **返回函数指针的声明写错**：`int (*get())(int)` 少一层括号就变成别的类型。

### ⑤ 练习

**A 写**：写 `int* maxPtr(int& a, int& b)` 返回较大者的地址；写 `int (*choose(bool))(int,int)` 返回 `add` 或 `sub` 的函数指针；在 `main` 中调用并打印结果。

**提示**：① 先把两个声明写成 `using` 别名再声明变量，哪个是变量一目了然；② 返回指针时在注释里写明生命周期契约（谁负责释放、调用方保证存活），面试时就是加分项；③ 函数指针数组的声明先在纸上写出元素别名再套数组括号，避免少一层括号。

验收标准：`maxPtr` 返回的指针可安全解引用；`choose` 的声明能通过编译并被正确调用；能口述两个声明的读法；不返回局部变量地址。

**B 讲**：90 秒讲“函数指针与指针函数的区别”。必须包含定义差异、声明读法、生命周期风险。

验收标准：不看稿；能现场写出两个声明；能说出“返回局部数组指针”的反例。

> ↑ 返回[目录](#toc)

---

<a id="unit-13"></a>
## D1 · 单元 13 静态局部变量、全局变量、局部变量

> 来源：题库第 26 题 ｜ 速背卡：[26](./速背.md#cpp-26) ｜ 自测：[sel-3 · 第 26 题](./自测.md#sel-3) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：变量要按“存储期、链接、作用域”三个维度看；`static` 在不同位置改的是不同维度，混着记一定出错。

**学完能做到**
- 写代码：用函数内 `static` 实现线程安全的懒初始化单例，并解释为什么不用全局变量。
- 讲出来：说清静态存储期、内部/外部链接、初始化顺序问题。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `static` 的含义在所有位置都一样 | 在局部变量处改存储期（静态但作用域不变），在文件作用域处改链接（内部链接），语义不同 |
| 函数内 `static` 初始化线程安全，所以访问也线程安全 | C++11 只保证“首次初始化”过程线程安全（magic statics），之后的读写仍是普通数据竞争 |
| 头文件里写 `static int g = 0;` 就能让所有 TU 共享这个变量 | 那会给每个 TU 一份独立副本（内部链接）；共享要用 `extern` 声明 + 单处定义，或 C++17 `inline` 变量 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 三个维度：存储期（自动/静态/动态）、链接（外部/内部/无）、作用域（块/文件/命名空间） | 只记“static 是静态”会把局部、全局、函数的 static 混为一谈 |
| `static` 局部变量：静态存储期，首次执行初始化一次；C++11 起初始化线程安全 | 可以做懒初始化单例/缓存，但后续访问仍需自己保证线程安全 |
| 文件作用域的 `static`：内部链接，仅当前翻译单元可见 | 避免符号冲突，但也妨碍跨 TU 使用和测试 |
| 普通全局变量：外部链接，跨 TU 可见；多个 TU 定义同一变量违反 ODR | 头文件里定义非 `inline` 全局变量会导致多重定义 |

**设计动机**：变量的行为由三个正交维度决定——存储期、链接、作用域，而 `static` 这个关键字正好横跨前两个，位置不同含义就不同。C 当初引入它，一为“跨函数保持状态”，二为“文件内私有”，两件事共用一个词是历史包袱。这套规则真正的工程价值在初始化顺序：跨 TU 的全局对象构造顺序未定义，用函数内 `static` 把构造推迟到首次使用，就绕开了“静态初始化顺序灾难”，而 C++11 把这次初始化做成线程安全的，等于顺手解决了并发下的重复构造。

**版本差异**：函数内 `static` 初始化的线程安全（magic statics）是 C++11 起保证，C++98 没有这个承诺；C++17 起可以用 `inline` 变量在头文件里定义并保持 ODR 合法。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 函数内只初始化一次的缓存/单例 | `static T instance;`（C++11 起线程安全） |
| 仅本文件可见的全局 | 匿名命名空间或 `static` |
| 跨 TU 共享且避免 ODR | C++17 `inline` 变量，或在一个 `.cpp` 定义、头文件 `extern` 声明 |
| 避免静态初始化顺序问题 | 用函数内 `static` 替代跨 TU 全局对象 |

```cpp
struct Config { int value; };

Config& config() {
    static Config c{42};   // C++11 起首次调用线程安全
    return c;
}

namespace {
int fileLocal = 0;         // 内部链接，仅本 TU 可见
}
```

出处：存储期与链接见 ISO C++ 标准 [basic.stc]、[basic.link]；函数内静态变量初始化线程安全见 [stmt.dcl]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/storage_duration）。

**可观察验证**

```cpp
#include <cstdio>

struct Probe {
    Probe()  { std::puts("construct"); }
    ~Probe() { std::puts("destruct"); }
};

Probe& probe() { static Probe p; return p; }   // 首次调用才构造

int main() {
    std::puts("before first call");
    probe(); probe();
    std::puts("after calls");
}
```

```plaintext
g++ -std=c++17 -Wall -Wextra u13.cpp -o u13 && ./u13
# before first call → construct → after calls → destruct
```

- 输出顺序说明构造被推迟到首次 `probe()`，析构在 `main` 返回后按构造逆序发生——这就是“静态存储期 + 块作用域”的组合效果。
- 在 `probe()` 之前塞一个跨 TU 的全局 `Probe g;` 并在两个 TU 里互相引用：链接顺序一变输出顺序就变，`construct` 可能出现在 `before first call` 之前——静态初始化顺序问题的可观测形态。
- 用 `nm two.o | grep -i filelocal` 看符号大小写（局部符号小写、外部符号大写），能验证文件作用域 `static` 改的是链接而不是存储期。

### ③ 面试怎么讲

**30 秒口述稿**

> 我一般从三个维度看变量：存储期、链接和作用域。局部变量是自动存储期，离开作用域就销毁；全局变量是静态存储期、外部链接，跨文件可见；`static` 局部变量也是静态存储期，但作用域仍在函数内，而且 C++11 起首次初始化是线程安全的。文件作用域的 `static` 改的是链接，让它只在当前翻译单元可见。工程上跨 TU 的全局对象有初始化顺序问题，常用函数内 `static` 规避。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `static` 局部变量什么时候构造/析构？ | 首次执行到声明时构造；程序退出时按构造逆序析构。 |
| C++11 的线程安全指什么？ | 指首次初始化过程线程安全（magic statics），后续读写不自动加锁。 |
| 全局变量初始化顺序问题是什么？ | 不同 TU 的全局对象初始化顺序未定义，A 的构造可能读到 B 的未初始化状态。 |
| 头文件里能定义全局变量吗？ | 不能直接定义非 `inline` 变量；用 `extern` 声明 + 单个 `.cpp` 定义，或 C++17 `inline` 变量。 |

### ④ 真实坑

1. **跨 TU 初始化顺序**：`A` 的构造函数使用 `B` 的全局对象，而 `B` 还没构造，读到零值或未定义状态。
2. **退出阶段使用已析构对象**：静态局部析构顺序与构造相反，另一个静态对象的析构函数访问它可能悬垂。
3. **头文件定义全局变量**：多个 `.cpp` 包含该头文件，链接期报 multiple definition。
4. **把初始化安全当访问安全**：`static` 局部初始化线程安全，但之后多个线程读写同一个非原子变量仍有数据竞争。

### ⑤ 练习

**A 写**：实现 `Config& config()` 的函数内 `static` 单例；再写一个 `Counter` 类，用 `static` 局部变量统计 `create()` 调用次数；另建两个 `.cpp` 分别定义同名 `static` 全局变量，验证不会链接冲突。

**提示**：① 压初始化竞争要用 `std::thread` 加屏障让多线程同时进入函数，否则单线程测不出问题；② 计数器用 `std::atomic<int>`，否则 TSan 直接报数据竞争、结论被掩盖；③ 验证内部链接用 `nm` 看符号类型，比“链接没报错”更有说服力。

验收标准：单例只构造一次；计数器在多线程（4 线程各 1000 次）下结果正确（需要原子或锁）；两个 TU 的 `static` 变量互不影响；能解释为什么全局版本会冲突。

**B 讲**：2 分钟讲“static 在局部、全局、函数三个位置的语义”。必须覆盖存储期、链接、作用域，以及初始化顺序问题。

验收标准：不看稿；三维度表格能口述；能说出一个静态初始化顺序的 bug 场景。

> ↑ 返回[目录](#toc)

---

> 下一篇：[语言基础 ②：关键字、转换与命名空间](#ch2)

---


<a id="ch2"></a>
# 第 2 章 · 语言基础 ②：关键字、转换与命名空间

> 对应题库第 5、6、7、8、9、12、13、14、15、16、19、20、46 题。
> 上一篇：[语言基础 ①：类型、值与参数传递](#ch1) ｜ 返回 [速背卡片](./速背.md)。

---

<a id="unit-14"></a>
## D2 · 单元 14 `std::move` 的作用与实现原理

> 来源：题库第 5 题 ｜ 速背卡：[5](./速背.md#cpp-05) ｜ 自测：[sel-1 · 第 5 题](./自测.md#sel-1) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：`std::move` 只是一次到右值引用的无条件类型转换，真正搬资源的是移动构造；而移动构造有没有 `noexcept`，决定了容器扩容时到底搬还是拷。

**学完能做到**
- 写代码：写出 `noexcept` 与非 `noexcept` 的移动构造，用计数器验证 `vector` 扩容时一个走移动、一个走拷贝。
- 讲出来：说清 `std::move` 的等价实现、`move_if_noexcept` 的触发条件，以及它和 `std::forward` 的分工。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `std::move` 会把对象搬走 | 它只做一次到右值引用的类型转换，真正搬资源的是移动构造/移动赋值 |
| 移动构造天然就是 `noexcept` | 手写的移动构造默认可能抛，必须显式写 `noexcept` 才会被容器优先选用 |
| 被移动后的对象已经不能碰 | 对象仍处于“有效但未指定”状态，可以析构、赋值，只是不能依赖它的值 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `std::move(x)` 等价于 `static_cast<std::remove_reference_t<T>&&>(x)`，只改值类别 | 它不搬内存、不置空源对象；搬不搬取决于目标类型有没有移动构造 |
| 移动构造的 `noexcept` 不是自动的，手写函数体默认“可能抛” | `std::vector` 扩容使用 `move_if_noexcept`：移动可能抛且可拷贝时，宁可选拷贝来保住强异常安全 |
| `std::forward<T>(x)` 必须显式写模板实参，按原始值类别转发 | `move` 用于“我确定要搬走”，`forward` 用于转发引用里“原样传下去” |
| 被移动的对象进入“有效但未指定”状态 | 标准只保证可析构、可赋值，读它的内容属于不可依赖行为 |

**设计动机**：移动语义把“资源转移”和“值复制”分开：复制要保证源对象仍然可用，移动则允许把源对象掏空，所以 `std::move` 只负责把对象标记成“可以搬”，真正怎么搬交给类型自己的移动构造。容器扩容又要求强异常安全——搬到一半抛异常时旧元素必须原样保留——于是标准用 `move_if_noexcept` 在“移动可能抛且可拷贝”时退回拷贝；`noexcept` 因此从注释级的优化提示变成了影响行为选择的契约。

**版本差异**：移动语义、`std::move` 与 `std::move_if_noexcept` 都是 C++11 引入；C++20 只补了范围版移动算法（`std::ranges::move`），`std::move` 的语义没有变化。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 把资源从源对象转移走 | 移动构造内部接管指针，并把源指针置 `nullptr`、长度置 0 |
| 让容器扩容优先移动 | 移动构造/移动赋值声明 `noexcept` |
| 函数模板原样转发参数 | `template<class T> void relay(T&& x) { sink(std::forward<T>(x)); }` |
| 只在确定不再使用源对象时搬移 | 调用处写 `std::move(obj)`，随后不再读 `obj` |

```cpp
#include <iostream>
#include <utility>
#include <vector>

struct NoThrow {
    NoThrow() = default;
    NoThrow(const NoThrow&) { std::cout << "copy\n"; }
    NoThrow(NoThrow&&) noexcept { std::cout << "move\n"; }   // 承诺不抛
    NoThrow& operator=(const NoThrow&) = default;
    NoThrow& operator=(NoThrow&&) = default;
};

struct MayThrow {
    MayThrow() = default;
    MayThrow(const MayThrow&) { std::cout << "copy\n"; }
    MayThrow(MayThrow&&) { std::cout << "move\n"; }          // 未标 noexcept
    MayThrow& operator=(const MayThrow&) = default;
    MayThrow& operator=(MayThrow&&) = default;
};

template <class T>
void grow() {
    std::vector<T> v;
    v.reserve(1);
    v.emplace_back();
    v.emplace_back();       // 触发扩容：已有元素怎么搬由 move_if_noexcept 决定
}

void sink(int&) { std::cout << "lvalue\n"; }
void sink(int&&) { std::cout << "rvalue\n"; }

template <class T>
void relay(T&& x) { sink(std::forward<T>(x)); }   // 保持调用方的值类别

int main() {
    grow<NoThrow>();        // 输出 move
    grow<MayThrow>();       // 输出 copy：移动可能抛，vector 退回拷贝
    int i = 0;
    relay(i);               // lvalue
    relay(1);               // rvalue
}
```

出处：`std::move`/`std::forward` 的等价实现见 cppreference（https://en.cppreference.com/w/cpp/utility/move、https://en.cppreference.com/w/cpp/utility/forward）；容器搬迁策略见 ISO C++ 标准 [container.requirements.general] 与 `std::move_if_noexcept`（https://en.cppreference.com/w/cpp/utility/move_if_noexcept）。

**可观察验证**

```cpp
#include <iostream>
#include <type_traits>
#include <utility>
#include <vector>

struct MayThrow {
    MayThrow() = default;
    MayThrow(const MayThrow&) { std::cout << "copy\n"; }
    MayThrow(MayThrow&&) { std::cout << "move\n"; }   // 没有 noexcept
};

int main() {
    static_assert(std::is_same_v<decltype(std::move(std::declval<MayThrow&>())), MayThrow&&>);
    static_assert(!std::is_nothrow_move_constructible_v<MayThrow>);
    std::vector<MayThrow> v;
    v.reserve(1);
    v.emplace_back();
    v.emplace_back();   // 扩容时输出 copy：move_if_noexcept 退回拷贝
}
```

- 运行后只看到 `copy`：移动构造没有 `noexcept`，`vector` 扩容宁可拷贝。
- 给 `MayThrow(MayThrow&&)` 补上 `noexcept` 再运行，输出变成 `move`，这就是 `move_if_noexcept` 的选择依据。

### ③ 面试怎么讲

**30 秒口述稿**

> `std::move` 的唯一作用是把一个左值无条件转成右值引用，实现就是对 `remove_reference_t<T>` 加 `&&` 再做 `static_cast`，它本身不搬任何资源。真正搬东西的是移动构造和移动赋值。工程上最关键的是 `noexcept`：`vector` 扩容时会用 `move_if_noexcept`，如果移动构造可能抛异常而且类型可拷贝，它会选择拷贝，保证扩容失败时原容器不变。所以自定义移动构造一定要标 `noexcept`，并且记得把源对象置空。`forward` 和它不同，`forward` 需要显式模板实参，用来在转发引用里保留原来的值类别。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `std::move` 之后源对象还能读吗？ | 能读，但值未指定；只能做析构、赋值、`clear()` 这类不依赖原值的操作。 |
| 为什么移动构造要标 `noexcept`？ | `vector` 扩容用 `move_if_noexcept`；移动可能抛且可拷贝时会退回拷贝，性能悄悄下降。 |
| `move` 和 `forward` 的区别？ | `move` 无条件转右值；`forward<T>` 按 `T` 保留左/右值，用于转发引用。 |
| `= default` 的移动构造一定是 `noexcept` 吗？ | 是条件性的：所有成员的移动都不抛才是 `noexcept(true)`，有一个抛就退化为可能抛。 |
| 移动构造里只写 `other.p = nullptr` 够吗？ | 不够，要先接管资源再置空；顺序反了会泄漏或丢数据。 |

### ④ 真实坑

1. **移动后忘记置空源指针**：移动构造只做 `data_ = other.data_` 而不改 `other.data_`，两个对象析构时对同一块内存 `delete`，直接双释放崩溃。
2. **移动构造漏写 `noexcept`**：`std::vector<Buffer>` 扩容时全部走拷贝构造，压测时才发现拷贝次数异常，而代码看不出任何问题。
3. **对 `const` 对象 `std::move`**：得到 `const T&&`，绑定不到 `T&&` 移动构造，静默退化成拷贝，性能问题极难定位。
4. **同一个成员被移动两次**：先 `a = std::move(x.data_)`，后面又 `b = std::move(x.data_)`，第二次拿到的是已置空的值。

### ⑤ 练习

**A 写**：实现 `Buffer`（`std::unique_ptr<int[]>` + 长度），补齐拷贝/移动构造与赋值，移动构造标 `noexcept` 并把源指针置空；用 `static_assert(std::is_nothrow_move_constructible_v<Buffer>)` 锁定；再把 100 个 `Buffer` 逐个 `push_back` 进 `std::vector`，统计拷贝次数。

**提示**：① 先用计数器统计拷贝/移动次数，再对比加不加 `noexcept` 的差异；② 用 `static_assert(std::is_nothrow_move_constructible_v<Buffer>)` 把承诺锁在编译期；③ 移动构造里先接管指针再置空源对象，配合 `-fsanitize=address` 观察双释放是否消失。

验收标准：`static_assert` 编译通过；100 次 `push_back` 的拷贝次数为 0；删除移动构造的 `noexcept` 后能观察到拷贝次数上升；`-fsanitize=address` 下无 double free。

**B 讲**：3 分钟讲“`std::move` 的原理，以及 `noexcept` 如何影响容器行为”。必须现场写出等价 `static_cast`，说明 `move_if_noexcept` 的选择条件，并对比 `forward`。

验收标准：不看稿；能解释 `vector` 扩容为什么“可拷贝就拷贝”；能说出移动后源对象的合法操作范围。

> ↑ 返回[目录](#toc)

---

<a id="unit-15"></a>
## D2 · 单元 15 `static` 的作用与工程场景

> 来源：题库第 6 题 ｜ 速背卡：[6](./速背.md#cpp-06) ｜ 自测：[sel-1 · 第 6 题](./自测.md#sel-1) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：类里的 `static` 改的是“归属”——成员属于类而不属于对象；文件里的 `static` 改的是“链接”——只在本翻译单元可见。

**学完能做到**
- 写代码：写出带类内计数器、静态工厂函数和 `inline static` 成员的类，并证明它不占对象大小。
- 讲出来：说清静态成员变量/函数的语义、内部链接的用途，以及 C++11 起局部静态初始化的线程安全保证。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 静态成员也算进对象大小 | 静态数据成员属于类、所有对象共享一份，不计入 `sizeof(对象)` |
| 静态成员函数能直接访问普通成员 | 它没有 `this`，必须通过对象、引用或指针显式传入 |
| 函数内 `static` 线程安全指后续读写也安全 | 只保证首次初始化（magic statics）安全，之后的并发读写仍要自己加锁或原子化 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 静态数据成员属于类，所有对象共享一份，不计入 `sizeof(对象)` | 用它做实例计数、共享配置；但它不是线程安全的，多线程写要加锁或改原子 |
| 静态成员函数没有 `this`，不能是 `const`/`volatile`/`virtual`，不能直接访问非静态成员 | 适合写工厂、工具函数；想操作对象必须显式传对象或引用 |
| 类外定义静态成员（C++17 起可 `inline static` 类内定义） | 漏定义会在链接期报 `undefined reference`；头文件里用 `inline static` 避免多重定义 |
| 文件作用域的 `static` 和匿名命名空间都给出内部链接 | 只在本 `.cpp` 可见，避免符号冲突；但也无法被其他 TU 复用或单测 |

**设计动机**：`static` 把两件事从对象级别拆出来：状态归“类”所有（计数器、共享配置），可见性归“翻译单元”所有（只在本 `.cpp` 使用的辅助函数）。这样既能让“所有实例共享一份”的状态有明确归属，又能把实现细节藏进单个 `.cpp`，避免符号冲突和头文件暴露；函数内静态变量则把“懒初始化”和“只初始化一次”打包，C++11 的 magic statics 让这种写法不必再手写锁。

**版本差异**：函数内静态变量的线程安全初始化（magic statics）是 C++11 起才保证的；`inline static` 成员与 `inline` 变量是 C++17 才有，C++17 之前头文件里的静态成员仍要类外定义。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 统计存活对象数 | `static std::size_t alive_;` + 构造/析构里增减 |
| 不依赖实例的工具函数 | `static bool parse(const char* s);` |
| 头文件里定义类静态常量（C++17） | `static inline constexpr int kMax = 8;` |
| 仅本文件可见的辅助函数 | `namespace { void helper(); }` 或 `static void helper();` |

```cpp
#include <cstddef>
#include <iostream>

class Widget {
public:
    Widget() { ++alive_; }
    Widget(const Widget&) { ++alive_; }
    ~Widget() { --alive_; }

    static std::size_t alive() { return alive_; }   // 静态成员函数：没有 this

    static Widget& shared() {                       // 函数内 static，C++11 起初始化线程安全
        static Widget instance;
        return instance;
    }

private:
    static std::size_t alive_;                      // 声明，不占对象空间
};

std::size_t Widget::alive_ = 0;                     // 类外定义；C++17 也可写 inline static

int main() {
    Widget a;
    Widget b = a;
    std::cout << Widget::alive() << '\n';           // 2
    std::cout << sizeof(Widget) << '\n';            // 1：只有静态成员的空类
    Widget::shared();
    std::cout << Widget::alive() << '\n';           // 3
}
```

出处：静态成员规则见 ISO C++ 标准 [class.static]；内部链接见 [basic.link]；函数内静态变量初始化的线程安全见 [stmt.dcl]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/static）。

**可观察验证**

```cpp
#include <cstddef>
#include <type_traits>

struct S {
    int x;
    static int counter;
};
int S::counter = 0;

static_assert(sizeof(S) == sizeof(int));                     // 静态成员不计入对象大小
static_assert(std::is_same_v<decltype(&S::counter), int*>);  // 取到普通地址，不是成员指针

int main() {
    S a{}, b{};
    a.counter = 1;
    return b.counter == 1 ? 0 : 1;   // 两个对象共享同一份静态成员
}
```

- 编译运行：`sizeof(S)` 与 `sizeof(int)` 相等，静态成员确实不占对象空间。
- 删掉 `int S::counter = 0;` 再编译，任何取 `&S::counter` 的 TU 都会报 `undefined reference`，这是“静态成员必须定义”的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> `static` 在不同位置改的维度不一样。类里的静态成员属于类本身，所有对象共享一份，不占对象大小；静态成员函数没有 `this`，所以不能是 `const` 或 `virtual`，适合做工厂和工具函数。文件作用域的 `static` 把外部链接改成内部链接，只在本翻译单元可见。函数内静态局部变量是静态存储期，只初始化一次，C++11 起这个初始化过程是线程安全的，常用来做懒初始化单例。注意它只保证初始化安全，后续并发读写还得自己加锁。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 静态成员必须类外定义吗？ | C++17 前非 `const` 的静态成员要类外定义；C++17 起可用 `inline static` 在类内定义。 |
| 静态成员函数能访问非静态成员吗？ | 不能直接访问，因为没有 `this`；必须通过对象、引用或指针。 |
| 静态成员函数能是虚函数吗？ | 不能，虚函数依赖对象和虚表，静态函数不属于任何对象。 |
| 局部静态变量线程安全指什么？ | 指首次初始化（magic statics）线程安全，之后的数据竞争与它无关。 |
| 头文件里能定义静态成员吗？ | 用 `inline static`（C++17），否则每个 TU 都会定义一份，链接期冲突。 |

### ④ 真实坑

1. **漏写类外定义**：类里只写 `static int count;`，构造函数里 `++count`，编译通过、链接报 `undefined reference to Widget::count`。
2. **头文件里定义普通静态成员**：多个 `.cpp` 包含该头文件，链接期出现重复符号；应改成 `inline static` 或放到单个 `.cpp`。
3. **把静态成员当线程安全**：多线程构造/析构同一个类，`++alive_` 是非原子读改写，计数随机丢失。
4. **在静态函数里想用 `this`**：静态成员函数没有 `this`，写成 `this->x` 直接编译失败，需要把对象作为参数传入。

### ⑤ 练习

**A 写**：实现 `Widget`，含 `static std::size_t alive_`、静态函数 `alive()`、静态工厂 `create()`；再加一个 `static inline constexpr int kMax = 8;`。用 `sizeof(Widget)` 验证静态成员不占对象空间，并在 4 个线程中各构造/析构 1000 次。

**提示**：① 多线程版先不要加锁，复现计数丢失本身就是证据；② 删掉类外定义看 `undefined reference`，再加 `inline static` 看能否链接；③ 用 `sizeof` 和 `nm` 分别验证“不占对象空间”和“内部链接”。

验收标准：单线程计数准确；多线程版本能复现计数错误，改成 `std::atomic<std::size_t>` 后正确；能解释 `sizeof` 的结果；无链接错误。

**B 讲**：2 分钟讲“`static` 在类成员、文件作用域、函数局部三个位置分别改了什么”。必须覆盖归属、链接、存储期与初始化线程安全。

验收标准：不看稿；三维度各有一句结论；能说出 `undefined reference` 的复现步骤。

> ↑ 返回[目录](#toc)

---

<a id="unit-16"></a>
## D2 · 单元 16 `const` 的作用与理解

> 来源：题库第 7 题 ｜ 速背卡：[7](./速背.md#cpp-07) ｜ 自测：[sel-1 · 第 7 题](./自测.md#sel-1) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：`const` 是接口契约——它承诺“通过这个入口不改对象”，而 `const` 成员函数、`mutable` 和重载决议共同决定这个承诺怎么落地。

**学完能做到**
- 写代码：写出 `const`/非 `const` 成员函数重载，并用 `mutable` 在 `const` 函数里安全地更新缓存计数。
- 讲出来：说清 `const` 对象、`const` 成员函数的 `this` 类型，以及 `const` 与 `constexpr` 的区别。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `const` 对象只是“不能改成员” | 它还只能调用 `const` 成员函数，所以读取接口漏标 `const` 会直接编译失败 |
| `const` 成员函数里什么都不能改 | `mutable` 成员可以改，专门给缓存、命中计数这类“逻辑只读、物理要写”的场景 |
| `const` 和 `constexpr` 是一回事 | `constexpr` 要求编译期可求值并且隐含 `const`；`const` 只保证运行期只读 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `const` 对象只能调用 `const` 成员函数；`const` 成员函数里 `this` 的类型是 `const T*` | 想在常量对象上取数据，读取接口必须标 `const`，否则编译失败 |
| 成员函数末尾的 `const` 参与重载，`const` 对象优先选 `const` 版本 | 可以同时提供只读和可写两个 `data()`，让编译器按对象常量性选择 |
| `mutable` 成员可以在 `const` 成员函数里修改 | 适合缓存、命中计数、`std::mutex`；滥用会破坏“逻辑 const”的语义 |
| `constexpr` 要求编译期可求值并隐含 `const`；`const` 只保证运行期只读 | 数组维度、模板实参必须用 `constexpr`；`const` 变量可能仍是运行期初始化 |

**设计动机**：`const` 把“只读”从注释和口头约定搬进类型系统：调用方拿到 `const T&` 就知道改不了，编译器也能在调用点拦住误写。`const` 成员函数参与重载，是为了让同一个类同时提供只读和可写两条入口而不牺牲接口清晰度；`mutable` 则专门给“逻辑只读、物理要写”的缓存成员留口子，避免为了一个计数把整个接口改成非 `const`。

**版本差异**：`constexpr` 成员函数在 C++11 中隐含 `const`，C++14 起不再隐含，函数体也允许更多语句；`const` 成员函数与 `mutable` 的规则跨版本一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 只读访问成员，不拷贝 | `const std::string& value() const;` |
| 同时提供可写入口 | 再加一个非 `const` 重载 `std::string& value();` |
| 在只读函数里统计调用次数 | `mutable std::size_t reads_ = 0;` |
| 编译期常量 | `constexpr int kSize = 4;` |

```cpp
#include <cstddef>
#include <iostream>
#include <string>
#include <utility>

class Cache {
public:
    explicit Cache(std::string v) : value_(std::move(v)) {}

    const std::string& value() const {   // const 重载：this 是 const Cache*
        ++reads_;                        // mutable：逻辑只读，物理可写
        return value_;
    }

    std::string& value() {               // 非 const 重载
        return value_;
    }

    std::size_t reads() const { return reads_; }

private:
    std::string value_;
    mutable std::size_t reads_ = 0;
};

int main() {
    Cache c("abc");
    const Cache& rc = c;

    rc.value();               // 选 const 版本，reads_ 变为 1
    c.value() = "xyz";        // 选非 const 版本，可写
    std::string shown = rc.value();          // 再读一次，reads_ 变为 2
    std::cout << rc.reads() << ' ' << shown << '\n';   // 2 xyz

    constexpr int kSize = 4;  // 编译期常量
    int arr[kSize]{};
    (void)arr;
}
```

出处：`const` 对象与 `const` 成员函数见 ISO C++ 标准 [dcl.const]、[class.mfct.non-static]；`mutable` 见 [dcl.stc]；`constexpr` 见 [dcl.constexpr]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/const、https://en.cppreference.com/w/cpp/language/constexpr）。

**可观察验证**

```cpp
#include <type_traits>

struct Probe {
    void touch() const { ++reads; }   // const 成员函数里改 mutable 成员
    mutable int reads = 0;
};

static_assert(std::is_same_v<decltype(&Probe::touch), void (Probe::*)() const>);

int main() {
    const Probe p;
    p.touch();     // 合法：mutable 允许在 const 函数里改
    return p.reads == 1 ? 0 : 1;
}
```

- 编译运行：`const Probe p` 上调用 `p.touch()` 合法，`reads` 变成 1。
- 把 `mutable` 删掉再编译，`++reads` 在 `const` 函数里立刻报错；`static_assert` 那一行说明 `this` 的类型是 `const Probe*`。

### ③ 面试怎么讲

**30 秒口述稿**

> `const` 我理解成接口承诺：通过这个入口不修改对象。它作用在对象上，就要求只能调用 `const` 成员函数；作用在成员函数末尾，表示函数内 `this` 是 `const T*`，不能改成员，除非成员是 `mutable`。`const` 成员函数和非 `const` 版本可以构成重载，`const` 对象会优先选 `const` 版本，这样只读接口和可写接口能共存。`const` 和 `constexpr` 不是一回事：`constexpr` 要求编译期可求值，并且对象隐含 `const`；`const` 只保证运行期不被改，初始化可以发生在运行期。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `const` 成员函数里能改成员吗？ | 不能，除非成员声明为 `mutable`；也可以 `const_cast` 掉 `this`，但对象本身是 `const` 时写入是 UB。 |
| `const` 对象能调用非 `const` 成员函数吗？ | 不能，编译期就拒绝；这正是接口要标 `const` 的原因。 |
| `const int` 和 `constexpr int` 区别？ | `constexpr` 必须编译期初始化、可用于常量表达式；`const` 允许运行期初始化。 |
| 按值返回 `const T` 有意义吗？ | 基本没有，会阻止移动、也不影响签名；返回值别加顶层 `const`。 |
| 成员函数能同时是 `const` 和 `static` 吗？ | 不能，`static` 函数没有 `this`，不存在“常量性”这回事。 |

### ④ 真实坑

1. **漏标 `const`**：`int size() { return v_.size(); }` 在 `const` 对象上调用直接编译失败，只能到处 `const_cast`，越改越脏。
2. **`mutable` 被当成“随便改”**：把业务字段标成 `mutable` 后，`const` 函数里修改它，破坏了调用方对“只读”的预期，多线程下还产生数据竞争。
3. **返回值加顶层 `const`**：`const std::string f();` 让 `auto s = f();` 之外的行为变怪，也阻止移动；现代写法直接返回 `std::string`。
4. **`const_cast` 写真正的常量对象**：`const int ci = 7; const_cast<int&>(ci) = 8;` 编译通过但 UB，优化器可能直接把 `ci` 当常量折叠。

### ⑤ 练习

**A 写**：实现 `Cache`，提供 `const`/非 `const` 两个 `value()` 重载和 `mutable` 的读取计数；在 `main` 中分别用 `Cache&` 与 `const Cache&` 调用，打印实际选中的重载与计数；再加一个 `constexpr int kSize` 用于数组维度。

**提示**：① 先给读取接口补 `const`，看 `const` 对象调用失败的错误是否消失；② 用 `static_assert` 锁定 `decltype(&T::f)` 的类型，确认 `this` 的 const 限定；③ `mutable` 只留给缓存/计数，别把业务字段标上去。

验收标准：`const` 对象只调用 `const` 版本；计数符合预期；把 `mutable` 去掉后能复现编译错误并解释；`constexpr` 数组维度编译通过。

**B 讲**：2 分钟讲“`const` 对象、`const` 成员函数、`mutable`、`constexpr` 四者的关系”。必须说明 `this` 的类型变化和重载规则。

验收标准：不看稿；能现场写出两个重载；能解释为什么 `constexpr` 比 `const` 要求更强。

> ↑ 返回[目录](#toc)

---

<a id="unit-17"></a>
## D2 · 单元 17 `#define` 与 `const` 的本质区别

> 来源：题库第 8 题 ｜ 速背卡：[8](./速背.md#cpp-08) ｜ 自测：[sel-1 · 第 8 题](./自测.md#sel-1) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：`#define` 在预处理阶段做文本替换，编译器根本不知道它存在；`const` 是有类型、有作用域、能被调试器看见的变量。

**学完能做到**
- 写代码：用一个宏和一个 `inline constexpr` 常量实现同一段逻辑，复现宏的优先级陷阱。
- 讲出来：说清文本替换、类型检查、作用域、符号表四个层面的差异，以及宏仍然不可替代的场景。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 宏给参数加上括号就安全了 | 只解决优先级，解决不了重复求值：`SQUARE(i++)` 仍然 UB |
| `const` 常量一定占内存 | 不一定；被取地址或 ODR 使用时才有存储，能证明不需要时会被优化掉 |
| 宏和 `const` 只是写法偏好 | 阶段不同：宏在预处理做文本替换，`const` 进编译器，类型、作用域、调试能力都不同 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 宏是预处理器的文本替换，没有类型、没有作用域、不进符号表 | 运算符优先级和多次求值问题都由调用处决定，调试时只能看到展开后的代码 |
| `const` 变量有确定类型，参与类型检查、重载和调试 | 编译器能报错、能在调试器里看到名字和值，也能取地址 |
| 命名空间作用域的 `const` 对象默认内部链接，每个 TU 一份 | 头文件里写 `const int k = 1;` 被 inline 函数 ODR 使用会出问题，C++17 应用 `inline constexpr` |
| 宏仍用于条件编译、头文件保护和字符串化 | `#if`、`#ifdef`、`#include` 守卫只能用预处理，不能用 `const` 替代 |

**设计动机**：宏是预处理器时代的文本替换，编译器根本看不到类型，也就无法做检查、调试和优化；`const`/`constexpr` 让常量进入编译器的类型系统与符号表，错误能在编译期定位到出错那一行。保留宏是为了条件编译、头文件保护和字符串化这些编译器管不到的阶段——这是“阶段不同导致能力不同”，不是风格偏好。

**版本差异**：`constexpr` 是 C++11 引入；`inline constexpr` 变量要到 C++17 才能在头文件里安全地“一处定义、多处使用”，C++17 之前常用 `static const` 或枚举绕开。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 有类型的常量 | `constexpr int kMax = 8;` |
| 头文件里共享常量（C++17） | `inline constexpr int kMax = 8;` 或 `inline constexpr std::string_view kName = "...";` |
| 条件编译 | `#if defined(_WIN32)`、`#ifdef NDEBUG` |
| 简单函数替代宏 | `inline int square(int x) { return x * x; }` 或 `constexpr int square(int x)` |

```cpp
#include <cstdio>

#define VAL 10 + 2                       // 没有括号，展开后优先级变了
#define SQUARE(x) ((x) * (x))            // 即使加括号，仍可能重复求值

inline constexpr int kVal = 10 + 2;      // C++17 内联变量，头文件安全
inline constexpr int square(int x) { return x * x; }

int main() {
    int a = VAL * VAL;                   // 10 + 2 * 10 + 2 == 32
    int b = kVal * kVal;                 // 144
    int i = 2;
    int c = square(i++);                 // 实参只求值一次：c == 4，i == 3
    std::printf("%d %d %d %d\n", a, b, c, i);

    // int d = SQUARE(i++);              // UB：展开成 (i++) * (i++)，i 自增两次
}
```

出处：宏替换规则见 ISO C++ 标准 [cpp.replace]；`const`/`constexpr` 见 [dcl.constexpr]；C++17 内联变量见 [dcl.inline]；可对照 cppreference（https://en.cppreference.com/w/cpp/preprocessor/replace、https://en.cppreference.com/w/cpp/language/inline）。

**可观察验证**

```cpp
#include <cstdio>
#include <type_traits>

#define VAL 10 + 2
inline constexpr int kVal = 10 + 2;

static_assert(VAL == 12);                          // 展开后是 10 + 2，恰好等于 12
static_assert(kVal == 12);
static_assert(std::is_integral_v<decltype(VAL)>);  // 宏展开后只是整数表达式

int main() {
    std::printf("%d %d\n", VAL * VAL, kVal * kVal);   // 32 144
}
```

- 运行输出 `32 144`：同一段“10 + 2”，宏因为没括号被优先级改写，`constexpr` 保持数学含义。
- `g++ -E` 看一眼预处理输出，`VAL` 已经彻底消失、只剩展开文本：编译器拿不到“宏”这个概念。

### ③ 面试怎么讲

**30 秒口述稿**

> 最本质的区别是阶段不同：`#define` 在预处理阶段做纯文本替换，编译器拿到的是替换后的代码，所以它没有类型、没有作用域，也不进符号表；`const` 是编译器处理的变量，有类型、参与检查、能在调试器里看到。宏的典型问题是优先级和多次求值，比如 `#define VAL 10+2` 之后 `VAL * VAL` 得到 32 而不是 144；函数式宏 `SQUARE(i++)` 会让 `i` 自增两次，属于 UB。工程上常量用 `constexpr`，头文件里用 `inline constexpr`，函数用 `inline` 或 `constexpr` 函数，只有条件编译和头文件保护还需要宏。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 宏定义加满括号就安全了吗？ | 只解决优先级，解决不了重复求值；`SQUARE(i++)` 仍然 UB。 |
| `const` 常量一定不占内存吗？ | 不一定；被取地址或 ODR 使用时会有存储，编译器只在能证明不需要时优化掉。 |
| 头文件里能写 `const int k = 1;` 吗？ | 能编译，但每个 TU 一份、地址不同；被 inline 函数取地址可能违反 ODR，建议 `inline constexpr`。 |
| 为什么 `const` 能替代宏做常量？ | 它有类型和作用域，能参与重载和模板，错误在编译期暴露，调试信息也完整。 |
| 宏还有什么不可替代的用途？ | 条件编译、include guard、`#`/`##` 字符串化与拼接、生成代码的元编程。 |

### ④ 真实坑

1. **优先级翻车**：`#define VAL 10 + 2`，`VAL * VAL` 展开成 `10 + 2 * 10 + 2`，结果是 32；除零、位运算场景更隐蔽。
2. **参数重复求值**：`#define MAX(a,b) ((a) > (b) ? (a) : (b))`，`MAX(i++, j++)` 会让较大的那个自增两次。
3. **宏没有作用域**：在类或函数里 `#define` 的宏会泄漏到文件末尾，后续同名标识符被悄悄替换，只能靠 `#undef` 收尾。
4. **头文件里定义 `const` 全局量**：多个 TU 各有一份，若被 inline 函数取地址，链接器合并后行为不确定；应改用 `inline constexpr`。

### ⑤ 练习

**A 写**：写 `#define VAL 10 + 2`、`inline constexpr int kVal = 10 + 2` 和 `#define SQUARE(x) ((x)*(x))`、`constexpr int square(int)`，在 `main` 中打印 `VAL*VAL`、`kVal*kVal` 以及 `square(i++)` 与（注释掉的）`SQUARE(i++)` 的差异。

**提示**：① 用 `g++ -E` 看宏展开后的真实文本，比读源码直观；② 先预测 `VAL * VAL` 的值再运行，预测错的地方就是优先级陷阱；③ `SQUARE(i++)` 只在注释里保留，别真跑，`-Wall -Wextra` 也抓不到它。

验收标准：能准确预测 32 与 144；能解释 `SQUARE(i++)` 为什么是 UB；`-Wall -Wextra` 下无警告；能说出 `#undef` 的作用。

**B 讲**：90 秒讲“`#define` 和 `const` 的四个差异，以及宏的两条遗留用途”。必须覆盖替换阶段、类型、作用域、调试。

验收标准：不看稿；四个差异各一句；能举一个优先级或重复求值的具体例子。

> ↑ 返回[目录](#toc)

---

<a id="unit-18"></a>
## D2 · 单元 18 `std::string_view` 与 `const char*`

> 来源：题库第 9 题 ｜ 速背卡：[9](./速背.md#cpp-09) ｜ 自测：[sel-2 · 第 9 题](./自测.md#sel-2) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：`string_view` 是“指针 + 长度”的非拥有视图，取长度和切片都是 O(1)；`const char*` 只给指针，每次求长都要扫到 `'\0'`，切片往往还要拷贝。

**学完能做到**
- 写代码：用 `string_view` 对同一段缓冲区做多次切片并统计拷贝次数，再对比 `const char*` + `std::string` 的写法。
- 讲出来：说清非拥有语义、生命周期风险、`substr` 为什么 O(1)，以及什么时候必须转回 `std::string`。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `string_view` 会拷贝一份字符串 | 只拷贝指针和长度，不拥有、不分配底层缓冲区 |
| 有 `string_view` 就不再需要 `std::string` | 视图不能延长数据寿命；需要保存、修改或传 C 接口时必须转回 `std::string` |
| `sv.data()` 可以直接当 C 字符串 | 视图不保证 `'\0'` 结尾，`printf("%s", sv.data())` 可能越界读 |

### ① 本质

**先拆两个词**：「**拥有**」指谁负责底层内存的分配、释放与扩容搬家（`std::string` 负责它自己的字符缓冲区）；「**视图**」指不复制数据、只记录“数据在哪、有多长”的只读窗口。所以「**非拥有视图**」＝只记「指针＋长度」、**不负责这块内存生死**的轻量包装：析构时什么都不释放；原字符串销毁、扩容或修改后，视图立即失效。一句话记：**`std::string` 是房主，`string_view` 只是窗——房子拆了，窗里的风景就没了。**

| 事实 | 开发中的后果 |
| --- | --- |
| `string_view` 内部是一个 `const char*` 加一个长度，拷贝视图是 O(1) | 传参和切片很便宜，但它不拥有、不延长底层缓冲区生命周期 |
| `size()` 直接读长度，`substr()` 只生成新视图，都是 O(1) | 反复取子串的解析代码从 O(n²) 降到 O(n)，也不会产生临时 `std::string` |
| `const char*` 没有长度，`strlen` 是 O(n)，取子串要分配并拷贝 | 循环里反复 `strlen` 或构造 `std::string` 是常见性能热点 |
| `string_view` 不保证 `'\0'` 结尾 | 传给 C API 必须先 `std::string(sv)` 或自行拷贝，`sv.data()` 不能当 C 字符串用 |

**设计动机**：解析类代码真正需要的是“这段数据在哪、有多长”，而不是“拥有一份字符串”；把“拥有”和“观察”拆成 `std::string` 与 `std::string_view` 后，函数参数可以零拷贝传入，切片只调整指针和长度。标准刻意让视图不拥有、不可变，把生命周期责任明确留给调用方，避免视图偷偷延长对象寿命带来的隐藏成本。

**版本差异**：`std::string_view` 是 C++17 才进入标准（此前是 Library Fundamentals TS 里的 `string_view`）；C++20 又补了 `starts_with`/`ends_with` 等接口，切片与取长度仍是 O(1)。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 只读解析字符串，不拷贝 | 参数用 `std::string_view`，内部用 `substr`/`remove_prefix` |
| 从 `std::string` 取子串做比较 | `std::string_view sv = s; auto head = sv.substr(0, 5);` |
| 传给需要 `const char*` 的 C 接口 | `std::string tmp(sv); c_api(tmp.c_str());` |
| 需要拥有或修改数据 | 用 `std::string`，不要返回指向临时量的 `string_view` |

```cpp
#include <cstring>
#include <iostream>
#include <string>
#include <string_view>

std::size_t c_length(const char* s) { return std::strlen(s); }   // O(n)

int main() {
    std::string owned = "hello, string_view";
    std::string_view sv(owned.data() + 7, 10);   // 非拥有视图，零拷贝
    std::string_view head = sv.substr(0, 5);     // O(1)，仍指向 owned

    std::cout << head.size() << ' ' << head << '\n';   // 5 strin

    std::string copy(sv);                        // 需要拥有/需要 '\0' 时才拷贝
    std::cout << copy.c_str() << ' ' << c_length(copy.c_str()) << '\n';

    std::string_view fromStr = owned;            // 隐式转换，视图指向 owned
    std::string_view fromLit = "literal";        // 对字面量做一次 strlen
    std::cout << fromStr.size() << ' ' << fromLit.size() << '\n';
}
```

出处：`std::string_view` 的接口与复杂度见 ISO C++ 标准 [string.view]；可对照 cppreference（https://en.cppreference.com/w/cpp/string/basic_string_view）。示例只依赖标准库 `<string>`、`<string_view>`、`<cstring>`。

**可观察验证**

```cpp
#include <string_view>
#include <type_traits>

constexpr std::string_view kText = "hello, string_view";

static_assert(kText.size() == 18);
static_assert(kText.substr(7, 6) == "string");   // 切片只挪指针和长度，编译期即可求值
static_assert(std::is_trivially_copyable_v<std::string_view>);

int main() {}
```

- `static_assert` 全部通过：`substr` 不分配内存，连编译期都能求值。
- 把 `std::string_view sv = std::string("tmp");` 写进函数并打印 `sv`，用 `-fsanitize=address` 运行能看到 `heap-use-after-free`。

### ③ 面试怎么讲

**30 秒口述稿**

> `const char*` 只有指针，长度信息靠 `'\0'`，所以 `strlen` 是 O(n)，取子串通常要分配新缓冲区再拷贝。`string_view` 内部保存指针和长度，`size()` 是 O(1)，`substr()` 只复制指针和长度，也是 O(1)，而且不分配内存。它的代价是不拥有数据、不保证 `'\0'` 结尾，底层缓冲区销毁或修改后视图就悬垂，所以不能返回指向临时 `std::string` 的 `string_view`，传给 C 接口前要先转成 `std::string`。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `string_view` 一定比 `const char*` 快吗？ | 读取和切片快；但从 `const char*` 构造视图要先 `strlen` 一次，短字符串或只传一次时差异很小。 |
| 为什么 `substr` 是 O(1)？ | 它只返回一个新的“指针 + 长度”，不复制字符、不分配内存。 |
| `sv.data()` 能直接传给 `printf("%s")` 吗？ | 不能，视图不保证 `'\0'` 结尾；先 `std::string(sv)` 再 `.c_str()`。 |
| 函数参数用 `string_view` 还是 `const std::string&`？ | 只读、不存储、不需要 `'\0'` 时用 `string_view`；要保存或调 C 接口时用 `const std::string&`。 |
| 返回 `string_view` 有什么风险？ | 若指向函数内局部 `std::string` 或临时量，返回即悬垂；应返回 `std::string`。 |

### ④ 真实坑

1. **绑定临时 `std::string`**：`std::string_view sv = std::string("tmp");` 编译通过，语句结束临时量销毁，`sv` 立刻悬垂。
2. **把视图存进成员**：构造函数收 `string_view` 并存成成员，调用方传的是临时 `std::string`，对象构造完成员就悬垂。
3. **当 C 字符串用**：`printf("%s", sv.data())` 在子串视图上越界读到缓冲区末尾之后，因为子串不保证 `'\0'`。
4. **修改底层字符串**：持有 `string_view` 期间对原 `std::string` 做 `append` 触发重分配，旧视图指向已释放内存。

### ⑤ 练习

**A 写**：实现 `std::vector<std::string_view> split(std::string_view text, char sep)`，按分隔符切分且不拷贝；再用 `const char*` + `std::string` 写一版等价实现，对同一段 10 KB 文本各跑 1000 次并计时。

**提示**：① 用 `constexpr` + `static_assert` 证明切片在编译期完成；② 让视图指向临时 `std::string`，再用 ASan 复现悬垂；③ 对比成员存 `string_view` 与存 `std::string` 两种写法，说清各自的生命周期责任。

验收标准：两版结果一致；`string_view` 版不产生任何 `std::string` 构造；计时显示明显优势；能说明返回的视图依赖调用方缓冲区存活。

**B 讲**：2 分钟讲“`string_view` 的性能来源与三个生命周期陷阱”。必须覆盖 O(1) 长度/切片、非拥有语义、`'\0'` 缺失。

验收标准：不看稿；能解释 `substr` 为什么常数时间；能举出至少两个悬垂场景。

> ↑ 返回[目录](#toc)

---

<a id="unit-19"></a>
## D2 · 单元 19 `extern` 与 `extern "C"`

> 来源：题库第 12 题 ｜ 速背卡：[12](./速背.md#cpp-12) ｜ 自测：[sel-2 · 第 12 题](./自测.md#sel-2) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：`extern` 管的是“这个符号在别处定义”，`extern "C"` 管的是“这个符号按 C 的规则命名”，一个解决声明/定义分离，一个解决跨语言链接。

**学完能做到**
- 写代码：用 `extern` 声明跨翻译单元共享的变量，并用 `extern "C"` 导出/导入一个 C 链接函数。
- 讲出来：说清声明与定义的区别、名字修饰的作用，以及 `extern "C"` 块里不能做什么。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `extern int x;` 会分配内存 | 它只是声明；定义（不带 `extern` 或带初始化）才分配存储 |
| `extern "C"` 会改变函数体或调用方式 | 标准只规定语言链接（名字修饰与链接约定），函数体语义不变 |
| 头文件里直接写 `int g;` 也没事 | 被多个 `.cpp` 包含就会 multiple definition，正确写法是 `extern` 声明 + 单一定义 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `extern int x;` 是声明，不分配存储；`int x;` 在命名空间作用域是定义 | 头文件里写 `extern` 声明、单个 `.cpp` 里定义，才能避免多重定义 |
| 一个实体可以多次声明，但只能有一次定义（ODR） | 两个 `.cpp` 都写 `int g;`，链接期报 multiple definition |
| `extern "C"` 指定语言链接，关闭 C++ 名字修饰，按 C 符号名导出/查找 | C++ 调 C 函数不加 `extern "C"` 会链接失败；C 调 C++ 也必须导出 C 符号 |
| 语言链接只影响名字和链接约定，不改变函数体语义；块内不能重载、不能用模板 | 把重载函数塞进 `extern "C"` 块直接编译错误，因为 C 符号名不允许重复 |

**设计动机**：C++ 支持重载，所以函数名在目标文件里必须编码参数信息（名字修饰），而 C 的符号名就是函数名本身；跨语言调用必须有一方显式声明“按哪种规则链接”，这就是 `extern "C"`。`extern` 则解决编译单元之间的分工：头文件只放声明、定义放进一个 `.cpp`，编译才能并行、链接才能唯一。

**版本差异**：`extern "C"` 的链接规则从 C++98 起未变；C++17 增加 `inline` 变量后，头文件里共享全局变量可以直接写 `inline int g;`，不再必须“`extern` 声明 + 单一定义”成对出现。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 跨 TU 共享全局变量 | 头文件 `extern int g;`，一个 `.cpp` 写 `int g = 0;` |
| 让 C 代码能调用 C++ 函数 | 函数声明与定义都放在 `extern "C"` 中 |
| 让 C++ 能调用 C 库 | 头文件用 `#ifdef __cplusplus` 包住 `extern "C" { ... }` |
| 只想本文件可见 | 用 `static` 或匿名命名空间，而不是 `extern` |

```cpp
#include <cstdio>

extern int g_counter;          // 声明：不分配存储，定义在别处

int g_counter = 0;             // 定义：分配存储

extern "C" {                   // 这一块里的函数按 C 符号导出
int c_add(int a, int b) { return a + b; }
int c_mul(int a, int b) { return a * b; }
}

int main() {
    g_counter = c_add(1, 2) + c_mul(3, 4);
    std::printf("%d\n", g_counter);   // 15
}
```

出处：语言链接见 ISO C++ 标准 [dcl.link]；链接与 ODR 见 [basic.link]、[basic.def.odr]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/language_linkage、https://en.cppreference.com/w/cpp/language/storage_duration）。

**可观察验证**

```cpp
#include <type_traits>

extern int g_counter;      // 声明：不分配存储
int g_counter = 0;         // 定义：分配存储

extern "C" int c_add(int a, int b) { return a + b; }

static_assert(std::is_same_v<decltype(c_add), int(int, int)>);

int main() {
    int r = c_add(1, 2) + g_counter;
    return r == 3 ? 0 : 1;
}
```

- `g++ -c` 之后用 `nm` 看符号：`c_add` 原样导出，而普通 C++ 函数名带 `_Z` 前缀，这就是名字修饰的差异。
- 两个 `.cpp` 各写一句 `int g;` 再链接，能复现 `multiple definition`；改成头文件 `extern` 声明 + 单一定义后消失。

### ③ 面试怎么讲

**30 秒口述稿**

> `extern` 有两个作用：一是做声明，告诉编译器这个变量或函数在别的翻译单元定义，本身不分配存储；二是显式指定外部链接，和 `static` 的内部链接相对。C++ 为了支持重载会对函数名做名字修饰，而 C 不做，所以 C++ 调用 C 函数时必须用 `extern "C"` 声明，让编译器按 C 的符号名去找；反过来 C++ 要给 C 用，也要用 `extern "C"` 导出。它只改语言链接，不改函数体，而且块里不能放重载函数和模板。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `extern int x;` 分配内存吗？ | 不分配，只是声明；定义（不带 `extern` 或带初始化）才分配。 |
| `extern` 和 `static` 什么关系？ | 一个显式外部链接，一个内部链接；函数默认是外部链接。 |
| `extern "C"` 改的是调用约定吗？ | 标准只规定语言链接；具体调用约定由 ABI 决定，二者不能混为一谈。 |
| 为什么 `extern "C"` 里不能重载？ | C 符号名不包含参数信息，同名函数无法区分，链接器会冲突。 |
| 模板能放 `extern "C"` 里吗？ | 不能，模板需要实例化，标准禁止 C 语言链接的模板。 |

### ④ 真实坑

1. **头文件里直接定义变量**：`int g;` 写在头文件，被两个 `.cpp` 包含，链接期 multiple definition；改成 `extern` 声明 + 单一定义。
2. **忘记 `extern "C"`**：C++ 里声明 `void c_func(int);` 并调用，编译通过但链接报 `undefined reference to _Z6c_funci`。
3. **给 C 的头文件没加 `__cplusplus` 保护**：C 编译器看到 `extern "C"` 直接语法错误；必须用 `#ifdef __cplusplus` 包住。
4. **把重载函数放进 `extern "C"` 块**：两个同名不同参的函数报“conflicting declaration”，因为 C 链接无法区分。

### ⑤ 练习

**A 写**：写 `api.h`，用 `#ifdef __cplusplus extern "C" {` 导出 `int api_add(int,int);` 和 `extern int api_calls;`；在 `api.cpp` 中定义，在 `main.cpp` 中调用并读取计数；另写一个 `static` 辅助函数验证仅本文件可见。

**提示**：① 先写两个 TU 复现 multiple definition，再把定义收进一个 `.cpp`；② 用 `nm` 对比 C++ 与 `extern "C"` 函数的符号名；③ 给 C 看的头文件模板别忘了 `#ifdef __cplusplus` 保护。

验收标准：C 与 C++ 两种编译方式都能链接成功；删掉 `extern "C"` 后能复现链接错误并解释符号名差异；`static` 函数在另一个 TU 中不可见。

**B 讲**：2 分钟讲“`extern` 与 `extern "C"` 分别解决什么问题”。必须覆盖声明/定义、ODR、名字修饰、跨语言调用。

验收标准：不看稿；能写出带 `__cplusplus` 保护的头文件模板；能解释 `_Z6c_funci` 的含义。

> ↑ 返回[目录](#toc)

---

<a id="unit-20"></a>
## D2 · 单元 20 `explicit` 的作用

> 来源：题库第 13 题 ｜ 速背卡：[13](./速背.md#cpp-13) ｜ 自测：[sel-2 · 第 13 题](./自测.md#sel-2) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：没有 `explicit` 的单参构造函数就是一条隐式转换通道，`explicit` 把这条通道关掉，只留下“我明确要构造”的写法。

**学完能做到**
- 写代码：写出带 `explicit` 构造的数值类型和带 `explicit operator bool` 的句柄类，验证哪些调用被拒绝。
- 讲出来：说清转换构造函数、复制初始化与直接初始化的区别，以及 `explicit operator bool` 为什么仍能用于 `if`。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `explicit` 会禁止所有构造写法 | 只挡隐式转换和复制初始化；直接初始化、花括号初始化、`static_cast` 都还能用 |
| `explicit operator bool` 之后就不能写 `if (h)` 了 | 语境转换（`if`、`while`、`!`、`&&`、`||`）明确允许它，被禁的是 `bool b = h;` |
| 只有单参构造函数才需要 `explicit` | 其余参数都有默认值的多参构造也可能被单参调用，同样要防隐式转换 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 单参构造函数（或其余参数都有默认值）且未标 `explicit`，就是转换构造函数 | `void f(A); f(42);` 会隐式构造临时 `A`，语义不明显的 bug 就此产生 |
| `explicit` 只挡隐式转换和复制初始化，直接初始化与 `static_cast` 仍然可用 | `A a(1)`、`A a{1}`、`static_cast<A>(1)` 都能编过，只有 `A a = 1;`、`f(1)` 被拒 |
| `explicit operator bool` 只允许语境转换（`if`、`while`、`!`、`&&`、`||`） | `if (handle)` 合法，`bool b = handle;` 非法，避免布尔值被悄悄当整数用 |
| `explicit(false)` 是 C++20 的条件显式，可按编译期条件决定是否显式 | C++17 只有“显式/非显式”二元选择，写库时要按项目标准取舍 |

**设计动机**：隐式转换让代码写起来短，但它把“类型被悄悄换掉”这件事藏在了调用点之外，参数类型写错也会静默通过；`explicit` 把这类转换变成调用方必须显式写出的动作，错误在编译期、在出错那一行暴露。`explicit operator bool` 再往前走一步：只允许 `if` 这类语境转换，既保留句柄式的自然写法，又阻止它被当作整数参与运算。

**版本差异**：`explicit operator bool` 是 C++11 引入；条件显式 `explicit(bool)` 是 C++20 特性，C++17 及以前只能用宏或偏特化模拟。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 单位/数值包装，禁止隐式混用 | `explicit Meters(double v);` |
| 智能句柄用于条件判断 | `explicit operator bool() const noexcept;` |
| 容器/字符串接受 `const char*` 但不想隐式 | `explicit MyString(const char* s);` |
| 确实需要隐式转换的包装 | 不写 `explicit`，并在注释里说明理由 |

```cpp
#include <iostream>

class Meters {
public:
    explicit Meters(double v) : value_(v) {}
    double value() const { return value_; }
private:
    double value_;
};

class Handle {
public:
    explicit operator bool() const { return valid_; }
private:
    bool valid_ = true;
};

void print(Meters m) { std::cout << m.value() << '\n'; }

int main() {
    // print(3.5);                    // 错误：explicit 禁止隐式转换
    print(Meters(3.5));               // 直接初始化
    print(static_cast<Meters>(4.5));  // 显式转换

    Handle h;
    if (h) { std::cout << "valid\n"; }        // 语境转换，允许
    // bool b = h;                    // 错误：复制初始化不走语境转换
    bool b = static_cast<bool>(h);            // 显式转换，允许
    std::cout << std::boolalpha << b << '\n';
}
```

出处：转换构造函数与 `explicit` 见 ISO C++ 标准 [class.conv.ctor]；转换函数见 [class.conv.fct]；初始化分类见 [dcl.init]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/explicit）。

**可观察验证**

```cpp
#include <type_traits>

struct Meters { explicit Meters(double) {} };
struct Grams  { Grams(double) {} };
struct Handle { explicit operator bool() const { return true; } };

static_assert(!std::is_convertible_v<double, Meters>);   // explicit 关掉隐式转换
static_assert(std::is_constructible_v<Meters, double>);  // 直接初始化仍可用
static_assert(std::is_convertible_v<double, Grams>);     // 没加 explicit 的隐式通道
static_assert(!std::is_convertible_v<Handle, bool>);     // 只能语境转换

int main() {
    const Handle h;
    if (h) { return static_cast<bool>(h) ? 0 : 1; }
    return 0;
}
```

- 四条 `static_assert` 把结论固化：`Meters` 不能隐式转换但可以构造，`Grams` 能隐式转换，`Handle` 不能隐式转 `bool`。
- 把 `if (h)` 换成 `bool b = h;`，记录编译错误——这就是语境转换和复制初始化的边界。

### ③ 面试怎么讲

**30 秒口述稿**

> `explicit` 用来修饰构造函数或转换运算符，作用是禁止隐式转换。单参构造函数如果没标 `explicit`，就相当于给类型开了一条隐式转换通道，`f(42)` 会自动构造一个临时对象，很容易掩盖参数错误。加上 `explicit` 后，隐式转换和复制初始化被禁止，但直接初始化、花括号初始化和 `static_cast` 仍然可以。C++11 起还能写 `explicit operator bool`，它只允许 `if`、`while`、`!` 这类语境转换，`bool b = obj;` 就不行，这样句柄类既好写又不会悄悄变成整数。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `explicit` 会影响 `A a{1};` 吗？ | 不会，直接列表初始化仍然允许；被禁止的是 `A a = 1;` 和隐式传参。 |
| 多参构造函数能标 `explicit` 吗？ | 能；只要其余参数有默认值，它仍可能被单参调用，同样需要防隐式转换。 |
| `explicit operator bool` 为什么能用于 `if`？ | `if` 的语境转换明确允许 `explicit` 转换函数，这条例外专门为布尔判断设计。 |
| `explicit` 有缺点吗？ | 调用处更啰嗦，某些泛型代码里需要显式构造；但它换来的类型安全通常值得。 |
| `explicit(false)` 是什么？ | C++20 的条件显式，模板库可按条件选择是否允许隐式转换；C++17 不支持。 |

### ④ 真实坑

1. **忘记标 `explicit`**：`void setSpeed(int);` 与 `void setSpeed(Speed);` 重载，调用 `setSpeed(80)` 可能悄悄构造 `Speed`，语义完全变了。
2. **以为 `explicit` 挡住了所有写法**：写完 `explicit A(int)` 后发现 `A a{1}` 仍能编译，误以为关键字失效，其实是直接初始化本就允许。
3. **`explicit operator bool` 配 `bool b = obj;`**：编译失败后改成 `operator bool()` 去掉 `explicit`，结果 `int n = obj + 1;` 也能编译，类型彻底失控。
4. **在模板里写 `T t = value;`**：上游类型加了 `explicit` 后，原本能编过的泛型代码突然失败，需要改成 `T t(value);`。

### ⑤ 练习

**A 写**：实现 `Meters`（`explicit Meters(double)`）与 `Handle`（`explicit operator bool`），把 `print(3.5)`、`bool b = h;` 等非法写法先写出来、记录编译错误，再改成合法写法；另写一个不加 `explicit` 的 `Grams` 做对比。

**提示**：① 先把非法写法逐条写出来并记录编译错误，再改合法写法；② 用 `std::is_convertible_v` 和 `std::is_constructible_v` 把结论固化成断言；③ 保留一个不加 `explicit` 的对照类型，说明隐式转换何时才会发生。

验收标准：能逐一解释每条编译错误对应哪条规则；`if (h)` 与 `static_cast<bool>(h)` 都能工作；能说明 `Grams` 为什么会隐式转换。

**B 讲**：90 秒讲“`explicit` 挡什么、不挡什么，以及 `explicit operator bool` 的特殊之处”。必须覆盖转换构造函数、复制/直接初始化、语境转换。

验收标准：不看稿；能现场写出合法与非法各两例；能解释 `if (h)` 为什么合法。

> ↑ 返回[目录](#toc)

---

<a id="unit-21"></a>
## D2 · 单元 21 `final` 关键字

> 来源：题库第 14 题 ｜ 速背卡：[14](./速背.md#cpp-14) ｜ 自测：[sel-2 · 第 14 题](./自测.md#sel-2) ｜ 耗时 10 min ｜ 难度 ★☆☆

**一句话**：`final` 是在继承链上立“到此为止”的路标：类不能再被继承，虚函数不能再被覆盖，编译器因此敢把虚调用改成直接调用。

**学完能做到**
- 写代码：写出 `final` 类和 `final` 虚函数，复现派生类覆盖时的编译错误。
- 讲出来：说清 `final` 与 `override` 的分工、去虚化的依据，以及它不能解决哪些问题。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `final` 能让所有虚调用都变快 | 只有确定不会再被覆盖的调用点才可能去虚化，收益取决于编译器和上下文 |
| `final` 可以替代虚析构 | 它不改变析构的虚性；基类析构非虚时通过基类指针 `delete` 仍是 UB |
| `final` 是保留字，不能拿来当变量名 | 它是上下文关键字，只在类头或虚函数声明的特定位置有特殊含义 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `class X final` 禁止任何类从 `X` 派生；`virtual void f() final` 禁止派生类覆盖 `f` | 违规在编译期报错，而不是运行期出现意外行为 |
| `final` 是上下文关键字，只在类头或虚函数声明位置有特殊含义 | 老代码里叫 `final` 的变量名不会被破坏 |
| 编译器知道该虚函数不会再被覆盖后，可以做去虚化（devirtualization） | 通过基类指针/引用调用时可能省掉虚表查找，但收益依实现而定 |
| `final` 不改变访问控制，也不替代虚析构 | `final` 类若基类析构非虚，通过基类指针 `delete` 仍是 UB |

**设计动机**：`final` 给继承体系加一个明确的封闭点：设计者说“这里不允许再扩展”，编译器就替他在所有派生点强制检查，避免被人无意覆盖后行为漂移。它同时是优化信息——既然虚函数不会被覆盖，通过基类指针的调用就可能被去虚化成直接调用；但封闭点必须由设计者显式声明，编译器不能替人猜。

**版本差异**：`final` 与 `override` 都是 C++11 引入的；`final` 的写法与语义在后续标准中没有变化，UE 代码里同样直接使用。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 锁定某个虚函数，禁止派生类改写 | `virtual void tick() final;` |
| 在中间层锁定，同时表明是覆盖 | `void tick() override final;` |
| 设计上不允许继承的类 | `class Sealed final { ... };` |
| 只想禁止覆盖、不限制继承 | 只给函数加 `final`，类头不加 |

```cpp
#include <iostream>

struct Base {
    virtual ~Base() = default;
    virtual void tick() final { std::cout << "Base::tick\n"; }
    virtual void draw() { std::cout << "Base::draw\n"; }
};

struct Derived : Base {
    // void tick() override;      // 错误：Base::tick 已声明为 final
    void draw() override { std::cout << "Derived::draw\n"; }
};

class Sealed final {
public:
    virtual ~Sealed() = default;
};

// class Broken : public Sealed {};   // 错误：Sealed 是 final

int main() {
    Derived d;
    Base* p = &d;
    p->tick();   // 一定是 Base::tick，编译器可去虚化
    p->draw();   // 动态派发到 Derived::draw
}
```

出处：`final` 与虚函数覆盖见 ISO C++ 标准 [class.virtual]、[class.mem]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/final）。

**可观察验证**

```cpp
#include <type_traits>

struct Base {
    virtual ~Base() = default;
    virtual void tick() final {}
};
struct Derived : Base {};

static_assert(std::is_polymorphic_v<Base>);

// struct Broken : Base { void tick() override {} };   // 解开注释：覆盖 final 函数，编译错误

int main() {
    Derived d;
    Base* p = &d;
    p->tick();   // 一定进 Base::tick，编译器可去虚化
}
```

- 分别解开 `Derived` 覆盖 `tick` 与 `class Broken : public Base` 的注释，得到“覆盖 final 函数”“继承 final 类”两类编译错误。
- 用 `g++ -O2 -S` 对比加不加 `final`：`final` 版本的调用点通常是直接 `call`，非 `final` 版本是寄存器间接调用。

### ③ 面试怎么讲

**30 秒口述稿**

> `final` 有两个位置：放在类名后面表示这个类不能被继承，放在虚函数声明后面表示这个函数不能在派生类里被覆盖。它是上下文关键字，不是保留字。`final` 的价值一是编译期就拦住违规的继承或覆盖，二是给编译器优化依据：既然这个虚函数不会再被覆盖，通过基类指针调用时可以省掉虚表查找，也就是去虚化。要注意 `final` 不改变析构的虚性，也不做访问控制，它只回答“能不能再继承/再覆盖”。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `final` 和 `override` 什么关系？ | `override` 要求“我确实覆盖了基类虚函数”，`final` 要求“后面不许再覆盖”；可写成 `override final`。 |
| `final` 能修饰普通函数吗？ | 不能，非虚函数加 `final` 是编译错误；它只对虚函数有意义。 |
| `final` 一定提升性能吗？ | 不一定；只在调用点能确定动态类型或函数已 `final` 时，编译器才可能去虚化。 |
| `final` 类能被组合吗？ | 能，组合不受限制；受限的是继承。 |
| `final` 能阻止通过基类指针 `delete` 吗？ | 不能，析构函数该虚还得虚。 |

### ④ 真实坑

1. **以为 `final` 能替代虚析构**：`class D final : public B`，`B` 析构非虚，`B* p = new D; delete p;` 仍是 UB。
2. **在非虚函数上写 `final`**：`void f() final;` 编译报错，因为 `f` 不是虚函数，`final` 没有作用对象。
3. **锁定过高层级**：在基类把接口函数标 `final`，后续所有派生类都无法定制行为，只能改基类或组合，设计被锁死。
4. **以为 `final` 能让所有调用都静态绑定**：通过 `Base*` 调用非 `final` 的 `draw()` 仍然动态派发，只有 `final` 的那个函数才可能被去虚化。

### ⑤ 练习

**A 写**：定义 `Base`（`virtual tick() final`、`virtual draw()`）和 `Derived`，先写 `Derived::tick` 记录编译错误再注释；再定义 `class Sealed final` 并尝试派生；最后给 `Derived` 加 `final`，观察更深一层派生失败。

**提示**：① 三处错误（覆盖 final 函数、派生 final 类、给非虚函数加 final）分别记录报错；② 用 `-O2 -S` 对比 `final` 前后调用点是否变成直接 `call`；③ 顺手检查基类析构是否 virtual，别让 `final` 掩盖了它。

验收标准：三处编译错误都能复现并解释；`p->tick()` 与 `p->draw()` 的输出符合预期；能说明为什么不给 `Base` 加虚析构会出问题。

**B 讲**：90 秒讲“`final` 的两个用法、一个优化依据、一个不能解决的问题”。必须覆盖类/虚函数、去虚化、虚析构。

验收标准：不看稿；能写出 `override final` 的写法；能举一个 `final` 帮不上忙的场景。

> ↑ 返回[目录](#toc)

---

<a id="unit-22"></a>
## D2 · 单元 22 四种类型转换

> 来源：题库第 15 题 ｜ 速背卡：[15](./速背.md#cpp-15) ｜ 自测：[sel-2 · 第 15 题](./自测.md#sel-2) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：四种转换按“检查强度”分工：`static_cast` 编译期检查、`dynamic_cast` 运行期检查、`const_cast` 只动 cv、`reinterpret_cast` 几乎不检查。

**学完能做到**
- 写代码：用 `dynamic_cast` 安全向下转型（指针与引用两种失败路径），并分别演示另外三种转换的适用与禁区。
- 讲出来：说清 `dynamic_cast` 为什么要求多态类型、失败时指针与引用的不同表现，以及 `reinterpret_cast` 的风险。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `static_cast` 向下转型是安全的 | 编译期只检查继承关系，不检查动态类型；类型猜错就是 UB |
| `dynamic_cast` 失败一定返回 `nullptr` | 指针版本返回 `nullptr`；引用版本没有空引用，失败抛 `std::bad_cast` |
| `const_cast` 能转换成任意类型 | 它只增删 `const`/`volatile`，改不了类型；对真正常量对象写入是 UB |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `static_cast` 在编译期完成，可用于数值转换、`void*` 往返、有继承关系的上下转型 | 向下转型不做运行期检查，类型猜错就是 UB；也不能去掉 `const` |
| `dynamic_cast` 依赖 RTTI，要求源类型是多态类型（至少一个虚函数） | 指针失败返回 `nullptr`，引用失败抛 `std::bad_cast`；对非多态类型直接编译错误 |
| `const_cast` 只增删 `const`/`volatile`，不改变类型 | 对本身就是 `const` 的对象写入是 UB；只应用于“底层对象本来可写”的旧接口 |
| `reinterpret_cast` 按位重解释，可用于指针与整数、不同指针类型互转 | 对齐、别名、可移植性全是坑；不能去掉 `const`，函数指针与对象指针互转是实现定义的 |

**设计动机**：C 风格 `(T)x` 一种语法包办所有转换，读代码时看不出风险，出问题也难搜。四种命名的转换把“意图 + 检查强度”拆开：编译期检查归 `static_cast`、需要运行期验证归 `dynamic_cast`、只动 cv 的归 `const_cast`、几乎不检查的归 `reinterpret_cast`，审查时按名字就能定位风险点。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 数值/枚举转换，明确截断 | `static_cast<int>(d)`、`static_cast<Color>(n)` |
| 基类指针安全向下转型 | `if (auto* p = dynamic_cast<D*>(base)) { ... }` |
| 引用版本，失败要捕获 | `dynamic_cast<D&>(ref)` 配 `catch (const std::bad_cast&)` |
| 调用只收 `char*` 的旧接口 | `const_cast<char*>(s.c_str())`，且保证不写 |
| 指针与整数互转做日志/哈希 | `reinterpret_cast<std::intptr_t>(p)`，不要反向伪造指针 |

```cpp
#include <cstdint>
#include <iostream>
#include <typeinfo>

struct Base { virtual ~Base() = default; };
struct A : Base { void onlyA() { std::cout << "A\n"; } };
struct B : Base { void onlyB() { std::cout << "B\n"; } };

void visit(Base* p) {
    if (auto* a = dynamic_cast<A*>(p)) { a->onlyA(); }
    else if (auto* b = dynamic_cast<B*>(p)) { b->onlyB(); }
    else { std::cout << "unknown\n"; }
}

int main() {
    A a;
    visit(&a);

    Base& r = a;
    try {
        A& ar = dynamic_cast<A&>(r);      // 成功
        (void)ar;
        B& br = dynamic_cast<B&>(r);      // 失败：抛 std::bad_cast
        (void)br;
    } catch (const std::bad_cast&) {
        std::cout << "bad_cast\n";
    }

    double d = 3.9;
    int n = static_cast<int>(d);          // 3，截断而非四舍五入

    const int ci = 7;
    int& rci = const_cast<int&>(ci);
    // rci = 8;                           // UB：ci 本身是 const 对象
    (void)rci;

    std::intptr_t addr = reinterpret_cast<std::intptr_t>(&n);
    int* back = reinterpret_cast<int*>(addr);
    std::cout << n << ' ' << *back << '\n';
}
```

出处：四种转换分别见 ISO C++ 标准 [expr.static.cast]、[expr.dynamic.cast]、[expr.const.cast]、[expr.reinterpret.cast]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/static_cast、https://en.cppreference.com/w/cpp/language/dynamic_cast、https://en.cppreference.com/w/cpp/language/const_cast、https://en.cppreference.com/w/cpp/language/reinterpret_cast）。

**可观察验证**

```cpp
#include <iostream>
#include <typeinfo>

struct Base { virtual ~Base() = default; };
struct A : Base {};
struct B : Base {};

int main() {
    A a;
    Base& r = a;

    if (auto* p = dynamic_cast<B*>(&r)) {   // 指针版本：失败返回 nullptr
        std::cout << "B " << typeid(*p).name() << '\n';
    } else {
        std::cout << "not B\n";
    }

    try {
        (void)dynamic_cast<B&>(r);          // 引用版本：失败抛 std::bad_cast
    } catch (const std::bad_cast&) {
        std::cout << "bad_cast\n";
    }
}
```

- 运行输出 `not B` 和 `bad_cast`：指针失败返回 `nullptr`、引用失败抛异常，两种表现一次看全。
- 加 `-fno-rtti` 重新编译，`dynamic_cast` 处直接报错，说明它依赖运行期类型信息。

### ③ 面试怎么讲

**30 秒口述稿**

> 我按检查强度来分。`static_cast` 是编译期转换，用于数值、`void*` 往返和继承体系上下转型，向下转型它不检查，猜错就是 UB。`dynamic_cast` 是运行期安全向下转型，要求类型多态，也就是至少有一个虚函数；指针失败返回 `nullptr`，引用失败抛 `std::bad_cast`。`const_cast` 只增删 `const`/`volatile`，对真正常量对象写入是 UB。`reinterpret_cast` 是按位重解释，指针和整数互转、不同指针互转都能做，但可移植性和别名风险最大，非必要不用。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么 `dynamic_cast` 要求多态类型？ | 它要靠虚表里的 RTTI 判断动态类型，没有虚函数就没有这个信息。 |
| `dynamic_cast` 失败会怎样？ | 指针返回 `nullptr`；引用没有空引用，只能抛 `std::bad_cast`。 |
| `static_cast` 能做向下转型吗？ | 能，只要存在继承关系，但不做运行期检查，类型不对就是 UB。 |
| `const_cast` 后写入一定 UB 吗？ | 只有对象本身是 `const` 才是；底层对象本来可写时，去掉 `const` 后写入是合法的。 |
| `reinterpret_cast` 能去 `const` 吗？ | 不能，去 cv 只能用 `const_cast`；需要两者时先 `const_cast` 再 `reinterpret_cast`。 |

### ④ 真实坑

1. **`static_cast` 猜错动态类型**：`Base*` 实际指向 `B`，却 `static_cast<A*>` 后调用 `A` 的成员，读到错误偏移，UB。
2. **对非多态类型用 `dynamic_cast`**：类里没有虚函数，`dynamic_cast<D*>(base)` 直接编译失败；补一个虚析构才有多态信息。
3. **引用版 `dynamic_cast` 没捕获异常**：`dynamic_cast<D&>(base)` 失败时抛 `std::bad_cast`，没有 `try/catch` 直接 terminate。
4. **`const_cast` 写常量**：对 `const int` 或字符串字面量去 `const` 后写入，可能落在只读段，直接段错误。
5. **`reinterpret_cast` 破坏严格别名**：把 `float*` 转成 `int*` 解引用，编译器按别名规则优化后结果不可预期。

### ⑤ 练习

**A 写**：定义 `Base`（虚析构）与 `A`、`B`，实现 `visit(Base*)` 用 `dynamic_cast` 分派；再写引用版本并用 `try/catch` 捕获 `bad_cast`；最后用 `static_cast`、`const_cast`、`reinterpret_cast` 各写一个合法用例和一个“注释掉的非法/UB 用例”。

**提示**：① 用 `-fno-rtti` 编译一次，观察 `dynamic_cast` 直接报错；② 引用版一定要包 `try/catch`，否则失败直接 terminate；③ 每个“非法/UB 用例”写成注释并说明触发条件。

验收标准：`visit` 对 `A`、`B`、未知类型输出正确；引用版能捕获异常；能解释每个注释掉的写法为什么非法或 UB；`-Wall -Wextra` 无警告。

**B 讲**：3 分钟讲“四种转换的适用场景、检查时机和失败表现”。必须覆盖多态要求、`nullptr`/`bad_cast`、`const_cast` 的 UB 边界、`reinterpret_cast` 的可移植性。

验收标准：不看稿；四者各至少一个场景；能现场写出 `dynamic_cast` 指针与引用两种写法。

> ↑ 返回[目录](#toc)

---

<a id="unit-23"></a>
## D2 · 单元 23 `this` 指针

> 来源：题库第 16 题 ｜ 速背卡：[16](./速背.md#cpp-16) ｜ 自测：[sel-2 · 第 16 题](./自测.md#sel-2) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：`this` 是非静态成员函数隐含的第一个参数，指向“这次调用发生在哪个对象上”；它的类型会随函数的 `const` 限定一起变。

**学完能做到**
- 写代码：用返回 `*this` 的成员函数实现链式调用，并区分 `const` 与非 `const` 版本返回的类型。
- 讲出来：说清 `this` 在普通/`const` 成员函数中的类型、为什么静态函数没有 `this`，以及 `delete this` 的前提。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `this` 就是对象本身 | 它是指向对象的指针右值，不能赋值，解引用才得到对象 |
| `const` 成员函数里返回 `*this` 没关系 | `*this` 是 `const T`，返回 `T&` 编译失败，必须返回 `const T&` |
| 任何对象都能 `delete this` | 只对 `new` 出来的对象成立，而且之后不能再访问任何成员 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 非静态成员函数隐含 `this` 参数，普通函数中类型是 `T*`，`const` 成员函数中是 `const T*` | `const` 函数里改成员编译失败，正是 `this` 被加上了 `const` |
| `this` 是指针右值，不能赋值，但可以解引用得到对象本身 | 链式调用写 `return *this;`，返回类型决定是拷贝还是引用 |
| 静态成员函数不与对象绑定，没有 `this` | 静态函数里写 `this->x` 直接编译失败，必须把对象传进来 |
| 构造/析构期间调用虚函数，派发到当前构造/析构的类，而不是最终派生类 | 构造函数里调虚函数拿不到派生类行为，`this` 的动态类型此时是当前类 |

**设计动机**：成员函数必须知道“这次调用作用在哪个对象上”，语言用隐含的 `this` 参数传递这件事；把 `this` 暴露出来，才能实现链式调用、自赋值检查和 CRTP 这类依赖“当前对象”的写法。`const` 成员函数把 `this` 变成 `const T*`，让只读契约在函数内部也成立，而不是只靠调用方自觉。

**版本差异**：C++23 引入显式对象参数（deducing this），成员函数可以把对象参数显式写在参数表里，`this` 不再是获取当前对象的唯一途径；C++23 之前只能依赖隐含 `this`。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 链式调用，返回自身引用 | `T& add(int v) { ...; return *this; }` |
| `const` 版本链式调用 | `const T& dump() const { ...; return *this; }` |
| 参数与成员同名 | `this->value_ = value;` |
| 基类模板里调用派生类实现（CRTP） | `static_cast<Derived*>(this)->impl();` |

```cpp
#include <iostream>

class Builder {
public:
    Builder& add(int v) {
        sum_ += v;
        return *this;                 // 返回当前对象，支持链式调用
    }

    Builder& setSum(int sum) {
        this->sum_ = sum;             // this-> 消除与参数的同名歧义
        return *this;
    }

    const Builder& dump() const {     // 这里 this 的类型是 const Builder*
        std::cout << sum_ << '\n';
        return *this;
    }

    static int version() { return 1; }   // 静态函数：没有 this

private:
    int sum_ = 0;
};

int main() {
    Builder b;
    b.add(1).add(2).setSum(10).add(5).dump();   // 15
    std::cout << Builder::version() << '\n';
}
```

出处：非静态成员函数的隐含对象参数见 ISO C++ 标准 [class.mfct.non-static]、[expr.prim.this]；构造/析构期间的虚调用见 [class.cdtor]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/this）。

**可观察验证**

```cpp
#include <type_traits>
#include <utility>

struct Builder {
    Builder& add(int) { return *this; }
    const Builder& dump() const { return *this; }
};

static_assert(std::is_same_v<decltype(std::declval<Builder&>().add(1)), Builder&>);
static_assert(std::is_same_v<decltype(std::declval<const Builder&>().dump()), const Builder&>);

int main() {
    Builder b;
    b.add(1).add(2);   // 比较 &b.add(1) 与 &b：相等说明返回同一个对象
}
```

- 在 `add` 里打印 `this` 与 `&b`，相等说明链式调用作用在同一对象上；把返回类型改成 `Builder` 后地址不同、结果丢失。
- 两条 `static_assert` 锁定 `const` 版 `dump` 返回 `const Builder&`：`this` 的类型变化会一路传导到返回值。

### ③ 面试怎么讲

**30 秒口述稿**

> `this` 是非静态成员函数隐含的一个参数，指向调用这个函数的对象。普通成员函数里它的类型是 `T*`，`const` 成员函数里是 `const T*`，所以常量函数不能改成员。它本身是指针右值，不能重新赋值，但可以解引用：返回 `*this` 就能做链式调用，返回类型写 `T&` 还是 `T` 决定了不拷贝还是拷贝。静态成员函数没有 `this`，因为它不属于任何对象。另外构造函数里调用虚函数不会派发到派生类，因为构造期间对象的动态类型还是当前类。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `this` 能为 `nullptr` 吗？ | 合法调用中不会；通过空指针调用成员函数是 UB，即使函数体没访问成员。 |
| `const` 成员函数里怎么改成员？ | 用 `mutable`，或 `const_cast` 掉 `this` 的 `const`，但对象本身是 `const` 时写入是 UB。 |
| `delete this` 合法吗？ | 对象必须是 `new` 出来的，且之后不能再访问任何成员；常见于引用计数释放。 |
| 返回 `*this` 用值还是引用？ | 链式调用用 `T&`；按值返回会拷贝，且在基类里按值返回会发生切片。 |
| 静态函数里怎么访问对象？ | 把对象作为参数传进去，或用类名访问静态成员。 |

### ④ 真实坑

1. **在 `const` 函数里返回非 `const` 引用**：`T& get() const { return *this; }` 编译失败，因为 `*this` 是 `const T`，硬转要 `const_cast` 且可能 UB。
2. **链式调用返回值而非引用**：`Builder add(int v) { ...; return *this; }` 每次调用都拷贝一份，修改作用在临时对象上，链式结果全丢。
3. **构造/析构中调虚函数**：基类构造函数里调 `virtual setup()`，只会执行基类版本，派生类成员还没构造，行为与预期不符。
4. **空指针调用成员函数**：`Builder* p = nullptr; p->version();` 若 `version` 是静态函数尚可，若是非静态函数即使不访问成员也是 UB。

### ⑤ 练习

**A 写**：实现 `Builder`，提供 `add`、`setSum`（用 `this->` 消除同名）、`const` 版 `dump` 返回 `const Builder&`，在 `main` 中写一条四步链式调用；再写一个 `static version()` 并尝试在其中使用 `this`，记录编译错误。

**提示**：① 在链式调用里比较 `&b.add(1)` 与 `&b` 是否相等；② 把返回类型从 `Builder&` 改成 `Builder`，看结果是否丢失；③ 在 `static` 函数里写 `this`，把编译错误留作证据。

验收标准：链式调用输出正确；把 `add` 的返回类型改成 `Builder` 后能观察到拷贝与结果丢失；能解释 `const` 版 `dump` 的返回类型为什么必须是 `const Builder&`。

**B 讲**：2 分钟讲“`this` 的类型、用途与三个禁区”。必须覆盖 `const` 成员函数、静态函数、构造期间虚调用。

验收标准：不看稿；能写出链式调用的两种返回类型并说明差异；能解释 `delete this` 的前提。

> ↑ 返回[目录](#toc)

---

<a id="unit-24"></a>
## D2 · 单元 24 `#include <a.h>` 与 `#include "a.h"`

> 来源：题库第 19 题 ｜ 速背卡：[19](./速背.md#cpp-19) ｜ 自测：[sel-3 · 第 19 题](./自测.md#sel-3) ｜ 耗时 10 min ｜ 难度 ★☆☆

**一句话**：双引号多了一步“先找当前文件所在目录”，尖括号直接从系统/`-I` 搜索路径找；找的是哪份同名头文件，取决于这个顺序。

**学完能做到**
- 写代码：用两种形式各包含一个头文件，验证双引号形式找不到时会回退到系统路径。
- 讲出来：说清搜索顺序、`-I` 与 `-isystem` 的差别，以及“当前目录”到底相对谁。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 双引号形式只搜当前目录 | 找不到时会回退到尖括号那套搜索路径，不会直接失败 |
| 引号里的相对路径相对编译时的工作目录 | 相对的是“包含它的那个源文件”，不是 cwd |
| 两种写法完全等价，随便用 | 搜索顺序不同，同名头文件会命中不同版本，这是真实事故来源 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `"a.h"` 先搜索当前源文件所在目录（实现定义），找不到再按 `<a.h>` 的路径搜索 | 项目内头文件用引号，能在源码旁边直接找到；但可能误命中同名文件 |
| `<a.h>` 只在实现定义的系统目录和 `-I` 目录里找，不搜索当前源文件目录 | 系统/第三方头用尖括号，避免被项目里的同名文件劫持 |
| `-I` 对两种形式都生效，通常插在系统目录之前；`-isystem` 标记系统头 | `-isystem` 的头默认抑制警告，且一般排在 `-I` 之后，适合第三方库 |
| 引号形式中的相对路径相对于“包含它的那个文件”，不是编译时的工作目录 | 从别的目录调用编译器，`#include "a.h"` 仍然找源文件旁边，不是 cwd |

**设计动机**：一个工程里同时有“项目自己的头”和“系统/第三方的头”，两种来源的优先级必须可区分，否则同名头文件会互相劫持。双引号先看源文件目录，是把“就近定义”的便利留给项目代码；尖括号只走配置好的搜索路径，让标准库和第三方库的命中位置由构建系统统一决定，而不是被某个源文件旁边恰好同名的文件影响。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 包含项目内、与源文件同目录的头 | `#include "config.h"` |
| 包含标准库或第三方已安装头 | `#include <vector>`、`#include <fmt/format.h>` |
| 项目统一 include 目录 | 编译加 `-Iinclude`，代码写 `#include "module/foo.h"` |
| 第三方头不想被警告污染 | 编译加 `-isystem third_party/include` |

```cpp
// 双引号形式先查当前文件目录，找不到再回退到尖括号的搜索路径，
// 所以下面两行都能编过；真实项目里系统头应坚持用 <>。
#include <cstdio>
#include "cstdio"

int main() {
    std::printf("%s\n", "quoted form falls back to system paths");
}
```

出处：头文件搜索规则见 ISO C++ 标准 [cpp.include]；`-I`/`-isystem` 属于编译器实现选项，可对照 GCC 文档（https://gcc.gnu.org/onlinedocs/gcc/Directory-Options.html）与 cppreference（https://en.cppreference.com/w/cpp/preprocessor/include）。

**可观察验证**

```plaintext
g++ -H -c main.cpp                      # -H：把每个实际命中的头文件路径打到 stderr
g++ -Iinclude -H -c main.cpp            # 加 -I 后再看一遍命中顺序
```

- 先只用 `-H` 编译：引号形式先命中源文件旁边的 `src/a.h`，尖括号形式直接命中 `include/a.h`。
- 删掉 `src/a.h` 再编译：引号形式的命中路径变成 `include/a.h`，这就是“找不到回退到尖括号路径”的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 区别在搜索顺序。双引号形式先找当前源文件所在目录，找不到再回退到尖括号那套系统路径；尖括号形式不搜索当前目录，直接查系统目录和 `-I` 指定的目录。所以项目自己的头文件用双引号，标准库和第三方库用尖括号。`-I` 对两种形式都生效，`-isystem` 则把目录标记成系统头，通常还会抑制警告。要注意引号里的相对路径是相对于包含它的源文件，不是相对于编译时的工作目录。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 双引号找不到会失败吗？ | 不会，标准要求继续按尖括号的路径搜索，找到就用。 |
| 项目头文件用尖括号行吗？ | 配上 `-I` 可以，但语义上不推荐；也更容易被系统同名头抢先命中。 |
| `-I` 和 `-isystem` 有什么区别？ | 两者都加搜索目录；`-isystem` 标记为系统头，抑制警告且通常优先级更低。 |
| 为什么同名头文件会包含错？ | 搜索顺序决定命中哪一份；双引号先看当前目录，尖括号先看系统目录。 |
| 能写绝对路径吗？ | 能，但不推荐；破坏可移植性，应该靠 include 目录配置。 |

### ④ 真实坑

1. **项目里有个 `vector` 文件**：源文件旁边放了同名头，`#include "vector"` 命中本地版本，标准库接口全部消失。
2. **以为引号相对 cwd**：在构建目录执行编译，`#include "a.h"` 实际找的是源文件旁边，不是构建目录，路径配置全错。
3. **用 `-I` 引入第三方库**：第三方头的大量警告淹没自己的告警，应该用 `-isystem`。
4. **头文件里写相对路径 `../src/foo.h`**：换个包含层级就断，重构目录后大面积编译失败。

### ⑤ 练习

**A 写**：建一个最小目录：`src/main.cpp`、`include/a.h`、`src/a.h`，让两份 `a.h` 定义不同的宏；分别用 `"a.h"` 和 `<a.h>`（配 `-Iinclude`）包含并打印宏值，验证命中的是哪一份。

**提示**：① 用 `g++ -H` 看每个 include 实际命中的路径；② 在 `src/` 和 `include/` 各放一个同名 `a.h`，观察两种写法的命中差异；③ 第三方库目录改用 `-isystem`，对比警告数量。

验收标准：能准确预测两种写法各命中哪份头文件；能解释 `-I` 的插入位置；把 `src/a.h` 删除后，引号形式能回退到 `-I` 路径。

**B 讲**：90 秒讲“两种 include 的搜索顺序与工程约定”。必须覆盖当前目录、回退规则、`-I`/`-isystem`。

验收标准：不看稿；能画出搜索顺序；能说出一个同名头文件导致误包含的例子。

> ↑ 返回[目录](#toc)

---

<a id="unit-25"></a>
## D2 · 单元 25 命名空间

> 来源：题库第 20 题 ｜ 速背卡：[20](./速背.md#cpp-20) ｜ 自测：[sel-3 · 第 20 题](./自测.md#sel-3) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：命名空间是给名字加一层前缀的编译期容器，用来隔离同名符号；`using` 只是把这层前缀省掉，并没有改变名字属于谁。

**学完能做到**
- 写代码：写出嵌套命名空间、匿名命名空间和 `inline namespace` 版本化，并验证名字解析结果。
- 讲出来：说清 `using` 声明与 `using` 指令的区别、匿名命名空间的链接属性，以及头文件里为什么不要 `using namespace`。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `using namespace` 只是少写前缀 | 它把整个命名空间的名字倒进当前作用域，容易产生二义性 |
| 匿名命名空间里的名字是外部链接 | 它具有内部链接，等价于文件级 `static`，每个 TU 各一份 |
| `inline namespace` 只是给版本起别名 | 它的成员可被外层直接访问、参与名字查找，像“默认版本”的入口 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `namespace` 建立独立作用域，可嵌套、可多次打开、可跨文件累加 | 同一个命名空间可以分散在多个头文件里，链接时合并；名字冲突被前缀隔离 |
| `using` 声明只引入一个名字，参与重载；`using` 指令让整个命名空间的名称可见 | 声明影响面小、可控；指令会把一堆名字倒进当前作用域，容易产生歧义 |
| 匿名命名空间内的名字具有内部链接，每个 TU 一份 | 等价于文件级 `static`，适合放只在本 `.cpp` 使用的辅助函数 |
| `inline namespace` 的成员可以被外层命名空间直接访问 | 常用于版本化：`MyLib::func` 自动指向当前版本，旧版本仍可用限定名访问 |

**设计动机**：C++ 没有包管理器式的模块边界，命名空间就是最轻量的隔离手段：它不改链接属性、不引入运行期开销，只影响名字查找。`using` 声明与指令的区别、匿名命名空间、`inline namespace` 都是在同一套名字查找规则上做取舍——要么少写前缀，要么控制影响范围，要么让版本升级对调用点透明。

**版本差异**：`inline namespace` 是 C++11 引入；嵌套命名空间定义 `namespace app::core { }` 是 C++17 才允许，C++17 之前必须逐层写 `namespace app { namespace core { } }`。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 按模块隔离名字 | `namespace app::core { ... }`（C++17） |
| 只引入某个函数 | `using app::core::log;` |
| 仅本文件可见的辅助函数 | `namespace { void helper(); }` |
| 库版本升级但保持调用点不变 | 外层放 `inline namespace v2`，旧版放 `namespace v1` |

```cpp
#include <iostream>

namespace app::core {                 // C++17 嵌套命名空间定义
inline namespace v2 {
    void log() { std::cout << "v2\n"; }
}
namespace v1 {
    void log() { std::cout << "v1\n"; }
}
}

namespace {
void helper() { std::cout << "local\n"; }   // 内部链接，仅本 TU 可见
}

using app::core::v1::log;              // using 声明：只引入这一个名字

int main() {
    app::core::log();                  // v2：inline namespace 直接可见
    app::core::v1::log();              // v1
    log();                             // v1：using 声明引入的名字
    helper();
}
```

出处：命名空间定义见 ISO C++ 标准 [namespace.def]；`using` 声明与指令见 [namespace.udecl]、[namespace.udir]；匿名命名空间见 [namespace.unnamed]；内联命名空间见 [namespace.inline]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/namespace）。

**可观察验证**

```cpp
namespace app {
inline namespace v2 { constexpr int version() { return 2; } }
namespace v1 { constexpr int version() { return 1; } }
}

static_assert(app::version() == 2);       // inline namespace 的成员在外层直接可见
static_assert(app::v1::version() == 1);   // 旧版本仍可用限定名访问

int main() {}
```

- 两条 `static_assert` 通过：`app::version()` 命中 `v2`，`app::v1::version()` 命中旧版。
- 把 `inline` 删掉再编译，`app::version()` 立刻报错，说明“外层默认入口”是 `inline` 给的。

### ③ 面试怎么讲

**30 秒口述稿**

> 命名空间主要解决名字冲突和代码组织问题。它把一组名字放进独立作用域，可以嵌套、可以多次打开，同一个命名空间能分散在多个文件里。`using` 有两种：`using` 声明只引入一个名字，还能参与重载；`using` 指令把整个命名空间的名称都变成可见，容易制造歧义，所以头文件里不要写 `using namespace`。匿名命名空间给内部链接，等价于文件级 `static`。C++11 的 `inline namespace` 常用在版本化上，外层直接访问默认指向新版本，旧版本还能用完整限定名调用。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `using` 声明和 `using` 指令区别？ | 声明只引入单个名字，影响面可控；指令让整个命名空间的名字可见，查找时容易二义。 |
| 匿名命名空间和 `static` 一样吗？ | 效果等价，都是内部链接；匿名命名空间还能包住类型和模板。 |
| `inline namespace` 解决什么问题？ | 版本化：成员可被外层直接访问，升级默认版本不影响既有调用点。 |
| 头文件里能写 `using namespace std;` 吗？ | 不应该，会把整个标准库名字倒进所有包含者的作用域，冲突和歧义不可控。 |
| 命名空间能起别名吗？ | 能，`namespace fs = std::filesystem;`；别名只影响书写，不改变实体归属。 |

### ④ 真实坑

1. **头文件里 `using namespace`**：每个包含该头的 TU 都被污染，`count`、`distance` 之类的名字与标准库撞车，报二义性错误。
2. **`using` 指令导致二义性**：同时 `using namespace A; using namespace B;`，两边都有 `log()`，调用处直接编译失败，且报错位置离引入点很远。
3. **匿名命名空间里定义类型**：每个 TU 各有一份，跨 TU 传递该类型会违反 ODR，链接期行为异常。
4. **`inline namespace` 放错层级**：把新版本放在 `inline namespace` 外面，调用点不会自动升级，用户仍然链接到旧实现。

### ⑤ 练习

**A 写**：定义 `app::core`，内含 `inline namespace v2` 与 `namespace v1` 两个同名 `log()`；在 `main` 中分别用完整限定名、`using` 声明调用；再加一个匿名命名空间的 `helper()`，验证外部 TU 无法访问。

**提示**：① 同时 `using` 两个命名空间的同名函数，复现二义性错误；② 去掉 `inline` 看 `app::core::log()` 是否失效；③ 用 `nm` 确认匿名命名空间的符号是本地符号而不是全局符号。

验收标准：三个 `log` 调用输出符合预期；去掉 `inline` 后 `app::core::log()` 编译失败并解释原因；匿名命名空间的符号在另一 TU 中不可见。

**B 讲**：2 分钟讲“命名空间的四个用法与两条禁用规则”。必须覆盖嵌套、`using` 两种形式、匿名命名空间、`inline namespace`。

验收标准：不看稿；能现场写出 C++17 嵌套定义；能解释头文件里为什么禁用 `using namespace`。

> ↑ 返回[目录](#toc)

---

<a id="unit-26"></a>
## D2 · 单元 26 `auto` 与 `decltype`

> 来源：题库第 46 题 ｜ 速背卡：[46](./速背.md#cpp-46) ｜ 自测：[sel-5 · 第 46 题](./自测.md#sel-5) ｜ 耗时 16 min ｜ 难度 ★★★

**一句话**：`auto` 按模板推导规则“剥掉引用和顶层 `const`”，`decltype` 则原样保留表达式的类型与值类别；想两者兼得就写 `decltype(auto)`。

**学完能做到**
- 写代码：用 `static_assert` 验证 `auto`、`auto&`、`decltype`、`decltype(auto)` 推导出的具体类型。
- 讲出来：说清 `auto` 丢引用/丢 `const` 的规则、`decltype((x))` 为什么是引用，以及尾置返回类型的用途。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `auto` 会保留引用和顶层 `const` | `auto` 按模板推导，丢弃引用和顶层 `const`；要引用得写 `auto&` |
| `decltype(x)` 和 `decltype((x))` 一样 | 加括号后按表达式值类别推导，左值 `x` 得到 `T&`，两者可能差一层引用 |
| `auto` 返回类型也能返回引用 | `auto` 按值推导，返回引用会退化成拷贝；要用 `auto&` 或 `decltype(auto)` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `auto x = expr;` 按模板实参推导，丢弃引用和顶层 `const`/`volatile` | `auto s = getString();` 会拷贝；`const auto&` 才能零拷贝只读绑定 |
| `auto&&` 在初始化表达式为左值时折叠为左值引用 | 泛型代码里 `auto&&` 是转发引用，但直接当右值用仍然会出问题 |
| `decltype(名字)` 返回声明类型（含引用与 `const`）；`decltype((表达式))` 按值类别，左值得 `T&` | 差一对括号，结果可能是 `int` 或 `int&`，模板返回类型全靠它 |
| `decltype(auto)` 用 `decltype` 规则推导变量/返回值；尾置返回 `auto f() -> decltype(expr)` 用于依赖参数的返回类型 | 想返回引用必须用这两者，否则 `auto` 会静默拷贝 |

**设计动机**：模板和泛型代码里类型名常常长得无法手写，`auto` 让编译器从初始化式推出类型，同时强制变量必须初始化；但“按值推导”会把引用和 `const` 剥掉，于是在需要保留精确类型的场景（返回引用、转发、依赖参数的返回类型）必须有 `decltype` 和 `decltype(auto)` 补位。两套规则并存，是为了让“省事”和“精确”各有明确入口。

**版本差异**：`auto` 与 `decltype` 是 C++11 引入；`decltype(auto)` 和普通函数的 `auto` 返回类型推导是 C++14 才完备；结构化绑定（`auto [a, b] = ...`）是 C++17。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 简化迭代器/长类型 | `for (const auto& x : v)` |
| 需要精确类型（含引用） | `decltype(expr) var = ...;` |
| 返回类型依赖参数表达式 | `template<class T> auto twice(T v) -> decltype(v + v);` |
| 函数返回引用且不想手写类型 | `decltype(auto) ref() { return (g); }` |

```cpp
#include <iostream>
#include <type_traits>
#include <vector>

const int ci = 5;
int g = 0;

auto a = ci;                 // int：丢弃顶层 const
auto& b = ci;                // const int&
decltype(ci) c = 1;          // const int：保留声明类型
decltype((ci)) d = c;        // const int&：加括号后按左值表达式推导

template <class T>
auto twice(T v) -> decltype(v + v) { return v + v; }   // 尾置返回类型

decltype(auto) ref() { return (g); }                   // 返回 int&

int main() {
    static_assert(std::is_same_v<decltype(a), int>);
    static_assert(std::is_same_v<decltype(b), const int&>);
    static_assert(std::is_same_v<decltype(c), const int>);
    static_assert(std::is_same_v<decltype(d), const int&>);
    static_assert(std::is_same_v<decltype(ref()), int&>);

    ref() = 1;                       // 通过返回的引用改 g
    std::cout << g << ' ' << twice(2) << '\n';

    std::vector<int> v{1, 2, 3};
    for (const auto& x : v) { std::cout << x; }   // 不拷贝，元素只读
    std::cout << '\n';
}
```

出处：`auto` 的推导规则见 ISO C++ 标准 [dcl.type.auto.deduct]、[dcl.spec.auto]；`decltype` 见 [dcl.type.decltype]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/auto、https://en.cppreference.com/w/cpp/language/decltype）。

**可观察验证**

```cpp
#include <type_traits>

const int ci = 5;

static_assert(std::is_same_v<decltype(ci), const int>);      // 不加括号：声明类型
static_assert(std::is_same_v<decltype((ci)), const int&>);   // 加括号：左值表达式多一层引用

int main() {}
```

- 两条 `static_assert` 一行一个，把“差一对括号”的结论钉在编译期。
- 把 `decltype(auto) ref()` 改成 `auto ref()` 后写 `ref() = 1;`，编译失败，说明 `auto` 返回类型已经退化成值。

### ③ 面试怎么讲

**30 秒口述稿**

> `auto` 用模板实参推导的规则：去掉引用、去掉顶层 `const`，所以 `const int ci; auto x = ci;` 得到 `int`，想要引用或只读要写 `auto&` 或 `const auto&`。`decltype` 不一样，它对不加括号的名字直接返回声明类型，带引用和 `const`；如果写成 `decltype((x))`，就按表达式的值类别来，左值得到 `T&`。C++14 的 `decltype(auto)` 就是用 `decltype` 规则推导返回值，适合返回引用。返回类型依赖参数时，用尾置返回 `auto f() -> decltype(expr)`，否则 `auto` 返回值会丢掉引用、产生拷贝。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `auto` 会丢弃 `const` 吗？ | 会丢顶层 `const`，但底层 `const`（如 `const char*` 指向的内容）不受影响。 |
| `decltype(x)` 和 `decltype((x))` 区别？ | 前者是声明类型；后者按表达式值类别，`x` 是左值，所以多一层 `T&`。 |
| `auto` 返回值能返回引用吗？ | 不能，`auto` 按值推导会拷贝；用 `auto&`、`decltype(auto)` 或尾置 `decltype`。 |
| 为什么 `auto x = v[0]` 有时不是 `bool`？ | `std::vector<bool>` 返回代理对象，`auto` 推成代理类型，需要 `bool x = v[0]` 或 `static_cast<bool>`。 |
| `auto&&` 总是右值引用吗？ | 不一定，模板/`auto` 推导中它是转发引用，左值初始化时折叠成左值引用。 |

### ④ 真实坑

1. **`auto` 静默拷贝**：`auto s = getString();` 以为接住了引用，实际拷贝一份，热路径性能下降；改成 `const auto&`。
2. **`auto` 丢 `const` 后误改**：`const int ci = 5; auto x = ci; x = 6;` 编译通过，原以为在改常量，实际改的是副本。
3. **`decltype` 少写括号**：`decltype(x)` 是 `int`，`decltype((x))` 是 `int&`，模板里差这一层引用，返回类型和重载决议都变。
4. **代理对象陷阱**：`auto b = std::vector<bool>{true}[0];` 得到代理引用而非 `bool`，把它存起来后底层 vector 销毁就悬垂。

### ⑤ 练习

**A 写**：声明 `const int ci`、`int g`，分别用 `auto`、`auto&`、`const auto&`、`decltype(ci)`、`decltype((ci))`、`decltype(auto)` 推导并全部用 `static_assert(std::is_same_v<...>)` 锁定；再写一个返回 `int&` 的函数，分别用 `auto` 和 `decltype(auto)` 作为返回类型，观察调用方能否改到原对象。

**提示**：① 每条推导结果都用 `static_assert(std::is_same_v<...>)` 锁死，别靠肉眼；② 对比 `auto` 与 `decltype(auto)` 返回值能否改到原对象；③ 用 `typeid(...).name()` 打印一次类型名，注意它是实现相关的名字。

验收标准：所有 `static_assert` 通过；`auto` 版本返回拷贝、`decltype(auto)` 版本能改原值；能解释 `decltype((ci))` 为什么是 `const int&`。

**B 讲**：2 分钟讲“`auto` 与 `decltype` 的推导差异，以及各自的典型用法”。必须覆盖去引用/去 `const`、括号规则、`decltype(auto)` 与尾置返回。

验收标准：不看稿；能现场写出 `decltype(x)` 与 `decltype((x))` 的类型；能说出一个 `auto` 导致拷贝的例子。

> ↑ 返回[目录](#toc)

---

> 下一篇：[内存与生命周期](#ch3)

---


<a id="ch3"></a>
# 第 3 章 · 内存与生命周期

> 对应题库第 18、27、28、29、30、31、32、33、34、44、45、47 题，另含 2 个补充单元。
> 上一篇：[语言基础 ②：关键字、转换与命名空间](#ch2) ｜ 返回 [速背卡片](./速背.md)。

---

<a id="unit-27"></a>
## D3 · 单元 27 大端序与小端序

> 来源：题库第 18 题 ｜ 速背卡：[18](./速背.md#cpp-18) ｜ 自测：[sel-3 · 第 18 题](./自测.md#sel-3) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：字节序只回答一件事——多字节数值的哪个字节放在低地址；它不影响算术，只影响“同一块内存被当成字节看”的所有场合。

**学完能做到**
- 写代码：用不依赖类型双关的方式判定本机字节序，并手写大端序列化/反序列化。
- 讲出来：说清主机序、网络序、`htonl/ntohl` 的适用范围，以及为什么结构体不能直接上线。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 字节序会影响算术结果 | `1 + 1` 在大小端机器上结果相同；字节序只在把多字节对象按字节看时可见（`memcpy`、文件、网络、`reinterpret_cast`） |
| 本机是小端，所以可以直接把内存发上网 | 网络序规定为大端，x86 是小端，发送前必须用 `htonl/htons` 显式转换，收包后再 `ntohl/ntohs` |
| 用 `union` 检测字节序是标准做法 | C++ 里读非活跃联合体成员是 UB；改成 `memcpy` 到字节数组观察对象表示，语义干净且同样会被优化掉 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 大端：最高有效字节在低地址；小端：最低有效字节在低地址 | `0x12345678` 在小端机器上按地址读字节是 `78 56 34 12`，`memcpy` 进文件后换平台就解析错 |
| 字节序只在“多字节对象被按字节访问”时可见：`memcpy`、文件、网络、`reinterpret_cast`、联合体 | 纯算术、赋值、比较与字节序无关；事故几乎都出在“把对象表示当协议” |
| x86/x86-64 和主流 ARM 是小端；TCP/IP 规定网络字节序为大端 | 本机序转网络序必须显式调用 `htonl/htons`，收包时 `ntohl/ntohs`，不能假设本机就是大端 |
| C++17 没有 `std::endian`；C++20 才在 `<bit>` 提供 | C++17 只能运行期探测或用 `__BYTE_ORDER__` 这类编译器扩展，后者不可移植 |

**设计动机**：字节序问题的根源是 CPU 按字访问多字节对象，而内存和协议按字节寻址；只要同一串字节要在不同架构之间解释，就必须约定字节顺序。TCP/IP 把网络序定为大端、主机侧用 `htonl/ntohl` 显式转换，这层约定让字节流的含义与平台无关，代价是每次收发都要转换、且不能把结构体直接当协议。

**版本差异**：C++17 没有 `std::endian`，只能运行期探测或用 `__BYTE_ORDER__` 这类编译器扩展；C++20 在 `<bit>` 提供 `std::endian`，编译期即可判断本机字节序。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 运行期判断本机字节序 | 取 `uint32_t` 的地址转 `unsigned char*` 看首字节，或先 `memcpy` 到字节数组再判断 |
| 生成固定格式的字节流 | 逐字节右移写出，不依赖本机序；读回时逐字节左移拼接 |
| 本机序与网络序互转 | POSIX `<arpa/inet.h>`、Windows `<winsock2.h>` 的 `htonl/ntohl`（32 位）、`htons/ntohs`（16 位） |
| 协议字段只承载单字节 | 用 `std::uint8_t` / `char`，它们没有字节序问题，能设计成字节流就别设计成整数 |

```cpp
#include <array>
#include <cstdint>
#include <cstring>
#include <iostream>

bool isLittleEndian() {
    const std::uint32_t v = 0x01020304u;
    unsigned char b[4];
    std::memcpy(b, &v, sizeof v);        // 观察对象表示，避免 C++ 里的类型双关
    return b[0] == 0x04;
}

std::array<unsigned char, 4> toBigEndian(std::uint32_t v) {
    return { static_cast<unsigned char>(v >> 24),
             static_cast<unsigned char>(v >> 16),
             static_cast<unsigned char>(v >> 8),
             static_cast<unsigned char>(v) };     // 与主机序无关
}

std::uint32_t fromBigEndian(const std::array<unsigned char, 4>& b) {
    return (std::uint32_t(b[0]) << 24) | (std::uint32_t(b[1]) << 16) |
           (std::uint32_t(b[2]) << 8)  |  std::uint32_t(b[3]);
}

int main() {
    std::cout << (isLittleEndian() ? "little" : "big") << '\n';
    auto bytes = toBigEndian(0x12345678u);
    std::cout << std::hex << int(bytes[0]) << ' ' << int(bytes[3]) << '\n'; // 12 78
    std::cout << std::hex << fromBigEndian(bytes) << '\n';                  // 12345678
}
```

出处：对象的字节表示见 ISO C++ 标准 [basic.types] 的 object representation；C++20 才提供 `std::endian`（https://en.cppreference.com/w/cpp/types/endian）；`htonl/ntohl` 来自 POSIX `<arpa/inet.h>` 与 Windows `<winsock2.h>`，不是 C++ 标准库。

**可观察验证**

```cpp
#include <bit>
#include <cstdint>
#include <cstring>

static_assert(sizeof(std::uint32_t) == 4);
static_assert(std::endian::native == std::endian::little);   // x86/主流 ARM；大端机器删掉此行

int main() {
    const std::uint32_t v = 0x01020304u;
    unsigned char b[4];
    std::memcpy(b, &v, sizeof v);      // 观察对象表示，不做类型双关
    return b[0] == 0x04 ? 0 : 1;       // 小端：首字节是 0x04
}
```

```plaintext
g++ -std=c++20 endian.cpp -o endian && ./endian; echo $?   # 0 表示小端
objdump -s -j .data endian | head                           # 常量按宿主序落盘
```

- 返回 0 说明首字节是 `0x04`；把同样的判定换成 `std::endian::native` 断言，两条结论应当同时成立。
- 把 `0x12345678` 用 `to_be32` 写成文件后再 `xxd`，首字节必须是 `12`，与平台无关——这就是逐字节序列化与结构体直传的分水岭。

### ③ 面试怎么讲

**30 秒口述稿**

> 大端是把最高有效字节放在低地址，小端是把最低有效字节放在低地址。`0x12345678` 在大端内存里是 `12 34 56 78`，在小端里是 `78 56 34 12`。x86 和主流 ARM 是小端，TCP/IP 规定网络序是大端，所以发包前要用 `htonl` 转、收包后用 `ntohl` 转。判断方法是拿一个已知整数按字节看首字节，或者用 `memcpy` 观察对象表示。工程上我不会把结构体直接 memcpy 上网，而是逐字段序列化，这样跟主机序和编译器都解耦。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么网络序选大端？ | 与人类书写顺序一致，早期协议在大型机上定型；这是约定，不是性能优势。 |
| `htonl` 能转 64 位吗？ | 不能，只有 16 位和 32 位版本；64 位要自己逐字节处理，或使用平台扩展。 |
| 能用联合体检测字节序吗？ | C 里常见，C++ 里读非活跃成员是 UB；改成 `memcpy` 到字节数组，语义干净且同样会被优化掉。 |
| 位域受字节序影响吗？ | 位域布局本身就是实现定义的，跨平台协议不要用位域，字段类型和顺序都要显式约定。 |
| 大小端会同时出现在一个进程里吗？ | 普通进程不会；但异构设备共享内存、某些加速器场景可能出现，跨设备共享必须显式约定格式。 |

### ④ 真实坑

1. **结构体直接发网络**：`send(sock, &header, sizeof header, 0)` 把 padding、字节序、`long` 宽度一起发出去，对端换个编译器就全错。
2. **只转换了包头**：`htonl` 处理了长度字段，却把载荷里的 `int` 数组原样拷贝，接收端逐项解析时高低字节颠倒。
3. **union 双关**：`union { uint32_t i; unsigned char c[4]; } u; u.i = 1; u.c[0];` 在 C++ 中读 `c` 是 UB，开了优化可能被折叠成常量。
4. **未对齐强转读包**：`*reinterpret_cast<const uint32_t*>(buf + 1)` 在 ARM 上可能触发对齐异常，也违反严格别名规则；应 `memcpy` 到局部变量再转换。

### ⑤ 练习

**A 写**：实现 `to_be32` / `from_be32` 两个函数，要求只做移位和掩码、不依赖本机序；再写 `isLittleEndian()`；最后定义 `struct Packet { std::uint16_t id; std::uint32_t seq; }`，手写 `encode` / `decode`，把两个字段按大端写进 `std::array<unsigned char, 6>` 再读回。

**提示**：① 先写只做移位和掩码的 `to_be32/from_be32`，用十六进制打印每一步结果；② 判定本机序用 `memcpy` 到 `unsigned char[4]` 看首字节，不要用 `union`；③ 把 `htonl(0x12345678)` 的输出和自己写的 `to_be32` 对比，确认两者等价。

验收标准：在 x86 上运行时 `isLittleEndian()` 返回真；`encode` 后前两个字节是 `id` 的高字节、低字节；`decode(encode(p)) == p`；全程不出现 `reinterpret_cast<uint32_t*>`；`-Wall -Wextra` 无警告。

**B 讲**：2 分钟讲“字节序与网络传输”。必须覆盖大小端定义、网络序为什么是大端、`htonl/ntohl` 的作用范围，以及一个结构体直传翻车的例子。

验收标准：不看稿；能现场画出 `0x12345678` 在两种序下的四个字节；能解释为什么单字节字段不需要转换。

> ↑ 返回[目录](#toc)

---

<a id="unit-28"></a>
## D3 · 单元 28 `new/malloc`、`delete/free` 的区别

> 来源：题库第 27 题 ｜ 速背卡：[27](./速背.md#cpp-27) ｜ 自测：[sel-4 · 第 27 题](./自测.md#sel-4) ｜ 耗时 16 min ｜ 难度 ★★☆

**一句话**：`new` 是“分配 + 构造”，`malloc` 只分配字节；`delete` 是“析构 + 释放”，`free` 只释放字节——差的是对象的生命周期，不是内存。

**学完能做到**
- 写代码：用 `malloc` + 定位 `new` + 显式析构管理一个非平凡类型，并和 `new/delete` 版本对照。
- 讲出来：说清失败行为、类型安全、可重载性、对齐四组差异，以及为什么不能混用。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `new` 就是 `operator new` | `new` 是表达式（分配 + 构造），`operator new` 只是可重载的分配函数，只返回原始内存 |
| `malloc` 返回的内存可以直接当对象用 | 对非平凡类型，`malloc` 只给原始内存；不构造就使用是 UB，必须定位 `new` 构造、显式析构 |
| `new` 失败返回 `nullptr`，判空就行 | 默认 `new` 抛 `std::bad_alloc`；只有 `nothrow` 版本返回空，而构造抛异常时异常仍会向外传播 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `new T(args)` = 调用 `operator new` 分配 + 调用 `T` 的构造函数 | 返回的是已构造对象；构造抛异常时内存会自动回收，不会泄漏 |
| `malloc(n)` 只返回 `void*` 原始内存，不构造任何对象 | 对非平凡类型直接 `malloc` 再使用是 UB；必须定位 `new` 构造、显式调析构 |
| `delete p` = 调用析构 + `operator delete`；`free` 只释放 | `free` 掉 `new` 的对象不会执行析构，内部资源（文件、锁、`std::string`）全泄漏 |
| 失败行为不同：`new` 默认抛 `std::bad_alloc`，`malloc` 返回 `nullptr` | 用 `new` 的代码要异常安全；用 `malloc` 的代码必须逐个判空，容易漏 |
| `operator new/delete` 可按类重载，也可全局替换；`malloc/free` 只能整体替换 C 分配器 | 想给某个类做对象池，只能重载 `operator new`，`malloc` 做不到 |

**设计动机**：把“分配内存”和“构造对象”拆成两步，才能让两件事分别可替换、可保证：分配函数可按类重载做对象池，构造抛异常时编译器能自动回收已分配的内存。`malloc/free` 只面向字节、不承担对象语义，所以它没有析构这一环；两者混用就破坏了“谁分配、谁构造、谁析构”的对应关系。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 创建有构造函数的对象 | `auto p = std::make_unique<T>(args...);`，不要裸 `new` |
| 分配原始字节缓冲区 | `std::vector<std::byte>` / `std::vector<char>`，避免手写 `malloc/free` |
| 必须在已有内存上构造 | 定位 `new (ptr) T(args...)`，配对显式 `ptr->~T()` |
| 分配失败不想抛异常 | `new (std::nothrow) T(...)` 并判空，或 `std::nothrow` 版本，注意构造仍可能抛 |

```cpp
#include <cstdlib>
#include <iostream>
#include <new>

struct Widget {
    explicit Widget(int v) : value(v) { std::cout << "ctor " << value << '\n'; }
    ~Widget() { std::cout << "dtor " << value << '\n'; }
    int value;
};

int main() {
    Widget* a = new Widget(1);          // operator new 分配，然后构造
    delete a;                           // 析构，然后 operator delete

    void* raw = std::malloc(sizeof(Widget));   // 只有内存，没有对象
    Widget* b = new (raw) Widget(2);            // 定位 new：只构造，不分配
    b->~Widget();                               // 必须手动析构
    std::free(raw);                             // 只释放内存

    Widget* c = new (std::nothrow) Widget(3);   // 分配失败返回 nullptr
    if (!c) return 1;
    delete c;
}
```

出处：`new` 表达式的分配与构造顺序见 ISO C++ 标准 [expr.new]；`delete` 见 [expr.delete]；分配函数见 [basic.stc.dynamic.allocation]；定位 `new` 与 `std::nothrow` 声明在 `<new>`，可对照 cppreference（https://en.cppreference.com/w/cpp/language/new）。

**可观察验证**

```cpp
#include <cstdio>
#include <cstdlib>
#include <new>

struct Widget {
    static int dtors;
    Widget() = default;
    ~Widget() { ++dtors; }
};
int Widget::dtors = 0;

int main() {
    Widget* w = new Widget;          // 分配 + 构造
    std::free(w);                    // 错配：析构不执行，ASan 报 alloc-dealloc-mismatch
    std::printf("dtors=%d ", Widget::dtors);   // 0，说明析构根本没跑
}
```

```plaintext
g++ -std=c++17 -fsanitize=address -g mismatch.cpp -o mismatch
g++ -std=c++17 -fsanitize=address -g nothrow.cpp          # 构造抛异常也不泄漏
```

- 不加 ASan 时程序可能正常退出，但 `dtors=0` 就是“析构没有执行”的直接证据。
- 在定位 `new` 的版本里把 `b->~Widget()` 注释掉，`std::string` 成员的堆内存会漏，AddressSanitizer 的泄漏报告能指出具体分配点。

### ③ 面试怎么讲

**30 秒口述稿**

> `new` 是运算符，它做两件事：先调用 `operator new` 分配内存，再调用构造函数；`malloc` 是 C 库函数，只分配原始字节，返回 `void*`。释放侧对称：`delete` 先析构再 `operator delete`，`free` 只释放。所以对带析构逻辑的类型，`malloc` 后必须定位 `new` 构造、手动析构、再 `free`，否则析构不执行。失败行为也不同：`new` 默认抛 `bad_alloc`，`malloc` 返回空指针。还有 `operator new` 可以按类重载做对象池，`malloc` 不行。两边不能混用，混用是未定义行为。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `new` 和 `operator new` 是一回事吗？ | 不是。`new` 是表达式，包含分配和构造；`operator new` 只是可重载的分配函数，只返回内存。 |
| `new` 失败一定要检查返回值吗？ | 默认版本抛异常，不返回空；只有 `nothrow` 版本才返回 `nullptr`。 |
| `malloc(0)` 合法吗？ | 合法但实现定义：可能返回空指针，也可能返回一个不可解引用的唯一地址，不能依赖。 |
| `new` 能指定对齐吗？ | C++17 起 `new` 支持过对齐类型；`malloc` 只保证 `max_align_t` 对齐，`alignas(64)` 的类型不能用 `malloc`。 |
| 为什么 `new[]` 的数组要单独用 `delete[]`？ | 数组形式的分配函数和释放函数不同，且元素个数信息由实现保管；混用是 UB。 |

### ④ 真实坑

1. **对非平凡类型用 `malloc`**：`auto* s = (std::string*)malloc(sizeof(std::string));` 之后任何使用都是 UB，因为没有对象被构造。
2. **`free` 掉 `new` 的对象**：析构不执行，`std::string`、`std::vector`、文件句柄全部泄漏；能跑通只是运气好。
3. **定位 `new` 忘了析构**：`new (buf) T;` 之后直接 `free(buf)`，析构没跑；反过来对定位 `new` 的对象调用 `delete` 也会试图释放不属于分配器的内存。
4. **空指针判断写在构造之后**：`new (std::nothrow) T(args)` 里若构造函数抛异常，异常照样向外传播，`nothrow` 只管分配阶段。

### ⑤ 练习

**A 写**：定义带 `std::string` 成员的 `Widget`，用三种方式创建并打印构造/析构：`new/delete`、`malloc` + 定位 `new` + 显式析构 + `free`、`new (std::nothrow)`。再加一个构造函数会抛异常的版本，观察 `new` 失败时内存是否回收。

**提示**：① 先只打印构造/析构日志，把三种创建方式各跑一遍对数；② `malloc` 版本坚持三件套：定位 `new` → 显式 `~Widget()` → `free`，顺序错了日志立刻能看出来；③ 用 `-fsanitize=address` 各跑一次配对与混用版本，只观察混用版本报错。

验收标准：三种方式的构造/析构次数与顺序正确；`malloc` 版本必须显式调用 `~Widget()`；构造抛异常时不泄漏（可用 ASan 验证）；能解释每一步对应哪个标准动作。

**B 讲**：2 分钟讲“`new/delete` 与 `malloc/free` 的四组差异”。必须覆盖构造/析构、类型安全与对齐、失败行为、可重载性，并给出一个混用翻车的例子。

验收标准：不看稿；四组差异各一句结论；能现场写出定位 `new` 的正确三件套。

> ↑ 返回[目录](#toc)

---

<a id="unit-29"></a>
## D3 · 单元 29 `new` 和 `delete` 为什么必须配对

> 来源：题库第 28 题 ｜ 速背卡：[28](./速背.md#cpp-28) ｜ 自测：[sel-4 · 第 28 题](./自测.md#sel-4) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：分配路径和释放路径必须严格对称——用哪套分配函数拿到的内存，就得用配套的释放函数还回去，否则析构缺失或堆元数据被破坏。

**学完能做到**
- 写代码：给一个类重载 `operator new/delete` 与数组版本，用计数器验证配对与不配对的实际差别。
- 讲出来：说清标量/数组两套函数、构造抛异常时的自动回收、以及混用为什么是 UB。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `delete` 和 `delete[]` 只差一个符号 | 两套分配/释放函数不同；交叉使用是 UB，数组元素可能只析构第一个，堆元数据也可能被破坏 |
| `delete` 之后对象就都安全了 | `delete` 后指针悬垂，别名仍可访问；释放后置空只防同一个指针 |
| 构造抛异常时 `new` 分配的内存会泄漏 | 编译器会自动调用匹配的 `operator delete` 回收内存，只是对象析构不执行 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `new T` 对应 `delete`，`new T[n]` 对应 `delete[]`，两套分配/释放函数不同 | 交叉使用是 UB：可能只析构首元素，也可能让分配器收到错误的块大小 |
| 数组形式通常多存一个“元素个数/块大小”的 cookie（实现细节，标准不要求） | 把 `new[]` 的指针交给 `delete`，释放函数拿不到正确信息，堆结构被破坏 |
| 构造函数抛异常时，编译器自动调用匹配的 `operator delete` 回收内存 | 这是 `new` 的异常安全基础；但对象析构函数不会执行，因为对象没构造完成 |
| `delete nullptr` 是安全的空操作；对不完整类型 `delete` 是 UB | 前置声明（pimpl）场景必须在析构函数可见处包含完整定义，否则析构不执行 |
| 自定义 `operator new` 必须配同签名的 `operator delete` | 用自定义池分配、却让全局 `free` 回收，分配器状态直接错乱 |

**设计动机**：分配器必须靠同一套函数还原这块内存的来源和大小，析构也只能由知道类型的一侧执行；把 `new/delete` 与 `new[]/delete[]` 拆成两组对称入口，正是为了在类型和元素个数上都能核对“谁分配、谁释放”。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 单个对象 | `new T` + `delete`，或直接 `std::make_unique<T>` |
| 对象数组 | `new T[n]` + `delete[]`，或 `std::vector<T>` |
| 统计分配次数 | 类内重载 `operator new/delete`，计数器用 `static inline` 成员 |
| 防止重复释放 | 释放后立即置空，但置空只防同一指针，防不了别名 |

```cpp
#include <cstddef>
#include <iostream>
#include <new>
#include <stdexcept>

struct Tracked {
    static inline int live = 0, allocs = 0, deallocs = 0;

    static void* operator new(std::size_t n) {
        ++allocs;
        return ::operator new(n);
    }
    static void operator delete(void* p) noexcept {
        ++deallocs;
        ::operator delete(p);
    }
    static void* operator new[](std::size_t n) {
        ++allocs;
        return ::operator new[](n);
    }
    static void operator delete[](void* p) noexcept {
        ++deallocs;
        ::operator delete[](p);
    }

    Tracked() { ++live; }
    ~Tracked() { --live; }
};

struct Boom {
    static inline int allocs = 0, deallocs = 0;
    static void* operator new(std::size_t n) { ++allocs; return ::operator new(n); }
    static void operator delete(void* p) noexcept { ++deallocs; ::operator delete(p); }
    Boom() { throw std::runtime_error("ctor failed"); }
};

int main() {
    Tracked* one = new Tracked;
    Tracked* arr = new Tracked[3];
    std::cout << "live " << Tracked::live << " allocs " << Tracked::allocs << '\n'; // 4 2

    delete one;      // 走 operator delete
    delete[] arr;    // 走 operator delete[]
    std::cout << "live " << Tracked::live << " deallocs " << Tracked::deallocs << '\n'; // 0 2

    try { new Boom; } catch (const std::exception&) {}
    std::cout << "boom " << Boom::allocs << ' ' << Boom::deallocs << '\n'; // 1 1
}
```

出处：数组分配与 cookie 属实现细节，标准只规定行为见 ISO C++ 标准 [expr.new]、[expr.delete]；构造失败时调用匹配释放函数见 [expr.new]/[class.cdtor]；可对照 cppreference “new expression”（https://en.cppreference.com/w/cpp/language/new）。

**可观察验证**

```cpp
#include <cstddef>
#include <cstdio>
#include <new>

struct Tracked {
    static inline int allocs = 0, deallocs = 0;   // C++17 起可在类内直接定义

    static void* operator new(std::size_t n)     { ++allocs;   return ::operator new(n); }
    static void  operator delete(void* p) noexcept { ++deallocs; ::operator delete(p); }
    static void* operator new[](std::size_t n)   { ++allocs;   return ::operator new[](n); }
    static void  operator delete[](void* p) noexcept { ++deallocs; ::operator delete[](p); }
};

int main() {
    Tracked* a = new Tracked[3];
    delete[] a;                                     // 配对
    std::printf("%d %d ", Tracked::allocs, Tracked::deallocs);   // 1 1
}
```

```plaintext
g++ -std=c++17 -fsanitize=address pair.cpp -o pair && ./pair
# 把 delete[] a 改成 delete a：ASan 报 alloc-dealloc-mismatch
```

- 计数器版本能直接判断配对：`allocs == deallocs` 才是正确路径。
- 把 `delete[]` 换成 `delete` 后即使进程不崩，另外两个元素也没有析构——用 `Tracked` 析构里的打印就能验证。

### ③ 面试怎么讲

**30 秒口述稿**

> 因为 `new` 和 `delete` 不是简单的“分配/释放内存”，它们是两条对称的路径：`new T` 调 `operator new` 再构造，`delete` 先析构再调 `operator delete`；数组形式 `new T[n]` 和 `delete[]` 又是另一对函数。只有配对才能保证每个元素都析构、内存按正确的方式还回去。不配对轻则析构不执行、资源泄漏，重则堆元数据被破坏，属于未定义行为。另外构造抛异常时编译器会自动调用匹配的释放函数，所以 `new` 本身不会泄漏；真正危险的是后面忘了 `delete` 或者用了错误的释放形式。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么 `delete[]` 知道要析构几个元素？ | 常见实现会在数组指针前存元素个数，`delete[]` 据此循环调用析构；标准不规定具体形式。 |
| 对 `new T[n]` 用 `delete` 会怎样？ | UB。可能只析构第一个，也可能因为块头解释错误导致崩溃。 |
| 重复 `delete` 会怎样？ | UB，常见表现是双重释放崩溃；释放后置空只能避免同一指针再次 `delete`。 |
| 对 `nullptr` 执行 `delete` 安全吗？ | 安全，标准规定是空操作，所以析构函数里可以不判空。 |
| 为什么 pimpl 类要在头文件外定义析构？ | `delete` 需要完整类型才能调用析构；只有前置声明时是 UB，常见后果是成员析构被跳过。 |

### ④ 真实坑

1. **数组用错形式**：`delete arr;` 编译通过、运行可能不崩，但其余元素析构没执行，内部资源静默泄漏。
2. **自定义 `operator new` 没配 `operator delete`**：类内只重载了 `new`，释放时走全局 `delete`，对象池统计错乱、内存归属错误。
3. **`delete` 后再访问**：`delete p; p->value;` 或另一个别名仍指向该地址，属于 use-after-free，ASan 能抓到，Release 下常表现为脏数据。
4. **不完整类型上 `delete`**：`struct Impl; class A { Impl* p; ~A(); };` 若析构定义在只有前置声明的地方，析构不执行，只调 `operator delete`。

### ⑤ 练习

**A 写**：实现上面的 `Tracked` 与 `Boom`，要求运行输出依次为 `4 2`、`0 2`、`1 1`；再故意把 `delete[] arr` 改成 `delete arr`，用 ASan 观察报错。

**提示**：① 先在类内重载四个函数并打印计数，别急着写业务代码；② 每次运行都对照 `allocs/deallocs`，错配立刻可见；③ 用 ASan 跑一次错配版本，把报错原文抄进笔记。

验收标准：正常版本计数完全符合预期；构造抛异常时 `allocs == deallocs`；能解释 `delete` 版本在 ASan 下的具体报错；恢复正确写法后无泄漏。

**B 讲**：2 分钟讲“为什么必须配对，以及不配对的三种后果”。必须覆盖标量/数组两套函数、构造异常自动回收、堆元数据损坏。

验收标准：不看稿；能画出 `new T[n]` 到 `delete[]` 的调用链；能说出 cookie 是实现细节而不是标准要求。

> ↑ 返回[目录](#toc)

---

<a id="unit-30"></a>
## D3 · 单元 30 堆内存与栈内存

> 来源：题库第 29 题 ｜ 速背卡：[29](./速背.md#cpp-29) ｜ 自测：[sel-4 · 第 29 题](./自测.md#sel-4) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：栈是编译器按调用边界自动伸缩的一块连续空间，堆是分配器管理的动态内存池；两者的核心差异是“谁决定生命周期”和“分配成本是否可预测”。

**学完能做到**
- 写代码：让同一个对象分别落在栈和堆上，证明生命周期差异，并测出本机线程栈的实际上限。
- 讲出来：说清分配机制、速度来源、容量约束、碎片与栈溢出五件事。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 栈一定比堆快 | 分配/释放一定更快；访问速度取决于缓存局部性，通常更好但不是绝对 |
| `std::vector` 的元素在栈上 | 容器对象（三个指针）在栈上，元素缓冲区在堆上 |
| 栈溢出只发生在深递归里 | 单个大局部数组也能爆栈；Windows 默认线程栈约 1 MB，比 Linux 更早触发 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 栈分配就是把栈指针往下挪一段，释放就是挪回来 | 分配/释放近乎零成本，且地址连续、缓存友好 |
| 堆分配要走分配器：查空闲块、可能加锁、可能向 OS 申请新页 | 单次成本高一个量级，高频小对象分配会成为热点 |
| 栈大小由线程决定：Linux 默认常见 8 MB，Windows 默认常见 1 MB | 大局部数组和深递归在不同平台表现完全不同，Windows 上更容易爆 |
| 栈对象的生命周期由作用域决定，堆对象由代码显式释放 | 返回局部变量地址必然悬垂；堆内存忘记释放则进程级泄漏 |
| 栈没有外部碎片；堆长期随机分配/释放会产生碎片 | 长驻服务运行数周后，明明有总量却分配不出连续大块 |

**设计动机**：栈帧大小必须在编译期确定，才能用“挪栈指针”实现近乎零成本的分配与释放；运行期才知道大小的内存只能由堆分配器管理，代价是查找空闲块、可能的加锁与长期碎片。容量和生命周期的差异都由此派生，所以“能不能上栈”本质上是“大小是否编译期可知”。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 小对象、生命周期跟随函数 | 直接定义为局部变量，不要 `new` |
| 对象要活过函数返回 | 返回值语义（RVO/移动），或 `std::unique_ptr` |
| 大小运行时才知道 | `std::vector<T>`，它把元素放在堆上、对象本身在栈上 |
| 需要跨线程共享 | 堆 + `std::shared_ptr`，栈对象不能跨线程传递地址 |

```cpp
#include <iostream>
#include <string>
#include <vector>

int* makeOnHeap(int v) { return new int(v); }   // 调用方负责 delete

void showStackObject() {
    int local = 0;
    int arr[4] = {1, 2, 3, 4};
    std::cout << "local " << &local << ", arr " << static_cast<const void*>(arr) << '\n';
}

int main() {
    int local = 0;
    int* heap = new int(7);
    std::vector<int> v{1, 2, 3};                 // 对象在栈，元素在堆

    std::cout << "stack " << &local << '\n';
    std::cout << "heap  " << static_cast<const void*>(heap) << '\n';
    std::cout << "vector data " << static_cast<const void*>(v.data()) << '\n';

    showStackObject();                           // 返回后它的局部变量全部失效
    int* escaped = makeOnHeap(5);                // 函数返回后堆对象仍存活
    std::cout << *escaped << '\n';
    delete escaped;
    delete heap;
}
```

出处：自动存储期与动态存储期见 ISO C++ 标准 [basic.stc.auto]、[basic.stc.dynamic]；`new` 的分配语义见 [expr.new]；线程栈大小由平台/运行时决定，标准不规定，可对照 cppreference “Storage duration”（https://en.cppreference.com/w/cpp/language/storage_duration）。

**为什么“运行期长度”必须上堆**：栈帧大小在编译期就定死了——局部变量占多少栈空间由编译器预先算好，进函数挪栈指针、出函数挪回来，所以数组维度必须是常量表达式（`std::array<T, N>` 的 `N` 也一样）。`int a[n]` 这种变长数组（VLA）是 C99 特性，不是标准 C++（GCC/Clang 当扩展支持，MSVC 不支持）；长度运行时才知道时，用 `std::vector<T>` 或 `new T[n]` 把元素放堆上，容器对象本身仍在栈上。`alloca` 可在栈上按运行时大小分配，但非标准、不能跨函数返回、容易爆栈，工程上不推荐。

**可观察验证**

```cpp
#include <cstdio>
#include <vector>

int main() {
    int local = 0;
    std::vector<int> v(3);            // 对象在栈，元素在堆

    std::printf("stack obj %p ", (void*)&local);
    std::printf("vector obj %p ", (void*)&v);
    std::printf("vector data %p ", (void*)v.data());

    int big[1 << 18] = {};            // 约 1 MB：Windows 默认栈上很可能直接溢出
    std::printf("big %d ", big[0]);
}
```

```plaintext
g++ -std=c++17 stack.cpp -o stack && ./stack
ulimit -s            # Linux：查看/调小线程栈上限（KB）
```

- 前两个地址应落在同一片高地址区间（栈），`vector data` 明显更低（堆）；用 `/proc/self/maps` 或调试器可核对所属映射。
- 逐步加大 `big` 的元素个数，在 Windows 上会比 Linux 早得多触发栈溢出，这就是默认栈 1 MB 与 8 MB 的差别。

### ③ 面试怎么讲

**30 秒口述稿**

> 栈是编译器管理的：进函数时把栈指针下移，给局部变量和调用信息腾空间，出函数时移回去，所以分配释放几乎没有成本，地址也连续。堆是运行时分配器管理的，`new` 或 `malloc` 要查找合适的空闲块，可能加锁甚至向系统要新页，成本高得多。容量上栈很小，Linux 常见 8 MB、Windows 常见 1 MB，递归深一点或者开个大数组就栈溢出；堆受进程地址空间限制。生命周期上栈跟着作用域走，堆要显式释放，忘掉就是泄漏。工程上默认用栈和容器，只有需要跨作用域才上堆。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 栈一定比堆快吗？ | 分配释放一定更快；访问速度取决于缓存局部性，栈通常更好，但不是绝对。 |
| `std::vector` 的对象在哪？ | 对象本身（三个指针）在栈上，元素缓冲区在堆上。 |
| 局部数组多大算危险？ | 单帧超过几十 KB 就要警惕，默认栈 1 MB 的平台很容易踩线。 |
| 堆为什么会碎片化？ | 反复分配释放不同大小的块，空闲区被切碎，总量够但没有足够大的连续块。 |
| 怎么改栈大小？ | 链接选项（如 `-Wl,-z,stack-size` 不通用）或线程创建时指定；主流做法是改线程属性或避免深递归。 |

### ④ 真实坑

1. **返回局部数组地址**：`int* f() { int a[4]; return a; }` 返回的是已失效的栈地址，调用方一读就是脏数据。
2. **Windows 上默认 1 MB 栈**：在 Linux 上跑得好好的 512 KB 局部缓冲区，移植到 Windows 直接栈溢出。
3. **递归没有深度上限**：解析用户输入的嵌套 JSON/表达式，深度由输入决定，几万层就爆栈；应改成显式栈或限制深度。
4. **长驻进程的堆碎片**：频繁 `new` 不同大小的消息对象，运行几天后大块分配失败，即使总空闲内存充足。

### ⑤ 练习

**A 写**：写一个函数返回 `int*` 指向堆对象、另一个返回局部数组地址，分别调用并说明结果；再写一个递归函数，用参数控制深度，逐步加大直到栈溢出（在独立进程里跑，避免拖垮调试器）；最后用 `/proc/self/maps` 或调试器观察栈与堆地址区间。

**提示**：① 先打印三类地址并用 `/proc/self/maps` 对应区间；② 用 `ulimit -s` 调小栈上限，再跑大数组看崩溃；③ 把大数组换成 `std::vector`，解释崩溃消失的原因是元素被放到了堆上。

验收标准：能复现“返回局部地址”的悬垂读；能找到本机大概的递归深度上限；能解释 `std::vector` 对象与元素分别在哪；溢出测试不会破坏其他练习进程。

**B 讲**：2 分钟讲“堆与栈的五个差异”。必须覆盖分配方式、速度、容量、生命周期、碎片，并各配一个工程后果。

验收标准：不看稿；能说出本机两个默认栈大小；能解释为什么“栈上开大数组”比“堆上 new 大数组”更危险。

> ↑ 返回[目录](#toc)

---

<a id="unit-31"></a>
## D3 · 单元 31 尾递归优化与栈内存管理

> 来源：题库第 30 题 ｜ 速背卡：[30](./速背.md#cpp-30) ｜ 自测：[sel-4 · 第 30 题](./自测.md#sel-4) ｜ 耗时 13 min ｜ 难度 ★★☆

**一句话**：尾调用是“调用完直接返回、不留后事”，理论上可以复用当前栈帧；但 C++ 标准不承诺这件事，能改写迭代就别把正确性押在编译器心情上。

**学完能做到**
- 写代码：把普通递归用累加器改写成尾递归，再给出等价的迭代版本，并对比栈深度。
- 讲出来：说清尾调用的判定条件、C++ 特有的阻碍（析构）、以及为什么 `-O0` 下不能指望它。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 写成尾递归就一定不会爆栈 | 标准不要求 TCO；`-O0` 或别的编译器下栈深仍是 O(n)，10 万层照样崩 |
| `return n * f(n - 1)` 也算尾调用 | 调用后还要用返回值做乘法，必须保留当前栈帧，不是尾调用 |
| 编译器必须支持尾调用优化 | 只是 as-if 规则允许的实现优化，标准不承诺；GCC 的 `-foptimize-sibling-calls` 属实现行为 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 尾调用要求 `return f(args);` 是最后动作，返回后不再计算、不再析构 | `return n * f(n-1);` 不是尾调用，乘法要用到返回值，必须保留当前栈帧 |
| 尾递归是尾调用的特例：被调用者是函数自己 | 可以用一个累积参数把“调用后的计算”提前，从而变成尾递归 |
| C++ 标准不要求尾调用优化，它只是 as-if 规则允许的一种实现 | 同一份代码在 GCC `-O2` 下是常量栈，在 `-O0` 或另一个编译器下可能直接爆栈 |
| 作用于有非平凡析构的局部对象会阻止尾调用 | `std::string s; return f();` 里 `s` 的析构必须在 `f` 返回后执行，栈帧不能提前复用 |

**设计动机**：复用栈帧的前提是“被调者返回后没有任何待办”，所以判定条件严格到只认 `return f(args);` 这一种形态。C++ 又多了一层阻碍：局部对象的析构必须在调用返回后执行，这让 TCO 更难保证，标准索性不把它写成要求——工程上因此要把“常量栈深”用迭代或显式栈显式保证，而不是押在优化器上。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 把递归改成尾递归 | 增加累加器参数，让递归调用成为 `return` 的唯一表达式 |
| 必须保证常量栈深 | 直接写 `while`/`for`，不要依赖优化 |
| 递归结构复杂（树、图） | 用 `std::vector` 或 `std::stack` 显式模拟，栈深度可控 |
| 线程栈太小 | 创建线程时指定栈大小，或降低单帧大小，不要把大数组放栈上 |

```cpp
#include <iostream>

long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);        // 乘法在调用之后，不是尾调用
}

long long factorialTail(int n, long long acc = 1) {
    if (n <= 1) return acc;
    return factorialTail(n - 1, acc * n);   // 尾调用：直接返回递归结果
}

long long factorialIter(int n) {
    long long r = 1;
    while (n > 1) r *= n--;
    return r;
}

long long sumTail(long long n, long long acc = 0) {
    if (n == 0) return acc;
    return sumTail(n - 1, acc + n);     // -O2 下通常被优化成循环
}

int main() {
    std::cout << factorial(10) << ' ' << factorialTail(10) << ' '
              << factorialIter(10) << '\n';
    std::cout << sumTail(10000000) << '\n';   // 不要在 -O0 下跑这一行
}
```

出处：返回语句与求值顺序见 ISO C++ 标准 [stmt.return]；优化只能遵守 as-if 规则见 [intro.abstract]；标准未规定尾调用优化，GCC 的 `-foptimize-sibling-calls` 在 `-O2` 默认开启，属实现行为，可对照 cppreference “return statement”（https://en.cppreference.com/w/cpp/language/return）。

**可观察验证**

```cpp
#include <cstdio>

long long sumTail(long long n, long long acc = 0) {
    if (n == 0) return acc;
    return sumTail(n - 1, acc + n);      // 尾调用：返回值直接就是递归结果
}

int main() {
    std::printf("%lld ", sumTail(10000000));   // -O2 下正常；-O0 下常爆栈
}
```

```plaintext
g++ -O2 -std=c++17 tco.cpp -o tco_o2
g++ -O0 -std=c++17 tco.cpp -o tco_o0
objdump -d tco_o2 | grep -A4 '<sumTail'      # -O2 版本应看到 jmp，而不是 call + ret
```

- `-O2` 产物里对自身的调用通常表现为 `jmp`（复用栈帧），`-O0` 里是 `call`，所以深递归爆栈。
- 在函数里加一个 `std::string` 局部变量再对比反汇编，`jmp` 会消失——析构阻止了尾调用。

### ③ 面试怎么讲

**30 秒口述稿**

> 尾调用就是函数在返回时直接把另一个调用的结果返回，调用之后不再做任何计算。因为它不需要保留当前帧的任何东西，编译器理论上可以复用栈帧，把递归变成循环。尾递归是它的一种特例。但要注意，C++ 标准并不强制做这个优化，GCC、Clang 在 `-O2` 一般会做，`-O0` 基本不做。C++ 里还有个额外限制：如果作用域里有带析构的局部对象，析构要在调用返回后执行，就没法尾调用。所以工程上我宁可写成迭代，或者用显式栈，保证栈深度可控。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 尾递归一定会被优化吗？ | 不会。标准不要求，优化级别、编译器、函数复杂度都会影响。 |
| 为什么调试构建不优化？ | `-O0` 要保留完整栈帧和变量位置，方便断点和回溯，尾调用会破坏这些信息。 |
| C++ 里什么会阻止尾调用？ | 调用之后还有析构、还有运算、返回类型需要转换、取局部变量地址等。 |
| 尾调用和尾递归什么关系？ | 尾递归是尾调用的子集，被调用者是自己；阶乘、累加这类可以自然改写。 |
| 怎么验证优化发生了？ | 看反汇编：尾调用通常表现为 `jmp` 而不是 `call` 后跟 `ret`。 |

### ④ 真实坑

1. **把正确性押在 TCO 上**：代码在 Release 跑得通，Debug 构建或换个编译器就栈溢出，问题只在客户现场复现。
2. **以为“尾递归写法”就等于优化**：源码写成尾递归但没开优化，栈深度依旧 O(n)，10 万层照样崩。
3. **析构阻止优化**：函数里有个 `std::string` 日志变量，尾调用就失效，而且从源码完全看不出来。
4. **递归深度由输入决定**：解析嵌套结构时没有深度上限，恶意输入直接把栈打穿，属于可被利用的稳定性问题。

### ⑤ 练习

**A 写**：实现 `factorial`、`factorialTail`、`factorialIter` 三个版本并对比结果；再写 `sumTail(n, acc)`，分别在 `-O0` 和 `-O2` 下用 `n = 10000000` 运行；对 `-O2` 版本用 `objdump -d` 或编译器资源管理器确认递归调用变成了跳转。

**提示**：① 先把三种阶乘结果对齐，再谈优化；② 深递归一律放在独立进程里跑，别拖垮调试器；③ 用 `objdump -d` 找 `jmp`，比“感觉被优化了”可靠。

验收标准：三个阶乘结果一致；`-O0` 下深递归复现栈溢出（在独立进程里跑）；`-O2` 下正常结束；能从反汇编指出 `jmp`；能解释为什么把 `sumTail` 改回 `return n + sumTail(n-1)` 就失去优化。

**B 讲**：2 分钟讲“尾递归优化到底靠不靠谱”。必须覆盖尾调用条件、标准不保证、析构阻碍、迭代兜底四点。

验收标准：不看稿；能现场把一段普通递归改写成尾递归；能说明为什么生产代码更倾向迭代或显式栈。

> ↑ 返回[目录](#toc)

---

<a id="unit-32"></a>
## D3 · 单元 32 `memcpy`、`memmove`、`strcpy` 的区别

> 来源：题库第 31 题 ｜ 速背卡：[31](./速背.md#cpp-31) ｜ 自测：[sel-4 · 第 31 题](./自测.md#sel-4) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：三者都按字节搬东西，区别只有两个——区域能不能重叠、长度从哪来；安全性则三者都不负责，边界要调用方自己保证。

**学完能做到**
- 写代码：用 `memcpy` 复制平凡结构体、用 `memmove` 处理重叠搬移、用 `snprintf` 做有界字符串拼接。
- 讲出来：说清重叠语义、`'\0'` 的处理、长度来源，以及为什么 `strncpy` 不是安全替代。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `memcpy` 和 `memmove` 只是速度差别 | 关键差别在重叠：`memcpy` 要求源目的不重叠，重叠时是 UB；重叠搬移必须用 `memmove` |
| `strncpy` 比 `strcpy` 安全 | 源长度不小于 `n` 时不补 `'\0'`，后续按字符串使用仍会越界读 |
| `memcpy` 能复制任何对象 | 只对平凡可复制类型成立；对 `std::string` 等做字节拷贝会破坏内部状态，析构时双重释放 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `memcpy` 假定源和目的不重叠，重叠时行为未定义 | 同一缓冲区内的前移/后移必须用 `memmove`，用 `memcpy` 可能得到“自我覆盖”的脏数据 |
| `memmove` 允许重叠，内部按方向复制，语义等价于先复制到临时缓冲区 | 通用拷贝可以无脑用 `memmove`，代价是少量方向和判断开销 |
| `strcpy` 从源地址复制到 `'\0'` 并包含终止符，没有长度参数 | 目标缓冲区不够大就越界写；源不是 C 字符串就越界读 |
| `memcpy/memmove` 只复制字节，不调用构造/赋值 | 只能用于平凡可复制类型；对 `std::string`、有虚表的对象做字节拷贝会破坏内部状态 |

**设计动机**：把“是否允许重叠”“长度从哪来”拆成不同函数，是为了让实现能针对各自前提选最快路径：`memcpy` 可以不判断方向、直接向量化，`memmove` 才做方向判断。代价是边界检查被彻底留给调用方——库函数不知道目标缓冲区多大，只知道要复制多少字节。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 复制固定大小的 POD 或结构体 | `std::memcpy(&dst, &src, sizeof dst)`，并 `static_assert(std::is_trivially_copyable_v<T>)` |
| 同一缓冲区内搬移 | `std::memmove(buf + dst, buf + src, n)` |
| 复制 C 字符串 | 优先 `std::string`；必须用 C 接口时用 `snprintf` 或有界封装 |
| 有界拼接/格式化 | `std::snprintf(buf, sizeof buf, "%s-%d", s, n)`，检查返回值是否被截断 |

```cpp
#include <array>
#include <cstdint>
#include <cstdio>
#include <cstring>
#include <iostream>
#include <type_traits>

struct Header { std::uint32_t magic; std::uint16_t version; };
static_assert(std::is_trivially_copyable_v<Header>);

int main() {
    Header h{0x12345678u, 2};
    Header copy{};
    std::memcpy(&copy, &h, sizeof h);        // 仅对平凡可复制类型成立

    char buf[16] = "0123456789";
    std::memmove(buf + 2, buf, 5);           // 源和目的重叠，memcpy 在这里不可用
    std::cout << buf << '\n';                // 0101234789

    std::array<char, 32> name{};
    std::strcpy(name.data(), "widget");      // 调用方保证目标足够大
    std::snprintf(name.data(), name.size(), "%s-%d", "widget", 7);

    std::cout << copy.magic << ' ' << name.data() << '\n';
}
```

出处：`memcpy/memmove/strcpy` 的语义见 C 标准 7.24.2.1、7.24.2.2、7.24.2.3，C++ 通过 `<cstring>` 引入，见 ISO C++ 标准 [cstring.syn]；重叠与终止符要求可对照 cppreference（https://en.cppreference.com/w/cpp/string/byte/memcpy）。

**可观察验证**

```cpp
#include <cstdio>
#include <cstring>

int main() {
    char buf[16] = "0123456789";
    std::memmove(buf + 2, buf, 5);        // 重叠：正确结果 0101234789
    std::printf("memmove %s ", buf);

    char bad[16] = "0123456789";
    std::memcpy(bad + 2, bad, 5);         // 重叠：UB，结果因优化而变
    std::printf("memcpy %s ", bad);
}
```

```plaintext
g++ -O2 -std=c++17 overlap.cpp -o overlap && ./overlap   # 两个结果可能不同
g++ -std=c++17 -fsanitize=address overlap.cpp             # ASan 可捕获部分越界
```

- `-O2` 下 `memcpy` 版本可能因向量化复制出比预期更多的字节，这正是“重叠时必须用 `memmove`”的依据。
- 补一个源更长、目标 32 字节的 `strncpy` 版本，再对结果调用 `strlen`，能复现“没有终止符”的越界读。

### ③ 面试怎么讲

**30 秒口述稿**

> `memcpy`、`memmove`、`strcpy` 都是按字节复制，但约束不同。`memcpy` 要求源和目的不重叠，重叠了是未定义行为，所以它最快，编译器还能做向量化。`memmove` 允许重叠，内部会判断方向，必要时反向复制，所以略慢一点。`strcpy` 是专门复制 C 字符串的，遇到 `'\0'` 停止并把终止符也复制过去，没有长度参数，目标不够大就溢出。这三个都不做边界检查。工程上我优先用 `std::string`、`std::vector`、`std::copy`；必须用 C 接口时用 `snprintf` 这类有界函数，不会用 `strcpy`。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `memmove` 怎么处理重叠？ | 判断方向：目的在源之前就正向复制，否则反向复制；语义等价于先拷贝到临时缓冲区。 |
| `memcpy(dst, src, 0)` 一定安全吗？ | 长度为 0 也不代表指针可以无效，标准仍要求指针有效，所以传空指针是 UB。 |
| `strncpy` 安全吗？ | 不完全安全：源长度不小于 `n` 时不会补 `'\0'`，后续按字符串使用就再次越界。 |
| 能 `memcpy` 一个 `std::string` 吗？ | 不能，它不是平凡可复制类型；字节拷贝会复制内部指针和 SSO 状态，导致双重释放或悬垂。 |
| `std::copy` 能处理重叠吗？ | 只有把元素往低地址搬时安全；往高地址搬要用 `std::copy_backward`。 |

### ④ 真实坑

1. **`sizeof` 用错对象**：`memcpy(dst, src, sizeof(src))` 中 `src` 若是指针，只复制 8 字节，结构体后半个字段是脏数据。
2. **重叠区用 `memcpy`**：日志缓冲区左移一个字节去重，`memcpy(buf, buf + 1, n)` 在优化版本下可能被向量化，结果比预期多复制一截。
3. **`strncpy` 没补终止符**：`strncpy(dst, src, sizeof dst)` 当源更长时，`dst` 没有 `'\0'`，紧接着 `strlen` 就越界。
4. **对非平凡类型字节拷贝**：`memcpy` 一个含 `std::vector` 成员的结构体，两个对象共享同一块堆内存，析构时双重释放。

### ⑤ 练习

**A 写**：定义 `struct Header { std::uint32_t magic; std::uint16_t version; }` 并加 `static_assert` 约束；用 `memcpy` 复制；用 `memmove` 把 `"0123456789"` 的前 5 个字符搬到下标 2；再用 `snprintf` 拼接 `"name-7"`，并检查返回值判断是否截断。最后故意用 `memcpy` 做重叠复制，观察结果不一致。

**提示**：① 长度写成 `sizeof dst` 而不是 `sizeof(src)`，并先加 `static_assert(std::is_trivially_copyable_v<T>)`；② 同一缓冲区内搬移一律用 `memmove`，不必先论证是否重叠；③ 检查 `snprintf` 返回值是否不小于缓冲区大小，以此判断截断。

验收标准：`memmove` 结果为 `0101234789`；`snprintf` 截断检查正确；能解释 `memcpy` 重叠版本为什么不可依赖；`-fsanitize=address` 下无越界。

**B 讲**：2 分钟讲“三者的区别与安全替代”。必须覆盖重叠、`'\0'`、长度来源、边界检查四点，并给出 `strncpy` 的反例。

验收标准：不看稿；能现场默写三个函数原型；能解释为什么 `memmove` 语义上等于“临时缓冲区 + memcpy”。

> ↑ 返回[目录](#toc)

---

<a id="unit-33"></a>
## D3 · 单元 33 深拷贝、浅拷贝与标准拷贝构造

> 来源：题库第 32 题 ｜ 速背卡：[32](./速背.md#cpp-32) ｜ 自测：[sel-4 · 第 32 题](./自测.md#sel-4) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：浅拷贝复制的是指针值，深拷贝复制的是指针指向的那份资源；一旦类拥有资源，拷贝语义就必须由你定义，否则默认语义就是“两个对象共用一份资源、析构两次”。

**学完能做到**
- 写代码：为持有裸数组的类写出拷贝构造、拷贝赋值（copy-and-swap）、移动构造与析构，并验证自赋值。
- 讲出来：说清三法则/五法则/零法则，以及 copy-and-swap 为什么能提供强异常安全。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 深浅拷贝的区别是“有没有调用拷贝构造” | 区别在资源：浅拷贝只复制指针值，深拷贝为指针指向的资源另分配一份 |
| 写了析构函数就够了 | 三法则要求析构、拷贝构造、拷贝赋值一起写；只写析构时默认拷贝仍会共享指针 |
| copy-and-swap 只是让代码短 | 它同时解决自赋值和强异常安全：副本构造失败时原对象完全不变 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 编译器生成的拷贝构造/赋值逐成员复制，指针成员只复制地址 | 两个对象指向同一块堆内存，任一析构后另一个悬垂，第二次析构直接双重释放 |
| 拥有资源的类需要自定义析构、拷贝构造、拷贝赋值（三法则） | 只写析构不写拷贝，容器一拷贝就崩；只写拷贝不写析构则泄漏 |
| C++11 加入移动构造/移动赋值，形成五法则；能全用 RAII 成员则零法则 | 手写五个函数容易漏 `noexcept`，导致 `std::vector` 扩容时退化为拷贝 |
| 拷贝赋值必须处理自赋值、释放旧资源、并保证异常安全 | `a = a;` 若先 `delete` 再读 `other`，读到的是已释放内存 |
| copy-and-swap：按值接收参数 → 修改副本 → `swap` 交换 | 副本构造失败时原对象不变，天然满足强异常安全；前提是 `swap` 不抛 |

**设计动机**：编译器默认的逐成员复制无法判断“指针成员指向的资源该不该独占”，所以把拥有资源的语义交给类作者定义。三法则/五法则用“析构、拷贝、移动”成组出现来强制这件事；copy-and-swap 则把赋值写成“先做副本、再交换”，让异常安全变成结构性的，而不是靠每处 `try/catch` 去补。

**版本差异**：C++11 之前只有拷贝构造和拷贝赋值（三法则）；C++11 加入移动构造、移动赋值成为五法则，并可用 `= default` / `= delete` 显式控制这些特殊成员函数。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 拥有堆数组的类 | 拷贝构造里 `new T[n]` + `std::copy`，移动构造里接管指针并置空源 |
| 拷贝赋值 | `Buffer& operator=(Buffer other) { swap(other); return *this; }` |
| 只读共享、不想深拷贝 | 用 `std::shared_ptr<const T>` 明确共享语义，不要偷偷浅拷贝 |
| 不想手写五个函数 | 成员用 `std::vector`、`std::string`、`std::unique_ptr`，遵循零法则 |

```cpp
#include <algorithm>
#include <cstddef>
#include <iostream>
#include <utility>

class Buffer {
public:
    explicit Buffer(std::size_t n = 0)
        : size_(n), data_(n ? new int[n]() : nullptr) {}

    Buffer(const Buffer& other)
        : size_(other.size_), data_(other.size_ ? new int[other.size_] : nullptr) {
        if (size_) std::copy(other.data_, other.data_ + size_, data_);
    }

    Buffer(Buffer&& other) noexcept
        : size_(other.size_), data_(other.data_) {
        other.size_ = 0;
        other.data_ = nullptr;
    }

    Buffer& operator=(Buffer other) {   // 拷贝和移动都走这里
        swap(other);
        return *this;
    }

    ~Buffer() { delete[] data_; }

    void swap(Buffer& other) noexcept {
        std::swap(size_, other.size_);
        std::swap(data_, other.data_);
    }

    std::size_t size() const { return size_; }

private:
    std::size_t size_;
    int* data_;
};

int main() {
    Buffer a(4);
    Buffer b = a;          // 深拷贝
    Buffer c;
    c = b;                 // 拷贝赋值
    c = c;                 // 自赋值：先拷贝再 swap，安全
    Buffer d = std::move(b);
    std::cout << a.size() << ' ' << c.size() << ' ' << d.size() << ' '
              << b.size() << '\n';   // 4 4 4 0
}
```

出处：拷贝构造与拷贝赋值的定义见 ISO C++ 标准 [class.copy.ctor]、[class.copy.assign]；复制省略对拷贝构造的调用影响见 [class.copy.elision]；三/五/零法则可对照 cppreference（https://en.cppreference.com/w/cpp/language/rule_of_three）。

**可观察验证**

```cpp
#include <cstddef>
#include <cstdio>
#include <cstring>

class Raw {
public:
    explicit Raw(const char* s) : n_(std::strlen(s)), p_(new char[n_ + 1]) {
        std::memcpy(p_, s, n_ + 1);
    }
    ~Raw() { delete[] p_; }
    // 故意不写拷贝构造：默认版本只复制 p_ 指针
    const char* get() const { return p_; }
private:
    std::size_t n_;
    char* p_;
};

int main() {
    Raw a("abc");
    Raw b = a;                                     // 浅拷贝：两个对象共用 p_
    std::printf("%p %p ", (void*)a.get(), (void*)b.get());   // 两个地址相同
}   // 作用域结束：b、a 依次 delete[] 同一指针 → ASan 报 double-free
```

```plaintext
g++ -std=c++17 -fsanitize=address shallow.cpp -o shallow && ./shallow   # double-free
```

- 两个 `%p` 输出相同，说明默认拷贝只复制了指针；补上深拷贝构造后地址会不同。
- ASan 的 `attempting double-free` 出现在作用域结束时，顺序正是两个析构都在释放同一块内存。

### ③ 面试怎么讲

**30 秒口述稿**

> 浅拷贝就是逐成员复制，指针成员只复制地址，结果两个对象指向同一块资源；深拷贝会为新对象重新分配一块内存，再把内容复制过去，两个对象各自独立。默认的拷贝构造和拷贝赋值都是浅的，所以只要类自己拥有资源，就必须手写析构、拷贝构造、拷贝赋值，这就是三法则；C++11 再加移动构造和移动赋值，就是五法则。我一般用 copy-and-swap 写赋值：参数按值传，先构造副本，再和 `this` 交换，这样自赋值安全，异常安全也是强的。更好的做法是零法则，成员全用容器和智能指针，一个都不手写。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 拷贝构造为什么必须传 `const&`？ | 传值会再次调用拷贝构造，无限递归；`const` 是为了能拷贝 const 对象和临时量。 |
| 拷贝赋值为什么返回 `Buffer&`？ | 支持链式赋值，并与内置类型语义一致；返回引用避免多余拷贝。 |
| 自赋值不加判断会怎样？ | 若先释放自身资源再从 `other` 拷贝，而 `other` 就是自己，就会读已释放内存。 |
| copy-and-swap 一定强异常安全吗？ | 只要拷贝构造和 `swap` 不抛就是；`swap` 应标记 `noexcept`。 |
| 移动后的源对象还能用吗？ | 处于有效但未指定状态，通常置空；只能析构、赋值或 `clear`。 |

### ④ 真实坑

1. **只写析构不写拷贝**：类里 `delete[] data_`，默认拷贝让两个对象共享指针，作用域结束连续两次 `delete[]`。
2. **赋值里先删后分配**：`delete[] data_; data_ = new int[n];` 若 `new` 抛 `bad_alloc`，对象已半毁，析构再删一次就是双重释放。
3. **自赋值崩溃**：`a = a;` 用“先释放再拷贝”的写法，`other` 与 `this` 同一对象，读到已释放内存。
4. **手写拷贝构造忘了基类**：派生类自定义拷贝构造时只复制自己的成员，基类部分走默认构造，数据静默丢失。

### ⑤ 练习

**A 写**：实现上面的 `Buffer`，加上 `push_back`/`at` 方便观察；在 `main` 中验证深拷贝独立性（改 `b` 不影响 `a`）、自赋值、移动后源对象 `size() == 0`；再用 `std::vector<Buffer>` 装入 100 个对象并 `reserve` 前后对比移动次数。

**提示**：① 先在拷贝构造里打印新分配的地址，与源地址对比；② 自赋值 `a = a;` 单独跑一次，确认内容不变；③ 用 `std::vector<Buffer>` 配合 `reserve` 观察移动次数，体会 `noexcept` 移动构造的价值。

验收标准：ASan 下无双重释放；自赋值后内容不变；移动后源对象可安全析构；能解释 `Buffer& operator=(Buffer)` 一个函数如何同时覆盖拷贝和移动赋值。

**B 讲**：3 分钟讲“深浅拷贝与三/五/零法则”。必须覆盖默认拷贝的语义、三法则的由来、copy-and-swap 的两个好处。

验收标准：不看稿；能现场写出 `operator=(Buffer other)`；能解释为什么零法则通常优于五法则。

> ↑ 返回[目录](#toc)

---

<a id="unit-34"></a>
## D3 · 单元 34 C++ 内存分区

> 来源：题库第 33 题 ｜ 速背卡：[33](./速背.md#cpp-33) ｜ 自测：[sel-4 · 第 33 题](./自测.md#sel-4) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：标准只规定存储期、链接和作用域；“代码段/数据段/BSS/堆/栈”是链接器和操作系统的落地方式，回答问题要把这两层分开说。

**学完能做到**
- 写代码：打印各类对象的地址，把函数、字面量、已初始化全局、未初始化全局、静态局部、栈、堆分别归类。
- 讲出来：说清六个区的职责，以及“标准没有规定段”的这个前提。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 内存分区是 C++ 标准规定的 | 标准只规定存储期、链接和生存期；代码段、数据段、BSS 是链接器与操作系统的实现方式 |
| 字符串字面量和普通全局变量在同一段 | 字面量通常在只读段，改写它是 UB（常见段错误）；已初始化的全局在 `.data` |
| BSS 里的变量不占内存 | 只不占可执行文件体积；运行时仍要占虚拟内存，加载时统一清零 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 标准定义的是存储期（自动/静态/动态/线程）与链接，段布局由实现决定 | 面试可以说五个区，但要补一句“标准不强制”，否则遇到特殊平台会答错 |
| 代码段存放机器指令，通常只读可执行 | 函数地址落在这里；运行时改代码段会崩溃，JIT 需要特殊内存权限 |
| 字符串字面量和 const 常量通常在只读数据段，相同字面量可合并 | 写 `"abc"[0] = 'x'` 是 UB，常见表现是段错误；两个字面量地址可能相同 |
| 已初始化（非零）的全局/静态对象在 `.data`；零初始化或未显式初始化的在 `.bss`，不占可执行文件体积 | 巨型全局数组放 BSS 会让文件很小但虚拟内存暴涨，`fork` 和内存统计都会受影响 |
| 每个线程有独立栈；堆和静态区进程内共享 | 栈地址跨线程传递必然悬垂；堆对象跨线程共享需要同步 |

**设计动机**：语言标准只需要规定“对象活多久、在哪些 TU 可见”，而“放在哪个段”是链接器和操作系统的事——把这层交给实现，同一份 C++ 代码才能落到 ELF、PE 或嵌入式链接脚本上。代价是段名不属于语言规范，回答时必须把它标注为平台约定。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 确认对象落在哪个区 | 打印地址，结合 `/proc/self/maps` 或调试器查看所属映射 |
| 避免大缓冲区进 BSS | 改为 `std::vector` 或 `std::unique_ptr<T[]>`，在堆上按需分配 |
| 只读常量共享 | `constexpr` / `inline constexpr`，编译期可见且可被优化 |
| 线程内大缓冲区 | 用堆分配或 `std::vector`，不要在线程函数里开大局部数组 |

```cpp
#include <iostream>

int g_init = 42;                 // .data
int g_zero;                      // .bss
static int s_counter = 1;        // .data，内部链接
const char* kMsg = "hello";      // 指针在 .data，字面量在只读段

void dump() {
    static int s_local = 7;      // 静态存储期，在 .data，不在栈上
    int local = 0;               // 栈
    int* heap = new int(1);      // 堆

    std::cout << "func   " << reinterpret_cast<void*>(&dump) << '\n';
    std::cout << "msg    " << static_cast<const void*>(kMsg) << '\n';
    std::cout << "g_init " << &g_init << '\n';
    std::cout << "g_zero " << &g_zero << '\n';
    std::cout << "s_cnt  " << &s_counter << '\n';
    std::cout << "s_loc  " << &s_local << '\n';
    std::cout << "local  " << &local << '\n';
    std::cout << "heap   " << static_cast<const void*>(heap) << '\n';

    delete heap;
}

int main() {
    dump();
}
```

出处：存储期与链接见 ISO C++ 标准 [basic.stc]、[basic.link]；字符串字面量的存储与不可修改见 [lex.string]；段的名字和划分属于链接器/平台约定（ELF 的 `.text/.rodata/.data/.bss`），标准不规定，可对照 cppreference “Storage duration”（https://en.cppreference.com/w/cpp/language/storage_duration）。

**可观察验证**

```cpp
#include <cstdio>

int g_init = 42;          // .data
int g_zero;               // .bss
const char* kMsg = "hi";  // 指针在 .data，字面量在只读段

int main() {
    static int s_local = 7;
    int local = 0;
    std::printf("msg %p ", (const void*)kMsg);
    std::printf("ginit %p ", (void*)&g_init);
    std::printf("gzero %p ", (void*)&g_zero);
    std::printf("sloc %p ", (void*)&s_local);
    std::printf("local %p ", (void*)&local);
}
```

```plaintext
g++ -std=c++17 sec.cpp -o sec && size sec
nm -C sec | grep -E 'g_init|g_zero'   # g_zero 是 b（bss），g_init 是 d（data）
```

- `nm` 的符号类型比肉眼猜地址可靠：`g_zero` 落在 `b`、`g_init` 落在 `d`。
- 把 `g_zero` 换成 `int big[100000000];` 后文件大小几乎不变，而启动后的虚拟内存明显上涨。

### ③ 面试怎么讲

**30 秒口述稿**

> 通常讲五个区：代码段放指令，只读；只读数据段放字符串字面量和常量；已初始化数据段放有非零初值的全局和静态变量；BSS 放未初始化或零初始化的全局和静态变量，加载时统一清零，而且不占可执行文件空间；堆放 `new` 或 `malloc` 出来的动态内存；栈放局部变量、参数和返回地址。不过我会补一句，这些段是链接器和操作系统的实现方式，C++ 标准规定的是存储期和链接，不是段名。另外每个线程有自己的栈，堆和静态区是进程内共享的。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 标准规定了五个区吗？ | 没有。标准只规定存储期、链接、对象生存期；段是实现细节，嵌入式链接脚本可以完全改掉。 |
| 为什么 BSS 能省文件空间？ | 它的内容全是 0，可执行文件只需记录大小，加载时由内核映射零页或清零。 |
| 静态局部变量在哪？ | 静态存储期，在 `.data` 或 `.bss`，不在栈上；首次执行到声明时初始化。 |
| 字符串字面量能改吗？ | 不能，修改是 UB；C++11 起类型是 `const char[N]`，用 `char*` 接会编译失败。 |
| `const` 全局变量在哪？ | 常见在只读段；命名空间作用域的 `const` 默认内部链接，每个 TU 可能各有一份。 |

### ④ 真实坑

1. **写字符串字面量**：`char* p = const_cast<char*>("abc"); p[0] = 'x';` 编译能过，运行时写只读页直接段错误。
2. **头文件里的 `const` 全局**：`const int kMax = 10;` 在头文件中默认内部链接，每个 TU 各有一份，取地址比较时并不相等。
3. **BSS 里开巨型数组**：`int cache[100000000];` 可执行文件没变大，但进程一启动虚拟内存就多几百 MB，容器内存限制下直接 OOM。
4. **把栈地址带出作用域**：`std::thread` 捕获局部变量的引用，线程运行时原栈帧早已销毁。

### ⑤ 练习

**A 写**：实现上面的 `dump()`，分别打印函数地址、字面量地址、已初始化全局、未初始化全局、静态局部、栈变量、堆变量；再用两份代码分别定义 `int big[100000000];`（全局）和 `auto big = std::make_unique<int[]>(100000000);`，对比生成文件大小与进程虚拟内存。

**提示**：① 先打印七个地址并按高低归类，再用 `/proc/self/maps` 核对；② 用 `nm` 看符号类型，别只靠地址猜段；③ 全局大数组与堆数组各做一版，对比 `size` 与进程内存。

验收标准：能根据地址把七个对象归到正确的区；能解释为什么全局大数组让文件不变大、虚拟内存却暴涨；能说清静态局部为什么不在栈上；在 Linux 上用 `/proc/self/maps` 验证至少两个地址的归属。

**B 讲**：2 分钟讲“C++ 内存分区”。必须覆盖六个区的职责、BSS 与 Data 的区别、线程栈，以及“标准不规定段”这句限定。

验收标准：不看稿；能画出示意布局；能回答“静态局部变量在哪”和“字面量能不能改”两个追问。

> ↑ 返回[目录](#toc)

---

<a id="unit-35"></a>
## D3 · 单元 35 智能指针的种类与所有权

> 来源：题库第 34 题 ｜ 速背卡：[34](./速背.md#cpp-34) ｜ 自测：[sel-4 · 第 34 题](./自测.md#sel-4) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：智能指针不是“更安全的指针”，而是三种所有权模型：独占、共享、观察；选错模型比用裸指针更危险，因为泄漏会变成静默的。

**学完能做到**
- 写代码：用 `unique_ptr` 管 C 资源、用 `shared_ptr` + `weak_ptr` 建双向结构，并验证循环引用被打破。
- 讲出来：说清控制块、引用计数、`make_shared` 的取舍，以及自定义删除器对两种指针的不同影响。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 智能指针就是“会自动 `delete` 的指针” | 它表达所有权模型：独占、共享、观察；选错模型会带来循环引用或双重控制块 |
| `shared_ptr` 是线程安全的 | 只有控制块的计数增减是原子的；被管理对象的读写仍需自己同步 |
| `make_shared` 总比 `shared_ptr(new T)` 好 | 它少一次分配，但不能传自定义删除器，且对象内存要等最后一个 `weak_ptr` 释放才归还 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `unique_ptr` 独占所有权、只能移动；默认删除器时大小与裸指针相同 | 零开销，工厂函数返回、容器存储都优先用它；复制会直接编译失败，问题提前暴露 |
| `shared_ptr` 由“对象指针 + 控制块指针”组成，强引用计数归零时销毁对象 | 常见实现为两个指针大小；计数是原子操作，高频拷贝有成本 |
| `weak_ptr` 不增加强引用计数，`lock()` 原子地尝试提升为 `shared_ptr` | 用来观察生命周期、打破循环引用；不 `lock` 直接解引用是编译错误 |
| 自定义删除器：对 `unique_ptr` 是类型的一部分，对 `shared_ptr` 存在控制块里 | `unique_ptr<FILE, FileCloser>` 与 `unique_ptr<FILE>` 是不同类型；`shared_ptr` 换删除器不改变类型 |
| `make_shared` 一次分配对象和控制块 | 少一次分配、缓存更友好；但对象内存要等最后一个 `weak_ptr` 销毁才归还，且不能传自定义删除器 |

**设计动机**：裸指针不表达“谁负责释放”，所有权只能靠注释和约定；标准库用三种类型把独占、共享、观察编码进类型系统，让复制、赋值这些操作在编译期就暴露所有权冲突。代价是 `shared_ptr` 多一次控制块分配与原子计数，所以默认选择仍是 `unique_ptr`。

**版本差异**：`unique_ptr` / `shared_ptr` / `weak_ptr` 自 C++11 起提供；`std::make_unique` 到 C++14 才进入标准库，此前只能写 `unique_ptr<T>(new T(...))`。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 独占一个动态对象 | `auto p = std::make_unique<T>(args...);` |
| 管理 C 资源（文件、句柄） | `std::unique_ptr<FILE, FileCloser>`，删除器里调 `fclose` |
| 多处共享同一对象 | `auto p = std::make_shared<T>(args...);`，按值传递 `shared_ptr` 表达共享 |
| 观察但不拥有（缓存、反向边） | `std::weak_ptr<T>`，使用时先 `lock()` 再判空 |

```cpp
#include <cstdio>
#include <iostream>
#include <memory>
#include <string>
#include <utility>

struct FileCloser {
    void operator()(std::FILE* f) const noexcept { if (f) std::fclose(f); }
};
using FilePtr = std::unique_ptr<std::FILE, FileCloser>;

struct Node {
    std::string name;
    std::shared_ptr<Node> next;   // 正向边：拥有
    std::weak_ptr<Node> prev;     // 反向边：只观察
    explicit Node(std::string n) : name(std::move(n)) {}
    ~Node() { std::cout << "~" << name << '\n'; }
};

int main() {
    auto f = FilePtr(std::fopen("demo.txt", "w"));
    if (f) std::fputs("hi", f.get());

    auto n1 = std::make_shared<Node>("n1");
    auto n2 = std::make_shared<Node>("n2");
    n1->next = n2;
    n2->prev = n1;

    std::cout << n1.use_count() << ' ' << n2.use_count() << '\n';  // 1 2
    if (auto p = n2->prev.lock()) {
        std::cout << p->name << '\n';
    }
}
```

出处：智能指针的语义与要求见 ISO C++ 标准 [util.smartptr]，`std::unique_ptr` 声明在 `<memory>`；控制块布局与 `make_shared` 的实现策略属实现细节，可对照 cppreference（https://en.cppreference.com/w/cpp/memory/shared_ptr）。

**可观察验证**

```cpp
#include <cstdio>
#include <memory>

struct Node {
    std::shared_ptr<Node> next;                 // 拥有
    ~Node() { std::puts("~Node"); }
};

int main() {
    auto a = std::make_shared<Node>();
    auto b = std::make_shared<Node>();
    a->next = b;
    b->next = a;                                // 循环引用
    std::printf("use_count a=%ld b=%ld ", a.use_count(), b.use_count());
}   // 期望两次 ~Node，实际一次都没有：两个计数始终为 1
```

```cpp
#include <cstdio>
#include <memory>

static_assert(sizeof(std::unique_ptr<int>) == sizeof(int*));   // 默认删除器：零额外开销

int main() {
    auto up = std::make_unique<int>(1);
    auto sp = std::make_shared<int>(2);
    std::printf("unique=%zu shared=%zu ", sizeof(up), sizeof(sp));   // 常见 8 16
}
```

- 把 `b->next` 改成 `std::weak_ptr<Node>` 后析构打印恢复两次，这是打破循环引用的直接证据。
- `static_assert` 通过说明 `unique_ptr` 没有额外存储；`shared_ptr` 的 16 字节来自“对象指针 + 控制块指针”。

### ③ 面试怎么讲

**30 秒口述稿**

> 标准库有三种智能指针。`unique_ptr` 是独占所有权，不能拷贝只能移动，默认删除器下大小和裸指针一样，没有额外开销，应该作为默认选择。`shared_ptr` 是共享所有权，内部有一个控制块维护强引用计数和弱引用计数，计数归零才销毁对象。`weak_ptr` 不拥有对象，只观察，用来打破循环引用，使用时用 `lock()` 提升成临时的 `shared_ptr`。另外 `make_shared` 会把对象和控制块一次分配，效率更高，但对象内存可能因为还有 `weak_ptr` 而延迟释放。自定义删除器上，`unique_ptr` 把它编进类型，`shared_ptr` 存在控制块里。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `shared_ptr` 为什么是 16 字节？ | 通常存对象指针和控制块指针两个指针；标准不规定大小，但主流实现如此。 |
| 循环引用怎么产生、怎么破？ | 两个对象互相持有 `shared_ptr`，计数永不归零；把其中一条边改成 `weak_ptr`。 |
| `shared_ptr` 线程安全吗？ | 控制块的计数增减是原子的；被管理对象的读写不安全，需要额外同步。 |
| `make_shared` 有什么缺点？ | 不能传自定义删除器；对象内存要等最后一个 `weak_ptr` 销毁才释放。 |
| `unique_ptr` 能转 `shared_ptr` 吗？ | 可以，`std::shared_ptr<T> sp(std::move(up));` 接管所有权；反向不行。 |

### ④ 真实坑

1. **同一裸指针建两个 `shared_ptr`**：`shared_ptr<T> a(p), b(p);` 产生两个独立控制块，各自计数归零，`p` 被释放两次。
2. **成员函数里写 `shared_ptr<T>(this)`**：同样造出第二个控制块，正确做法是继承 `enable_shared_from_this` 并调用 `shared_from_this()`。
3. **父子都用 `shared_ptr`**：父持有子、子持有父，离开作用域后计数都是 1，析构函数一个都不执行，内存和句柄全泄漏。
4. **`unique_ptr<T>` 接管 `new T[n]`**：默认删除器用 `delete` 而不是 `delete[]`，是 UB；数组要用 `unique_ptr<T[]>`。

### ⑤ 练习

**A 写**：用 `unique_ptr<FILE, FileCloser>` 打开并写入一个文件，离开作用域后确认关闭；实现 `Node` 的双向链表，正向用 `shared_ptr`、反向用 `weak_ptr`，打印 `use_count` 并确认析构发生；再把反向边改成 `shared_ptr`，用 ASan 或计数确认泄漏。

**提示**：① 先在 `Node` 析构里打印名字，比较 `weak_ptr` 与 `shared_ptr` 两条反向边的输出；② 每步打印 `use_count()`，确认计数在哪一次赋值后变化；③ 调用 `shared_from_this` 前先确认对象是由 `make_shared` 创建的。

验收标准：`use_count` 输出为 `1 2`；离开作用域能看到两个节点析构；改成循环引用后析构不执行；能解释为什么 `make_shared` 下 `weak_ptr` 会延长内存块的存活。

**B 讲**：2 分钟讲“三种智能指针与所有权模型”。必须覆盖独占/共享/观察、控制块、循环引用、自定义删除器四点。

验收标准：不看稿；能画出 `shared_ptr` 的对象指针与控制块关系；能说出两个“用智能指针反而更危险”的场景。

> ↑ 返回[目录](#toc)

---

<a id="unit-36"></a>
## D3 · 单元 36 全局变量的存放与头文件定义问题

> 来源：题库第 44 题 ｜ 速背卡：[44](./速背.md#cpp-44) ｜ 自测：[sel-5 · 第 44 题](./自测.md#sel-5) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：零初始化的静态存储期对象落在 BSS、不占可执行文件体积；而“在头文件里定义变量”违反的是一重定义规则，链接期必然出问题。

**学完能做到**
- 写代码：用 `extern` 声明 + 单点定义、C++17 `inline` 变量两种方式安全地共享全局状态。
- 讲出来：说清 BSS 与 Data 的划分依据、ODR 规则、以及 `const` 全局在头文件里的“隐形副本”。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 头文件里定义全局变量只是风格问题 | 每个包含它的 TU 都会产生一个定义，链接期 multiple definition，违反一重定义规则 |
| `const` 全局放头文件不报错，所以没问题 | 命名空间作用域的 `const` 默认内部链接，每个 TU 各有一份，取地址并不相等 |
| `inline` 变量就是“内联展开的变量” | `inline` 在这里的含义是允许多个 TU 定义同一实体，由链接器合并成一份 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 静态存储期对象若零初始化（未显式初始化或初值全为 0），通常放入 `.bss`；有非零初值放入 `.data` | `.bss` 只记录大小，不占文件空间；但运行时要占内存，巨型数组会让虚拟内存暴涨 |
| 标准规定的是零初始化、常量初始化与动态初始化，具体段名由实现决定 | 不同链接器/嵌入式平台可能完全不同，回答时要区分“标准行为”和“常见实现” |
| 头文件中定义非 `inline` 全局变量，每个包含它的 TU 都会产生一个定义 | 链接期报 multiple definition，违反 ODR；即使侥幸通过，也是重复存储 |
| C++17 的 `inline` 变量允许在多个 TU 定义同一实体，由链接器合并 | 头文件里可以写 `inline int g = 0;`，既有唯一定义又有外部链接 |
| 命名空间作用域的 `const` / `constexpr` 变量默认内部链接 | 头文件里写 `const int k = 5;` 不报错，但每个 TU 各有一份，取地址并不相同 |

**设计动机**：C++ 用“一重定义规则 + 声明/定义分离”保证同一实体在所有 TU 中唯一：头文件会被多个 TU 包含，所以里面只能放声明；需要就地定义时，必须用 `inline`（C++17）显式允许链接器合并。BSS 与 Data 的划分则来自另一条工程约束——零初始化内容不必进文件，只需记录大小。

**版本差异**：C++17 之前无法在头文件里直接定义有外部链接的变量（只能 `extern` 声明 + 单点定义，或借助模板/函数内静态变量）；C++17 引入 `inline` 变量后可以直接在头文件给定义。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 跨 TU 共享可变全局 | 头文件 `extern int g;`，某个 `.cpp` 里 `int g = 0;` 定义一次 |
| 头文件里直接给定义（C++17） | `inline int g = 0;`，或 `inline constexpr int kLimit = 256;` |
| 只在本文件使用的全局 | 匿名命名空间或 `static`，避免符号冲突 |
| 编译期常量 | `constexpr` / `inline constexpr`，优先放头文件且不需要 `extern` |

```cpp
#include <iostream>

// —— 相当于 common.h 的内容 ——
extern int g_counter;          // 声明：不分配存储，可被任意多个 TU 包含
inline int g_config = 10;      // C++17 inline 变量：多 TU 共享同一实体
constexpr int kLimit = 256;    // 内部链接：每个 TU 各一份，但值相同
// ————————————————————————

int g_counter = 0;             // 唯一定义，零初始化，通常位于 .bss

int main() {
    g_counter += kLimit;
    std::cout << g_counter << ' ' << g_config << '\n';   // 256 10
}
```

出处：一重定义规则见 ISO C++ 标准 [basic.def.odr]；链接与 `const` 的内部链接见 [basic.link]；静态存储期对象的初始化见 [basic.start.static]；`inline` 变量可对照 cppreference（https://en.cppreference.com/w/cpp/language/inline）。

**可观察验证**

```cpp
#include <cstdio>

// —— 相当于 common.h 的内容 ——
extern int g_counter;          // 声明：可被任意多个 TU 包含
inline int g_config = 10;      // C++17 inline 变量：多 TU 共享同一实体
constexpr int kLimit = 256;    // 内部链接：每个 TU 各一份，值相同
// ——————————————

int g_counter = 0;             // 唯一定义，零初始化，通常位于 .bss

int main() {
    g_counter += kLimit;
    std::printf("%d %d ", g_counter, g_config);   // 256 10
}
```

```plaintext
g++ -std=c++17 globals.cpp -o globals
nm -C globals | grep -E ' g_(counter|config)'   # g_counter 是 b（bss），g_config 是合并后的唯一实体
g++ a.cpp b.cpp -o odr                         # 两个 TU 都包含写有 int g_bad = 0; 的头文件 → multiple definition
```

- `nm` 输出里 `g_counter` 的类型字母是 `b`（BSS），这是“零初始化全局不进文件、只占内存”的直接证据。
- 把 `int g_bad = 0;` 放进头文件并被两个 TU 包含时，链接器报 `multiple definition of g_bad`。

### ③ 面试怎么讲

**30 秒口述稿**

> 未初始化或者初值全为零的全局、静态变量一般放在 BSS 段，加载时由系统统一清零，可执行文件里只记录大小，所以不占文件空间；显式给了非零初值的放在已初始化数据段。头文件里定义全局变量的问题在于，每个包含它的翻译单元都会生成一个定义，链接时就是多重定义，违反一重定义规则。正确做法是在头文件用 `extern` 声明，在某个 `.cpp` 里定义一次；C++17 之后也可以直接在头文件写 `inline` 变量。还有个容易忽略的点：命名空间作用域的 `const` 默认是内部链接，放在头文件里不会报错，但每个 TU 各有一份副本。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么 BSS 不占文件空间？ | 内容全为 0，文件只需记录段大小；加载时映射零页或由启动代码清零。 |
| `int g = 0;` 在 BSS 还是 Data？ | 常见实现放 BSS，因为它仍是零初始化；标准不规定段，只规定初始化语义。 |
| `static int g;` 和 `int g;` 差在哪？ | 存储期相同，差在链接：`static` 是内部链接，仅本 TU 可见。 |
| 头文件里 `const int k = 5;` 有问题吗？ | 能编译，但每个 TU 一份副本，取地址比较不等；需要共享就用 `inline constexpr`。 |
| `inline` 变量凭什么能多 TU 定义？ | 标准允许 `inline` 变量在多个 TU 有相同定义，链接器负责合并成一个实体。 |

### ④ 真实坑

1. **头文件写 `int g = 0;`**：两个 `.cpp` 一包含就报 multiple definition；把定义挪进一个 `.cpp`、头文件改成 `extern` 才解决。
2. **`const` 全局的隐形副本**：头文件里 `const Config kDefault{...};` 每个 TU 各构造一次，构造有副作用时会被执行多次。
3. **静态初始化顺序**：A 的构造函数使用 B 定义的全局对象，而链接顺序决定 B 还没构造，读到全零。
4. **只声明不定义**：头文件写了 `extern int g;` 却忘了在某个 `.cpp` 定义，链接期报 `undefined reference`。

### ⑤ 练习

**A 写**：拆成 `common.h` + `globals.cpp` + `main.cpp`：头文件只放 `extern int g_counter;` 与 `inline int g_config = 10;`，`globals.cpp` 定义 `g_counter`，`main.cpp` 使用两者；再故意在头文件里加一行 `int g_bad = 0;`，复现链接错误并解释。

**提示**：① 头文件只放 `extern` 声明，定义挪进一个 `.cpp`；② 想留在头文件里就改成 `inline`（C++17）并确认链接通过；③ 用 `nm` 看符号类型，别只看地址猜段。

验收标准：正常版本链接通过且两者可读写；删除 `inline` 后复现 multiple definition；能解释 `constexpr int kLimit` 为什么不出问题；`nm` 或 `objdump` 能看到 `g_counter` 在 BSS。

**B 讲**：2 分钟讲“BSS/Data 与头文件定义全局变量”。必须覆盖零初始化、文件体积、ODR、`extern`/`inline` 两种解法。

验收标准：不看稿；能说出至少三种错误写法及其后果；能解释 `const` 全局为什么是“不报错的坑”。

> ↑ 返回[目录](#toc)

---

<a id="unit-37"></a>
## D3 · 单元 37 返回值优化 RVO 与 NRVO

> 来源：题库第 45 题 ｜ 速背卡：[45](./速背.md#cpp-45) ｜ 自测：[sel-5 · 第 45 题](./自测.md#sel-5) ｜ 耗时 16 min ｜ 难度 ★★★

**一句话**：C++17 只对“返回纯右值”强制省略拷贝，对“返回具名局部变量”仍只是允许；把这两件事混成一句“C++17 保证 RVO”，面试官一追问就会露馅。

**学完能做到**
- 写代码：用带打印的构造/拷贝/移动函数，分别在默认与 `-fno-elide-constructors` 下观察三次返回的差异。
- 讲出来：说清强制省略的适用条件、NRVO 的可选性，以及 `return std::move(x)` 为什么是负优化。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| C++17 同时保证了 RVO 和 NRVO | C++17 只强制“返回纯右值 / 用纯右值初始化”的省略；NRVO 返回具名变量仍是可选优化 |
| `return std::move(x)` 是在帮编译器移动 | 它返回将亡值，既不满足强制省略条件，又阻止 NRVO，属于负优化 |
| 拷贝构造里的打印能反映真实拷贝次数 | 省略发生时拷贝构造根本不调用，构造函数里的副作用也不能当作必然发生 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 复制省略允许在特定情形下完全不调用拷贝/移动构造，即使构造函数有副作用 | 不能靠拷贝构造里的日志判断对象“被拷贝了几次”，优化会把它抹掉 |
| C++17 起，用纯右值初始化对象、`return T(...)` 这类情形必须省略 | `Widget w = Widget(1);` 只调用一次构造；拷贝构造被删除也能编译 |
| NRVO（返回具名局部变量）在 C++17 仍是可选优化 | `Widget w; return w;` 在关闭优化时可能调用一次移动或拷贝，不能依赖 |
| `return std::move(x)` 返回的是将亡值，不是纯右值 | 既拿不到强制省略，又阻止 NRVO，只剩一次移动，属于典型负优化 |
| 编译器在做省略时不考虑拷贝构造的副作用（as-if 的例外） | 拷贝构造里写日志、计数、注册，都不能当成必然会执行 |

**设计动机**：复制的唯一目的是把对象送到调用方；如果直接在目标位置构造，这次复制就没有语义价值，标准因此允许省略——即使拷贝构造有副作用。C++17 把“用纯右值初始化对象”和“返回纯右值”这两条路径的省略改成强制，让返回值语义不再依赖拷贝/移动构造函数是否可用。

**版本差异**：C++17 起强制省略“纯右值初始化”和“返回纯右值”两种情形，拷贝构造被 `= delete` 也能编译；C++17 之前省略只是允许，NRVO 在两代都只是可选优化。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 返回新对象 | `return Widget(args...);`，让 C++17 强制省略生效 |
| 返回局部变量 | `return local;`，不要加 `std::move`，给 NRVO 留机会 |
| 返回成员 | 直接 `return member_;`，会走移动；成员是 `const` 时退化成拷贝 |
| 观察优化行为 | 用 `-fno-elide-constructors` 对比，注意 C++17 强制部分仍不产生拷贝 |

```cpp
#include <iostream>
#include <utility>

struct Widget {
    int v;
    explicit Widget(int x) : v(x) { std::cout << "ctor " << v << '\n'; }
    Widget(const Widget& o) : v(o.v) { std::cout << "copy " << v << '\n'; }
    Widget(Widget&& o) noexcept : v(o.v) { std::cout << "move " << v << '\n'; }
};

Widget makePrvalue() { return Widget(1); }            // C++17 强制省略
Widget makeNamed()   { Widget w(2); return w; }       // NRVO，可选
Widget makeMoved()   { Widget w(3); return std::move(w); }  // 阻止 NRVO

int main() {
    Widget a = makePrvalue();
    Widget b = makeNamed();
    Widget c = makeMoved();
    std::cout << a.v << b.v << c.v << '\n';
}
```

出处：复制省略的适用情形与 C++17 的强制性见 ISO C++ 标准 [class.copy.elision]；纯右值与将亡值见 [basic.lval]；可对照 cppreference “Copy elision”（https://en.cppreference.com/w/cpp/language/copy_elision）。

**可观察验证**

```cpp
#include <cstdio>

struct W {
    int v = 0;
    W() { std::puts("ctor"); }
    W(const W& o) : v(o.v) { std::puts("copy"); }
    W(W&& o) noexcept : v(o.v) { std::puts("move"); }
};

W prvalue() { return W(); }      // C++17 强制省略：只打印 ctor
W named()   { W w; return w; }   // NRVO：可选

int main() {
    W a = prvalue();
    W b = named();
    std::printf("%d %d ", a.v, b.v);
}
```

```plaintext
g++ -std=c++17 rvo.cpp -o rvo && ./rvo                    # prvalue 一行 ctor；named 视编译器
g++ -std=c++17 -fno-elide-constructors rvo.cpp -o rvo_noel && ./rvo_noel
```

- 加 `-fno-elide-constructors` 后 `prvalue` 仍只有一行 `ctor`：C++17 的这条省略是强制的，不受该开关影响。
- `named` 在关闭省略时打印 `move`（有移动构造时），这就是 NRVO“只是可选”的证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 返回值优化是在调用方的返回值空间里直接构造对象，省掉一次拷贝或移动。它分两种：RVO 是返回临时对象，NRVO 是返回具名局部变量。关键点是 C++17 只强制了一部分：用纯右值初始化对象、以及 `return Widget(...)` 这种返回纯右值的情形，必须省略，拷贝构造被删除也能编译；但 NRVO 返回具名变量仍然是可选的，编译器可以不做。还有个常见反例是 `return std::move(w)`，它把表达式变成将亡值，既不能强制省略，又阻止 NRVO，反而多一次移动。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| C++17 保证 NRVO 吗？ | 不保证。C++17 强制的是纯右值那条路径，具名局部变量的 NRVO 仍是可选优化。 |
| 怎么观察有没有省略？ | 在构造/拷贝/移动里打印，或用 `-fno-elide-constructors` 对比；再看反汇编。 |
| `return std::move(x)` 为什么不好？ | 返回类型是 `T&&` 的将亡值，不满足强制省略条件，还阻止 NRVO。 |
| 拷贝构造有副作用会被执行吗？ | 被省略时不会；标准允许省略，不管构造函数是否有副作用。 |
| 拷贝构造被 `= delete` 还能返回值吗？ | C++17 下返回纯右值可以；返回具名变量则要求可移动或可拷贝。 |

### ④ 真实坑

1. **用拷贝计数做单元测试**：C++17 下断言“返回时发生一次拷贝”，实际零次，测试在升级编译器后突然失败。
2. **`return std::move(local)`**：以为在“帮编译器移动”，实际阻止 NRVO，还让 `const` 局部变量退化成拷贝。
3. **返回 `const` 局部变量**：`const Widget w; return w;` 匹配不到移动构造，只能拷贝，NRVO 失效时性能掉一截。
4. **返回成员或全局对象**：NRVO 不适用，只能移动；若返回的是 `const` 成员，直接退化成拷贝。

### ⑤ 练习

**A 写**：实现上面的 `Widget` 与三个工厂函数，分别在默认编译和 `-fno-elide-constructors` 下运行，记录每次的输出行数；再把 `makeMoved` 改成 `return w;`，观察差异。

**提示**：① 先用带打印的构造/拷贝/移动记下三种返回各打印几行；② 加 `-fno-elide-constructors` 再跑一遍，只对比变化的那几行；③ 把 `return std::move(w)` 改回 `return w`，观察移动次数是否减少。

验收标准：默认情况下 `makePrvalue` 只打印一行 `ctor`；加 `-fno-elide-constructors` 后 `makePrvalue` 仍只有一行；`makeNamed` 在关闭省略时出现移动；`makeMoved` 始终有移动；能逐行解释。

**B 讲**：2 分钟讲“RVO/NRVO 与 C++17 的强制省略”。必须区分临时对象和具名变量两条路径，并给出 `return std::move` 的反例。

验收标准：不看稿；能准确说出“C++17 强制省略”的适用条件；能解释为什么关闭优化后有些拷贝仍然看不到。

> ↑ 返回[目录](#toc)

---

<a id="unit-38"></a>
## D3 · 单元 38 `shared_from_this` 的作用与限制

> 来源：题库第 47 题 ｜ 速背卡：[47](./速背.md#cpp-47) ｜ 自测：[sel-5 · 第 47 题](./自测.md#sel-5) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：`shared_from_this()` 是把 `this` 安全地升格为 `shared_ptr` 的唯一正确方式；前提是对象已经由 `shared_ptr` 管理，否则它拿不到控制块。

**学完能做到**
- 写代码：用 `enable_shared_from_this` 在成员函数里取得自身 `shared_ptr`，让回调延长对象生命周期。
- 讲出来：说清控制块关联时机，以及为什么构造函数和析构函数里都不能调用。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 继承 `enable_shared_from_this` 就能随时调用 `shared_from_this()` | 只有对象已由 `shared_ptr` 管理、控制块已关联时才行；栈对象或 `unique_ptr` 管理的对象调用会抛 `bad_weak_ptr` |
| 构造函数里可以注册自身回调 | 构造阶段控制块还没关联，C++17 起抛 `bad_weak_ptr`，此前是 UB |
| `shared_ptr<T>(this)` 和 `shared_from_this()` 等价 | 前者会造出第二个控制块，导致双重释放；后者复用已有控制块，这正是它的价值 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `enable_shared_from_this<T>` 内部持有一个 `weak_ptr<T>`，由第一个管理该对象的 `shared_ptr` 构造时关联 | 只有 `shared_ptr` 构造完成后，`shared_from_this()` 才有控制块可用 |
| 对象必须已经由 `shared_ptr` 管理；否则 C++17 起抛 `std::bad_weak_ptr` | 栈对象、`unique_ptr` 管理的对象、裸 `new` 出来的对象调用它都会抛异常 |
| 不能在构造函数里调用：此时控制块还没和 `weak_ptr` 关联 | 构造期间调用要么抛 `bad_weak_ptr`，要么在旧标准下是 UB |
| 不能在析构函数里调用：强引用计数已归零 | `lock()` 失败，`shared_from_this()` 抛异常；需要延命必须在对象还活着时提前取 |
| 返回的 `shared_ptr` 与外部共享同一控制块；`const` 成员函数返回 `shared_ptr<const T>` | 不会产生第二个控制块，这是它相对 `shared_ptr<T>(this)` 的核心价值 |

**设计动机**：当类只有一个 `this` 时，外部没办法安全地“再拿一个 `shared_ptr`”：直接用 `shared_ptr<T>(this)` 会新建控制块，与原控制块互不知情，最终双重释放。`enable_shared_from_this` 用一个内部 `weak_ptr` 记录第一个控制块，把“自我升格”变成复用同一控制块的唯一正规入口。

**版本差异**：C++17 起，控制块尚未关联时 `shared_from_this()` 抛 `std::bad_weak_ptr`（此前行为未定义），并新增 `weak_from_this()` 用于只观察、不自增强引用计数。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 成员函数里把自身交给异步任务/回调 | `auto self = shared_from_this();`，捕获 `self` 而不是 `this` |
| 类需要自我管理生命周期 | `class T : public std::enable_shared_from_this<T>`，继承必须是 `public` |
| 只在需要时观察自身 | 用 `weak_from_this()`（C++17）避免延长生命周期 |
| 工厂创建对象 | `std::make_shared<T>(...)`，确保控制块在构造完成后建立 |

```cpp
#include <functional>
#include <iostream>
#include <memory>
#include <vector>

class Session : public std::enable_shared_from_this<Session> {
public:
    void onData() const { std::cout << "handle data\n"; }

    void subscribe(std::vector<std::function<void()>>& handlers) {
        auto self = shared_from_this();          // 与外部 shared_ptr 共用一个控制块
        handlers.push_back([self] { self->onData(); });
    }

    ~Session() { std::cout << "~Session\n"; }
};

int main() {
    std::vector<std::function<void()>> handlers;
    {
        auto s = std::make_shared<Session>();
        s->subscribe(handlers);
        std::cout << s.use_count() << '\n';      // 2
    }
    std::cout << "scope ended\n";
    handlers[0]();                               // 对象仍存活
    handlers.clear();                            // 计数归零，析构
}
```

出处：`enable_shared_from_this` 的语义与 `bad_weak_ptr` 见 ISO C++ 标准 [util.smartptr.enab]、[util.smartptr.weak]；`weak_from_this` 自 C++17 起提供，可对照 cppreference（https://en.cppreference.com/w/cpp/memory/enable_shared_from_this）。

**可观察验证**

```cpp
#include <cstdio>
#include <memory>

struct S : std::enable_shared_from_this<S> {
    void poke() { std::printf("use_count=%ld ", shared_from_this().use_count()); }
};

int main() {
    auto s = std::make_shared<S>();
    s->poke();                    // 与外部共用一个控制块：计数为 2
    try {
        S stack;                  // 栈对象：没有控制块
        stack.poke();
    } catch (const std::bad_weak_ptr& e) {
        std::printf("bad_weak_ptr: %s ", e.what());
    }
}
```

- `use_count` 打印 2，说明 `shared_from_this()` 返回的是同一控制块上的计数，而不是新造一个。
- 把 `S` 换成 `std::make_unique<S>()` 管理的对象或栈对象再调用，C++17 下稳定抛 `bad_weak_ptr`。

### ③ 面试怎么讲

**30 秒口述稿**

> `shared_from_this` 解决的是“我只有一个 `this`，但我想安全地得到一个指向自己的 `shared_ptr`”这个问题。做法是让类继承 `enable_shared_from_this<T>`，它内部存一个 `weak_ptr`；当第一个 `shared_ptr` 接管这个对象时，会把控制块和这个 `weak_ptr` 关联起来，之后成员函数调用 `shared_from_this()`，就相当于把 `weak_ptr` 提升成 `shared_ptr`，和外部共享同一个引用计数。它的优点是不会产生第二个控制块，也不会像传裸 `this` 那样出现悬垂。但前提是对象已经被 `shared_ptr` 管理，构造函数里控制块还没建好，析构函数里计数已经归零，这两个地方都不能用。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么不能直接 `shared_ptr<T>(this)`？ | 会创建新的控制块，和原来的计数互不知情，最终双重释放。 |
| 构造函数里调用会怎样？ | 控制块尚未关联，C++17 起抛 `bad_weak_ptr`；此前是 UB。 |
| 析构函数里能用吗？ | 不能，强引用计数已为 0，`shared_from_this()` 抛异常；要在对象存活时提前保存。 |
| 栈对象能用吗？ | 不能，没有 `shared_ptr` 管理它，调用即抛异常。 |
| `weak_from_this` 和它什么关系？ | C++17 提供，返回内部 `weak_ptr` 的副本，不增加强引用计数。 |

### ④ 真实坑

1. **构造函数里注册回调**：`Session() { registry.add(shared_from_this()); }` 构造阶段直接抛 `bad_weak_ptr`，程序启动即崩。
2. **栈对象或 `unique_ptr` 管理的对象**：`Session s;` 和 `make_unique<Session>()` 都不会建立控制块，调用即抛异常，和是否继承无关。
3. **继承写成 private**：`class S : private std::enable_shared_from_this<S>` 编译报“不可访问的基类”，错误信息很难读。
4. **析构里回调自身**：析构函数想通知观察者，调用 `shared_from_this()` 抛异常；正确做法是在析构前显式发出通知。

### ⑤ 练习

**A 写**：实现上面的 `Session`，用 `subscribe` 把回调存进 `vector`，在 `main` 中让 `shared_ptr` 先离开作用域，再调用回调，验证对象仍然存活；再写一个构造函数里调用 `shared_from_this()` 的版本，捕获 `std::bad_weak_ptr` 并打印 `what()`。

**提示**：① 先确认对象由 `make_shared` 创建，再在成员函数里取 `shared_from_this()`；② 把“构造函数里注册回调”的代码单独跑一次，捕获并打印 `bad_weak_ptr`；③ 只观察不延命时改用 `weak_from_this()`，对比 `use_count` 是否变化。

验收标准：`use_count()` 输出 2；作用域结束后回调仍能执行；`handlers.clear()` 后打印析构；构造版本能稳定抛出 `bad_weak_ptr`；能解释为什么 `make_shared` 是必要前提。

**B 讲**：2 分钟讲“`shared_from_this` 的原理与三个禁区”。必须覆盖 `weak_ptr` 关联、控制块唯一性，以及构造函数/析构函数/栈对象三种失败场景。

验收标准：不看稿；能画出 `enable_shared_from_this` 与 `shared_ptr` 的关联关系；能说清它相比传 `this` 到底多解决了什么。

> ↑ 返回[目录](#toc)

---

<a id="unit-39"></a>
## D3 · 单元 39 内存对齐与对象布局

> 来源：专题扩展 ｜ 耗时 20 min ｜ 难度 ★★★

> 补充单元：题库没有单独考对齐，但它决定了 `sizeof` 的答案、协议能否直传、以及多线程计数器为什么慢，属于必须补的一块。

**一句话**：对齐是“对象地址必须是某个数的整数倍”这条硬件约束；结构体里的空洞（padding）不是浪费，而是编译器为了满足约束替你付的钱。

**学完能做到**
- 写代码：算出并验证一个结构体的 `sizeof`、`alignof`、各成员偏移，通过重排成员把大小压下来。
- 讲出来：说清 padding 的来源、`#pragma pack` 的代价、缓存行与伪共享，以及过对齐类型的分配要求。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| padding 是编译器在浪费内存 | padding 是为满足硬件对齐要求必须付的成本；按 `alignof` 重排成员可以把它压小 |
| `#pragma pack(1)` 只是让结构体变小，没有副作用 | 成员可能未对齐，取地址或绑引用后访问是 UB，部分 ARM 上直接 fault，且破坏 ABI |
| `alignas` 可以把对齐调低 | `alignas` 只能提高对齐，低于自然对齐是编译错误；降低对齐要靠 pack |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 每个类型有对齐要求 `alignof(T)`，任何 `T` 对象的地址必须是它的整数倍 | 未对齐访问在 x86 上只是变慢，在部分 ARM 上直接触发异常；`reinterpret_cast` 到未对齐地址是 UB |
| 结构体按成员声明顺序布局，成员之间插入 padding，总大小向最大对齐取整 | `struct { char; int; char; }` 常见是 12 字节而不是 6 字节，尾部还有 3 字节 padding |
| `alignas` 只能提高对齐，不能低于类型的自然对齐；`#pragma pack` 则强行降低 | pack 后的结构体可以塞进协议头，但取成员地址可能未对齐，且 ABI 与编译器相关 |
| 缓存行常见 64 字节，两个线程写同一缓存行里的不同变量会互相失效 | 伪共享（false sharing）能让多线程计数器性能掉几倍，`alignas(64)` 把热变量隔开 |
| C++17 起 `new` 支持过对齐类型；`malloc` 只保证 `max_align_t` 对齐 | 用 `malloc` 分配 `alignas(64)` 的对象再定位 `new`，地址可能不满足对齐要求 |

**设计动机**：硬件按字和缓存行取数：地址不满足对齐时，访问要么需要多次取数并拼接，要么直接触发异常，所以编译器在成员之间插 padding 把每个成员摆到合法地址。同理，两个线程写同一缓存行里的不同变量会互相失效，于是需要 `alignas` 把热变量隔到不同缓存行——这些成本都源于硬件约束，而不是编译器随意决定。

**版本差异**：`alignas` / `alignof` 自 C++11 起提供；C++17 起 `new` 支持过对齐类型，并可选提供 `std::hardware_destructive_interference_size` 用于取缓存行大小，此前只能靠平台常量。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 压缩结构体并验证布局 | 按 `alignof` 从大到小排列成员，用 `static_assert`、`offsetof`、`std::is_standard_layout_v` 锁住假设 |
| 跨平台协议 | 逐字段序列化到字节数组，不用 `sizeof(struct)`，也不依赖 padding |
| 过对齐类型 | `struct alignas(64) CacheLine { ... };`，用 `new` 或 `std::aligned_alloc` 分配 |
| 避免伪共享 | 把每个线程的热计数器 `alignas(64)`，或按缓存行填充 |

```cpp
#include <atomic>
#include <cstddef>
#include <iostream>
#include <type_traits>

struct A { char c; int i; char d; };            // 常见 12 字节
struct B { int i; char c; char d; };            // 常见 8 字节

struct alignas(16) Vec4 { float x, y, z, w; };

struct Counters {
    alignas(64) std::atomic<long> reads{0};
    alignas(64) std::atomic<long> writes{0};
};

int main() {
    std::cout << sizeof(A) << ' ' << alignof(A) << '\n';   // 常见 12 4
    std::cout << sizeof(B) << ' ' << alignof(B) << '\n';   // 常见 8 4
    std::cout << offsetof(A, i) << ' ' << offsetof(A, d) << '\n'; // 常见 4 8
    std::cout << sizeof(Vec4) << ' ' << alignof(Vec4) << '\n';    // 16 16
    std::cout << sizeof(Counters) << '\n';                        // 常见 128

    static_assert(sizeof(B) < sizeof(A));
    static_assert(alignof(Vec4) == 16);
    static_assert(std::is_standard_layout_v<A>);   // offsetof 的前提
}
```

出处：对齐要求见 ISO C++ 标准 [basic.align]，`alignas` 见 [dcl.align]，成员布局与 `offsetof` 的前提（标准布局）见 [class.mem]、[support.types.layout]；`std::hardware_destructive_interference_size` 自 C++17 起在 `<new>` 提供且为条件支持，可对照 cppreference（https://en.cppreference.com/w/cpp/language/object#Alignment）。

**可观察验证**

```cpp
#include <cstddef>
#include <cstdio>
#include <type_traits>

struct A { char c; int i; char d; };      // 常见 12 字节
struct B { int i; char c; char d; };      // 常见 8 字节
struct alignas(64) Line { char x; };      // 独占一个缓存行

int main() {
    std::printf("A %zu align %zu off %zu %zu ", sizeof(A), alignof(A), offsetof(A, i), offsetof(A, d));
    std::printf("B %zu align %zu ", sizeof(B), alignof(B));
    std::printf("Line %zu align %zu ", sizeof(Line), alignof(Line));

    static_assert(sizeof(B) < sizeof(A));
    static_assert(alignof(Line) == 64);
    static_assert(std::is_standard_layout_v<A>);   // offsetof 的前提
}
```

```plaintext
g++ -g -std=c++17 layout.cpp -o layout && ./layout
pahole -C A layout        # 有调试信息时直接显示 padding 位置
```

- `A` 常见 12 字节、`B` 常见 8 字节，差值全部来自成员顺序造成的 padding。
- 加 `#pragma pack(push,1)` 后 `sizeof` 变小，但 `offsetof(A, i)` 变成 1，该地址上的 `int` 未对齐。

### ③ 面试怎么讲

**30 秒口述稿**

> 对齐是硬件约束：一个 `int` 的地址必须是 4 的倍数，`double` 常见是 8 的倍数，否则访问可能变慢甚至触发异常。编译器在结构体成员之间插 padding 来满足这个约束，所以 `char、int、char` 这样的顺序会变成 12 字节，把两个 `char` 放一起、`int` 放前面就能压到 8 字节。`#pragma pack` 可以去掉 padding，但会带来未对齐访问，ARM 上可能直接崩，而且破坏 ABI。另一个实战点是缓存行，常见 64 字节，两个线程频繁写同一行里的不同变量会产生伪共享，可以用 `alignas(64)` 隔开。跨平台协议不要直接传结构体，要逐字段序列化。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么需要对齐？ | 硬件按字/缓存行访问，未对齐需要多次访问或额外处理；某些架构和 SIMD 指令直接要求对齐。 |
| 结构体大小怎么算？ | 按声明顺序累加，每个成员前补齐到自己的对齐，最后整体补齐到最大对齐的整数倍。 |
| `#pragma pack(1)` 有什么风险？ | 成员可能未对齐，取地址/绑引用后访问是 UB；x86 变慢，ARM 可能 fault，且不同编译器行为有差异。 |
| `alignas` 能降低对齐吗？ | 不能低于自然对齐；写 `alignas(1) int` 是编译错误。 |
| 缓存行多大？ | 常见 64 字节，但标准不规定；`std::hardware_destructive_interference_size` 是 C++17 的可选设施。 |

### ④ 真实坑

1. **直接 `fwrite` 结构体**：padding 里的旧数据被一起写进文件，既泄露内存内容，又让不同编译器的文件互不兼容。
2. **`pack(1)` 后取成员地址**：把 packed 结构体的 `int` 成员绑到 `int&` 或取地址传给别的函数，未对齐访问在 ARM 上直接 fault。
3. **成员顺序随意**：一个 `struct { bool; double; bool; int; }` 可能从 16 字节涨到 24 字节，百万级对象就是几十 MB 的差距。
4. **伪共享**：两个线程各自 `++counter[i]`，两个计数器相邻，缓存行来回失效，吞吐可能只有预期的一小部分。

### ⑤ 练习

**A 写**：定义 `A { char; int; char; }` 与重排后的 `B { int; char; char; }`，打印 `sizeof`、`alignof`、`offsetof`；再加 `alignas(64)` 的两个计数器结构体，打印大小；最后写一个 `#pragma pack(push,1)` 的版本，对比大小并说明风险。要求用 `static_assert` 锁住至少两条结论。

**提示**：① 先按 `alignof` 从大到小重排成员，再打印 `sizeof` 对比；② 用 `offsetof` 配 `static_assert` 把布局假设锁住；③ pack 版本只用来对比，取成员地址前先想清楚对齐后果。

验收标准：能准确预测并验证 A 与 B 的大小差异；能解释每个 padding 的位置；pack 版本大小正确但能说出未对齐风险；`-Wall -Wextra` 无警告。

**B 讲**：3 分钟讲“对齐、padding 与缓存行”。必须覆盖对齐的硬件原因、结构体大小计算、pack 的代价、伪共享四点，并各配一个工程后果。

验收标准：不看稿；能现场算出 `char/int/char` 的布局；能解释为什么协议不能直接传结构体；能说出 `alignas` 与 `malloc` 的冲突。

> ↑ 返回[目录](#toc)

---

<a id="unit-40"></a>
## D3 · 单元 40 RAII 与异常安全

> 来源：专题扩展 ｜ 耗时 20 min ｜ 难度 ★★★

> 补充单元：题库在第 34 题提到智能指针时顺带说了 RAII，但没有展开“异常来了资源怎么办”；这部分决定代码在失败路径上是否还成立。

**一句话**：RAII 是把“释放动作”绑在对象析构上，让作用域成为唯一的回收时机；异常安全则是问“抛出异常后，对象和资源还满不满足约定”。

**学完能做到**
- 写代码：用 RAII 包装文件、锁和一段可回滚的修改，并给出强异常安全的 `add`。
- 讲出来：说清栈展开的析构范围、三个异常安全保证，以及析构函数为什么必须 `noexcept`。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| RAII 就是“记得在析构里 `delete`” | RAII 是把资源获取/释放绑到构造/析构上，让所有退出路径（含异常栈展开）都由作用域保证回收 |
| 构造函数抛异常时对象自己的析构会执行 | 对象自身的析构不执行；只有已构造完成的基类与成员会析构，所以资源要放在成员里 |
| 强异常安全靠 `try/catch` 手动回滚 | 常用“先改副本、最后 `swap` 提交”，把回滚变成结构性的，不必在每个异常点写清理代码 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| RAII：构造获取资源、析构释放；异常抛出后栈展开，已完全构造的自动对象和成员会析构 | 任何退出路径（`return`、`break`、异常）都会释放锁、文件和临时缓冲；但构造函数自身抛异常时，该对象自己的析构不调用 |
| 构造函数抛异常时，已构造完成的基类和成员会被析构 | 资源如果放在裸指针成员里，`new` 之后抛异常就泄漏；用智能指针成员即可自动回收 |
| 三个保证：不抛（`noexcept`）、强（失败则回滚）、基本（不泄漏、对象仍有效） | 大多数代码只需基本保证；需要“要么成功要么不变”的接口才用强保证 |
| 析构函数默认 `noexcept`，抛异常会 `std::terminate` | 析构里不能抛；栈展开途中再抛异常同样直接终止进程 |
| 移动构造标记 `noexcept` 才会被容器用于搬移 | 否则 `std::vector` 扩容只能逐元素拷贝，强保证也退化为基本保证 |

**设计动机**：异常让控制流可能从任意深处跳出，手写的 `unlock/fclose/delete` 覆盖不了所有出口；把释放动作绑到析构上，栈展开就会自动执行，于是“不泄漏”成了默认行为。强保证再进一步：要求失败后对象状态不变，于是用“副本 + 不抛的 `swap`”把提交点收敛到一个动作上。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 管理文件/句柄 | `std::unique_ptr<FILE, FileCloser>`，析构时 `fclose` |
| 管理锁 | `std::lock_guard` / `std::scoped_lock`，不要手写 `lock/unlock` |
| 需要“失败则回滚”的修改 | 先改副本，成功后 `swap`；即 copy-and-swap |
| 提交/回滚语义 | 事务对象在析构时检查 `committed_`，未提交则恢复备份 |

```cpp
#include <cstddef>
#include <cstdio>
#include <memory>
#include <mutex>
#include <vector>

struct FileCloser {
    void operator()(std::FILE* f) const noexcept { if (f) std::fclose(f); }
};
using FilePtr = std::unique_ptr<std::FILE, FileCloser>;

class Settings {
public:
    void add(int v) {
        auto next = values_;      // 先操作副本，失败时原对象不变
        next.push_back(v);        // 可能抛 std::bad_alloc
        values_.swap(next);       // swap 不抛，提交
    }
    std::size_t size() const { return values_.size(); }
private:
    std::vector<int> values_;
};

int main() {
    std::mutex m;
    {
        std::lock_guard<std::mutex> lock(m);   // 任何出口都会解锁
        // 临界区
    }

    Settings s;
    s.add(1);
    s.add(2);

    FilePtr f(std::fopen("demo.txt", "w"));
    if (f) std::fputs("ok", f.get());

    std::printf("%zu\n", s.size());            // 2
}
```

出处：栈展开时析构已构造的子对象见 ISO C++ 标准 [except.ctor]；异常规范与 `noexcept` 见 [except.spec]；析构函数默认 `noexcept` 见 [class.dtor]；RAII 概念可对照 cppreference（https://en.cppreference.com/w/cpp/language/raii）。

**可观察验证**

```cpp
#include <cstdio>
#include <mutex>
#include <stdexcept>

int main() {
    std::mutex m;
    try {
        std::lock_guard<std::mutex> lock(m);
        throw std::runtime_error("boom");     // 抛出后 lock_guard 析构，锁必然释放
    } catch (const std::exception& e) {
        std::printf("caught %s ", e.what());
    }
    const bool ok = m.try_lock();             // 1 表示锁已释放
    std::printf("try_lock=%d ", static_cast<int>(ok));
    m.unlock();
}
```

- `try_lock` 返回 1 说明异常路径上锁确实被 `lock_guard` 释放；把它换成手写 `m.lock()` 再 `throw` 就会死锁。
- 把文件句柄换成 `unique_ptr<FILE, FileCloser>` 并在临界区提前 `return`，在删除器里打印一行即可确认 `fclose` 仍被调用。

### ③ 面试怎么讲

**30 秒口述稿**

> RAII 就是把资源的获取放在构造函数、释放放在析构函数，让作用域决定生命周期。它的价值在异常路径上：异常抛出后栈会展开，所有已经完整构造的自动对象和成员都会析构，所以文件、锁、临时内存都会被回收。异常安全我一般分三档说：不抛保证，用 `noexcept` 表达；强保证，操作失败对象完全不变，通常用“先改副本再 swap”；基本保证，不泄漏、对象仍有效。还有两个硬约束：析构函数默认 `noexcept`，抛异常直接 `terminate`；移动构造要标 `noexcept`，否则容器扩容会退化成拷贝。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 构造函数抛异常，成员会析构吗？ | 已构造完成的基类和成员会析构，但对象自身的析构函数不会被调用。 |
| 为什么手写 `lock/unlock` 危险？ | 中间任何 `return` 或异常都会跳过 `unlock`，死锁；`lock_guard` 的析构保证解锁。 |
| 强保证怎么实现？ | 先构造副本、在副本上修改，最后用不抛的 `swap` 提交；或“回滚对象”在析构时恢复。 |
| 析构函数能抛异常吗？ | 默认 `noexcept`，抛出会 `std::terminate`；栈展开期间二次异常同样终止。 |
| `noexcept` 移动构造有什么用？ | `std::vector` 扩容只有在移动不抛时才敢搬移，否则为保持强保证改用拷贝。 |

### ④ 真实坑

1. **构造函数里裸 `new` 后抛异常**：`p_ = new T; init();` 中 `init()` 抛出，对象析构不执行，`p_` 永久泄漏；成员改成 `std::unique_ptr` 即可。
2. **手写锁**：`m.lock(); doWork(); m.unlock();` 中间抛异常或提前 `return`，锁永远不释放，服务卡死。
3. **析构里抛异常**：析构函数做可能失败的清理并 `throw`，在与栈展开叠加时直接 `std::terminate`，连日志都来不及写。
4. **强保证写到一半**：先修改原对象再分配新内存，分配失败时对象已半更新，接口承诺的“失败不变”不成立。

### ⑤ 练习

**A 写**：实现 `Settings::add` 的强保证版本（副本 + `swap`），并写一个会抛异常的元素类型或人为 `throw` 的版本，证明失败后 `size()` 不变；用 `std::lock_guard` 保护一个临界区，在中间 `throw`，验证锁能释放；再用 `unique_ptr<FILE, FileCloser>` 打开文件并提前 `return`。

**提示**：① 先写“失败后 `size()` 不变”的断言，再实现 `add`；② 每个资源都先问“它的析构是谁”，答不上来说明还没 RAII 化；③ 在异常路径上用 ASan/TSan 跑一遍，比肉眼检查提前 `return` 可靠。

验收标准：失败后 `size()` 与内容完全不变；异常路径无死锁（可用第二个线程 `try_lock` 验证）；文件在提前返回时关闭；ASan/TSan 下无泄漏与竞争；能说出每个例子对应哪一档异常安全保证。

**B 讲**：3 分钟讲“RAII 与三个异常安全保证”。必须覆盖栈展开、构造失败时的析构范围、三档保证、析构 `noexcept` 四点。

验收标准：不看稿；能举出每档保证的一个具体接口；能解释为什么 `swap` 提交能提供强保证；能说出一个“析构抛异常”的后果。

> ↑ 返回[目录](#toc)

---

> 下一篇：[面向对象与对象模型](#ch4)

---


<a id="ch4"></a>
# 第 4 章 · 面向对象与对象模型

> 对应题库第 35、36、37、38、39、40、41、42 题，另含 1 个补充单元。
> 上一篇：[内存与生命周期](#ch3) ｜ 返回 [速背卡片](./速背.md)。

---

<a id="unit-41"></a>
## D4 · 单元 41 `struct` 与 `class` 的区别

> 来源：题库第 35 题 ｜ 速背卡：[35](./速背.md#cpp-35) ｜ 自测：[sel-4 · 第 35 题](./自测.md#sel-4) ｜ 耗时 10 min ｜ 难度 ★★☆

**一句话**：标准里两者只差两个默认值——成员默认访问权限和默认继承方式；剩下的都是约定，不是语言规则。

**学完能做到**
- 写代码：用同一组成员分别写成 `struct` 和 `class`，让后者在外部访问时报错，再用 `using` 把某一个成员重新暴露出来。
- 讲出来：说清两个默认值、聚合初始化的前提条件，以及“习惯用法”为什么不能当规则讲。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `struct` 是 C 的遗留写法，`class` 才是 C++ 的类 | 两者都是 C++ 的类定义关键字，除两个默认值以外能力完全相同 |
| `struct` 里不能写 private 成员和成员函数 | 能，`struct` 同样可以写访问修饰符、构造函数、虚函数 |
| 给 `struct` 加个构造函数不影响已有代码 | 会失去聚合身份，`Point{1, 2}` 这类聚合初始化随即失效 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 默认成员访问：`class` 是 `private`，`struct` 是 `public` | 漏写 `public:` 时，`class` 的构造函数也是 private，`std::make_unique` 和容器直接编译失败 |
| 默认继承方式：派生 `class` 是 private 继承，派生 `struct` 是 public 继承 | `class D : B` 让基类 public 成员在 `D` 外部不可见，向上转型和多态调用点全部编不过 |
| 其余能力完全一致：成员函数、构造析构、继承、虚函数、模板、运算符重载 | 选哪个不影响 ABI 与性能，只影响默认值和可读性 |
| 聚合初始化要求成员全 public、无用户提供构造、无虚函数、无虚基类/私有基类 | 想让 `T{1, 2}` 可用就用 `struct` 存纯数据；一旦加了构造函数，它就不再是聚合 |

**设计动机**：`struct` 承接 C 的结构体（纯数据、成员默认可见），`class` 承接 Simula 的“默认隐藏实现”的类。C++ 保留两个关键字而不是合并，是为了让“纯数据载体”和“必须守住不变量的抽象类型”在声明处就能看出意图；两个默认值正好对应这两种用途，其余能力完全共享，所以规则里真正记住的只有默认值。

**版本差异**：聚合的定义随标准放宽——C++11/14 要求无基类、无用户提供构造函数；C++17 起允许 public 非虚基类；C++20 起允许用户声明（但未被用户提供）的构造函数，`Point{1, 2}` 的可用范围因此变化；默认访问权限与默认继承方式自 C++98 起未变。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 纯数据聚合、配置结构、需要 `{}` 初始化 | `struct Point { int x; int y; };` |
| 带不变量的类型，成员必须私有 | `class Buffer { int* data_; public: ... };` |
| 多态接口基类 | `class Shape { public: virtual ~Shape() = default; virtual double area() const = 0; };` |
| 明确表达继承关系，避免默认值歧义 | 不管用哪个关键字，继承列表都显式写 `public` |

```cpp
#include <cstddef>
#include <type_traits>

struct Point {              // 成员默认 public，默认 public 继承
    int x;
    int y;
};

class Widget {              // 成员默认 private
    int id_;                // 私有，外部不可见
public:
    explicit Widget(int id) : id_(id) {}
    int id() const { return id_; }
};

struct Base { int a; };
struct PubDerived : Base {};     // 等价于 : public Base
class PrivDerived : Base {};     // 等价于 : private Base

static_assert(std::is_standard_layout_v<Point>);   // 聚合且无虚函数
static_assert(sizeof(Point) == 2 * sizeof(int));

int main() {
    Point p{1, 2};               // 聚合初始化，依赖成员 public
    Widget w{7};                 // 直接初始化，explicit 构造
    PubDerived d;
    d.a = 3;                     // OK：public 继承，a 仍对外可见
    PrivDerived pd;
    // pd.a = 3;                 // 错误：private 继承，a 在类外不可见
    (void)p; (void)w; (void)d; (void)pd;
}
```

出处：默认访问权限见 ISO C++ 标准 [class.access]；聚合定义与初始化见 [dcl.init.aggr]；可对照 cppreference “Classes”（https://en.cppreference.com/w/cpp/language/classes）。示例只依赖 `<cstddef>`、`<type_traits>`。

**可观察验证**

```cpp
#include <type_traits>

struct Plain  { int x; int y; };              // 默认 public
class  Shadow { int x; int y; };              // 默认 private
class  Open   { public: int x; int y; };      // 关键字是 class，成员全 public

static_assert(std::is_aggregate_v<Plain>);    // true：Plain{1, 2} 可用
static_assert(!std::is_aggregate_v<Shadow>);  // 成员不可访问 → 不是聚合
static_assert(std::is_aggregate_v<Open>);     // 聚合资格与关键字无关

int main() {}
```

- 把 `struct Plain` 改成 `class Plain`，再编译 `Plain p{1, 2};`：立刻报 private 访问错误，这是“默认访问权限”最直接的证据。
- 给 `Plain` 加一个构造函数后 `std::is_aggregate_v<Plain>` 从 true 变 false，`Plain{1, 2}` 同时失效——聚合要求成员可访问且没有用户提供的构造函数。
- 三个断言里 `Open` 也是聚合：聚合资格只看成员与构造函数，与用哪个关键字声明无关。

### ③ 面试怎么讲

**30 秒口述稿**

> 标准里 `struct` 和 `class` 只差两个默认值：成员的默认访问权限，`class` 是 private、`struct` 是 public；默认继承方式，`class` 是 private 继承、`struct` 是 public 继承。除了这两个默认值，它们完全等价，都能有成员函数、构造析构、继承、虚函数和模板，生成的布局和 ABI 也一模一样。工程上的约定是：纯数据聚合用 `struct`，需要封装不变量、有行为的类型用 `class`；但写继承时我一定显式写 `public`，不靠默认值。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 还有其他语言层面的区别吗？ | 只有那两个默认值；模板类型形参位置 `class T` 和 `typename T` 等价，但那里不能写 `struct`。 |
| 为什么标准库大量用 `struct`？ | traits、函数对象、标签类型都是无状态或无不变量的纯数据载体，`struct` 更直白地表达“这是数据”。 |
| 给 `struct` 加构造函数会怎样？ | 它不再是聚合，`S{1,2}` 这种聚合初始化失效，需要改成调用构造函数或保留花括号直接初始化。 |
| private 继承有什么实际用途？ | 表达“用基类的实现实现自身”（如私有继承 `std::vector` 做栈），外部不能向上转型；多数场景用组合更清楚。 |

### ④ 真实坑

1. **`class` 里忘写 `public:`**：构造函数变成 private，`std::make_unique<T>(args...)` 在标准库里实例化失败，报错点还不在你的构造函数上。
2. **`class D : B` 默认私有继承**：`B* p = &d;` 编译失败，或者多态容器塞不进去，排查半天才发现少了 `public`。
3. **给聚合加构造函数**：原本 `Config{1, 2}` 的调用点全部报错，因为类型从聚合变成了有用户提供构造函数的类。
4. **以为 `struct` 就没有封装**：`struct` 里也能写 private 成员和成员函数，反过来 `class` 也能全是 public；把关键字当封装保证是误读。

### ⑤ 练习

**A 写**：定义 `struct Point { int x; int y; };` 和 `class Counter { int n_; public: ... };`，再写 `class PrivDerived : Base`，把 `pd.a = 3;` 和 `Point p{1,2}` 都跑一遍。要求：注释保留编译错误并标注原因；用 `std::is_aggregate_v<Point>` 与 `std::is_aggregate_v<Counter>` 打印结果。

**提示**：① 两个关键字各写一个错误版本，把编译器报错原文抄进注释，比背结论更容易记住是哪个默认值在起作用；② 想验证“除默认值外完全等价”，把同一个类用两种关键字各写一遍，比较 `sizeof` 与编译器生成的特殊成员函数；③ 聚合资格用 `std::is_aggregate_v` 现场验证，不要凭“能不能用花括号初始化”猜。

验收标准：`g++ -std=c++17 -Wall -Wextra` 无警告；能解释 `is_aggregate` 的两个结果；能说清 private 继承下为什么 `Base* p = &pd;` 不成立。

**B 讲**：2 分钟讲“`struct` 和 `class` 的区别”。必须覆盖两个默认值、聚合初始化条件、习惯用法三条，并主动说明“除了默认值之外完全等价”。

验收标准：不看稿；能现场写出默认私有继承导致的编译错误；能回答“给 struct 加构造函数会发生什么”。

> ↑ 返回[目录](#toc)

---

<a id="unit-42"></a>
## D4 · 单元 42 C++ 面向对象的三大特性

> 来源：题库第 36 题 ｜ 速背卡：[36](./速背.md#cpp-36) ｜ 自测：[sel-5 · 第 36 题](./自测.md#sel-5) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：封装保证“状态只能被合法地改”，继承表达“是一种”，多态让“同一句调用在运行期落到不同实现”；三者是配合关系，不是三个孤立名词。

**学完能做到**
- 写代码：写出一个带纯虚接口、虚析构、`std::unique_ptr` 容器的多态体系，并区分静态绑定与动态绑定。
- 讲出来：说清封装如何保护不变量、继承与组合怎么选、编译期多态与运行期多态各是什么。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 多态就是虚函数，没有虚函数就没有多态 | 重载与模板是编译期多态；只有运行期多态才需要虚函数加指针/引用调用 |
| 继承的价值在于复用基类代码 | 继承表达 is-a；只为复用代码应该用组合，否则基类一改就波及全部派生类 |
| 用基类对象接收派生对象照样有多态 | 按值传递会切片，vptr 退回基类，虚调用不再落到派生实现 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 封装 = 数据 + 操作 + 访问控制，把不变量写进类型 | 调用方无法构造非法状态；改内部实现不用改调用点 |
| 继承表达 is-a，并在基类接口上允许运行期替换 | 只有“派生类确实是基类的一种”才该继承；只为复用代码应改用组合 |
| 运行期多态需要虚函数 + 基类指针/引用；编译期多态靠重载与模板 | 用对象值调用虚函数不发生动态绑定，对象切片后行为静默改变 |
| 静态绑定在编译期定死目标，动态绑定在运行期经 vptr 查表 | 虚调用多一次间接跳转、常阻止内联，热路径要评估 |

**设计动机**：三大特性分别对着三个工程问题——状态被随便改坏、类型之间缺少可替换的公共契约、同一句调用写死了实现。C++ 把它们拆成三个可以独立使用的机制（访问控制、继承、虚函数/模板），而不是内置成一套整体模型，好处是按需组合、不用的不付费，代价是写代码的人必须自己判断“这里需要的是哪一种”，误用不会有人替你拦。

**版本差异**：vptr/vtable 的动态绑定机制与 C++98 一致；`override`、`final` 是 C++11 引入的检查与优化提示，不改变多态语义；编译期多态在 C++11 之后还多了 `constexpr`、可变参数模板等手段。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 保护不变量、只暴露必要接口 | 成员 private，公有方法里做校验 |
| 定义可替换的接口 | 抽象基类：纯虚函数 + `virtual ~Base() = default;` |
| 统一管理不同派生对象 | `std::vector<std::unique_ptr<Base>>`，通过基类引用调用 |
| 只是想复用实现，不是 is-a | 把被复用类型作为成员（组合），或私有继承 |

```cpp
#include <iostream>
#include <memory>
#include <vector>

class Shape {                               // 封装 + 接口
public:
    virtual ~Shape() = default;             // 基类指针删除派生对象的前提
    virtual double area() const = 0;        // 纯虚：强制派生类实现
    double twice() const { return 2 * area(); }   // 非虚接口调用虚函数
};

class Rect : public Shape {
    double w_, h_;
public:
    Rect(double w, double h) : w_(w), h_(h) {}
    double area() const override { return w_ * h_; }
};

class Circle : public Shape {
    double r_;
public:
    explicit Circle(double r) : r_(r) {}
    double area() const override { return 3.14159265358979 * r_ * r_; }
};

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Rect>(2, 3));
    shapes.push_back(std::make_unique<Circle>(1));

    for (const auto& s : shapes)
        std::cout << s->twice() << '\n';    // 动态绑定到各自的 area()
}
```

出处：虚函数与动态绑定见 ISO C++ 标准 [class.virtual]、[expr.call]；抽象类见 [class.abstract]；`std::unique_ptr` 见 `<memory>` 与 cppreference（https://en.cppreference.com/w/cpp/language/virtual）。示例可独立编译，输出 `12` 与 `6.28319`。

**可观察验证**

```cpp
#include <iostream>

struct Base {
    virtual ~Base() = default;
    virtual const char* name() const { return "Base"; }
};
struct Derived : Base { const char* name() const override { return "Derived"; } };

void byRef(Base& b) { std::cout << "ref: " << b.name() << std::endl; }   // 动态绑定
void byVal(Base b)  { std::cout << "val: " << b.name() << std::endl; }   // 切片

int main() {
    Derived d;
    byRef(d);   // ref: Derived
    byVal(d);   // val: Base
}
```

- 先看输出：`byVal(d)` 打印 `val: Base` 而编译期零警告，这就是对象切片——行为悄悄变了，只有运行结果能暴露。
- 把 `virtual ~Base()` 改成 `~Base()`，给 `Derived` 加一个 `new int[16]` 并在析构里 `delete[]`，再用 `Base* p = new Derived; delete p;` 配 `-fsanitize=address` 跑：派生析构不执行，ASan 报泄漏。
- 用 `objdump -d -C` 看 `byRef` 与 `byVal` 的调用点：前者是 `call *(%rax)` 的间接调用，后者是直接 `call`。

### ③ 面试怎么讲

**30 秒口述稿**

> 三大特性我按“解决什么问题”来讲。封装解决状态被随便改的问题：数据私有、接口公有，不变量只在类内部维护。继承解决“是一种”的关系：派生类复用基类接口并能扩展，但只为复用代码就该用组合，因为继承是最强的耦合。多态解决“同一接口不同实现”：运行期多态靠虚函数加基类指针或引用，通过 vptr 查表动态绑定；编译期多态靠重载和模板，没有运行期开销。三者合起来就是：用封装守住状态，用继承定义接口，用多态替换实现。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 多态一定要虚函数吗？ | 运行期多态要；编译期多态用模板或重载即可，比如 CRTP 就没有 vptr 开销。 |
| 为什么组合优于继承？ | 继承在编译期绑定实现、暴露基类细节、基类改动波及所有派生类；组合只在接口层耦合，可运行期替换。 |
| 构造函数里能发生多态吗？ | 不能。构造和析构期间虚调用只绑定当前正在构造/析构的那个类。 |
| 重载算多态吗？ | 算静态多态（编译期决议），面试里最好主动区分“编译期多态 / 运行期多态”。 |
| 多态的代价是什么？ | 每对象一个 vptr、每次调用一次间接跳转、难以内联；换来的是可扩展的接口。 |

### ④ 真实坑

1. **对象切片**：`std::vector<Shape> v;` 里塞 `Rect`，只拷贝基类子对象，`area()` 永远走基类版本（纯虚时直接编不过）。
2. **基类析构不是虚的**：`Base* p = new Derived; delete p;` 是 UB，派生类资源不释放。
3. **为了复用强行继承**：`class Stack : public std::vector<int>` 暴露了 `push_back`、迭代器，栈的不变量当场失效。
4. **在基类构造函数里调用虚函数做初始化**：只调到基类版本，派生类成员还没构造，读到的全是未初始化状态。

### ⑤ 练习

**A 写**：实现 `Shape`/`Rect`/`Circle`，要求 `Shape` 有纯虚 `area()`、虚析构、非虚的 `twice()`；再用 `std::vector<std::unique_ptr<Shape>>` 遍历打印。额外写一个 `struct Slice` 实验：把 `Rect` 按值赋给 `Shape` 形参（先给 `Shape` 一个非纯虚默认实现），观察输出。

**提示**：① 三个特性各配一个反例（切片、非虚析构、为复用而继承），讲的时候反例比定义有说服力；② 动态绑定用 `byRef`/`byVal` 两个函数的输出差异验证，不要只背“vptr 查表”；③ 讲“组合优于继承”时给出判据：派生类能否无条件替换基类，不能就改用成员。

验收标准：`-fsanitize=address,undefined` 无报错；删除时先派生后基类，析构顺序打印正确；能解释切片版本的输出为什么不是 `Rect` 的结果。

**B 讲**：3 分钟讲“三大特性如何配合”。必须覆盖封装保护不变量、继承的 is-a 判据、运行期/编译期多态的区别，并各举一个反例（切片、非虚析构、为复用而继承）。

验收标准：不看稿；能画出一次虚调用的 vptr 路径；能说清“什么时候不该用继承”。

> ↑ 返回[目录](#toc)

---

<a id="unit-43"></a>
## D4 · 单元 43 访问修饰符

> 来源：题库第 37 题 ｜ 速背卡：[37](./速背.md#cpp-37) ｜ 自测：[sel-5 · 第 37 题](./自测.md#sel-5) ｜ 耗时 13 min ｜ 难度 ★★☆

**一句话**：`public/protected/private` 控制的是“谁能看见这个成员”，继承方式控制的是“基类成员在派生类里降级成什么”，两件事必须分开记。

**学完能做到**
- 写代码：写出 public/protected/private 三种成员、三种继承方式，并用 `using` 或 `friend` 打通一条访问路径。
- 讲出来：说清继承方式造成的访问级别变化表，以及派生类为什么碰不到基类 private。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `protected` 成员派生类可以随便用 | 只有派生类自己的成员函数/友元能访问，且要通过派生类对象；类外和基类接口外部都不行 |
| 继承方式会改变基类自身的定义 | 只改变基类成员在派生类中的可见性并影响向上转换，基类定义一动不动 |
| `private` 继承后派生类内部也访问不到基类 public 成员 | 派生类内部照样能访问，只是类外不能通过派生类对象访问，也不能隐式转成基类指针 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `public`：任何能看到该类型的地方都能访问 | 接口、常量、类型别名放这里，改动即承诺 |
| `protected`：类外不可见，派生类成员/友元可见 | 给子类的钩子；但它把实现细节暴露给所有子类，慎用数据成员 |
| `private`：只有本类成员和友元可见，派生类也不行 | 真正的不变量放这里；子类只能通过基类的 public/protected 接口间接访问 |
| 继承方式只降低“基类成员在派生类中的可见性”，不改变基类自身，也不影响虚函数重写 | `public` 继承保持原级别；`protected` 把 public/protected 都降为 protected；`private` 全部降为 private |

**设计动机**：访问控制把“谁能依赖这个成员”写成编译期契约。`private` 让类可以换实现而不破坏调用方；`protected` 在“给子类留钩子”和“把实现细节暴露给所有子类”之间做取舍；继承方式则让“接口继承”和“实现复用”分开表达——public 继承是接口继承，private 继承只借实现、不暴露 is-a。分级的意义是让耦合范围可预测，而不只是把数据藏起来。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 对外接口 | `public:` 区，成员函数尽量 `const` |
| 给派生类留的扩展点 | `protected: virtual void onEvent();` |
| 非成员函数需要读私有状态 | `friend` 声明（优先改接口，而不是加友元） |
| 私有继承但要暴露个别成员 | 在 public 区写 `using Base::member;` |

```cpp
#include <iostream>

class Base {
    int secret_ = 1;                 // private：派生类也访问不到
protected:
    int prot_ = 2;
public:
    int pub_ = 3;
    friend class Auditor;            // 友元：非成员/非派生也能读 private
};

class Derived : public Base {
public:
    int readProtected() const { return prot_; }
    // int readPrivate() const { return secret_; }   // 错误：private 不可见
};

class Auditor {
public:
    static int peek(const Base& b) { return b.secret_; }
};

class Squeezed : private Base {      // public/protected 成员全部降为 private
public:
    using Base::pub_;                // 用 using 把单个成员重新暴露出来
};

int main() {
    Derived d;
    Squeezed s;
    std::cout << d.pub_ << d.readProtected() << Auditor::peek(d) << '\n';
    std::cout << s.pub_ << '\n';
    // d.prot_;  d.secret_;          // 错误：类外不可访问
}
```

出处：访问控制规则见 ISO C++ 标准 [class.access]、[class.access.base]；`using` 声明改变访问级别见 [namespace.udecl]；可对照 cppreference “Access specifiers”（https://en.cppreference.com/w/cpp/language/access）。

**可观察验证**

```cpp
struct Base {
    int pub = 1;
protected:
    int prot = 2;
private:
    int priv = 3;
};

struct PrivDerived : private Base {          // public/protected 成员全部降为 private
public:
    using Base::pub;                         // 用 using 把单个成员重新暴露
    int sum() const { return pub + prot; }   // 派生类内部仍能访问 protected
};

int main() {
    PrivDerived d;
    int ok = d.pub;                          // 可用：using 提升后的成员
    // int bad = d.prot;                     // 错误：private 继承降为 private
    // int bad2 = d.priv;                    // 错误：private 成员任何继承方式都不可见
    (void)ok;
}
```

- 逐条取消注释 `d.prot`、`d.priv`：两个报错的原因不同——前者是继承方式降级，后者是成员本身不可见，对照注释能分清这两件事。
- 把 `PrivDerived` 的继承改成 `public Base`：`d.prot` 依然编不过（protected 类外不可见），但 `d.pub` 不用 `using` 也能访问——降级只影响派生类里的可见级别。
- 删掉 `using Base::pub;` 后 `d.pub` 报错：private 继承下连 public 成员也一并降级，这就是“基类成员在派生类里被重新定级”的直接现象。

### ③ 面试怎么讲

**30 秒口述稿**

> 三个修饰符管的是可见性：public 到处可见；protected 类外不可见但派生类内部可见；private 只有本类和友元可见。要强调一点，派生类访问不了基类的 private，只能走基类提供的 public 或 protected 接口。继承方式是在此之上再做一次降级：public 继承保持原级别，protected 继承把 public 和 protected 都变成 protected，private 继承全部变成 private，而基类 private 成员在任何继承方式下都不可见。默认值上 class 是 private、struct 是 public。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 派生类能访问基类 private 吗？ | 不能。要么基类提供 protected/public 的访问接口，要么把派生类声明为友元（更强耦合，一般不推荐）。 |
| protected 和 private 的实际差别？ | 只差“派生类能否直接看见”。protected 数据成员会让所有子类依赖基类实现，重构成本高。 |
| 继承方式会改变虚函数重写吗？ | 不会。private 继承下派生类仍然重写虚函数，只是类外不能通过 `Base*` 使用这个对象。 |
| `friend` 会被继承或传递吗？ | 都不会。友元关系不是成员，单向且不传递；`friend class X;` 也不代表 X 的派生类能访问。 |
| 类外能访问 protected 成员吗？ | 不能直接访问；只能通过派生类的成员函数，或在该类上下文中声明的友元。 |

### ④ 真实坑

1. **把数据成员设成 protected 图省事**：子类直接改状态绕过校验，不变量失效，改基类布局还会波及全部派生类。
2. **`class D : B` 忘了 `public`**：外部 `Base* p = &d;` 编译失败，多态容器塞不进去。
3. **protected 继承后当接口用**：`class D : protected B` 之后外部无法把 `D*` 转成 `B*`，运行时多态在调用侧直接断掉。
4. **友元声明位置写错**：在类内写 `friend class Logger;` 却把 `Logger` 定义在别的命名空间，友元指向了另一个类型，编译期报“无法访问私有成员”。

### ⑤ 练习

**A 写**：写出 `Base`（public/protected/private 各一个成员）与 `Derived : protected Base`，在 `Derived` 内部访问三种成员、在 `main` 里逐条尝试访问并保留编译错误；再写一个 `friend class` 读取 private 成员，最后用 `using Base::pub_;` 把某成员在 private 继承下重新暴露。

**提示**：① 画一张 3×3 的表（三种成员 × 三种继承方式），比背句子可靠，面试时直接照着说；② 每个“类外访问失败”都保留报错原文，能描述报错就说明真懂规则；③ 讲 `friend` 时补一句：友元不可继承、不传递、且只是单向授权。

验收标准：三条类外访问错误全部复现并注释原因；能画出三种继承方式下 public/protected 成员的降级表；`friend` 版本能正确读到 private。

**B 讲**：2 分钟讲“访问修饰符与继承方式的组合”。必须包含三类成员的可见范围、三种继承的降级规则、派生类访问基类 private 的结论。

验收标准：不看稿；能现场口述 3×3 的可见性表格；能举一个 protected 数据成员导致维护问题的例子。

> ↑ 返回[目录](#toc)

---

<a id="unit-44"></a>
## D4 · 单元 44 多重继承与菱形继承

> 来源：题库第 38 题 ｜ 速背卡：[38](./速背.md#cpp-38) ｜ 自测：[sel-5 · 第 38 题](./自测.md#sel-5) ｜ 耗时 16 min ｜ 难度 ★★★

**一句话**：多重继承本身没问题，问题出在“同一个祖先被继承了两份”——虚继承把祖先收敛成一份，代价是地址偏移和多一次间接寻址。

**学完能做到**
- 写代码：复现非虚菱形继承的二义性，再用 `virtual` 继承让它只剩一份基类子对象。
- 讲出来：说清二义性与数据冗余的区别、虚基类的初始化责任落在谁身上、为什么接口多继承比状态多继承安全。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 多重继承一定比单继承更慢、更危险 | 危险来自菱形重复子对象和二义性；组合多个纯接口的多重继承没有额外运行期成本 |
| 加一次 `virtual` 继承就万事大吉 | 必须每一条路径都虚继承同一个祖先；一条虚一条不虚仍会有两份副本 |
| 虚继承只是语法糖，对象布局不变 | 布局变了：虚基类位置由最派生类决定，访问要经偏移计算，`sizeof` 随之增大 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 一个类可以同时继承多个基类，非虚基类子对象按继承列表顺序依次排布 | 基类指针转换要调整地址，`static_cast<A*>(&d)` 与 `static_cast<B*>(&d)` 的数值可能不同 |
| 多个基类有同名成员时，在派生类作用域产生二义性，必须写 `A::x` 或 `using A::x;` | 这是编译期名字查找错误，不是运行期问题 |
| 菱形继承下公共祖先默认出现两份副本 | 改一份另一份不变，`d.value` 直接二义，数据冗余还翻倍 |
| 虚继承让公共祖先只保留一份，且由最派生类负责初始化 | 初始化列表写错会编译失败或悄悄用默认构造；访问虚基类成员要多一次偏移计算 |

**设计动机**：多重继承让“实现多个接口”和“复用多份实现”能同时表达，但“同一个祖先要不要只保留一份状态”是语义决定，语言猜不出来，所以 C++ 不自动去重，而是提供虚继承让你显式声明。代价很具体：虚基类子对象必须由最派生类构造，访问它也要经过运行期偏移，这就是“共享一份状态”要付的账。

**版本差异**：多重继承与虚继承的语义自 C++98 起未变，虚基类仍由最派生类负责初始化；对象布局（偏移、`sizeof`）标准从不规定，由 ABI 决定，所以不同编译器、不同平台的具体数值可以不同。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 组合多个纯接口 | `class D : public IReadable, public IWritable`，接口类只放纯虚函数和虚析构 |
| 复用一小段无状态行为（mixin） | 空的基类 + 模板/`using`，不要带数据成员 |
| 消除同名成员二义性 | `using A::value;` 或显式 `A::value` |
| 必须共享一份公共状态 | 中间层写 `class B : virtual public A`，最派生类负责 `A(...)` 初始化 |

```cpp
#include <iostream>

struct Base { int value = 0; };

// 非虚菱形：NP_D 里有两份 Base，d.value 二义，必须写限定符
struct NP_L : Base {};
struct NP_R : Base {};
struct NP_D : NP_L, NP_R {};

// 虚菱形：公共祖先只保留一份
struct L : virtual Base { int l = 1; };
struct R : virtual Base { int r = 2; };
struct D : L, R { int d = 3; };

int main() {
    NP_D nd;
    nd.NP_L::value = 1;          // 两份 Base，必须指明是哪一份
    nd.NP_R::value = 2;
    std::cout << nd.NP_L::value << ' ' << nd.NP_R::value << '\n';

    D d;
    d.value = 42;                // 唯一一份 Base，无二义
    L& l = d;
    R& r = d;
    l.value = 7;
    std::cout << r.value << '\n';    // 7：两个引用看到同一份子对象
}
```

出处：多重继承与虚继承的语义见 ISO C++ 标准 [class.mi]、[class.virtual]；名字查找与二义性见 [class.member.lookup]；可对照 cppreference “Derived classes”（https://en.cppreference.com/w/cpp/language/derived_class）。

**可观察验证**

```cpp
#include <iostream>

struct A { int value = 0; };
struct B : virtual A {};
struct C : virtual A {};
struct D : B, C {};

int main() {
    D d;
    A* viaB = static_cast<B*>(&d);
    A* viaC = static_cast<C*>(&d);
    std::cout << (viaB == viaC) << ' '
              << (void*)viaB << ' ' << (void*)viaC << std::endl;
    std::cout << sizeof(D) << std::endl;
}
```

- 输出 `1` 说明两条路径拿到同一个 `A` 子对象；把中间层的 `virtual` 去掉，同一段代码会输出 `0`，且 `d.value` 变成二义错误。
- 用 GCC 的 `-fdump-lang-class`（或 `clang++ -Xclang -fdump-record-layouts`）打印 `D` 的布局：虚基类排在对象尾部，`sizeof(D)` 比非虚版本更大。
- 分别打印 `(void*)static_cast<L*>(&d)` 与 `(void*)static_cast<R*>(&d)`：数值不同是正常的，判断“是不是同一对象”必须先转成共同基类再比较。

### ③ 面试怎么讲

**30 秒口述稿**

> 多重继承是一个类同时继承多个基类，对象里按继承列表顺序依次包含各个基类子对象。它带来两个问题：一是多个基类有同名成员时产生二义性，编译期就得用作用域限定符或 `using` 消除；二是菱形继承，如果两个中间类都非虚继承同一个祖先，最派生类里会有两份祖先子对象，改一份另一份不变。解法是在中间层用 `virtual` 继承，让祖先进化为虚基类，只保留一份，代价是多一层间接寻址，而且虚基类必须由最派生类初始化。工程上多重继承主要用来组合纯接口，带状态的复用我优先用组合。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 菱形继承怎么解决？ | 中间层改成 `virtual public A`，最派生类只保留一份 `A`，并负责在初始化列表里构造它。 |
| 虚继承的代价是什么？ | 对象里多出虚基类偏移信息，访问虚基类成员要经偏移计算；构造顺序也变了，虚基类最先构造。 |
| 虚基类为什么由最派生类初始化？ | 否则每个中间类都会初始化一次，无法保证“只构造一份”；标准规定由最派生类负责，中间类的初始化被忽略。 |
| 二义性是编译期还是运行期？ | 编译期。名字查找在派生类作用域找到多个候选就报错，和虚函数无关。 |
| 什么时候该用多重继承？ | 组合多个无状态接口（纯虚函数）或 mixin；需要共享状态时先考虑组合和委托。 |

### ④ 真实坑

1. **忘写 `virtual` 的菱形**：两份 `Base` 各存一份配置，代码改了 `L` 那份、`R` 那份还是旧值，逻辑表现像“随机不生效”。
2. **一条路径虚继承、一条不虚**：`B : virtual A`、`C : A`、`D : B, C`，`A` 仍然有两份，二义性和冗余都在，容易误以为“加了 virtual 就万事大吉”。
3. **最派生类没初始化虚基类**：虚基类没有默认构造时编译失败；有默认构造时会悄悄用默认值，配置项全部为空。
4. **多继承 + 两边都重写同一虚函数**：`D` 不重写就调用二义，必须在 `D` 里显式 `override` 才能消除。

### ⑤ 练习

**A 写**：先写非虚菱形 `A/B/C/D`，访问 `d.value` 复现二义性并注释错误；再改成 `virtual public` 版本，证明 `static_cast<B*>(&d)` 与 `static_cast<C*>(&d)` 指向同一个 `A` 子对象（比较转换后的 `A*` 是否相等，不要比较 `void*`）。

**提示**：① 先复现二义性错误再引入 `virtual`，顺序反了就看不出虚继承解决了什么；② 比较“是否同一对象”一律转成共同基类指针，别比 `void*` 地址；③ 记录 `sizeof` 前后的变化，用具体数字说明虚继承的布局代价。

验收标准：两版都能编译（非虚版用限定符访问）；虚继承版 `&d.value` 只有一个地址；能解释 `sizeof(D)` 变大的原因。

**B 讲**：2 分钟讲“多重继承的问题与虚继承的代价”。必须覆盖二义性、数据冗余、虚基类初始化责任、接口多继承的适用场景。

验收标准：不看稿；能画出两种菱形的对象布局示意；能说清“为什么虚基类要由最派生类初始化”。

> ↑ 返回[目录](#toc)

---

<a id="unit-45"></a>
## D4 · 单元 45 重载与重写的区别

> 来源：题库第 39 题 ｜ 速背卡：[39](./速背.md#cpp-39) ｜ 自测：[sel-5 · 第 39 题](./自测.md#sel-5) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：重载是同一作用域里“同名不同参，编译期选一个”；重写是继承体系里“同签名换实现，运行期选一个”，签名差一点就退化成名字隐藏。

**学完能做到**
- 写代码：同一份代码里演示重载决议、带 `override` 的重写、协变返回，以及用 `using` 解除名字隐藏。
- 讲出来：说清签名由什么构成、重写为什么不看返回类型（除协变）、`override`/`final` 各自防什么错。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 重写只要函数名和参数列表一样就行 | 还必须 cv 限定、引用限定一致，返回类型相同或协变，否则只是隐藏而不是重写 |
| 只改返回类型也算重载 | 函数签名不含返回类型，只差返回类型的两个声明是重复定义，直接编译失败 |
| 派生类写了同名函数，基类的同名重载还能直接调 | 名字隐藏会盖住基类所有同名重载，要写 `using Base::f;` 才能恢复 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 重载：同一作用域内同名、参数列表不同，编译期按实参选最佳匹配 | 返回类型不参与重载；只改返回类型是重复定义 |
| 重写：派生类为基类虚函数提供同签名实现，经基类指针/引用调用时动态绑定 | 参数列表、cv 限定、引用限定必须完全一致，否则只是隐藏，`override` 会直接报错 |
| 返回类型允许协变：基类返回 `Base*`/`Base&`，派生类可返回 `Derived*`/`Derived&` | 协变要求派生类可访问基类且 cv 不更弱；返回值版本不行 |
| 派生类声明同名函数会隐藏基类所有同名重载，而非仅隐藏同签名那个 | 想在派生类看到基类重载，写 `using Base::f;` |

**设计动机**：重载解决“同一个动作、不同参数”共用一个名字，选择全在编译期消解，运行期零成本；重写解决“同一个接口、不同实现”能在运行期替换，代价是 vptr 间接调用。两套规则分别属于作用域和继承体系，标准没有把它们统一，于是派生类一声明同名函数就把基类那组名字整体遮住——`using` 声明和 `override` 就是给这两套规则补上的显式开关。

**版本差异**：`override`、`final` 是 C++11 引入（C++98 只能靠注释和命名约定防签名写错）；协变返回、重载决议、名字隐藏规则自 C++98 起基本未变，`using Base::f;` 解除隐藏的写法两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 同功能多种参数 | 同一作用域写 `print(int)`、`print(const std::string&)` |
| 在派生类改行为 | `void f() const override;`，缺签名就让编译器报错 |
| 克隆/工厂需要保留具体类型 | `virtual Base* clone() const` → `Derived* clone() const override` |
| 派生类新增重载但保留基类版本 | public 区写 `using Base::f;` |

```cpp
#include <iostream>
#include <string>

struct Base {
    virtual ~Base() = default;
    virtual Base* clone() const { return new Base(*this); }   // 返回基类指针
    virtual void f(int) const { std::cout << "Base::f(int)\n"; }
    void g(int) { std::cout << "Base::g(int)\n"; }
};

struct Derived : Base {
    Derived* clone() const override { return new Derived(*this); }  // 协变返回
    void f(int) const override { std::cout << "Derived::f(int)\n"; }
    using Base::g;                       // 不写这行，下面的 g 会隐藏 Base::g
    void g(std::string) { std::cout << "Derived::g(string)\n"; }
};

void print(int) { std::cout << "print(int)\n"; }          // 重载
void print(double) { std::cout << "print(double)\n"; }
void print(const std::string&) { std::cout << "print(string)\n"; }

int main() {
    Derived d;
    Base* p = &d;
    p->f(1);                 // 运行期绑定：Derived::f(int)
    print(42);               // 编译期决议：print(int)
    print(3.14);             // print(double)
    d.g(1);                  // 靠 using 才能调到 Base::g(int)
    d.g(std::string("x"));   // Derived::g(string)
    Base* c = d.clone();     // 实际是 Derived*，被隐式转成 Base*
    delete c;
}
```

出处：重载决议见 ISO C++ 标准 [over.match]；虚函数重写与协变返回见 [class.virtual]；`override`/`final` 见 [class.virtual] 与 [dcl.fct]；名字隐藏见 [class.member.lookup]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/virtual）。

**可观察验证**

```cpp
#include <type_traits>

struct B {
    virtual ~B() = default;
    virtual void f(int) const {}
    virtual B* clone() const { return nullptr; }
};
struct D : B {
    void f(int) const override {}
    D* clone() const override { return nullptr; }
};

static_assert(std::is_same_v<decltype(&D::f), void (D::*)(int) const>);    // 签名含 cv 限定
static_assert(!std::is_same_v<decltype(&B::clone), decltype(&D::clone)>);  // 协变：返回类型不同

int main() {}
```

- 把 `D::f` 的 `const` 删掉再编译：`override` 立刻报“does not override”，这是“cv 限定属于签名”的硬证据。
- 再把 `override` 删掉：错误消失，但 `B* p = &d; p->f(1);` 仍调 `B::f`（两个函数里各打一行日志即可看出），这就是静默的“隐藏而非重写”。
- 回到 ② 的示例删掉 `using Base::g;`：`d.g(1)` 变成编译错误，说明名字隐藏盖住的是基类全部同名重载，不只是同签名那一个。

### ③ 面试怎么讲

**30 秒口述稿**

> 重载发生在同一作用域，函数名相同、参数列表不同，编译器按实参类型在编译期选最佳匹配，返回类型不参与。重写发生在继承体系里，派生类给基类的虚函数换一份实现，要求参数列表和 cv 限定完全一致，返回类型相同或协变，调用时通过基类指针或引用在运行期动态绑定。区别我记三条：作用域不同、签名要求不同、绑定时机不同。另外派生类声明同名函数会隐藏基类所有同名重载，要保留就写 `using Base::f;`，重写建议一律加 `override`，签名写错时直接编译报错。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 只改返回值算重载吗？ | 不算。函数签名不含返回类型，两个只差返回类型的声明是重复定义。 |
| 默认参数参与签名吗？ | 不参与。重写时不要改默认值，因为默认值是静态绑定的，经基类指针调用会用基类的默认值。 |
| 加 `override` 有什么用？ | 让签名不匹配从“静默隐藏”变成编译错误，是防低级 bug 最有效的一行。 |
| `final` 有什么实际收益？ | 禁止继续重写（写在函数上）或禁止继承（写在类上），还能帮助编译器去虚化，把虚调用变成直接调用。 |
| 协变返回有什么限制？ | 只支持指针和引用，派生类类型必须可转换到基类类型，cv 限定不能更弱。 |

### ④ 真实坑

1. **漏写 `const`**：基类是 `virtual void f() const`，派生类写成 `void f()`，编译通过但只是隐藏，经基类指针调用永远走基类版本。
2. **基类忘了 `virtual`**：派生类加了 `override` 会直接报错；不加就能编过，运行时静默静态绑定，多态失效。
3. **名字隐藏**：派生类写了 `void f(double)`，基类的 `f(int)` 在派生类作用域里消失，`d.f(1)` 报“无法从 int 转换”或选错版本。
4. **重写时改了默认参数**：`p->f()` 用基类默认值，`d.f()` 用派生类默认值，同一个函数两种行为。

### ⑤ 练习

**A 写**：实现 `Base`/`Derived`，包含带 `const` 的虚函数、协变返回的 `clone()`；再写三个 `print` 重载。要求：故意写一个漏 `const` 的版本，观察带 `override` 时的编译错误；然后去掉 `override`，复现“编译通过但调用基类版本”的现象。

**提示**：① 每个“重写”都加 `override`，让签名不匹配从静默隐藏变成编译错误，这比记规则有效；② 用 `decltype(&B::f)` 和 `decltype(&D::f)` 对比签名，一眼看出差在 `const` 还是参数；③ 讲名字隐藏时先给出 `d.f(1)` 编译失败的现场，再说 `using Base::f;` 怎么修。

验收标准：两个版本的差异能解释清楚；`clone()` 返回值经基类指针删除不泄漏；`using Base::g;` 删除前后 `d.g(1)` 的结果对比明确。

**B 讲**：3 分钟讲“重载、重写、隐藏三者的区别”。必须覆盖作用域、签名要求、绑定时机，并各举一个真实 bug。

验收标准：不看稿；能画出签名构成（函数名 + 参数列表 + cv/ref 限定）；能解释为什么“派生类同名函数会隐藏基类全部重载”。

> ↑ 返回[目录](#toc)

---

<a id="unit-46"></a>
## D4 · 单元 46 构造函数与析构函数

> 来源：题库第 40 题 ｜ 速背卡：[40](./速背.md#cpp-40) ｜ 自测：[sel-5 · 第 40 题](./自测.md#sel-5) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：构造是“基类 → 成员 → 自身”的自底向上初始化，析构是严格反过来；基类析构不虚，通过基类指针删除派生对象就是 UB。

**学完能做到**
- 写代码：用打印验证构造/析构的完整顺序，并通过基类指针 `delete` 演示虚析构与不虚析构的差别。
- 讲出来：说清四步构造顺序、虚析构为什么是必需的、析构函数为什么默认 `noexcept`。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 初始化列表里写的顺序就是实际构造顺序 | 实际按成员声明顺序构造，列表写反只会让你读到未初始化的成员 |
| 基类析构不写 `virtual` 也没关系，`delete` 时会自动找对 | 通过基类指针删除派生对象是 UB，派生析构不执行、资源泄漏 |
| 构造函数里调用虚函数能拿到派生实现 | 构造/析构期间只绑定当前类版本，调用纯虚函数更是 UB |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 构造顺序：虚基类 → 直接基类（按继承列表）→ 成员（按声明顺序）→ 构造函数体 | 初始化列表的书写顺序不影响实际顺序；顺序写错只是让你读到未初始化成员 |
| 析构顺序与构造严格相反：析构体 → 成员逆序 → 基类 | 依赖关系天然正确，但“在析构体里用成员”必须保证它还没被销毁 |
| 基类析构非虚时，`delete` 基类指针指向的派生对象是 UB | 派生类析构不执行，资源泄漏；多态基类必须写 `virtual ~Base()` |
| 析构函数默认 `noexcept`，抛出异常直接 `std::terminate` | 清理代码不能抛；必须记录错误就内部 `try/catch` 吞掉 |

**设计动机**：构造/析构顺序被标准定死为“基类 → 成员 → 自身，然后严格逆序”，为的是让对象在任何阶段都只碰已经构造好的部分；构造抛异常时也能按已完成的部分逆序回滚，不留半成品。虚析构则把“该销毁到哪一层”推迟到运行期，让多态删除能执行派生析构——这是多态基类必须付出的一个 vptr 代价。

**版本差异**：析构函数隐式 `noexcept` 是 C++11 起的规则（C++98 的异常规范已废弃），`override`、`= default` 也是 C++11 起；构造/析构的顺序与虚析构语义在 C++98 就已定死，两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 资源获取即初始化 | 构造函数拿资源，析构函数释放，成员用 RAII 类型 |
| 多态基类 | `virtual ~Base() = default;`，或把析构设为 protected 且非虚 |
| 成员初始化 | 一律走初始化列表，顺序与声明顺序保持一致 |
| 构造可能失败 | 抛异常，让已构造的基类和成员自动析构；不要写 `init()` 两段式 |

```cpp
#include <iostream>
#include <string>

struct Member {
    explicit Member(const char* n) : name(n) { std::cout << "member " << name << " ctor\n"; }
    ~Member() { std::cout << "member " << name << " dtor\n"; }
    std::string name;
};

struct Base {
    Base() { std::cout << "Base ctor\n"; }
    virtual ~Base() { std::cout << "Base dtor\n"; }   // 虚析构：多态删除的前提
};

struct Derived : Base {
    Member m1{"m1"};                 // 按声明顺序构造
    Member m2{"m2"};
    Derived() { std::cout << "Derived ctor body\n"; }
    ~Derived() override { std::cout << "Derived dtor body\n"; }
};

int main() {
    Base* p = new Derived;
    delete p;   // ~Derived → ~m2 → ~m1 → ~Base
}
```

出处：构造与析构顺序见 ISO C++ 标准 [class.base.init]、[class.dtor]；虚析构与多态删除见 [class.virtual]；析构默认 `noexcept` 见 [except.spec]；构造抛异常时的清理见 [except.ctor]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/destructor）。

**可观察验证**

```cpp
#include <iostream>

struct Base {
    Base() { std::cout << "Base()" << std::endl; }
    virtual ~Base() { std::cout << "~Base()" << std::endl; }   // 删掉 virtual 再跑一次
};
struct Derived : Base {
    Derived() { std::cout << "Derived()" << std::endl; }
    ~Derived() override { std::cout << "~Derived()" << std::endl; }
};

int main() { Base* p = new Derived; delete p; }
```

- 删掉 `virtual` 后同一程序只打印 `~Base()`：派生析构被跳过，这是 UB 的可观察表现；给 `Derived` 加一块 `new` 出来的缓冲区并在析构里释放，配 `-fsanitize=address` 就能看到泄漏报告。
- 在 `Derived` 里再放两个会打印的成员对象：输出顺序固定为 `Base()` → 成员（按声明顺序）→ `Derived()`，析构严格逆序；把初始化列表顺序写反，输出不变。
- 用 `-fsanitize=undefined` 跑“构造函数抛异常”的版本，确认已构造成员的析构次数与构造次数一致，没有半成品泄漏。

### ③ 面试怎么讲

**30 秒口述稿**

> 构造函数在对象创建时自动调用，名字和类名相同、没有返回类型，负责把对象带到合法状态；析构函数在销毁前自动调用，负责释放资源。顺序上，构造是虚基类、直接基类、成员（按声明顺序）、最后函数体；析构严格反过来。工程上最关键的一条是：只要这个类可能被基类指针删除，析构就必须是虚的，否则 `delete p` 只调基类析构，派生类资源泄漏，标准上就是未定义行为。另外析构函数默认是 `noexcept` 的，抛出异常会直接 terminate，所以清理逻辑不能抛。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 成员和基类谁先构造？ | 基类先，然后按成员声明顺序构造，最后执行构造函数体。初始化列表的书写顺序不改变这一点。 |
| 虚析构为什么必要？ | `delete` 基类指针时要靠虚函数机制找到派生类析构；非虚就是静态绑定，派生部分不会被销毁。 |
| 构造函数能抛异常吗？ | 能。已经构造完的基类和成员会被正确析构，对象本身不完整，异常向外传播。 |
| 析构函数能抛异常吗？ | 默认 `noexcept`，抛出即 `std::terminate`；栈展开过程中再抛会被认为是二次异常，同样终止。 |
| 构造/析构中调用虚函数会多态吗？ | 不会，只绑定当前正在构造/析构的那个类版本；构造期调用纯虚函数是 UB。 |

### ④ 真实坑

1. **基类析构非虚 + `std::unique_ptr<Base>`**：`unique_ptr` 按静态类型 `Base` 删除，派生类析构不执行，资源泄漏且行为未定义。
2. **析构函数里抛异常**：`~T() { throw std::runtime_error("x"); }` 在栈展开时直接 `std::terminate`，日志里只有一句 abort。
3. **初始化列表顺序与声明顺序不一致**：`A(int x) : b_(x), a_(b_) {}` 实际先构造 `a_`，读到的是未初始化的 `b_`。
4. **构造函数里调用虚函数或纯虚函数**：多态不生效；纯虚版本被调用是 UB，常见于“基类构造里做模板方法”。

### ⑤ 练习

**A 写**：写 `Base`/`Derived`，`Derived` 里放两个会打印的成员对象；先用虚析构跑一遍，再把基类析构改成非虚，用 `Base* p = new Derived; delete p;` 观察输出差异。另写一个构造函数抛异常的类，验证已构造成员的析构次数。

**提示**：① 先写打印版基类、成员、派生类各一个，靠输出顺序记四步，不要背口诀；② 虚析构实验一定要“删掉 `virtual` 再跑一遍”，差异才看得见；③ 析构里不抛异常：用 `try/catch` 吞掉并记日志，理由用 `std::terminate` 解释。

验收标准：构造/析构输出顺序与“虚基类→基类→成员→函数体、再逆序”完全一致；非虚析构版本能指出缺了哪几行析构；异常版本中成员析构次数正确，无泄漏（ASan 验证）。

**B 讲**：2 分钟讲“构造与析构的顺序，以及虚析构的必要性”。必须覆盖四步构造、严格逆序析构、非虚析构的 UB、析构不抛异常。

验收标准：不看稿；能现场写出输出序列；能解释“为什么析构函数默认 noexcept”。

> ↑ 返回[目录](#toc)

---

<a id="unit-47"></a>
## D4 · 单元 47 构造函数的种类

> 来源：题库第 41 题 ｜ 速背卡：[41](./速背.md#cpp-41) ｜ 自测：[sel-5 · 第 41 题](./自测.md#sel-5) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：默认/带参/拷贝/移动/委托/转换只是“同一套初始化规则的不同入口”，真正要记的是谁会被隐式调用、谁该被 `explicit` 或 `= delete` 关掉。

**学完能做到**
- 写代码：写出六种构造函数，用 `explicit` 拦住隐式转换、用 `= delete` 关掉拷贝、用 `= default` 保留移动。
- 讲出来：说清编译器何时不再生成默认构造、移动构造为什么标 `noexcept`、`= delete` 比 private 未定义好在哪。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 不写构造函数，编译器总会补一个默认构造 | 用户声明任何构造函数后就不再隐式生成默认构造，需要时只能 `= default` |
| 移动构造标不标 `noexcept` 只是风格问题 | 不标 `noexcept` 时 `std::vector` 扩容为异常安全会退回拷贝，性能差一个量级 |
| 把拷贝构造写成 private 未定义就等于禁用拷贝 | C++11 起应写 `= delete`：仍参与重载决议，报错更早、信息更明确 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 默认构造：无参或全部参数带默认值；一旦用户声明任何构造函数，就不再隐式生成 | 写了带参构造后 `T t;` 和容器 `resize` 都会编译失败，需要补 `= default` |
| 拷贝构造 `T(const T&)`：编译期生成的版本逐成员拷贝（指针只拷地址） | 持有裸资源必须自定义深拷贝，否则析构时双重释放 |
| 移动构造 `T(T&&) noexcept`：接管资源，源对象进入有效但未指定状态 | 不标 `noexcept` 时 `std::vector` 扩容会退回拷贝，性能差一个数量级 |
| 转换构造是“单参且未 `explicit`”的构造，参与隐式转换序列 | 不加 `explicit` 时 `Widget w = 3;` 能编过，重载决议会选到意料之外的分支 |
| 委托构造让一个构造函数调用同类另一个构造函数，`= default`/`= delete` 显式控制特殊成员 | 初始化逻辑只写一份；被 `delete` 的函数仍参与重载决议，调用点直接报错 |

**设计动机**：这些构造形态是 C++ 值语义演化出来的不同入口——默认构造支撑容器和数组创建，拷贝构造支撑值传递，移动构造把“接管资源”和“复制资源”分开，委托构造消除重复初始化，`explicit` 把隐式转换从默认行为变成需要显式请求。标准把默认行为定得偏“能编过”，所以写接口时的常规动作是主动关掉多余的入口。

**版本差异**：移动构造、委托构造、`= delete`/`= default`、多参 `explicit` 都是 C++11 引入；C++98 只能靠 private 未定义禁用拷贝、靠 `init()` 两段式初始化。`noexcept` 影响容器选择移动而不是拷贝的规则，也自 C++11 起生效。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 容器元素、可默认创建 | `T() = default;` |
| 禁止 `int` 隐式转 `T` | `explicit T(int);`，调用处写 `T{3}` |
| 独占资源的句柄 | 拷贝构造/赋值 `= delete`，移动 `= default` |
| 多个构造共享初始化逻辑 | `T() : T("local") {}` 委托构造 |

```cpp
#include <iostream>
#include <string>
#include <utility>

class Conn {                                  // 独占资源的句柄
public:
    Conn() : Conn("local") {}                 // 委托构造
    explicit Conn(std::string host) : host_(std::move(host)) {
        std::cout << "connect " << host_ << '\n';
    }
    Conn(const Conn&) = delete;               // 禁止拷贝
    Conn(Conn&&) noexcept = default;          // 允许移动
    Conn& operator=(const Conn&) = delete;
    Conn& operator=(Conn&&) noexcept = default;
private:
    std::string host_;
};

class Widget {
public:
    Widget() = default;                       // 保留默认构造
    explicit Widget(int id) : id_(id) {}      // 转换构造 + explicit
    void setId(int id) { id_ = id; }
    void setId(double) = delete;              // 堵住窄化实参
private:
    int id_ = 0;
};

void takeWidget(Widget) {}

int main() {
    Conn c;                                  // 委托到 Conn(std::string)
    Conn c2(std::move(c));                   // 移动构造
    Widget w{3};                             // 直接初始化，explicit 可用
    // Widget bad = 3;                       // 错误：explicit 阻止隐式转换
    // takeWidget(3);                        // 错误：同上
    // w.setId(3.7);                         // 错误：命中了 delete 的重载
}
```

出处：构造函数与委托构造见 ISO C++ 标准 [class.ctor]、[class.base.init]；拷贝/移动构造见 [class.copy.ctor]；转换构造与 `explicit` 见 [class.conv.ctor]；`= default`/`= delete` 见 [dcl.fct.def.default]、[dcl.fct.def.delete]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/constructor）。

**可观察验证**

```cpp
#include <type_traits>

struct NoThrow { NoThrow() = default; NoThrow(NoThrow&&) noexcept = default; };
struct Throwy  { Throwy() = default; Throwy(Throwy&&) {} };        // 没标 noexcept

struct Exp { explicit Exp(int) {} };

static_assert(std::is_nothrow_move_constructible_v<NoThrow>);
static_assert(!std::is_nothrow_move_constructible_v<Throwy>);      // vector 扩容会退回拷贝
static_assert(std::is_constructible_v<Exp, int>);                  // 直接初始化可以
static_assert(!std::is_convertible_v<int, Exp>);                   // 隐式转换被 explicit 挡住

int main() {}
```

- 两个 `is_nothrow_move_constructible_v` 结果相反：把两者都放进 `std::vector` 反复 `push_back` 触发扩容，只有 `NoThrow` 走移动构造（在移动/拷贝构造里各加一个计数器即可看到）。
- `is_constructible_v` 与 `is_convertible_v` 的差值就是 `explicit` 的作用范围：前者问“能不能构造”，后者问“允不允许隐式转换”。
- 回到 ② 的示例，删掉 `Conn(const Conn&) = delete;` 再写 `Conn c2(c);`：`= delete` 版本报“use of deleted function”，比 private 未定义版本的诊断更早更清楚。

### ③ 面试怎么讲

**30 秒口述稿**

> 常说的六种是：默认构造、带参构造、拷贝构造、移动构造、委托构造和转换构造。默认构造负责“空对象”，写了任何其他构造函数它就不再隐式生成；拷贝构造负责用同类型对象初始化，默认版本是逐成员拷贝，裸资源要自己深拷贝；移动构造接管右值对象的资源，必须标 `noexcept`，否则容器扩容会退回拷贝；委托构造让一个构造调另一个构造，避免初始化逻辑重复；转换构造就是单参且没加 `explicit` 的构造，会参与隐式转换。工程上我常用 `explicit` 堵隐式转换、用 `= delete` 关掉不该有的拷贝，比 C++03 的 private 未定义诊断更早更清楚。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 什么时候不再生成默认构造？ | 用户声明了任何构造函数（包括拷贝/移动）时；需要的话显式写 `= default`。 |
| 移动构造为什么一定要 `noexcept`？ | `std::vector` 扩容只有在移动构造 `noexcept` 时才敢用移动，否则为异常安全保证退回拷贝。 |
| `= delete` 和 private 不定义的区别？ | `= delete` 的函数仍参与重载决议，被选中时报“使用已删除函数”，诊断发生在编译期且信息明确。 |
| `explicit` 只能用在单参构造吗？ | C++11 起可用于多参构造，阻止 `{}` 形式的隐式转换。 |
| 拷贝构造参数为什么是 `const T&`？ | 要能绑定 const 对象和临时量；写成 `T&` 会导致临时量无法拷贝。 |

### ④ 真实坑

1. **写了带参构造**：默认构造消失，`std::vector<T> v(n);` 或 `std::array` 场景直接编译失败，报错点还不在构造函数上。
2. **单参构造忘加 `explicit`**：`void f(Widget); f(3);` 编过并悄悄构造临时对象，重载决议顺序因此改变。
3. **拷贝构造没深拷贝**：默认拷贝只复制指针，两个对象析构时 `delete` 同一块内存，崩溃或 ASan 报 double free。
4. **移动构造漏 `noexcept`**：`push_back` 扩容时编译器选拷贝构造，日志里看到一堆拷贝却找不到原因。

### ⑤ 练习

**A 写**：写 `Conn`（委托构造 + 删除拷贝 + 默认移动）和 `Widget`（`explicit` 构造 + `= delete` 的 `setId(double)`），让 `Conn c;`、`Conn c2(std::move(c));`、`Widget w{3};` 编译通过，而 `Widget bad = 3;`、`w.setId(3.7);` 编译失败。再用 `static_assert(std::is_nothrow_move_constructible_v<Conn>)` 锁住移动构造的 `noexcept`。

**提示**：① 先列出“编译器会隐式生成哪些特殊成员”，再逐条用 `= default`/`= delete`/`explicit` 改写，比背六种名字有效；② 移动构造的 `noexcept` 用 `static_assert(std::is_nothrow_move_constructible_v<T>)` 锁住，不靠记忆；③ 演示 `= delete` 时把报错抄下来，和 private 未定义版本比报错时机。

验收标准：三类错误全部按预期复现；`is_nothrow_move_constructible_v<Conn>` 为 true；能解释委托构造只执行一次完整初始化。

**B 讲**：3 分钟讲“六种构造函数与两个关键字”。必须覆盖每种构造的触发时机、`explicit` 与 `= delete`/`= default` 的作用，并说明移动构造的 `noexcept` 为什么影响性能。

验收标准：不看稿；能现场写出委托构造和删除拷贝的类；能解释 `= delete` 参与重载决议这一点。

> ↑ 返回[目录](#toc)

---

<a id="unit-48"></a>
## D4 · 单元 48 虚函数与虚函数表

> 来源：题库第 42 题 ｜ 速背卡：[42](./速背.md#cpp-42) ｜ 自测：[sel-5 · 第 42 题](./自测.md#sel-5) ｜ 耗时 16 min ｜ 难度 ★★★

**一句话**：虚函数把“调哪个实现”从编译期推迟到运行期，实现方式是每个对象带一个 vptr、每个类一张 vtable；只在构造完成、析构开始前才有效。

**学完能做到**
- 写代码：用基类引用触发动态绑定，用非虚函数对比静态绑定，并观察构造/析构期间虚调用的绑定结果。
- 讲出来：说清 vptr 与 vtable 的关系、纯虚函数与抽象类、虚调用的开销来自哪里。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 每个对象里都存一张虚函数表 | 每个类一张 vtable，每个对象只存一个指向它的 vptr |
| 构造函数里调用虚函数会走派生实现 | 构造/析构期间动态类型退化为当前类，只绑定当前类版本 |
| 函数是虚的，按值调用也能多态 | 按值调用会切片，动态绑定还要求通过指针或引用调用 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 基类 `virtual` + 派生类同签名实现 + 通过指针/引用调用，三者齐备才动态绑定 | 用对象值调用是静态绑定；对象切片后 vptr 退回基类，行为静默变化 |
| 主流实现：每个含虚函数的类一张 vtable，每个对象一个 vptr（通常在对象起始处） | 对象至少多一个指针大小；`sizeof` 不再等于成员之和，不能拿来做序列化 |
| 纯虚函数 `= 0` 让类成为抽象类，不能实例化；纯虚析构仍必须提供定义 | 接口类必须配虚析构，否则派生类析构不会被调用 |
| 构造/析构期间虚调用只绑定当前类版本，不进入派生类 | 基类构造里调用虚函数做“模板方法”拿不到派生实现，调纯虚是 UB |

**设计动机**：虚函数把“调哪个实现”从编译期推迟到运行期，用来换“同一接口、随时可替换”的扩展性；标准只规定语义不规定实现，主流 ABI 用“对象首部 vptr + 类共享 vtable”来实现，因为这能把一次动态调用压到一次查表加一次间接跳转。同时标准规定构造/析构期间只绑定当前类，是为了避免在派生部分还没构造好或已经销毁时调到派生实现。

**版本差异**：vtable/vptr 的实现方式与 C++98 一致；`override`/`final` 是 C++11 起的检查与优化提示，C++20 起虚函数还可以是 `constexpr`，这些都不改变动态绑定的语义。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 定义可替换接口 | 纯虚函数 + `virtual ~Base() = default;` |
| 可选实现 | 虚函数给默认实现，派生类按需 `override` |
| 接口类禁止实例化 | 至少一个 `= 0`，析构仍需定义 |
| 阻止进一步重写、帮助去虚化 | 函数或类上加 `final` |

```cpp
#include <iostream>
#include <string>

struct Base {
    Base() { std::cout << "ctor tag=" << tag() << '\n'; }        // 只绑定 Base::tag
    virtual ~Base() { std::cout << "dtor tag=" << tag() << '\n'; }
    virtual std::string tag() const { return "Base"; }
    void plain() const { std::cout << "Base::plain\n"; }          // 非虚：静态绑定
};

struct Derived : Base {
    Derived() { std::cout << "Derived body\n"; }
    std::string tag() const override { return "Derived"; }
    void plain() const { std::cout << "Derived::plain\n"; }
    int payload_ = 0;
};

int main() {
    Derived d;                          // 输出：ctor tag=Base → Derived body
    const Base& r = d;
    std::cout << r.tag() << '\n';       // Derived：动态绑定
    r.plain();                          // Base::plain：静态绑定
    std::cout << sizeof(Base) << ' ' << sizeof(Derived) << '\n';
}                                       // 析构输出：dtor tag=Base
```

出处：虚函数与动态绑定见 ISO C++ 标准 [class.virtual]；抽象类见 [class.abstract]；对象表示见 [intro.object]；可对照 cppreference（https://en.cppreference.com/w/cpp/language/virtual）。`sizeof` 结果由 ABI 决定，LP64 主流实现通常打印 `8 16`。

**可观察验证**

```cpp
#include <iostream>

struct Base {
    virtual ~Base() = default;
    virtual const char* tag() const { return "Base"; }
};
struct Derived : Base { const char* tag() const override { return "Derived"; } };

int main() {
    Derived d;
    const Base& r = d;
    std::cout << r.tag() << ' ' << d.Base::tag() << std::endl;   // Derived Base
    std::cout << sizeof(Base) << ' ' << sizeof(Derived) << std::endl;
}
```

```plaintext
g++ -std=c++17 main.cpp -o a.out
nm -C a.out | grep "vtable for"          # 每个多态类一个 vtable 符号
objdump -d -C a.out | grep "call.*%rax"  # 虚调用处的间接 call
```

- 输出 `Derived Base`：同一对象上，`r.tag()` 走动态绑定、`d.Base::tag()` 是显式限定调用，两条路径结果不同。
- `sizeof(Base)` 在 LP64 上是 8：基类没有任何数据成员，这 8 字节就是 vptr；对象只存指针、表在类级别共享，这组数字能直接印证。
- `nm -C` 里 `vtable for Base`、`vtable for Derived` 各一个符号：重写后 `Derived` 的表里对应槽位换成了派生实现。

### ③ 面试怎么讲

**30 秒口述稿**

> 虚函数是用 `virtual` 声明、允许派生类重写的成员函数。编译器为每个含虚函数的类生成一张虚函数表，表里存该类各个虚函数的地址，重写后派生类的表里对应条目被替换。每个对象里有一个隐藏的 vptr 指向自己类的表，调用虚函数时先取 vptr，再按固定偏移取函数地址，最后间接跳转，这就是动态绑定。它带来两个约束：第一，只有通过指针或引用调用才生效，按值调用和切片都不行；第二，构造和析构期间对象的动态类型退化，虚调用只绑定当前类版本。开销是每对象一个指针、每调用一次间接跳转，通常还会阻止内联。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| vptr 一定在对象开头吗？ | 标准不规定；主流 ABI（Itanium、MSVC）把它放在起始处，不能依赖这个假设写代码。 |
| vtable 是每个对象一份吗？ | 每个类一份，同类型对象共享；对象里只有指向它的指针。 |
| 虚调用的开销具体在哪？ | 读 vptr、查表、间接跳转，且难以内联；分支预测和缓存不友好时更明显。 |
| 纯虚函数可以有定义吗？ | 可以，纯虚析构必须定义（派生析构会调用基类析构）；纯虚普通函数也能定义，但只能显式 `Base::f()` 调用。 |
| 虚函数可以是模板吗？ | 不能。成员函数模板不能是虚函数，因为 vtable 条目必须在类定义时确定。 |

### ④ 真实坑

1. **基类析构非虚**：`delete` 基类指针只执行基类析构，派生类持有的缓冲区泄漏，标准上是 UB。
2. **构造函数里调用虚函数做模板方法**：只调到基类版本；若该函数是纯虚的，运行期直接 UB 崩溃。
3. **把多态对象按值放进容器**：`std::vector<Base>` 存 `Derived` 时切片，vptr 变成 `Base` 的，`override` 永远不生效。
4. **用 `memcpy`/`sizeof` 处理含虚函数的对象**：vptr 被当成数据拷进文件或发到网络，读回来就是非法指针。

### ⑤ 练习

**A 写**：实现 `Base`/`Derived`，要求构造函数与析构函数里都打印 `tag()`；在 `main` 中分别用对象、基类引用、基类指针调用虚函数，打印 `sizeof` 和 `&d` 与 `static_cast<Base*>(&d)` 的地址。再加一个纯虚接口 `IAnimal`，尝试 `IAnimal a;` 复现编译错误。

**提示**：① 用“虚函数 + 同签名 + 指针/引用调用”三个前提自检，缺一条就退化成静态绑定；② `sizeof` 对比是最省事的 vptr 证据，别只背“对象里有个指针”；③ 构造/析构期虚调用的实验要把打印放进构造函数体里，放在 `main` 里看不到差异。

验收标准：输出序列能证明“构造期绑定基类、析构期绑定基类”；能解释 `sizeof` 差在哪里；`IAnimal a;` 报“抽象类无法实例化”。

**B 讲**：3 分钟讲“虚函数、vtable 与动态绑定”。必须覆盖 vptr/vtable 关系、动态绑定的三个前提、构造析构期的限制、一次虚调用的开销。

验收标准：不看稿；能画出对象 → vptr → vtable → 函数地址的路径；能解释“为什么按值调用不会多态”。

> ↑ 返回[目录](#toc)

---

<a id="unit-49"></a>
## D4 · 单元 49 虚函数与对象模型进阶

> 来源：专题扩展 ｜ 耗时 18 min ｜ 难度 ★★★

> 补充单元：题库之外的对象模型进阶内容，基础 vtable 机制见单元 48，这里只讲布局、RTTI 与优化，不重复基础题。

**一句话**：虚继承把“基类子对象在哪”变成运行期数据，于是指针转换要调地址、`dynamic_cast` 要查表、布局不能手算——这三件事是进阶题的全部考点。

**学完能做到**
- 写代码：用指针差值观测虚基类子对象的实际偏移，并用 `dynamic_cast` 完成一次跨分支转换。
- 讲出来：说清虚基类偏移存在哪里、RTTI 的大致实现路径、编译器在什么条件下能把虚调用去虚化。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 虚继承对象里基类子对象总在固定偏移，编译期就能算 | 偏移取决于最派生类，主流实现把偏移存进 vtable，转换时要运行期查表 |
| `dynamic_cast` 失败返回空，就当普通转换随便用 | 它依赖 RTTI 与类型图遍历，比 `static_cast` 贵得多，热路径要缓存结果或用标签分派 |
| `final` 只是禁止继承的语法约束 | 它还能让编译器确认实现唯一，从而把虚调用去虚化甚至内联 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 虚基类子对象的位置不固定（取决于最派生类），主流实现把偏移记录在 vtable 的虚基类偏移项里 | 同一份源码里 `Base*` 与 `Derived*` 的地址数值可以不同，`reinterpret_cast` 直接比地址会得出错误结论 |
| 非虚基类按继承列表顺序排在对象前部，虚基类通常排在尾部；空基类可被优化掉（EBO） | 布局由 ABI 决定，手算偏移、`memcpy` 序列化多态对象都是未定义行为 |
| `dynamic_cast` 依赖 RTTI：沿 vtable 找到类型信息，再做运行期类型检查 | 向下/交叉转换失败返回 `nullptr`（引用版抛 `std::bad_cast`）；`-fno-rtti` 下直接编不过 |
| `final`、`override` 与可见的具体类型让编译器能去虚化，把间接调用变成直接调用甚至内联 | 热路径上 `final` + LTO 能把虚调用开销压到接近零；但没有 `final` 时编译器必须保守 |

**设计动机**：虚继承把“公共祖先只保留一份”变成运行期才知道的事实——最派生类不同，祖先子对象的位置就不同，所以标准允许实现把偏移存进表里，`static_cast` 不再是纯编译期地址运算；RTTI 与 `dynamic_cast` 也建立在同一套“对象里有类型信息”的结构上。`final` 则是反方向的补充：把“目标唯一”的信息还给编译器，让动态绑定能退化回静态调用，热路径因此有机会接近零开销。

**版本差异**：RTTI 与 `dynamic_cast` 的语义自 C++98 起未变；`final`/`override` 是 C++11 引入，去虚化的实际效果还取决于编译器版本与是否开启 LTO；虚基类偏移的存放方式始终是实现（ABI）细节，标准不做规定。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 安全向下转换 | `if (auto* p = dynamic_cast<Derived*>(base)) { ... }` |
| 稳定布局、可序列化 | 用标准布局类型，不放虚函数、虚基类 |
| 热路径减少虚调用 | `final` 修饰叶节点类，避免循环里反复 `dynamic_cast` |
| 判断是否同一对象 | 先转成共同基类指针再比较，不要直接比不同分支的指针 |

```cpp
#include <cstddef>
#include <iostream>

struct VBase {
    virtual ~VBase() = default;      // 多态类型：dynamic_cast 的前提
    int vb = 1;
};
struct L : virtual VBase { int l = 2; };
struct R : virtual VBase { int r = 3; };
struct D : L, R { int d = 4; };

int main() {
    D obj;
    auto origin = reinterpret_cast<char*>(&obj);
    auto base  = reinterpret_cast<char*>(static_cast<VBase*>(&obj));
    auto left  = reinterpret_cast<char*>(static_cast<L*>(&obj));
    auto right = reinterpret_cast<char*>(static_cast<R*>(&obj));

    std::cout << (base - origin) << ' ' << (left - origin)
              << ' ' << (right - origin) << '\n';   // 偏移由 ABI 决定

    L* pl = &obj;
    R* pr = dynamic_cast<R*>(pl);    // 交叉转换：靠 RTTI 查表
    std::cout << (pr != nullptr) << ' ' << pr->vb << '\n';   // 1 1
    std::cout << sizeof(D) << '\n';
}
```

出处：对象表示与子对象见 ISO C++ 标准 [intro.object]；基类指针转换见 [expr.static.cast]；`dynamic_cast` 语义见 [expr.dynamic.cast]；虚函数与 `final` 见 [class.virtual]；可对照 cppreference “dynamic_cast”（https://en.cppreference.com/w/cpp/language/dynamic_cast）与 “Empty base optimization”（https://en.cppreference.com/w/cpp/language/ebo）。虚基类偏移的具体存放方式属于 ABI 细节，本示例只打印观测值，不做断言。

**可观察验证**

```cpp
#include <iostream>

struct V { virtual ~V() = default; int v = 1; };
struct L : virtual V { int l = 2; };
struct R : virtual V { int r = 3; };
struct D : L, R { int d = 4; };

int main() {
    D obj;
    L* pl = &obj;
    R* pr = dynamic_cast<R*>(pl);                 // 交叉转换：靠 RTTI 查表
    std::cout << (pr != nullptr) << ' ' << (pr && pr->v == obj.v) << std::endl;
    std::cout << (void*)static_cast<V*>(pl) << ' '
              << (void*)static_cast<V*>(pr) << std::endl;    // 两个 V* 地址相同
    std::cout << (void*)pl << ' ' << (void*)pr << std::endl; // 分支指针地址不同
}
```

```plaintext
g++ -std=c++17 -O2 -fdump-lang-class layout.cpp                 # GCC：看虚基类偏移与 vtable 布局
clang++ -std=c++17 -Xclang -fdump-record-layouts -c layout.cpp  # Clang：看对象布局
```

- 第一行输出 `1 1`：交叉转换成功且两边读到的 `v` 相同，说明两条分支共享同一个 `V` 子对象；把 `dynamic_cast` 换成 `static_cast` 做交叉转换会直接编译失败。
- 第二行两个 `V*` 地址相同、第三行 `L*`/`R*` 地址不同：这就是“基类指针转换要调整地址”的观测证据。
- 用 `g++ -fno-rtti` 编译同一段代码：`dynamic_cast` 处直接报错，说明 RTTI 不是零成本抽象，关掉就不能用。

### ③ 面试怎么讲

**30 秒口述稿**

> 进阶部分我会从布局讲。普通多继承里基类子对象按继承列表顺序排，地址在编译期就能算出来，所以 `static_cast` 只是调一下指针；但虚继承的基类子对象位置取决于最派生类，主流实现把偏移存进 vtable 的虚基类偏移项，转换时要去查，所以 `Base*` 和 `Derived*` 的数值可能不同，不能用 `reinterpret_cast` 直接比较。RTTI 也挂在 vtable 上：`dynamic_cast` 先找到类型信息，再判断目标类型是否可达，失败返回空指针，引用版抛 `bad_cast`。优化方面，`final` 和 LTO 能让编译器确认没有更派生的实现，从而去虚化，把间接调用变成直接调用。做序列化时我一定用标准布局类型，不碰含虚函数或虚基类的对象。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 虚基类偏移存在哪里？ | 标准不规定；Itanium ABI 放在 vtable 的虚基类偏移表里，MSVC 用 vbptr 指向虚基类表，都是实现细节。 |
| 为什么 `Base*` 和 `Derived*` 转 `void*` 地址不同？ | 非虚基类有固定偏移、虚基类要运行期查偏移，指针转换必须调整地址；`void*` 会丢掉类型信息，所以不能这样比。 |
| `dynamic_cast` 的性能如何？ | 一次或多次查表 + 类型图遍历，比 `static_cast` 贵得多；热路径上先缓存结果或用标签分派。 |
| 什么是去虚化？ | 编译器确认调用目标的唯一实现（对象是 final、类型已知、构造/析构期）时，把间接调用替换成直接调用甚至内联。 |
| 关闭 RTTI 有什么影响？ | `dynamic_cast`、`typeid` 不可用，异常类型匹配也可能受影响；不少游戏/嵌入式项目用自定义类型标识替代。 |

### ④ 真实坑

1. **用 `reinterpret_cast` 比较基类指针**：多继承下两个分支的地址不同，判断“是否同一对象”直接出错，正确做法是先转成共同基类再比较。
2. **把多态对象当字节块处理**：`memcpy` 或 `write(fd, &obj, sizeof(obj))` 会把 vptr 和虚基类偏移一起写出去，读回来是野指针。
3. **`dynamic_cast` 用在非多态类型上**：源类型没有虚函数时向下/交叉转换直接编译失败，报“源类型不是多态类型”。
4. **以为 `final` 只是语法约束**：没加 `final` 的叶节点类会让编译器保守地保留间接调用，热循环里白白多付 vtable 开销。

### ⑤ 练习

**A 写**：定义 `VBase/L/R/D` 的虚继承结构，打印 `VBase*`、`L*`、`R*` 相对 `&obj` 的字节偏移，并验证 `L` 与 `R` 看到的是同一个 `VBase` 子对象；再用 `dynamic_cast<R*>(pl)` 做交叉转换，失败分支用 `nullptr` 判断。把同样的实验在非虚继承版本上重跑一次对比。

**提示**：① 只用打印偏移做观测，不要断言具体数值——布局是 ABI 细节，断言会跨编译器失败；② 交叉转换和向下转换各写一例，失败分支用 `nullptr` 判断，引用版留到追问再讲；③ 讲去虚化时先说明“编译器得先证明目标唯一”，再给 `final` + LTO 的实测思路，别直接下“没有开销”的结论。

验收标准：两个版本的偏移差异能解释；交叉转换返回非空且 `vb` 值一致；能说明为什么不能用 `reinterpret_cast` 比地址。

**B 讲**：3 分钟讲“虚继承布局、RTTI 与去虚化”。必须覆盖虚基类偏移的存放位置（说明是 ABI 细节）、`dynamic_cast` 的检查过程、`final`/LTO 的去虚化条件。

验收标准：不看稿；能画出含虚基类的对象布局示意；能说清“为什么标准不保证布局，但工程上又必须理解布局”。

> ↑ 返回[目录](#toc)

---

> 下一篇：[模板、STL 与并发](#ch5)

---


<a id="ch5"></a>
# 第 5 章 · 模板、STL 与并发

> 对应题库第 43 题，另含 4 个补充单元。
> 上一篇：[面向对象与对象模型](#ch4) ｜ 返回 [速背卡片](./速背.md)。

---

<a id="unit-50"></a>
## D5 · 单元 50 模板实现一定要写在头文件中吗

> 来源：题库第 43 题 ｜ 速背卡：[43](./速背.md#cpp-43) ｜ 自测：[sel-5 · 第 43 题](./自测.md#sel-5) ｜ 耗时 16 min ｜ 难度 ★★☆

**一句话**：模板是“等到使用点才生成代码的配方”，所以关键不是文件放在哪，而是实例化那一刻编译器能不能看见完整定义。

**学完能做到**
- 写代码：把类模板拆成 `.h` + `.tpp`，再用显式实例化与 `extern template` 控制代码生成位置。
- 讲出来：说清隐式/显式实例化、两阶段查找，以及 `.tpp` 并没有真正“分离编译”。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 模板的声明和实现必须放在同一个头文件里 | 要求只是“实例化时定义可见”；`.h` + `.tpp` 拆开、最后 `#include` 回来同样成立 |
| 实现放 `.cpp` 就一定链接失败 | 只要定义或显式实例化出现在使用它的同一个 TU 里，照样能链接 |
| `extern template` 会把实例化“导出”给别的 TU | 它只是抑制本 TU 的隐式实例化，真正的定义必须由另一个 TU 的显式实例化提供 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 模板本身不生成机器码，只有在具体类型上实例化时才生成 | 只有声明没有定义，编译器无法展开，最终是链接期找不到符号 |
| 隐式实例化发生在使用点所在的翻译单元 | 每个用到 `Foo<int>` 的 `.cpp` 都必须“看见定义”，否则 `undefined reference` |
| 两阶段查找：非依赖名在定义点绑定，依赖名在实例化点按 ADL 绑定 | 实现若藏在 `.cpp`，定义点看不到依赖类型，实例化点也没有定义可用 |
| 显式实例化把生成代码集中到一个 TU，`extern template` 在别处抑制生成 | 能显著降低重复实例化的编译时间与体积，但支持的类型集合必须封闭 |

**设计动机**：模板不是函数，编译器只有在具体类型上把定义展开一遍，才知道要生成哪些机器码；标准又没有“跨翻译单元的模板定义仓库”，所以只能要求实例化点能看见定义。`extern template` 是给“支持类型固定、编译时间敏感”的场景开的后门：一处显式生成，其他地方只引用符号；代价是支持的类型集合必须提前写死。

**版本差异**：`extern template` 自 C++11 起可用；C++20 模块允许把模板定义放进模块接口单元，`import` 之后即视为可见、不再依赖文本包含，`extern template` 的用法不变。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 通用模板库，用户类型不确定 | 声明与实现都放头文件；实现多时拆到 `.tpp`，头文件末尾 `#include "box.tpp"` |
| 只支持少数固定类型 | 实现放 `.cpp`，在该文件写 `template class Box<int>;` 显式实例化 |
| 避免每个 TU 重复实例化大模板 | 头文件写 `extern template class Box<int>;`，只在一个 `.cpp` 提供定义 |
| 只想暴露接口、保持头文件可读 | 声明留在 `.h`，模板体放 `.tpp`，注意它仍然会被预处理器合并 |

```cpp
#include <cstdio>

template <class T>
class Box {
public:
    explicit Box(T v);
    T get() const;
private:
    T value_;
};

template <class T>
Box<T>::Box(T v) : value_(v) {}

template <class T>
T Box<T>::get() const { return value_; }

// 声明：别在本 TU 隐式实例化 Box<int>
extern template class Box<int>;
// 定义：本 TU 负责生成 Box<int> 的全部成员
template class Box<int>;

int main() {
    Box<int> a(42);          // 用上面显式生成的代码
    Box<double> b(3.14);     // 隐式实例化，定义必须可见
    std::printf("%d %.2f\n", a.get(), b.get());
}
```

出处：模板实例化与显式实例化见 ISO C++ 标准 [temp]、[temp.explicit]；两阶段查找见 [temp.dep]、[temp.res]；可对照 cppreference “Class template”（https://en.cppreference.com/w/cpp/language/class_template）与 “Function template”（https://en.cppreference.com/w/cpp/language/function_template）。

**可观察验证**

```cpp
#include <cstdio>

template <class T>
struct Box {
    explicit Box(T v);
    T get() const;
    T v_;
};

template <class T> Box<T>::Box(T v) : v_(v) {}
template <class T> T Box<T>::get() const { return v_; }

template struct Box<int>;             // 显式实例化：本 TU 生成 Box<int> 的两个成员
extern template struct Box<double>;   // 只声明：Box<double> 交给别的 TU 生成

int main() {
    Box<int> a(42);                   // 用本 TU 显式生成的那份
    std::printf("%d\n", a.get());
    // Box<double> d(1.5);            // 取消注释：链接失败
}
```

```plaintext
g++ -std=c++17 -c main.cpp -o main.o
nm -C main.o | grep 'Box<int>::get'      # T：本 TU 有定义
g++ -std=c++17 main.cpp -o main && ./main   # 42
# 取消注释 Box<double> d(1.5); 再链接：undefined reference to Box<double>::Box(double)
```

- 取消注释 `Box<double> d(1.5);` 再编译：目标文件能生成，链接却报 `undefined reference` 到 `Box<double>::Box(double)`——`extern template` 只压住本 TU 的生成；把这行声明也注释掉，同样的代码立刻能链接。
- `nm -C` 里 `Box<int>::get` 是 `T`（已定义），把 `Box<double>` 打开后对应符号是 `U`（未定义）——符号状态就是“显式实例化 = 生成，`extern template` = 不生成”的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 模板本身不是代码，编译器在用到 `Box<int>` 的时候才按定义实例化，所以真正的要求是“实例化时定义可见”，而不是“必须放头文件”。常规做法是声明和实现都放头文件，实现多就拆到 `.tpp`，再在头文件末尾包含，但这只是物理分层，预处理后还是一个翻译单元。如果类型集合固定，可以把实现放 `.cpp` 并显式实例化；再在头文件用 `extern template` 抑制其他 TU 重复生成。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 声明放头文件、实现放 `.cpp` 为什么链接错误？ | 使用点做隐式实例化需要完整定义，看不到就只留下一个未定义符号，链接期报 `undefined reference`。 |
| 显式实例化和隐式实例化区别？ | 显式写 `template class Box<int>;` 强制在该 TU 生成；隐式由使用点按需触发，且每个用到的 TU 各生成一份。 |
| `extern template` 做了什么？ | 只是“本 TU 不要隐式实例化这个特化”的声明，必须另有一个 TU 提供显式实例化定义，否则链接失败。 |
| 两阶段查找对写模板有什么影响？ | 非依赖名在定义点就要可见，所以定义处要包含依赖类型的头文件；依赖名靠 ADL 在实例化点查找。 |
| `.tpp` 算分离编译吗？ | 不算。它只是把实现搬到另一个文件再 `#include` 回来，编译期可见性和放头文件里完全一样。 |

### ④ 真实坑

1. **成员函数定义留在 `.cpp`**：`main.cpp` 只包含声明，调用 `Box<int>::get()` 时报 `undefined reference to Box<int>::get() const`；把定义移回头文件立即恢复。
2. **显式实例化触发全部成员**：`template class Box<int>;` 会实例化所有非模板成员，某个成员依赖 `int` 没有的操作时，即使没调用也编译失败。
3. **`extern template` 没配定义**：头文件里声明了、某个 `.cpp` 忘了写 `template class Box<int>;`，链接期才发现符号缺失，报错信息很难指向源头。
4. **宏开关造成 ODR 违规**：同一模板在两个 TU 里因 `#ifdef` 展开出不同定义，编译器不报错，链接器随机保留一份，行为不可预测。

### ⑤ 练习

**A 写**：创建 `box.h`、`box.tpp`、`main.cpp`、`box.cpp` 四个文件：`box.h` 只放声明并在末尾 `#include "box.tpp"`；`box.cpp` 放一份显式实例化 `template class Box<int>;`；`main.cpp` 使用 `Box<int>` 与 `Box<double>`。再故意删掉 `box.h` 里的 `#include "box.tpp"`，观察链接错误。

**提示**：① 先写一个只有声明、没有定义的成员函数，让 `main` 调用它，链接错误会直接指出缺的是哪个特化的哪个成员；② 两个 `.cpp` 分别 `g++ -c`，再用 `nm -C` 看哪个 `.o` 里是 `T`、哪个是 `U`，比读文档直观；③ 把 `extern template` 换成 `template class` 再链接一次，体会“抑制生成”和“提供定义”是两件事。

验收标准：`g++ -std=c++17 -Wall -Wextra` 四个文件能链接通过并输出 `42 3.14`；删除包含后能复现 `undefined reference` 并解释原因；能说明 `extern template` 加与不加时 `nm` 里符号数量的差异。

**B 讲**：2 分钟讲“模板为什么通常放头文件，以及三种替代方案”。必须覆盖实例化时机、两阶段查找、显式实例化、`.tpp` 的真实作用。

验收标准：不看稿；能说清 `.tpp` 不是分离编译；能举一个“类型集合封闭时放 `.cpp`”的适用场景。

> ↑ 返回[目录](#toc)

---

<a id="unit-51"></a>
## D5 · 单元 51 模板与编译期

> 来源：题库第 58 题 ｜ 速背卡：[58](./速背.md#cpp-58) ｜ 自测：[sel-6 · 第 58 题](./自测.md#sel-6) ｜ 耗时 15 min ｜ 难度 ★★★

> 补充单元：函数/类模板、特化与偏特化、SFINAE、`type_traits`、`constexpr` 与 `if constexpr`、CRTP，补齐第 43 题没有涉及的语言机制。

**一句话**：模板把“类型”变成参数，特化和 SFINAE 让同一段代码按类型换实现，`if constexpr` 和 CRTP 则把运行期的分支与多态提前到编译期。

**学完能做到**
- 写代码：用 `void_t` 探测成员、用 `if constexpr` 分支、用 CRTP 做静态计数。
- 讲出来：说清全特化与偏特化的区别、SFINAE 的“替换失败不是错误”、CRTP 的静态多态。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 函数模板也能偏特化 | 标准只允许函数模板全特化；“部分类型特殊处理”要靠重载或转给类模板偏特化 |
| `constexpr` 函数一定在编译期执行 | 只表示“可用于常量表达式”，运行期调用就按普通函数执行；C++20 `consteval` 才强制 |
| `if constexpr` 没选中的分支完全不检查 | 与模板参数无关的代码仍要能解析，写错照样编译不过 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 类模板可全特化和偏特化，函数模板只能全特化 | 想给“指针类型”单独实现，函数模板要靠重载或转给类模板偏特化 |
| SFINAE 指替换失败只把候选从重载集合移除，不报错 | `enable_if`、`void_t` 靠它做编译期条件分发；类型不支持时得到“无匹配重载”而非硬错误 |
| `constexpr` 表示“可以”在常量表达式里求值，`consteval` 才强制 | 把查表、哈希、尺寸计算搬到编译期；误以为 `constexpr` 一定编译期执行是常见误解 |
| `if constexpr` 在模板实例化时丢弃未选分支 | 两个分支可以只对一个类型合法，取代 tag dispatch 后代码短很多 |
| CRTP 让基类通过 `static_cast<Derived*>(this)` 调用派生实现 | 静态多态、零虚表开销；代价是基类不能当多态基类用 |

**设计动机**：C++ 想在“不引入运行期多态开销”的前提下按类型换实现，就必须让编译器在实例化时读到类型的结构信息。SFINAE 把“类型不支持某操作”从硬错误降级为候选剔除，`if constexpr` 让未选分支在实例化后被丢弃，CRTP 把虚函数换成对派生类型的静态调用——三者路径不同、目标一致：把原本运行期的分派提前到编译期。

**版本差异**：`std::void_t`、`if constexpr` 是 C++17；C++20 起 concepts/`requires` 可替代大部分 `enable_if` 与 `void_t` 探测且报错更早，`consteval` 提供强制的编译期求值。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 某些类型走特殊实现 | 类模板偏特化：`template <class T> struct X<T*> { ... };` |
| 按类型能力限制重载 | `template <class T, std::enable_if_t<std::is_integral_v<T>, int> = 0>` |
| 按类型分支、避免写两个重载 | `if constexpr (std::is_integral_v<T>) { ... } else { ... }` |
| 探测类型是否有某个成员 | `std::void_t<decltype(std::declval<T>().size())>` 配 `true_type/false_type` |
| 复用实现又不付虚函数开销 | CRTP：`template <class D> struct Base { void run() { static_cast<D*>(this)->impl(); } };` |

```cpp
#include <cstdio>
#include <string>
#include <type_traits>
#include <utility>

// 1) 用 void_t 探测是否有 size()
template <class T, class = void>
struct has_size : std::false_type {};

template <class T>
struct has_size<T, std::void_t<decltype(std::declval<const T&>().size())>>
    : std::true_type {};

// 2) if constexpr 按能力分支
template <class T>
void describe(const T& v) {
    if constexpr (has_size<T>::value) {
        std::printf("container size=%zu\n", static_cast<std::size_t>(v.size()));
    } else {
        std::printf("not a container\n");
    }
}

// 3) SFINAE 限制只接受整型
template <class T, std::enable_if_t<std::is_integral_v<T>, int> = 0>
T twice(T v) { return static_cast<T>(v * 2); }

// 4) CRTP：基类调用派生实现，静态计数
template <class D>
struct Counted {
    static inline int alive = 0;
    Counted() { ++alive; }
    Counted(const Counted&) { ++alive; }
    ~Counted() { --alive; }
    void hello() const { static_cast<const D*>(this)->impl(); }
};

struct Widget : Counted<Widget> {
    void impl() const { std::printf("widget\n"); }
};

int main() {
    describe(std::string("abc"));        // container size=3
    describe(42);                        // not a container
    std::printf("%d\n", twice(21));      // 42
    // twice(std::string("x"));          // 编译错误：候选被 enable_if 移除
    Widget w;
    w.hello();                           // widget
    std::printf("alive=%d\n", Counted<Widget>::alive); // 1
}
```

出处：模板特化见 ISO C++ 标准 [temp.spec]、[temp.class.spec]；SFINAE 见 [temp.deduct]；`if constexpr` 见 [stmt.if]；`std::void_t`/`std::enable_if_t` 见 `<type_traits>`；可对照 cppreference（https://en.cppreference.com/w/cpp/language/sfinae、https://en.cppreference.com/w/cpp/language/if）。

**可观察验证**

```cpp
#include <cstddef>
#include <cstdio>
#include <string>
#include <type_traits>
#include <utility>

template <class T, class = void>
struct has_size : std::false_type {};

template <class T>
struct has_size<T, std::void_t<decltype(std::declval<const T&>().size())>>
    : std::true_type {};

static_assert(has_size<std::string>::value);   // 有 size()
static_assert(!has_size<int>::value);          // 没有 size()：替换失败只剔除候选

template <class T>
std::size_t probe(const T& v) {
    if constexpr (has_size<T>::value) {
        return v.size();      // 只有容器才合法
    } else {
        return 0;             // T = int 时上面分支被丢弃
    }
}

int main() {
    std::printf("%zu %zu\n", probe(std::string("abc")), probe(1));  // 3 0
}
```

```plaintext
g++ -std=c++17 -Wall -Wextra probe.cpp -o probe && ./probe   # 3 0
# 把 if constexpr 换成普通 if：error: request for member 'size' in 'v',
#   which is of non-class type 'const int'
```

- 两个 `static_assert` 能过，说明 `void_t` 探测的是“表达式是否合法”：`int` 不会硬报错，只是被从候选里剔除。
- 把 `if constexpr` 换成普通 `if` 再编译，报 `request for member 'size' in 'v', which is of non-class type 'const int'`；换回来立刻通过——这就是“未选分支不实例化”。

### ③ 面试怎么讲

**30 秒口述稿**

> 模板把类型当参数，编译器在实例化时按实参生成代码。想让某些类型换实现，类模板可以全特化或偏特化，函数模板只能全特化，偏特化得用重载模拟。SFINAE 的规则是“模板替换失败只是把这个候选从重载集合拿掉，不算错误”，`enable_if` 和 `void_t` 就是靠它做条件编译。C++17 的 `if constexpr` 在实例化时丢弃未选分支，能直接按类型分支；CRTP 则让基类通过 `static_cast` 调派生实现，做零开销静态多态。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 函数模板能偏特化吗？ | 不能，标准只允许全特化；需要“部分类型”行为时用重载或转给类模板偏特化。 |
| 全特化和偏特化区别？ | 全特化把模板参数全部指定，变成普通定义；偏特化只固定一部分，仍带模板参数。 |
| SFINAE 和 `if constexpr` 怎么选？ | SFINAE 影响重载决议，决定“能不能调用”；`if constexpr` 已选定函数，只是丢弃一个分支。 |
| `constexpr` 一定编译期执行吗？ | 不一定，只保证可用于常量表达式；需要强制时用 C++20 的 `consteval`。 |
| CRTP 和虚函数怎么选？ | 类型在编译期确定、追求性能用 CRTP；需要运行期多态、异构容器用虚函数。 |

### ④ 真实坑

1. **给函数模板写偏特化**：`template <class T> void f(T*);` 这种写法被标准禁止，编译器报 “partial specialization of function template is not allowed”。
2. **SFINAE 不在立即上下文**：把条件藏进类模板成员的返回类型深处，替换失败会变成硬错误，整份代码直接编译不过。
3. **`if constexpr` 分支里写非法代码**：非依赖部分仍要能解析，且不能替代 `#if`；`#if` 是预处理，`if constexpr` 是编译期分支。
4. **CRTP 基类构造中调用派生实现**：此时派生类成员还没构造，读到的是未初始化值，行为未定义。

### ⑤ 练习

**A 写**：实现 `has_size` 探测、`describe`、`twice` 与 `Counted<D>` 四段代码，并新增一个 `has_value_type` 探测；让 `describe` 对 `std::vector<int>` 输出 `container size=N`，对 `int` 输出 `not a container`。

**提示**：① 探测表达式写成 `decltype(std::declval<const T&>().size())`，换一种写法（返回值、成员变量）结果会变，先跑通再想为什么；② 验证“分支被丢弃”，就在未选分支里写一段只对另一类型合法的代码，能编译通过即证明；③ 普通 `if` 是对照组，它的错误信息会指出分支确实被实例化了。

验收标准：`g++ -std=c++17 -Wall -Wextra` 编译通过；`twice("x")` 能复现“无匹配重载”；`Counted<Widget>::alive` 在构造/析构后回到 0；能解释为什么函数模板不能偏特化。

**B 讲**：3 分钟讲“模板的编译期能力”。必须覆盖全特化/偏特化、SFINAE、`if constexpr`、CRTP 四块，并各举一个使用场景。

验收标准：不看稿；能说清 SFINAE 与 `if constexpr` 的决策时机差异；能解释 CRTP 为什么不产生虚表。

> ↑ 返回[目录](#toc)

---

<a id="unit-52"></a>
## D5 · 单元 52 移动语义与完美转发

> 来源：专题扩展 ｜ 耗时 18 min ｜ 难度 ★★★

> 补充单元：重点在“怎么写出正确的移动构造/移动赋值和转发链”，左值右值基础与 `std::move` 的等价实现见前文单元 3、单元 14。

**一句话**：移动是“接管资源并把源对象留成合法空壳”，完美转发是“把实参的值类别原样传下去”，两件事都靠类型系统和 `noexcept` 落实。

**学完能做到**
- 写代码：实现满足五法则的 RAII 类，并写出不会丢值类别的转发函数模板。
- 讲出来：说清五法则/零法则、引用折叠、`std::forward`，以及 `noexcept` 如何影响 `vector` 扩容。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 移动就是把内存搬过去 | 移动是转移资源所有权（换指针/句柄），不搬数据；真正搬数据仍然是拷贝 |
| 参数套上 `std::move` 就一定会移动 | `std::move` 只是无条件转成右值，能否移动取决于有没有移动构造；容器扩容时还要求它 `noexcept` |
| 移动之后的源对象不能再用 | 它仍是合法对象，可析构、可赋值，只是值处于“有效但未指定”状态，别去读内容 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 移动构造“偷”资源，源对象必须进入可析构、可赋值的合法状态 | 只把指针置空不够，长度/容量要一起归零，否则析构或后续读取出错 |
| 五法则：析构、拷贝构造、拷贝赋值、移动构造、移动赋值，声明一个就要审视其余 | 只写移动构造会让拷贝构造/拷贝赋值被隐式删除，代码里一拷贝就编译失败 |
| 引用折叠 + 模板推导让 `T&&` 成为转发引用：左值推出 `T = U&`，折叠成 `U&` | 这是 `std::forward<T>` 能还原值类别的前提，也是“万能引用”名字的来源 |
| `std::forward<T>` 按显式模板实参有条件转换；漏写它右值会退化成左值 | 转发链中间少一个 `forward`，整条链都走拷贝，且没有任何报错 |
| 移动构造标 `noexcept` 才会被 `vector` 扩容采用 | `vector` 用 `move_if_noexcept` 保证强异常安全，移动可能抛异常时退回复制 |

**设计动机**：拷贝一个持有大块资源的对象要重新分配再逐字节复制，而多数场景里源对象马上就被丢弃，这份复制纯属浪费。移动语义把“资源所有权”和“对象身份”拆开，允许把指针/句柄转手、源对象退化成空壳，于是容器扩容和函数返回都变成 O(1)。完美转发是为了让这层右值信息穿过泛型包装不丢失：中间少写一次 `std::forward`，整条链就会悄悄退回拷贝，而编译器不会报任何错。

**版本差异**：移动构造、引用折叠与 `std::forward` 自 C++11 提供；C++17 起函数类型携带 `noexcept`、返回 prvalue 强制复制省略；C++20 增加 `std::construct_at` 等 constexpr 设施，`vector` 扩容仍按 `move_if_noexcept` 决策。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 管理裸资源并支持移动 | 移动构造接管指针后把源置空；移动赋值先自检、释放自身、再接管 |
| 拷贝赋值要自赋值安全 | copy-and-swap：`Buffer tmp(other); swap(tmp);` |
| 把参数原样转给下层函数 | `template <class T> void relay(T&& v) { sink(std::forward<T>(v)); }` |
| 变参构造对象 | `template <class T, class... A> T make(A&&... a) { return T(std::forward<A>(a)...); }` |
| 让容器扩容走移动 | 移动构造与移动赋值统一标 `noexcept` |
| 不需要手写任何特殊成员 | 成员用 `std::unique_ptr`/`std::vector` 管理，遵循零法则 |

```cpp
#include <cstdio>
#include <cstring>
#include <string>
#include <utility>
#include <vector>

class Buffer {
public:
    explicit Buffer(std::size_t n) : data_(new int[n]{}), size_(n) {}
    ~Buffer() { delete[] data_; }

    Buffer(const Buffer& o) : data_(new int[o.size_]), size_(o.size_) {
        std::memcpy(data_, o.data_, size_ * sizeof(int));
    }
    Buffer& operator=(const Buffer& o) {
        if (this != &o) { Buffer tmp(o); swap(tmp); }  // copy-and-swap
        return *this;
    }
    Buffer(Buffer&& o) noexcept : data_(o.data_), size_(o.size_) {
        o.data_ = nullptr;
        o.size_ = 0;
    }
    Buffer& operator=(Buffer&& o) noexcept {
        if (this != &o) {
            delete[] data_;
            data_ = o.data_;
            size_ = o.size_;
            o.data_ = nullptr;
            o.size_ = 0;
        }
        return *this;
    }
    void swap(Buffer& o) noexcept {
        std::swap(data_, o.data_);
        std::swap(size_, o.size_);
    }
    std::size_t size() const { return size_; }

private:
    int* data_;
    std::size_t size_;
};

void sink(std::string&& s) { std::printf("rvalue %s\n", s.c_str()); }
void sink(const std::string& s) { std::printf("lvalue %s\n", s.c_str()); }

template <class T>
void relay(T&& v) { sink(std::forward<T>(v)); }   // 保留值类别

int main() {
    std::vector<Buffer> v;
    v.reserve(1);
    v.emplace_back(3);
    v.emplace_back(4);                 // 扩容：noexcept 移动构造被采用
    std::printf("%zu %zu\n", v[0].size(), v[1].size());

    Buffer b(2);
    Buffer c(std::move(b));            // 接管 b 的资源
    std::printf("%zu\n", b.size());    // 0

    std::string s = "hi";
    relay(s);                          // lvalue hi
    relay(std::string("tmp"));         // rvalue tmp
}
```

出处：移动语义与特殊成员函数生成规则见 ISO C++ 标准 [class.copy.ctor]、[class.copy.assign]；引用折叠见 [dcl.ref]；`std::forward` 见 `<utility>` 与 cppreference（https://en.cppreference.com/w/cpp/utility/forward）；`noexcept` 对容器的影响见 `std::move_if_noexcept`（https://en.cppreference.com/w/cpp/utility/move_if_noexcept）。

**可观察验证**

```cpp
#include <cstdio>
#include <utility>
#include <vector>

struct Probe {
    Probe() = default;
    Probe(const Probe&) { std::puts("copy"); }
    Probe(Probe&&) noexcept { std::puts("move"); }
};

void sink(int&)  { std::puts("lvalue"); }
void sink(int&&) { std::puts("rvalue"); }

template <class T>
void relay(T&& v) { sink(std::forward<T>(v)); }   // 漏掉 forward：右值也会变左值

int main() {
    std::vector<Probe> v;
    v.reserve(1);
    v.emplace_back();
    v.emplace_back();                              // 扩容：打印 move

    int x = 1;
    relay(x);                                      // lvalue
    relay(42);                                     // rvalue
}
```

```plaintext
g++ -std=c++17 -Wall -Wextra relay.cpp -o relay && ./relay   # move / lvalue / rvalue
# 去掉移动构造的 noexcept 再跑：扩容打印 copy（vector 走 move_if_noexcept）
```

- 输出顺序 `move` / `lvalue` / `rvalue`：扩容走了移动构造，`std::forward` 又把两种值类别分别送进对应重载。
- 删掉移动构造的 `noexcept` 后扩容打印 `copy`；把 `std::forward<T>(v)` 改成 `v`，两次调用都打印 `lvalue`——两个坑都不报错、只变慢。

### ③ 面试怎么讲

**30 秒口述稿**

> 写移动构造就三件事：接管资源、把源对象置成空壳、标 `noexcept`。移动赋值还要先自检、释放自己的旧资源再接管。因为声明了移动操作，拷贝操作会被删除，所以要么补齐五个特殊成员，要么干脆用 RAII 成员走零法则。完美转发靠转发引用和引用折叠：`T&&` 遇到左值推出 `T = U&`，折叠成 `U&`；`std::forward<T>` 再按实参还原值类别。`noexcept` 不是装饰，`vector` 扩容时只有在移动不会抛异常时才移动，否则为了强异常安全会复制。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么移动构造要标 `noexcept`？ | `vector` 扩容用 `move_if_noexcept`，移动可能抛异常时会退回复制，否则无法保证强异常安全。 |
| 五法则和零法则怎么选？ | 成员能自己管资源（`unique_ptr`、`vector`、`string`）就零法则；直接持有裸指针/句柄才手写五法则。 |
| 转发引用和右值引用怎么区分？ | 必须同时满足“模板参数推导”和“形如 `T&&`”；`std::vector<T>&&`、`const T&&` 都是普通右值引用。 |
| `std::forward` 和 `std::move` 区别？ | `forward<T>` 按显式实参有条件转换，保留左/右值；`move` 无条件转成右值。 |
| 移动后的对象还能用吗？ | 能析构、能重新赋值；值处于“有效但未指定”状态，不能读它的内容。 |

### ④ 真实坑

1. **移动构造漏 `noexcept`**：`std::vector<Buffer>` 扩容时全部走拷贝，性能倒退，编译器和运行期都没有任何提示。
2. **只写移动、不写拷贝**：移动操作一声明，拷贝构造和拷贝赋值就被定义为 deleted，老代码里 `Buffer d = b;` 直接编译失败。
3. **移动赋值缺少自检**：`b = std::move(b)` 先把 `data_` 释放、再从自己手里接管，读已释放内存，ASan 立刻报错。
4. **转发链漏 `std::forward`**：`relay` 里写成 `sink(v)`，`v` 是左值，右实参永远走 `const&` 重载，多一次拷贝且不易察觉。

### ⑤ 练习

**A 写**：实现上面的 `Buffer` 五法则版本，并加计数器统计拷贝/移动次数；用 `std::vector<Buffer>` 连续 `emplace_back` 触发扩容，验证走的是移动；再把移动构造的 `noexcept` 去掉，对比拷贝次数变化。另写 `relay` + 两个 `sink` 重载，验证左/右值各走对一次。

**提示**：① 用打印语句区分拷贝/移动构造，别靠耗时判断；② 验证 `noexcept` 时只改这一个关键字，其他一行别动，输出变化才好归因；③ 转发链上“少一层 `forward`”不报错，用左值/右值两个 `sink` 重载当探针。

验收标准：`-fsanitize=address,undefined` 无报错；`b.size() == 0`；去掉 `noexcept` 后扩容拷贝次数明显上升并能解释原因；`relay` 两种实参分别打印 `lvalue` / `rvalue`。

**B 讲**：3 分钟讲“如何写出正确的移动构造/移动赋值与完美转发”。必须覆盖五法则、引用折叠、`std::forward`、`noexcept` 与 `vector` 的关系。

验收标准：不看稿；能现场写出移动赋值并说明每一步顺序；能解释 `T&&` 何时是转发引用；能说出一个漏 `noexcept` 的实际后果。

> ↑ 返回[目录](#toc)

---

<a id="unit-53"></a>
## D5 · 单元 53 STL 容器复杂度与迭代器失效

> 来源：题库第 65 题 ｜ 速背卡：[65](./速背.md#cpp-65) ｜ 自测：[sel-6 · 第 65 题](./自测.md#sel-6) ｜ 耗时 16 min ｜ 难度 ★★☆

> 补充单元：vector/deque/list/map/unordered_map 的复杂度、扩容规则与迭代器/引用/指针失效规则，以及 `erase` 循环和 `reserve` 的工程用法。

**一句话**：选容器看“访问模式 + 失效代价”，写循环看“erase 之后谁还能用”；复杂度表只是起点，失效规则才是线上事故的来源。

**学完能做到**
- 写代码：用返回值版 `erase` 安全删除，并用 `reserve` 控制扩容次数。
- 讲出来：说清五类容器的插入/删除/查找复杂度，以及各自让什么失效。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `reserve` 之后可以直接下标赋值 | `reserve` 只改 capacity，size 仍是 0，`v[0]` 是越界写（UB）；要么 `resize`，要么 `push_back` |
| 迭代器失效就说明元素地址变了 | `unordered_map` rehash 只让迭代器失效，节点不搬，元素的引用/指针仍有效 |
| `deque` 头插后引用也失效 | 标准明确：头尾插入失效所有迭代器，但对已有元素的引用没有影响（中间插入才另算） |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `vector` 连续存储，`push_back` 均摊 O(1)，扩容按实现取 1.5（MSVC）或 2（libstdc++）倍 | 扩容重新分配并搬元素，所有迭代器、引用、指针一起失效 |
| `deque` 分块存储，头尾插入 O(1)、随机访问 O(1)，中间插入 O(n) | `push_front` 使迭代器失效，但已有元素的引用/指针通常仍有效 |
| `list`/`map`/`set` 节点存储：已知位置插入删除 O(1)/O(log n)，查找 O(n)/O(log n) | 只有被删节点的迭代器失效，其他节点引用稳定；`list` 不支持随机访问 |
| `unordered_map` 桶数组 + 链表，平均 O(1)、最坏 O(n) | rehash 使迭代器失效，但元素的引用/指针不失效，因为节点本身不搬 |
| `map` 保证有序、支持范围查询；`unordered_map` 无序但点查更快 | 需要按 key 顺序遍历或区间查找选 `map`，纯点查选 `unordered_map` |

**设计动机**：容器本质上是“内存布局 + 失效规则”的打包交易。连续存储换来随机访问和缓存友好，代价是扩容搬元素、指针和引用一起失效；节点存储换来地址稳定，代价是额外指针和缓存不友好；哈希表再叠加一个桶数组与负载因子。标准只规定复杂度和失效语义、不规定扩容倍数，所以选容器要按“访问模式 + 元素地址是否需要稳定”来定，并用 `reserve` 把扩容次数压到可控。

**版本差异**：`unordered_map` 的 `rehash`/`reserve` 与 `vector::shrink_to_fit` 自 C++11 起语义稳定；C++17 新增 `extract`/`node_handle`（节点可在容器间迁移且引用不失效）和 `try_emplace`；扩容倍数始终由实现决定，标准从未规定。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 已知元素数量，避免反复扩容 | `v.reserve(n)`；注意它只改 capacity，不改 size |
| 遍历中删除元素 | `it = v.erase(it);`，关联容器同样用返回值自增 |
| 需要长期稳定的元素地址 | 用 `std::list`/`std::map`，或在 `vector` 里存 `std::unique_ptr<T>` |
| 高频点查 | `std::unordered_map`，必要时先 `reserve` 或调 `max_load_factor` |
| 需要有序遍历/范围查询 | `std::map`、`std::set`（红黑树） |

```cpp
#include <cstdio>
#include <unordered_map>
#include <vector>

int main() {
    std::unordered_map<int, int> m{{2, 20}, {1, 10}};
    int* p = &m[2];
    auto it = m.begin();
    m.rehash(1024);                 // 强制 rehash：迭代器失效
    std::printf("%d\n", *p);        // 20：引用/指针仍有效
    (void)it;                       // it 已失效，禁止再解引用

    std::vector<int> v{1, 2, 3, 4};
    for (auto i = v.begin(); i != v.end();) {
        if (*i % 2 == 0) i = v.erase(i);   // 用返回值接住下一个位置
        else ++i;
    }
    std::printf("%zu\n", v.size()); // 2

    std::vector<int> w;
    w.reserve(100);
    std::printf("%zu %zu\n", w.size(), w.capacity()); // 0 100
}
```

出处：容器复杂度与迭代器失效规则见 ISO C++ 标准 [container.requirements]；`vector` 扩容与 `reserve` 见 [vector.capacity]；`unordered_map::rehash` 见 [unord.req] 与 cppreference（https://en.cppreference.com/w/cpp/container/unordered_map/rehash、https://en.cppreference.com/w/cpp/container/vector/reserve）。

**可观察验证**

```cpp
#include <cstdio>
#include <unordered_map>
#include <vector>

int main() {
    std::vector<int> v{1, 2, 3};
    int* p = &v[0];
    v.push_back(4);                        // 触发扩容、旧块被释放
    std::printf("same=%d\n", p == &v[0]);  // 0：旧地址失效

    std::unordered_map<int, int> m{{1, 10}};
    int& r = m[1];
    auto it = m.begin();
    m.rehash(1024);                        // 强制 rehash
    std::printf("ref=%d\n", r);            // 10：引用仍有效
    (void)it;                              // it 已失效，禁止再解引用
}
```

```plaintext
g++ -std=c++17 -Wall -Wextra stl.cpp -o stl && ./stl   # same=0 / ref=10
# 把 p == &v[0] 换成 *p 读取，再用 ASan 跑：
g++ -std=c++17 -fsanitize=address stl.cpp -o stl_asan && ./stl_asan
# AddressSanitizer: heap-use-after-free
```

- `same=0`：`push_back` 扩容后原地址失效；把 `p == &v[0]` 换成 `*p` 再用 ASan 跑，报 `heap-use-after-free`。
- `ref=10`：rehash 只重排桶数组、不搬节点，所以引用和指针仍有效、迭代器失效——这就是“迭代器失效 ≠ 引用失效”。

### ③ 面试怎么讲

**30 秒口述稿**

> `vector` 是连续内存，尾插均摊 O(1)，扩容按 1.5 或 2 倍重新分配，一旦扩容所有迭代器、引用、指针全失效。`deque` 分块，头尾 O(1)，中间 O(n)，头插只失效迭代器，引用还在。`list` 和 `map` 是节点结构，已知位置插入删除是 O(1) 和 O(log n)，只有被删节点失效。`unordered_map` 平均 O(1)，rehash 会让迭代器失效，但节点不搬，引用和指针仍然有效。所以工程上按访问模式选容器，按失效规则写循环。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `vector` 扩容为什么是 1.5 或 2 倍？ | 标准只要求均摊常数；倍数由实现定，1.5 更容易复用之前释放的内存块。 |
| `clear()` 会释放内存吗？ | 不会，size 归零但 capacity 不变；要释放用 `shrink_to_fit` 或与空容器 swap。 |
| `unordered_map` rehash 后指针为什么还有效？ | 元素是独立节点，rehash 只重排桶数组，节点地址没变；迭代器存了桶位置所以失效。 |
| 遍历中 `erase` 为什么会崩？ | `erase` 让当前迭代器失效，之后 `++it` 是未定义行为；必须用返回值。 |
| `reserve` 和 `resize` 区别？ | `reserve` 只改容量不构造元素；`resize` 改 size，会构造或销毁元素。 |

### ④ 真实坑

1. **范围 `for` 里删除**：`for (auto& x : v) if (cond) v.erase(it)` 拿不到迭代器，或删除后继续遍历，直接崩在 `erase` 内部。
2. **保存 `vector` 元素指针后插入**：`int* p = &v[0]; v.push_back(1);` 扩容后 `p` 悬垂，读写都是 UB。
3. **把 `reserve` 当 `resize`**：`v.reserve(10); v[0] = 1;` 越界写，因为 size 仍是 0，`operator[]` 不做检查。
4. **依赖 `unordered_map` 遍历顺序**：rehash 或换标准库后顺序改变，测试和序列化结果跟着变，问题极难定位。

### ⑤ 练习

**A 写**：写一个程序：分别用 `push_back` 和 `reserve` 预分配插入 100 万个 `int`，打印 `capacity` 的变化次数；对 `std::vector<int>` 用返回值版 `erase` 删除所有偶数；对 `unordered_map` 在 `rehash` 前后分别保存指针与迭代器，验证指针有效、迭代器不可再用。

**提示**：① 先固定“手动 `reserve` / 不 `reserve`”两种写法，扩容次数才可比较；② 判断地址是否变化用 `p == &v[0]`，比肉眼比对打印的十六进制值可靠；③ 验证“迭代器失效但引用有效”时，只在 rehash 后使用引用、绝不使用旧迭代器，否则除 ASan 外很难看出来。

验收标准：两种插入方式的容量增长次数差异明显；`erase` 后剩余元素正确且无越界；能解释为什么 `rehash` 后指针有效、迭代器失效；`-fsanitize=address,undefined` 无报错。

**B 讲**：2 分钟讲“五类容器的复杂度与失效规则”。必须覆盖 `vector` 扩容、`deque` 头插、节点容器删除、`unordered_map` rehash，以及 `erase` 循环的正确写法。

验收标准：不看稿；复杂度表能口述；能说清“迭代器失效但引用有效”的容器有哪些；能写出安全的删除循环。

> ↑ 返回[目录](#toc)

---

<a id="unit-54"></a>
## D5 · 单元 54 多线程与内存序

> 来源：题库第 64 题 ｜ 速背卡：[64](./速背.md#cpp-64) ｜ 自测：[sel-6 · 第 64 题](./自测.md#sel-6) ｜ 耗时 20 min ｜ 难度 ★★★

> 补充单元：`std::thread`/`std::jthread`、互斥量与条件变量、`std::atomic` 与六种 `memory_order`、数据竞争与 happens-before、伪共享。

**一句话**：并发正确性靠“同步建立 happens-before”，锁和原子操作都是建立这种先后关系的工具；`memory_order` 只是把这层关系调紧或调松。

**学完能做到**
- 写代码：用 `mutex` + `condition_variable` 写出带谓词的生产者消费者，并用 `atomic` 做计数。
- 讲出来：说清六种内存序的语义、happens-before 的来源、虚假唤醒与伪共享。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `volatile` 可以当多线程同步用 | `volatile` 不提供原子性和内存序，多线程读写仍是数据竞争（UB） |
| 原子变量默认是 `relaxed`，要手动升级到 `seq_cst` | 默认就是 `seq_cst`（最强也最贵），`relaxed` 必须显式写 |
| `relaxed` 计数能顺带同步别的数据 | `relaxed` 只保证该变量自身的原子性与修改序，不建立与其他变量的 happens-before |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `std::thread` 构造即启动，析构时仍 joinable 会 `std::terminate`；`std::jthread` 析构自动 join | 异常路径漏 `join` 直接崩进程；优先用 `jthread` 或自己包 RAII |
| `lock_guard` 构造加锁、析构解锁；`unique_lock` 可手动解锁、可移动、能配条件变量 | 条件变量 `wait` 必须用 `unique_lock`；`lock_guard` 中途解不了锁 |
| 数据竞争是 UB；happens-before 由锁、原子操作、线程 start/join 建立 | 没同步的读写即使“看起来原子”也不合法，编译器可以任意优化 |
| 原子操作默认 `seq_cst`：所有 `seq_cst` 操作存在单一全局总序 | 最贵但最好推理；`relaxed` 只保证该变量自身的原子性和修改序 |
| 伪共享：两个线程写同一 cache line 上的不同变量，缓存行反复失效 | 高频计数器要 `alignas(64)` 填充，或先线程本地累加再汇总 |

**设计动机**：现代 CPU 和编译器都会重排内存访问，C++ 内存模型用 happens-before 定义“哪些写对哪些读可见”，锁、原子操作和线程 start/join 是建立这层关系的合法手段。六种内存序是显式的性能旋钮：默认 `seq_cst` 最好推理但最贵，`relaxed` 允许在“只做计数、不需要同步其他变量”的场景关掉全序。伪共享则是缓存一致性协议的副作用——标准不描述缓存行，只能靠对齐或线程本地累加规避。

**版本差异**：`std::thread`、`std::atomic` 与六种 `memory_order` 自 C++11 提供；`std::jthread`、`std::atomic_ref`、原子 `wait`/`notify` 是 C++20；C++20 的 `std::latch`/`std::barrier` 让一次性汇合不必手写条件变量。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 启动后台线程并保证收尾 | C++20 `std::jthread`；C++17 用 RAII guard 包住 `std::thread` |
| 保护共享数据 | `std::lock_guard<std::mutex>`；需要条件变量或提前解锁用 `unique_lock` |
| 等待条件成立 | `cv.wait(lk, pred)`，谓词防虚假唤醒，修改条件必须持锁 |
| 无锁计数/标志 | `std::atomic<int>` + `fetch_add`；确证热点后再降为 `memory_order_relaxed` |
| 线程间传递“数据已就绪” | release store 配 acquire load，或直接用默认 `seq_cst` |

```cpp
#include <atomic>
#include <condition_variable>
#include <cstdio>
#include <mutex>
#include <queue>
#include <thread>

int main() {
    std::mutex m;
    std::condition_variable cv;
    std::queue<int> q;
    bool done = false;

    std::thread producer([&] {
        for (int i = 0; i < 5; ++i) {
            {
                std::lock_guard<std::mutex> lk(m);
                q.push(i);
            }
            cv.notify_one();
        }
        {
            std::lock_guard<std::mutex> lk(m);
            done = true;
        }
        cv.notify_all();
    });

    std::thread consumer([&] {
        std::atomic<int> sum{0};
        for (;;) {
            std::unique_lock<std::mutex> lk(m);
            cv.wait(lk, [&] { return !q.empty() || done; });  // 谓词防虚假唤醒
            while (!q.empty()) {
                sum.fetch_add(q.front(), std::memory_order_relaxed);
                q.pop();
            }
            if (done) break;
        }
        std::printf("sum=%d\n", sum.load());   // 10
    });

    producer.join();
    consumer.join();

    std::atomic<int> ticks{0};
    auto worker = [&] {
        for (int i = 0; i < 1000; ++i)
            ticks.fetch_add(1, std::memory_order_relaxed);
    };
    std::thread t1(worker), t2(worker);
    t1.join();
    t2.join();
    std::printf("ticks=%d\n", ticks.load());  // 2000
}
```

出处：线程与互斥量见 ISO C++ 标准 [thread.thread.class]、[thread.mutex]；原子操作与内存序见 [atomics.order]、[atomics.fences]；条件变量见 `<condition_variable>`；可对照 cppreference（https://en.cppreference.com/w/cpp/atomic/memory_order、https://en.cppreference.com/w/cpp/thread/condition_variable）。编译时加 `-pthread`。

**可观察验证**

```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main() {
    int plain = 0;                 // 非原子：数据竞争
    std::atomic<int> safe{0};      // 默认 seq_cst

    auto add = [&] {
        for (int i = 0; i < 100000; ++i) {
            ++plain;               // UB：两个线程同时改
            safe.fetch_add(1, std::memory_order_relaxed);
        }
    };
    std::thread a(add), b(add);
    a.join();                      // join 建立 happens-before
    b.join();
    std::printf("plain=%d safe=%d\n", plain, safe.load());
}
```

```plaintext
g++ -std=c++17 -O2 -pthread race.cpp -o race && ./race
# 实测一次 plain=199427、safe=200000（非原子结果每次不同）：非原子计数丢了更新
g++ -std=c++17 -fsanitize=thread -pthread race.cpp -o race_tsan && ./race_tsan
# ThreadSanitizer: data race
```

- `safe` 反复跑都恰好 200000，`plain` 反复跑基本都小于 200000（实测一次为 199427，具体值每次不同）——非原子的读改写会丢更新。
- 用 `-fsanitize=thread` 跑同一个程序会报 `data race`，把 `plain` 换成 `std::atomic` 后报告消失；这正是“数据竞争是 UB”的可观测面。

### ③ 面试怎么讲

**30 秒口述稿**

> 多线程第一原则是建立 happens-before：加锁解锁、原子操作、线程 start/join 都能建立先后关系，没有这层关系就是数据竞争，属于 UB。互斥量用 `lock_guard` 管生命周期，条件变量必须配 `unique_lock` 和谓词，因为系统可能有虚假唤醒。原子操作默认是 `seq_cst`，所有 `seq_cst` 操作有单一全局总序；`relaxed` 只保证这个变量自身原子，不能拿来同步别的数据。最后是伪共享，多个线程写同一条 cache line 的不同变量会让缓存行来回失效，计数器要按 64 字节对齐。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么 `wait` 一定要带谓词？ | 虚假唤醒可能没有通知就返回；谓词版内部循环重查条件，醒来后条件不成立就继续等。 |
| `lock_guard` 和 `unique_lock` 区别？ | `lock_guard` 只能构造加锁、析构解锁；`unique_lock` 可手动 `unlock/lock`、可移动，是 `wait` 的要求。 |
| 六种内存序分别是什么？ | `relaxed`、`consume`（已不推荐）、`acquire`、`release`、`acq_rel`、`seq_cst`；后四种控制跨线程可见性。 |
| `relaxed` 能用在什么场景？ | 只做计数、统计这类不需要同步其他数据的场景；不能用来发布指针或标志。 |
| 伪共享怎么解决？ | 热点变量各自 `alignas(64)` 对齐，或每线程本地累加、最后汇总。 |

### ④ 真实坑

1. **线程析构时仍 joinable**：函数中途抛异常，`std::thread` 析构直接 `std::terminate`，日志里只有一句 abort。
2. **条件变量不带谓词**：虚假唤醒后队列为空，`q.front()` 访问空队列，崩溃或读到脏数据。
3. **改条件不持锁**：`q.push()` 不持锁就 `notify_one()`，通知可能落在等待方“检查条件”和“进入睡眠”之间，造成丢失唤醒。
4. **用 `volatile` 当同步**：`volatile` 不提供原子性和内存序，多线程读写仍是数据竞争，属于 UB。
5. **相邻原子计数器**：两个线程各写 `counters[0]`、`counters[1]`，同一条 cache line 上反复失效，扩展性骤降。

### ⑤ 练习

**A 写**：实现一个容量为 4 的有界阻塞队列：`push` 在满时等待、`pop` 在空时等待，用两个条件变量；起 4 个生产者和 4 个消费者，共传递 10000 个整数，消费者用 `std::atomic<long long>` 累加并校验总和。再用 `alignas(64)` 包裹两个计数器，对比不加填充时的耗时。

**提示**：① 两个版本（`int` 与 `std::atomic<int>`）必须跑同样的循环次数、同机各跑多次，才谈得上对比；② 先写“只有数据竞争”的最小程序再用 TSan 跑，避免把锁的 bug 和竞争混在一起；③ 内存序一律显式写出来，默认 `seq_cst` 的代码里看不出作者是否想过这层关系。

验收标准：`g++ -std=c++17 -O2 -pthread` 编译通过；程序不死锁、总和正确；再用 `-fsanitize=thread` 跑一遍无报告；能解释两个条件变量各自等的是什么条件。

**B 讲**：3 分钟讲“内存序与 happens-before”。必须覆盖六种 `memory_order`、数据竞争的定义、锁/原子/join 如何建立先后关系，以及伪共享的成因。

验收标准：不看稿；能说清 `seq_cst` 是默认且最强；能举一个“`relaxed` 不能同步其他变量”的例子；能解释为什么要避免伪共享。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ①：UObject 与 GC](#ch6)

---


<a id="ch6"></a>
# 第 6 章 · UE ①：UObject 与 GC

> 对应速背 UE 主题 01（Q01–Q08），完整答题卡见 [速背 UE 01](./速背.md#ue-t01)。
> 上一篇：[模板、STL 与并发](#ch5) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-01"></a>
## U1 · Q01 UObject 的完整生命周期是怎样的？

> 来源：题库 UE 第 1 题 ｜ 速背卡：[Q01](./速背.md#ue-q01) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：UObject 的生死由“引擎分配 + 反射引用图 + GC”这条流水线决定，你能干预的只有在正确的钩子里释放资源、维护引用。

**学完能做到**
- 写代码：在一个 UObject 和一个 Actor 上重写 `PostInitProperties`、`BeginDestroy`、`FinishDestroy`，打出可辨认的日志。
- 讲出来：说清 CDO 为什么让构造函数跑两次、BeginDestroy 与 FinishDestroy 为什么要分两段。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `UObject` 的构造函数只跑一次 | 类注册时给 CDO 跑一次，每个实例再跑一次；所以构造函数只放默认值 |
| 对象用 `delete` 就回收了 | UObject 不能用 `new`/`delete`；回收由 GC 驱动，走 `BeginDestroy` → `FinishDestroy` 两段 |
| `BeginDestroy` 里还能访问 World 或其他 Actor | 此时 World 可能已在销毁、顺序不可控；这里只碰自己的成员和资源 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 分配与构造由引擎完成，对象登记进全局对象表 | 不要用 `new`/`delete`（见 U5）；构造只负责成员默认值，不负责“入场” |
| CDO 在类注册时构造一次，实例化时再构造一次 | 构造函数会执行多次；里面不能写依赖 World、依赖其他 Actor 的逻辑 |
| `PostInitProperties` 在属性初始化完成后调用 | 适合做不依赖 World 的对象级初始化；此时 Outer 已定，组件未必注册 |
| `BeginDestroy` 发起资源释放与异步释放 | 不能假设 World 还在，也不能在这里做玩法逻辑 |
| `FinishDestroy` 在异步释放完成后调用 | 这是最后的清理机会；之后对象内存即将被回收 |
| 回收后裸指针悬垂，`IsValid` 才可靠 | 别只用 `nullptr` 判断；`IsValid` 能识别待回收对象 |

对象出生大致分三步：分配内存、执行 C++ 构造、调用 `PostInitProperties`。引擎在分配时就确定了 Class、Outer、Name、Flags，构造阶段这些字段已经可用，但 World 不一定可用；CDO 也走同一个构造函数，所以“构造函数里访问 World”在 CDO 阶段拿到的就是空值。

销毁分两段是为了给异步释放留窗口：`BeginDestroy` 释放同步资源、发起异步释放，`FinishDestroy` 等异步任务完成后做最终清理。只重写其中一个，通常会造成资源泄漏或提前释放。

最终的内存回收由 GC 驱动：对象不可达后，GC 调 `BeginDestroy`，异步完成后调 `FinishDestroy`，再析构、释放内存。你的裸指针不会因此自动变空，所以判断可用性要靠 `IsValid` 或弱指针。

**设计动机**：UObject 把分配、引用追踪、序列化、网络复制、编辑器编辑全部收归引擎统一管理——只有这样 GC 才能扫引用图、蓝图才能按属性读写、网络才能按属性复制。代价是你不能再自己 `new`/`delete`，生命周期只能在引擎给的钩子里插入逻辑，这也正是两段式销毁存在的意义。

**版本差异**：UE5 默认增量 GC（标记分帧、清理按时间片），UE4 传统模式多为单帧全量 GC；`BeginDestroy`/`FinishDestroy` 两段式销毁与 `IsValid` 的语义两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 对象级初始化（不依赖 World） | 重写 `PostInitProperties()`，先调 `Super::PostInitProperties()` |
| 释放同步资源 | 重写 `BeginDestroy()`，`Super::BeginDestroy()` 放最后 |
| 等异步完成再做最后清理 | 重写 `FinishDestroy()` |
| 判断对象还能不能用 | `IsValid(Obj)`；Actor 另看 `IsActorBeingDestroyed()` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与 UHT 生成的 `LifeProbe.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS()
class ULifeProbe : public UObject
{
    GENERATED_BODY()

public:
    ULifeProbe(const FObjectInitializer& Init) : Super(Init) {}

    virtual void PostInitProperties() override
    {
        Super::PostInitProperties();
        // Outer 已确定，但 World 可能无效；CDO 也会走到这里
        UE_LOG(LogTemp, Log, TEXT("PostInitProperties: %s, CDO=%d"),
            *GetName(), HasAnyFlags(RF_ClassDefaultObject) ? 1 : 0);
    }

    virtual void BeginDestroy() override
    {
        // 先释放自己的资源，再调用 Super
        UE_LOG(LogTemp, Log, TEXT("BeginDestroy: %s"), *GetName());
        Super::BeginDestroy();
    }

    virtual void FinishDestroy() override
    {
        // 异步释放完成后的最后清理
        UE_LOG(LogTemp, Log, TEXT("FinishDestroy: %s"), *GetName());
        Super::FinishDestroy();
    }
};
```

出处：Epic《Objects in Unreal Engine》《Unreal Object Handling》；两段销毁与 `IsValid` 的语义以对应引擎版本文档为准。

**可观察验证**

```cpp
// 钩子里打点：CDO 与实例、两段销毁都会出现在 Output Log
UE_LOG(LogTemp, Log, TEXT("%s: %s"), *GetName(),
    HasAnyFlags(RF_ClassDefaultObject) ? TEXT("CDO") : TEXT("instance"));

// 判活统一用 IsValid：销毁后 IsValid 为 false，裸指针可能仍非空
if (IsValid(Probe)) { /* 安全使用 */ }
```

```plaintext
stat gc                       # GC 各阶段耗时
obj list class=ULifeProbe     # 当前存活的实例数
```

- PIE 启动/停止后看 Output Log 顺序：构造（CDO）→ 构造（实例）→ `PostInitProperties` → `BeginDestroy` → `FinishDestroy`。
- 对象销毁后对比 `IsValid(Probe)` 与 `Probe != nullptr`：前者变 false、后者可能仍为 true，这就是“GC 管理生死”的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> UObject 的生死不归我管。创建时引擎分配内存、跑 C++ 构造，再调 PostInitProperties，按 Outer 挂进对象树；CDO 是类注册时先造好的模板，所以构造函数会跑两次。销毁分两段：BeginDestroy 释放资源、发起异步释放，FinishDestroy 等异步完成后再做最后清理，最后由 GC 回收内存。所以我判断对象能不能用一律用 IsValid；构造函数和 BeginDestroy 里都不假设 World 还在。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| CDO 什么时候创建？ | 类注册、反射信息建立时创建，每个 UClass 一个；它是 GC 根，蓝图和 Spawn 都以它为原型复制属性。 |
| 为什么构造函数跑两次？ | 一次给 CDO，一次给实例；所以构造函数只做默认值，依赖 World 的初始化放 `BeginPlay`。 |
| BeginDestroy 和 FinishDestroy 为什么分开？ | 给异步释放留窗口，例如渲染资源要等渲染线程用完；前者发起，后者确认完成。 |
| `PostInitProperties` 和 `PostLoad` 区别？ | 前者是构造完成后的回调，运行期 NewObject 也走；后者是反序列化完成后的回调，主要针对从磁盘加载的对象。 |

### ④ 真实坑

1. **构造函数里 `GetWorld()`**：CDO 阶段 World 为空，编辑器里可能直接崩或静默拿到空值；依赖 World 的初始化放 `PostInitProperties` 或 `BeginPlay`。
2. **构造函数里 NewObject/SpawnActor**：会参与 CDO 构造，产生重复对象甚至递归；默认子对象只用 `CreateDefaultSubobject`。
3. **在 BeginDestroy 里访问 World/其他 Actor**：此时 World 可能已开始销毁，顺序不可控；这里只碰自己的成员和资源。
4. **用 `if (Obj)` 判断有效性**：Destroy 后指针非空，条件仍然为真，随后访问就崩；统一用 `IsValid`。

### ⑤ 练习

**A 写**：实现上面的 `ULifeProbe`，再写一个 `ALifeOwner` Actor，在 `BeginPlay` 里 `NewObject<ULifeProbe>(this)`，在 `EndPlay` 里打印 `IsValid(Probe)`；停止 PIE 或切关卡后观察日志。要求 `ULifeProbe` 全程不访问 World。

**提示**：① 两个钩子里都要先调 `Super::`（`BeginDestroy` 里 `Super` 放最后），否则资源释放顺序会乱；② 用 `HasAnyFlags(RF_ClassDefaultObject)` 在 `PostInitProperties` 里区分 CDO 和实例；③ 想稳定看到 `BeginDestroy`，用 PIE 停止或切关卡触发，不要只等 GC 自己跑。

验收标准：日志顺序为 构造 → `PostInitProperties` → `BeginDestroy` → `FinishDestroy`；CDO 的 `PostInitProperties` 也出现且带 CDO 标记；`EndPlay` 时 `IsValid` 仍为 true、GC 后才变 false；构造函数中没有 World 访问。

**B 讲**：2 分钟讲“UObject 从出生到回收”。必须覆盖构造/CDO、`PostInitProperties`、`BeginDestroy`、`FinishDestroy`、GC 回收五段，并解释销毁为什么要分两段。

验收标准：不看稿；五段顺序正确；能说出一个“在错误阶段访问 World”的具体后果。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-02"></a>
## U2 · Q02 GC 如何判定一个 UObject 可达？

> 来源：题库 UE 第 2 题 ｜ 速背卡：[Q02](./速背.md#ue-q02) ｜ 耗时 18 min ｜ 难度 ★★☆

**一句话**：GC 只认“从根集沿反射引用边走得到”的对象，栈上的裸指针不算根，可达性是一张由 UPROPERTY 织出来的图。

**学完能做到**
- 写代码：构造“UPROPERTY 保活 / 裸指针不保活 / `AddToRoot` 保活”三组对照实验。
- 讲出来：说清根集、引用边、循环引用的处理，以及增量 GC 的代价。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 函数里的裸指针就是根 | UE 不扫描线程栈，局部裸指针不入图；对象可能在函数还没返回时就不可达 |
| 被 Outer 持有就不会被回收 | Outer 不是强引用边；没标 `UPROPERTY` 就没有引用边，照样被回收 |
| 循环引用一定会泄漏 | 标记-清除按可达性判定，不可达的环整组回收；只有被根挂住的环才泄漏 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 根集包含 CDO、`AddToRoot` 的对象和引擎核心对象 | 只有被根挂住的对象才是遍历起点，普通对象要靠引用链 |
| GC 沿反射可见的引用边遍历 | 只有 `UPROPERTY`、`TObjectPtr`（在 UPROPERTY 下）和引擎容器登记的引用才算边 |
| GC 不扫描线程栈 | 函数里的裸局部指针不是根，函数返回后对象可能立刻不可达 |
| 标记-清除按可达性判定，不按引用计数 | 不可达的循环引用会被整组回收，被根挂住的环才泄漏 |
| UE5 增量 GC 把标记拆到多帧 | 单帧卡顿下降，但对象存活时间变长、内存峰值上升 |

根集不是“所有活着的对象”，而是引擎明确登记为起点的集合：CDO、`AddToRoot` 的对象、引擎核心对象，以及通过 `FGCObject` 等机制登记的非 UObject 持有者。GC 从这些点出发，沿引用边做图遍历。

引用边来自反射元数据。UHT 把每个 `UPROPERTY` 编译成 `FProperty`，GC 读的是这份元数据；C++ 类型系统里“它是个指针”不代表 GC 知道这条边。容器也要整体标 `UPROPERTY`，里面的对象引用才会被登记。

循环引用本身不是问题：A 和 B 互相引用但都不可达，GC 会把整组一起回收。真正的问题是环被根挂住，或者成员忘了标 `UPROPERTY`，看起来“我还拿着它”，图里却没有边。

**设计动机**：UE 要管理跨模块、跨蓝图的成千上万个对象，手写析构或纯引用计数都不现实——环无法回收，维护成本还会随接口膨胀。把“谁引用谁”写进反射元数据，GC 就能用一张统一的图完成判定，蓝图层新增的引用也自动被覆盖；代价是没标 `UPROPERTY` 的引用 GC 完全看不见。

**版本差异**：UE5 默认增量 GC、成员推荐写 `TObjectPtr`（UE4 只有裸指针）；根集、标记-清除与“不扫描线程栈”的语义两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 成员持有 UObject | `UPROPERTY() TObjectPtr<UMyObject> Obj;`（或 `UMyObject*`） |
| 只观察、不保活 | `TWeakObjectPtr<UMyObject>`，用前 `IsValid()` |
| 非 UObject 类持有 UObject | 继承 `FGCObject`，重写 `AddReferencedObjects` |
| 临时保活 | `Obj->AddToRoot()` / `Obj->RemoveFromRoot()`，必须成对 |

**示例说明**：以下为 Actor 类的成员实现片段，依赖 `CoreMinimal.h`、`Engine/Engine.h`（`GEngine`）与 UHT 生成的 `GCProbe.generated.h`；`UProbePayload` 需另行声明，不能脱离工程独立编译。

```cpp
UCLASS()
class UProbePayload : public UObject
{
    GENERATED_BODY()
};

UCLASS()
class UGCProbe : public AActor
{
    GENERATED_BODY()

public:
    UPROPERTY() TObjectPtr<UProbePayload> KeepAlive;  // 进 GC 图
    TWeakObjectPtr<UProbePayload> WeakOnly;            // 弱引用，不保活

    void RunProbe()
    {
        KeepAlive = NewObject<UProbePayload>(this, TEXT("Kept"));

        UProbePayload* Raw = NewObject<UProbePayload>(this, TEXT("Weak"));
        WeakOnly = Raw;

        GEngine->ForceGarbageCollection(true);  // 测试用：强制完整 GC
        UE_LOG(LogTemp, Log, TEXT("strong=%d weak=%d"),
            IsValid(KeepAlive), WeakOnly.IsValid());
    }
};
```

出处：Epic《Unreal Object Handling》《Incremental Garbage Collection》；`FGCObject`、`TStrongObjectPtr` 的用法见引擎源码公共头文件，具体接口视版本。

**可观察验证**

```cpp
// 对照实验：同一次强制 GC，只看“有没有引用边”这一个变量
UPROPERTY() TObjectPtr<UProbePayload> Strong = NewObject<UProbePayload>(this, TEXT("Kept"));
TWeakObjectPtr<UProbePayload> Weak = NewObject<UProbePayload>(this, TEXT("Dropped"));

GEngine->ForceGarbageCollection(true);
UE_LOG(LogTemp, Log, TEXT("strong=%d weak=%d"), IsValid(Strong), Weak.IsValid()); // 期望 1 / 0
```

```plaintext
stat gc                        # 标记/清除两段耗时与当前 UObject 数
obj list class=UProbePayload   # 强制 GC 前后对比存活数
```

- 把 `Weak` 换成 `UPROPERTY() TObjectPtr` 再跑一次，日志从 `1 / 0` 变成 `1 / 1`——引用边是唯一差别。
- 对 `Weak` 指向的对象先 `AddToRoot()` 再强制 GC，弱指针仍然有效；`RemoveFromRoot()` 后立刻失效，说明根集才是遍历起点。

### ③ 面试怎么讲

**30 秒口述稿**

> UE 的 GC 是标记-清除：从根集出发，沿反射可见的引用边做图遍历，走得到就可达，走不到就是垃圾。根集有 CDO、AddToRoot 的对象和引擎核心对象；引用边只认 UPROPERTY、TObjectPtr 和引擎容器，局部变量和裸指针不在图里，因为 UE 不扫描线程栈。循环引用本身不泄漏，不可达的环会整组回收，被根挂住才泄漏。UE5 默认增量 GC，把标记拆到多帧、有软时间上限，代价是对象不会立刻释放。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 栈上的指针算根吗？ | 不算。UE 不扫描线程栈，函数里的裸指针只是临时借用，GC 看不见。 |
| 循环引用会不会泄漏？ | 不会，只要整组都不可达；泄漏的是被根或 UPROPERTY 环挂住的那一组。 |
| `TWeakObjectPtr` 会阻止回收吗？ | 不会，它只记录弱引用；对象回收后自动失效，适合做观察/缓存。 |
| `AddToRoot` 什么时候用？ | 临时保护没有其他强引用的对象；必须 `RemoveFromRoot`，否则永久常驻。 |
| 为什么成员指针必须 UPROPERTY？ | GC 读的是 UHT 生成的元数据，不读 C++ 类型；不标就没有引用边。 |

### ④ 真实坑

1. **只在构造函数里给裸指针赋值**：图里没有这条边，GC 一跑对象就悬垂；成员一律标 `UPROPERTY`。
2. **`TObjectPtr` 不加 UPROPERTY**：UE5 里它只是访问包装，不会自动登记引用边，照样被回收。
3. **`AddToRoot` 忘记 `RemoveFromRoot`**：对象永久常驻，还可能拖住整条引用链；只用于短生命周期保护。
4. **用 `if (Ptr)` 判断**：对象已标记垃圾但指针非空，条件为真；用 `IsValid` 或弱指针。
5. **用 `std::shared_ptr` 持 UObject**：GC 和 shared_ptr 两套所有权会打架，容易 double free 或永久常驻。

### ⑤ 练习

**A 写**：实现 `UProbePayload` 和 `UGCProbe`，跑出 `strong=1 weak=0`；再把 `KeepAlive` 改成裸 `UProbePayload*` 重跑，观察两个引用都失效；最后给弱对象 `AddToRoot()` 再跑一次，确认存活，然后 `RemoveFromRoot()` 并再次强制 GC。

**提示**：① 观察存活状态一律用 `TWeakObjectPtr`，对可能已回收的裸指针调 `IsValid` 本身就是悬垂访问；② 三组对照每次只改一个变量（是否 `UPROPERTY`、是否 `AddToRoot`），否则无法归因；③ 强制 GC 只用于实验，正式流程不要依赖 `ForceGarbageCollection` 的时机。

验收标准：三种情况日志分别为 `1/0`、`0/0`、`1/1`；`AddToRoot` 与 `RemoveFromRoot` 成对；能解释为什么 Outer 不保活。

**B 讲**：2 分钟讲“GC 如何判定可达”。必须覆盖根集、引用边、不扫栈、循环引用、增量 GC 五个点。

验收标准：不看稿；每个点一句明确结论；能举一个“忘了 UPROPERTY 导致对象被回收”的例子。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-03"></a>
## U3 · Q03 为什么 UPROPERTY 是必要的？

> 来源：题库 UE 第 3 题 ｜ 速背卡：[Q03](./速背.md#ue-q03) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：UPROPERTY 不是“让指针变强”，而是让 UHT 把这个成员登记成元数据，GC、序列化、蓝图、网络和编辑器才有得可读。

**学完能做到**
- 写代码：给一个 UCLASS 加带标记和不带标记的成员，验证细节面板、存盘和 GC 的差异。
- 讲出来：说清 UPROPERTY 的三类作用，以及运行时开销的边界。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 标了 `UPROPERTY` 就一定存盘 | 还要看 `Transient`、`SaveGame` 等标记；`UPROPERTY` 只负责进反射，各子系统再按自己的标记决定行为 |
| `UPROPERTY` 会让每次成员访问变慢 | 普通读写与裸成员相同；开销在 GC 遍历、反射调用和编辑器构建的访问追踪 |
| `Transient` 表示不参与 GC | 它只让序列化跳过；引用边仍在，对象照样被保活 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UHT 解析头文件，生成 `.generated.h` 与 `FProperty` 元数据 | 没标 UPROPERTY 的成员对反射系统不存在 |
| GC 遍历读的是 `FProperty`，不是 C++ 类型 | `TObjectPtr` 不加 UPROPERTY 同样不保命 |
| UPROPERTY 同时驱动序列化、蓝图、网络和编辑器 | 一个标记决定多个子系统的可见性，要按需求加 |
| 成员访问本身没有额外成本 | 开销集中在 GC 遍历和反射调用，不在 `Obj->Field` |
| 生成代码依赖 `GENERATED_BODY()` 和正确的 include 顺序 | `*.generated.h` 必须是最后一个 include |

`UPROPERTY` 是给 UHT 的标记，不是给 C++ 编译器的属性。UHT 扫头文件生成反射代码，GC、序列化器等系统通过 `FProperty` 读取这个成员的类型、偏移和标记。

所以“UPROPERTY 保活”的本质是“登记了一条引用边”。同理，`Transient` 只是告诉序列化器跳过，不影响 GC；`Replicated` 只是让网络系统参与，也不改变本地可达性。多个子系统共用一套元数据，但标记之间互相独立。

运行时开销：普通成员读写没有额外成本；GC 每轮要遍历这些属性，蓝图和编辑器调用有查找成本。`TObjectPtr` 在编辑器构建里有访问追踪，Shipping 下宽度与裸指针一致。

**设计动机**：GC、序列化、网络复制、蓝图和细节面板都需要知道“这个类有哪些属性、类型是什么、能不能改”，而这些系统分属不同模块，不可能各自维护一份属性表。UHT 在编译期把头文件里的标记变成 `FProperty` 元数据，所有子系统共读一份描述；代价是属性必须声明在头文件里、必须挂对宏和 include 顺序，纯运行期的信息进不了反射。

**版本差异**：UE5 推荐用 `TObjectPtr` 声明 UPROPERTY 指针成员（编辑器构建带访问追踪，Shipping 下与裸指针同宽），UE4 一律写裸指针；`FProperty` 驱动的机制两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 进 GC 图 + 存盘 | `UPROPERTY() TObjectPtr<UMyObject> Obj;` |
| 编辑器可编辑 | `UPROPERTY(EditAnywhere, Category="My")` |
| 网络同步 | `UPROPERTY(Replicated)` + `GetLifetimeReplicatedProps` |
| 不存盘 | `UPROPERTY(Transient)` |

**示例说明**：以下为组件类片段，依赖 `CoreMinimal.h`、`Components/ActorComponent.h`、`Net/UnrealNetwork.h` 与 UHT 生成的 `MyInventory.generated.h`；`UMyItem` 与复制配置需在工程内补齐，不能独立编译。

```cpp
#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "MyInventory.generated.h"   // 必须是最后一个 include

UCLASS()
class UMyInventory : public UActorComponent
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Inventory")
    TArray<TObjectPtr<UMyItem>> Items;          // 进 GC 图、可存盘

    UPROPERTY(Transient)
    TObjectPtr<UMyItem> Selected;               // 不存盘，但仍进 GC 图

    UPROPERTY(Replicated)
    int32 SlotCount = 0;                        // 网络同步

    UMyItem* RawCache = nullptr;                // 没标：GC 与序列化都看不见

    virtual void GetLifetimeReplicatedProps(
        TArray<FLifetimeProperty>& OutLifetimeProps) const override;
};

void UMyInventory::GetLifetimeReplicatedProps(
    TArray<FLifetimeProperty>& OutLifetimeProps) const
{
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME(UMyInventory, SlotCount);
}
```

出处：Epic《Reflection System》《Unreal Object Handling》；`DOREPLIFETIME` 需要包含 `Net/UnrealNetwork.h`，实际复制还依赖 Actor/组件与网络配置。

**可观察验证**

```cpp
// 反射可见性：只有标了 UPROPERTY 的成员会出现在类的属性表里
for (TFieldIterator<FProperty> It(UMyInventory::StaticClass()); It; ++It)
{
    UE_LOG(LogTemp, Log, TEXT("prop: %s"), *It->GetName());
}
// 期望只打出 Items / Selected / SlotCount，RawCache 不出现
```

```plaintext
stat gc                        # 把 Items 撑大，看标记耗时随引用边增长
obj refs name=MyItem_C_0       # 查谁引用了这个对象，确认 UPROPERTY 边已登记
```

- `TFieldIterator` 的打印结果里没有 `RawCache`，这就是“GC 读 `FProperty` 元数据、不读 C++ 类型”的直接证据。
- 把 `Items` 填到上万条再 `stat gc`，标记阶段耗时随引用边增长；`RawCache` 再大也不影响，因为它不在图里。

### ③ 面试怎么讲

**30 秒口述稿**

> UPROPERTY 干三件事：让 UHT 生成反射信息，把这个成员登记进 GC 引用图，再把属性暴露给序列化、蓝图、网络和编辑器。不标 UPROPERTY 的裸指针 GC 看不见，对象随时可能被回收，你拿到的是悬垂指针；它也不会被存盘、不能同步、细节面板也看不到。所以成员里的 UObject 指针我一律标 UPROPERTY，只有函数内的临时变量用裸指针。要注意 TObjectPtr 不标 UPROPERTY 也没用，因为 GC 读的是元数据，不是 C++ 类型。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `TObjectPtr` 不标 UPROPERTY 行不行？ | 不行，它只是访问包装；GC 读 `FProperty`，没登记就没有引用边。 |
| UPROPERTY 有运行时开销吗？ | 普通访问没有；开销在 GC 遍历和反射调用，编辑器构建的 `TObjectPtr` 还有访问追踪。 |
| `Transient` 会影响 GC 吗？ | 不会，它只让序列化跳过；引用边仍然存在，仍然保活。 |
| 标了 `Replicated` 就会同步吗？ | 还需要在 `GetLifetimeReplicatedProps` 里 `DOREPLIFETIME`，并满足网络复制条件。 |

### ④ 真实坑

1. **忘写 `GENERATED_BODY()` 或 generated.h 不是最后一个 include**：UHT 报错，或生成代码找不到声明。
2. **把 UPROPERTY 写在普通 class/struct 里**：UHT 不认；想用反射要用 UCLASS/USTRUCT 并生成代码。
3. **把 `Transient` 当成“不参与 GC”**：它仍然保活；长期缓存要主动清引用，或改用 `TWeakObjectPtr`。
4. **构造函数里依赖 UPROPERTY 的序列化值**：构造阶段还没反序列化，值可能随后被覆盖；用 `PostLoad` 或 `OnConstruction`。

### ⑤ 练习

**A 写**：给 `UMyInventory` 加四个成员：`Items`（`UPROPERTY(EditAnywhere, BlueprintReadWrite)`）、`Selected`（`UPROPERTY(Transient)`）、`SlotCount`（`UPROPERTY(Replicated)`）、`RawCache`（无标记），并实现 `GetLifetimeReplicatedProps`；把组件挂到 Actor 上，观察细节面板与存盘行为。

**提示**：① 先用 `TFieldIterator` 确认成员进没进反射，再去看细节面板，比反复点 UI 快；② 验证 `Transient` 要“存盘再读盘看值是否为空”，只看细节面板看不出序列化差异；③ 验证 GC 差异时用弱指针观察，不要对可能已回收的对象做裸指针判断。

验收标准：UHT 编译通过且 `generated.h` 在最后；细节面板能看到 `Items` 但看不到 `RawCache`；`Transient` 的 `Selected` 存盘后为空；能说出 `SlotCount` 复制还缺哪一步。

**B 讲**：90 秒讲“UPROPERTY 到底做了什么”。必须覆盖反射生成、GC 引用边、其他子系统、开销边界四点。

验收标准：不看稿；三类作用各一句；能主动纠正“TObjectPtr 不标也保活”的错误说法。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-04"></a>
## U4 · Q04 NewObject、SpawnActor、CreateDefaultSubobject 有什么区别？

> 来源：题库 UE 第 4 题 ｜ 速背卡：[Q04](./速背.md#ue-q04) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：三个 API 的差别不在“造对象”，而在谁负责生命周期、对象进不进世界、能不能在构造函数里用。

**学完能做到**
- 写代码：分别用 `NewObject`、`SpawnActor`、`CreateDefaultSubobject` 造对象，打出 Outer、World 和 BeginPlay 日志。
- 讲出来：说清 SpawnActor 的调用顺序，以及 CDO 导致构造两次的原因。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `NewObject` 能造 Actor，所以和 `SpawnActor` 等价 | 能编译，但不进 World、不走生成流程、没有 `BeginPlay`，只是一个普通 UObject |
| `SpawnActor` 返回时 `BeginPlay` 已经执行完 | World 未开始游戏时 `BeginPlay` 会延后；`SpawnActorDeferred` 要 `FinishSpawning` 才继续后续流程 |
| 构造函数只执行一次 | CDO 一次、实例一次；默认子对象只能在构造函数里用 `CreateDefaultSubobject` 建 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `NewObject` 造任意 UObject，必须给 Outer | 不会自动进世界，也没有 BeginPlay；适合数据对象和子对象 |
| `SpawnActor` 造 AActor，走完整生成流程 | 会注册组件、进 World；游戏已开始时才在生成流程里调 BeginPlay |
| `CreateDefaultSubobject` 只能在构造函数里用 | 给 CDO 和实例建默认子对象，组件都这么来 |
| CDO 在类注册时构造一次，实例化时再构造一次 | 构造函数里的默认值会成为模板值，也会执行两次 |
| SpawnActor 的 BeginPlay 时机取决于 World 是否已开始 | 在 GameMode 初始化、关卡加载阶段 Spawn，BeginPlay 可能延后 |

`NewObject` 是最底层入口：分配、构造、`PostInitProperties`，返回对象。它不碰 World，所以用 `NewObject` 造一个 AActor，对象也不会注册进关卡。

`SpawnActor` 是 Actor 专用入口：检查类与碰撞策略、分配 Actor、应用 `FActorSpawnParameters`、构造、`PostActorCreated`、注册并初始化组件、`PostInitializeComponents`，最后在 World 已 BeginPlay 时调用 `BeginPlay`。这个顺序决定了“生成后拿组件”通常可行，但“生成后一定立刻 BeginPlay”不成立。

**设计动机**：对象的归属不同，创建时必须做的事也不同——数据对象只要分配和登记，Actor 还要注册进 World、初始化组件、参与复制，默认子对象则必须同时进入 CDO 和每个实例，才能让蓝图继承默认值。拆成三个入口，是让“谁来管生命周期”在调用点就写清楚；代价是选错入口不会报错，只是对象缺了某段流程（比如没有 `BeginPlay`）。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 运行期造数据对象 | `NewObject<UMyData>(this)`，Outer 选长期对象或 `GetTransientPackage()` |
| 运行期生成 Actor | `World->SpawnActor<AMyActor>(Class, Transform, Params)` |
| 构造函数里建组件 | `CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"))` |
| 生成前设置属性 | `SpawnActorDeferred` + 设置 + `FinishSpawning` |

**示例说明**：以下为 Actor 的构造函数与 `BeginPlay` 片段，依赖 `CoreMinimal.h`、`Engine/World.h`、`UMyData`/`AMyActor` 的 UCLASS 声明与 UHT 生成的 `.generated.h`；`SetSomeProperty` 为示意接口，不能独立编译。

```cpp
AMySpawner::AMySpawner()
{
    // 只能在这里建默认子对象；CDO 与实例各执行一次
    Probe = CreateDefaultSubobject<USceneComponent>(TEXT("Probe"));
    RootComponent = Probe;
}

void AMySpawner::BeginPlay()
{
    Super::BeginPlay();

    // 1) 数据对象：不进世界，没有 BeginPlay
    UMyData* Data = NewObject<UMyData>(this);

    // 2) Actor：走完整生成流程
    FActorSpawnParameters Params;
    Params.Owner = this;

    AMyActor* Spawned = GetWorld()->SpawnActor<AMyActor>(
        AMyActor::StaticClass(), FVector(0, 0, 100), FRotator::ZeroRotator, Params);

    // 3) 延迟生成：先设属性，再 FinishSpawning 触发后续流程
    AMyActor* Deferred = GetWorld()->SpawnActorDeferred<AMyActor>(
        AMyActor::StaticClass(), FTransform::Identity);
    if (Deferred)
    {
        Deferred->SetSomeProperty(42);
        Deferred->FinishSpawning(FTransform::Identity);
    }

    UE_LOG(LogTemp, Log, TEXT("data outer=%s, actor=%s"),
        *GetNameSafe(Data->GetOuter()), *GetNameSafe(Spawned));
}
```

出处：Epic《Objects in Unreal Engine》《Actor Lifecycle》；Spawn 顺序与 `FActorSpawnParameters` 字段以对应版本文档为准。

**可观察验证**

```cpp
// 三个入口分别能拿到什么：Outer、World、是否完成初始化
UE_LOG(LogTemp, Log, TEXT("data outer=%s world=%s"),
    *GetNameSafe(Data->GetOuter()), *GetNameSafe(Data->GetWorld()));   // world 为空
UE_LOG(LogTemp, Log, TEXT("spawned world=%s initialized=%d"),
    *GetNameSafe(Spawned->GetWorld()), Spawned->IsActorInitialized() ? 1 : 0);
```

```plaintext
obj list class=AMyActor   # Spawn 出来的 Actor 在对象表里，NewObject 的也在
stat game                 # 生成/销毁与 Actor 数量的整体开销
```

- 在构造、`PostInitializeComponents`、`BeginPlay` 各打一条日志：构造函数出现两次（CDO + 实例），Deferred 版本的 `BeginPlay` 只在 `FinishSpawning` 之后出现。
- `NewObject` 出来的 Actor 打印出的 `GetWorld()` 为空、`SpawnActor` 出来的非空——这是“进没进世界”的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 三个都在造对象，差别是谁管生命周期。NewObject 造任意 UObject，必须给 Outer，运行期用，不会自动进世界，也没有 BeginPlay。SpawnActor 造 AActor，走完整流程：检查、分配、应用 SpawnParams、构造、PostActorCreated、注册组件、PostInitializeComponents，World 已开始才调 BeginPlay，所以“生成后马上 BeginPlay”不总成立。CreateDefaultSubobject 只能放在构造函数里，给 CDO 和实例建默认子对象，组件都这么来。构造函数会跑两次就是因为 CDO 先构造一次。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| SpawnActor 时 BeginPlay 一定马上执行吗？ | 不一定。World 没开始游戏就延后；延迟生成要 `FinishSpawning` 才继续后续流程。 |
| 为什么构造函数执行两次？ | CDO 一次、实例一次；默认值写构造函数，运行期逻辑写 `BeginPlay`。 |
| `CreateDefaultSubobject` 能在 BeginPlay 调吗？ | 不能，它要求构造上下文，运行期会断言；运行期用 `NewObject` 再注册。 |
| `NewObject` 能造 Actor 吗？ | 能编译，但不进 World、不走生成流程，等于一个“裸对象”，不要这么干。 |

### ④ 真实坑

1. **在构造函数里 NewObject/SpawnActor**：CDO 阶段也会执行，产生重复对象甚至递归。
2. **BeginPlay 之前直接拿组件**：组件可能还没注册；用 `PostInitializeComponents` 或先判有效性。
3. **`CreateDefaultSubobject` 名字重复**：同一 Owner 内重名会冲突；用固定且唯一的名字。
4. **`SpawnActorDeferred` 忘了 `FinishSpawning`**：Actor 永远不完成初始化，BeginPlay 也不会来。

### ⑤ 练习

**A 写**：在 `AMySpawner` 构造函数里用 `CreateDefaultSubobject` 建一个 `USceneComponent`；在 `BeginPlay` 里分别 NewObject 一个 `UMyData`、SpawnActor 一个 `AMyActor`、SpawnActorDeferred 一个 `AMyActor` 并在设属性后 `FinishSpawning`；每个类在构造、`PostInitializeComponents`、`BeginPlay` 打日志。

**提示**：① 用 `GetOuter()` 和 `GetWorld()` 两个返回值区分“归谁持有”和“进没进世界”，比背口诀可靠；② 想验证 CDO 与实例各构造一次，在构造函数里打 `HasAnyFlags(RF_ClassDefaultObject)`；③ Deferred 流程要判返回值，并在设完属性后调 `FinishSpawning`，别用 `SpawnActor` 事后补设置。

验收标准：NewObject 的对象没有 BeginPlay 日志；SpawnActor 的 BeginPlay 出现在生成调用内或其后；Deferred 的 BeginPlay 只在 `FinishSpawning` 后出现；构造函数日志出现两次（CDO + 实例）。

**B 讲**：2 分钟讲“三个创建 API 怎么选”。覆盖对象类型、调用时机、是否进世界、生命周期归属四点。

验收标准：不看稿；能口述 SpawnActor 的关键顺序；能解释 CDO 与构造两次。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-05"></a>
## U5 · Q05 为什么 UObject 不能用 new/delete？

> 来源：题库 UE 第 5 题 ｜ 速背卡：[Q05](./速背.md#ue-q05) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：`new` 只给你一块能跑构造的内存，`delete` 只给你一次析构；UObject 需要的 Class 初始化、Outer、GC 登记和两段销毁，两者都绕过了。

**学完能做到**
- 写代码：写一个带 `BeginDestroy` 计数的 UObject，验证 `NewObject` + `MarkAsGarbage` 能走到清理。
- 讲出来：说清 new/delete、placement new、NewObject、`MarkAsGarbage` 各自缺什么。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `new` 出来的 UObject 只要 `AddToRoot` 就能正常用 | 它没有 UClass 初始化、Outer/Flags 和对象表登记，`AddToRoot` 也救不回来 |
| `delete` 只是少了 GC 记录，资源照样释放 | 它跳过 `BeginDestroy`/`FinishDestroy`，异步资源没有释放窗口，泄漏或崩溃 |
| `MarkAsGarbage` 之后对象立刻被回收 | 只是标记待回收，真正的 `BeginDestroy` 等 GC 的时机 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `new` 只分配内存并调构造，不登记进全局对象表 | 没有 UClass 初始化、没有 Outer/Flags，GC 完全不知道它 |
| UObject 的构造依赖 `FObjectInitializer` 与引擎分配路径 | 直接 new 即使能编译，也拿不到正确的对象状态 |
| `delete` 直接调析构，跳过 BeginDestroy/FinishDestroy | 异步资源没有释放窗口，直接泄漏或悬垂 |
| 引擎销毁走 `MarkAsGarbage` → GC → BeginDestroy → FinishDestroy | 业务代码只负责标记，时机交给 GC |
| Placement new 只解决“内存从哪来”，不解决“对象怎么登记” | 放进自定义内存池同样不能当 UObject 用 |

UObject 不只是 C++ 对象：它还是全局对象表里的一条记录、UClass 的一个实例、Outer 链上的一个节点、GC 图里的一个顶点。`new` 只完成“分配 + 构造”这一小段，其余全缺。

`delete` 的问题在销毁协议。UObject 的清理分 `BeginDestroy` 和 `FinishDestroy`，异步释放需要窗口；`delete` 一步析构，渲染资源可能还在渲染线程使用中，之后就是泄漏或崩溃。

正确做法：创建用 `NewObject`、`SpawnActor` 或构造函数里的 `CreateDefaultSubobject`；主动放弃引用就让它不可达，必要时 `MarkAsGarbage`；Actor 用 `Destroy`。`ConditionalBeginDestroy` 更底层，业务代码少用。

**设计动机**：GC、序列化、网络复制、编辑器编辑这些能力都建立在“所有 UObject 都经过同一条分配与销毁路径”这个前提上。只要有一个对象是 `new` 出来的，它就没有 Class 初始化、没有对象表记录、没有两段销毁，GC 和反射系统对它只能是盲区。把入口收归 `NewObject`/`SpawnActor`，是用“不能自定义分配”换“所有对象都可被统一管理”。

**版本差异**：UE5 起用 `MarkAsGarbage` 取代旧的 `MarkPendingKill`（早期版本的接口名和语义略有差异），`ConditionalBeginDestroy` 仍是底层接口；两段销毁协议不变。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 创建 UObject | `NewObject<UMyObject>(Outer)` |
| 创建 Actor | `World->SpawnActor<AMyActor>(...)` |
| 构造函数里建默认子对象 | `CreateDefaultSubobject<T>(TEXT("Name"))` |
| 主动标记回收 | `Obj->MarkAsGarbage();` |
| 销毁 Actor | `Actor->Destroy();` |

**示例说明**：以下为 UObject 子类与测试宿主片段，依赖 `CoreMinimal.h`、`Engine/Engine.h`（`GEngine`）与 UHT 生成的 `.generated.h`；`UMyTest` 为示意宿主类，不能独立编译。

```cpp
UCLASS()
class UDisposable : public UObject
{
    GENERATED_BODY()

public:
    static int32 BeginDestroyCount;

    virtual void BeginDestroy() override
    {
        ++BeginDestroyCount;      // 只统计引擎有没有走销毁协议
        Super::BeginDestroy();
    }
};

int32 UDisposable::BeginDestroyCount = 0;

void UMyTest::Run()
{
    // 正确：进对象表、有 Outer、能被 GC 管理
    UDisposable* Ok = NewObject<UDisposable>(this);
    Ok->MarkAsGarbage();
    GEngine->ForceGarbageCollection(true);

    UE_LOG(LogTemp, Log, TEXT("BeginDestroy=%d"), UDisposable::BeginDestroyCount);

    // 错误示范（不要打开）：绕过对象表与销毁协议
    // UDisposable* Bad = new UDisposable();
    // delete Bad;
}
```

出处：Epic《Objects in Unreal Engine》《Unreal Object Handling》；`MarkAsGarbage` 取代旧的 pending kill 标记，旧版本接口名可能不同。

**可观察验证**

```cpp
// 计数验证：只有走引擎销毁协议的路径才会让 BeginDestroyCount 增加
UDisposable* Ok = NewObject<UDisposable>(this);
Ok->MarkAsGarbage();
GEngine->ForceGarbageCollection(true);
UE_LOG(LogTemp, Log, TEXT("BeginDestroy=%d"), UDisposable::BeginDestroyCount); // 期望 1

// 反面示例只用于观察差异，别真的执行
// UDisposable* Bad = new UDisposable(); delete Bad;   // BeginDestroyCount 不会变
```

```plaintext
obj list class=UDisposable   # 强制 GC 前后对比存活数
stat gc                      # 这次回收落在哪一帧、耗时多少
```

- 正确路径下强制 GC 后 `BeginDestroyCount` 加 1；把 `MarkAsGarbage` 那行注释掉、只清掉外部引用，计数要等下一轮 GC 才变。
- `obj list class=UDisposable` 在 `NewObject` 后能看到对象、强制 GC 后消失，说明它确实在全局对象表里；`new` 出来的对象永远不会出现在这个列表。

### ③ 面试怎么讲

**30 秒口述稿**

> UObject 的分配、构造、引用登记都归引擎管。new 出来的对象没走 UClass 初始化、没进 GC 图、Outer 也不对；delete 会绕过 BeginDestroy 和 FinishDestroy，异步资源没有释放窗口，直接漏。所以创建我只用 NewObject、SpawnActor 或构造函数里的 CreateDefaultSubobject；主动销毁用 MarkAsGarbage，Actor 用 Destroy，等 GC 回收。placement new 也一样，只解决内存，不解决登记。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 那 placement new 呢？ | 只把构造放到指定内存；没有 Outer/Flags 和对象表登记，GC、序列化都不认。 |
| 为什么 delete 会漏资源？ | 它直接析构，跳过 `BeginDestroy` 发起异步释放、`FinishDestroy` 确认完成的协议。 |
| `MarkAsGarbage` 后会立刻回收吗？ | 不会，等 GC；测试里可以强制 GC，但业务逻辑不能依赖。 |
| UObject 能用 shared_ptr 吗？ | 不建议，两套所有权会打架；用 `TStrongObjectPtr`、`FGCObject` 或弱指针。 |

### ④ 真实坑

1. **直接 `delete` 一个 UObject**：析构跑了，但 `BeginDestroy` 没跑，异步资源泄漏；引擎还可能在对局结束报状态错误。
2. **`new` 后手动 `AddToRoot`**：对象不在对象表里，`AddToRoot` 也救不了，崩溃点更晚更隐蔽。
3. **`std::shared_ptr<UObject>`**：GC 和 shared_ptr 都以为自己拥有，容易 double free 或永久常驻。
4. **在 `BeginDestroy` 里 delete 其他 UObject**：破坏 GC 的销毁顺序；只标记，交给 GC。

### ⑤ 练习

**A 写**：实现 `UDisposable` 和 `Run`，用 `NewObject` 创建、`MarkAsGarbage`、`ForceGarbageCollection(true)`，打印 `BeginDestroyCount`；然后在注释里保留 `new/delete` 版本，并写清它缺的三样东西（UClass 初始化、Outer/Flags、GC 登记）。

**提示**：① 用静态计数器加 `BeginDestroy` 验证协议有没有走通，比看内存数字直观；② 反面示例必须注释掉或用 `#if 0` 包住，`new` UObject 在打包配置下会直接崩；③ 实验要配合 `ForceGarbageCollection(true)`，否则在编辑器里等不到回收，容易误判成“没有泄漏”。

验收标准：正确路径 `BeginDestroyCount` 增加 1；`new/delete` 版本即使能编译也不会增加；能说出 `delete` 跳过的两个阶段；代码中没有对裸指针的 `delete`。

**B 讲**：90 秒讲“为什么 UObject 不能 new/delete”。覆盖分配、构造、登记、销毁协议四点，并对比 placement new。

验收标准：不看稿；四点齐全；能举一个 `delete` 导致异步资源泄漏的场景。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-06"></a>
## U6 · Q06 Outer 是什么？对象命名有什么讲究？

> 来源：题库 UE 第 6 题 ｜ 速背卡：[Q06](./速背.md#ue-q06) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：Outer 是对象的“户口所在地”，决定路径、加载归属和编辑期归类，但不负责给子对象保命；名字在同一 Outer 下必须唯一。

**学完能做到**
- 写代码：用不同 Outer 和 `MakeUniqueObjectName` 创建对象，打印 `GetPathName` 与重名行为。
- 讲出来：说清 Outer 链、对象路径、命名唯一性，以及 Outer 不是强引用的边界。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 挂在某个 Outer 下就不会被 GC | Outer 不向下强引用；子对象仍按引用图判定，要保活还是靠 `UPROPERTY` |
| 同一个 Actor 下可以有多个同名对象 | 同一 Outer 内名字必须唯一；重名可能复用已有对象，也可能直接触发 check |
| Outer 决定对象的类型归属 | Outer 只是归属链，不是继承关系；类型判断用 `IsA` 或接口 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Outer 组成对象的归属链，路径为 `OuterPath.ObjectName` | 资源定位、日志、编辑器归类都依赖它；Outer 错了路径就错 |
| `NewObject` 必须给 Outer | 一般传 `this`、`GetTransientPackage()` 或长期存活对象 |
| 同一 Outer 下名字必须唯一 | 重名可能复用已有对象，也可能直接报错，行为容易踩坑 |
| Outer 不向下强引用子对象 | 挂在某个 Outer 下不等于被保活，GC 仍按引用图判定 |
| 名字影响序列化、查找和网络复制 | 稳定名字便于调试复现，运行期临时对象用唯一名 |

Outer 决定“这个对象属于谁”：包、关卡、Actor、组件都是常见的 Outer。对象路径由 Outer 链拼出来，日志里的 `/Game/.../Map:PersistentLevel.Actor.Component` 就是归属链的体现。

Outer 也影响加载和编辑：资源里的子对象跟着包保存、加载；`GetTransientPackage()` 下的对象带 transient 语义，不会被打进包。

名字在同一个 Outer 内唯一。`NewObject` 重名时，引擎可能返回已存在对象，也可能在 check 下直接报错，具体视版本和 Flags；要确定性就用 `MakeUniqueObjectName`。

Outer 不是强引用。如果 Outer 向下强引用所有子对象，包和关卡里的东西就永远回收不掉。所以别把“我挂在 Actor 下面”当保活手段，要保活还是靠 `UPROPERTY` 或 `AddToRoot`。

**设计动机**：引擎需要一套能表达“谁拥有谁”的树，才能让对象路径可读、让资源里的子对象跟着包一起保存、让编辑器按归属归类显示；但这条树不能是 GC 强引用，否则一个关卡包会顺着 Outer 链把所有子对象永久钉住。所以 Outer 只表达归属，引用图的边仍由 `UPROPERTY` 单独登记——两个概念拆开，才能既有层级又不妨碍回收。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 普通运行期对象 | `NewObject<UMyObject>(this)` |
| 不进包的临时对象 | `NewObject<UMyObject>(GetTransientPackage())` |
| 保证名字唯一 | `MakeUniqueObjectName(Outer, Class, TEXT("Probe"))` |
| 查 Outer | `GetOuter()` / `GetTypedOuter<AActor>()` |
| 打印路径 | `GetPathName()` |
| 改名/改 Outer | `Rename(...)`，谨慎，会影响引用和网络 |

**示例说明**：以下为 Actor 成员函数片段，依赖 `CoreMinimal.h`、`UObject/Package.h`（`GetTransientPackage`）与 `UProbeObject` 的 UCLASS 声明和 UHT 生成的 `.generated.h`，不能独立编译。

```cpp
void AMyOwner::MakeProbes()
{
    // 固定名字：仅用于观察，重复创建可能复用已有对象或触发 check
    UProbeObject* A = NewObject<UProbeObject>(this, TEXT("Probe"));
    UProbeObject* B = NewObject<UProbeObject>(this, TEXT("Probe"));

    // 唯一名字：避免重名，也方便日志定位
    const FName Unique = MakeUniqueObjectName(
        this, UProbeObject::StaticClass(), TEXT("Probe"));
    UProbeObject* C = NewObject<UProbeObject>(this, Unique);

    // 临时对象：Outer 是 TransientPackage，不进包
    UProbeObject* T = NewObject<UProbeObject>(GetTransientPackage());

    UE_LOG(LogTemp, Log, TEXT("A=%p B=%p C=%s T=%s"),
        A, B, *C->GetPathName(), *T->GetPathName());
}
```

出处：Epic《Objects in Unreal Engine》；`MakeUniqueObjectName`、`GetTransientPackage`、`GetPathName` 均为引擎公共接口，重名处理细节以对应版本为准。

**可观察验证**

```cpp
// 路径与归属：名字怎么变，路径前缀都跟着 Outer 走
UE_LOG(LogTemp, Log, TEXT("A=%s"), *A->GetPathName());   // 固定名
UE_LOG(LogTemp, Log, TEXT("C=%s"), *C->GetPathName());   // MakeUniqueObjectName
UE_LOG(LogTemp, Log, TEXT("T=%s"), *T->GetPathName());   // /Engine/Transient
UE_LOG(LogTemp, Log, TEXT("A==B %d"), A == B ? 1 : 0);   // 重名是复用还是报错
```

```plaintext
obj list class=UProbeObject   # 看数量，以及各自的 Outer
obj refs name=Probe           # 谁引用了它，引用边是否登记
```

- 三个 `GetPathName()` 都以同一个 Outer 路径为前缀，Transient 版本落在 `/Engine/Transient`——归属链在字符串里就能读出来。
- 连续两次用同一个固定名创建后比较指针：相同说明被复用，报 check 说明该版本直接拒绝重名；换成 `MakeUniqueObjectName` 后两者都不再出现。

### ③ 面试怎么讲

**30 秒口述稿**

> Outer 是对象的归属链，决定它跟着谁加载、谁销毁，也组成对象路径。NewObject 必须显式给 Outer，一般传 this、GetTransientPackage 或某个长期对象。同一个 Outer 下名字要唯一，重名可能拿到已存在对象，也可能直接报错；要唯一名就用 MakeUniqueObjectName。要注意 Outer 本身不是 GC 强引用，别指望“挂在谁下面”帮你保命，GC 只看引用图。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Outer 销毁时子对象会怎样？ | Actor 会处理自己的组件；普通 UObject 仍按可达性判定，Outer 没了不代表子对象立刻没，但通常也会一起不可达。 |
| 为什么重名会返回已有对象？ | 引擎按 Outer + Name 查对象表，命中且条件允许时复用；不想要这种行为就用唯一名。 |
| Outer 能随便换吗？ | `Rename` 可以改 Outer，但会影响路径、引用和网络；运行期对象尽量一开始就定好。 |
| `GetTransientPackage()` 的对象会存盘吗？ | 不会，它带 transient 语义，适合运行期临时数据。 |
| Outer 是强引用吗？ | 不向下强引用；子对象要保活还是靠 `UPROPERTY`。 |

### ④ 真实坑

1. **`NewObject<T>(nullptr)`**：没有 Outer 就没有合法路径和归属，引擎可能用默认值或报错；始终显式给。
2. **用固定名字批量创建**：第二次创建就撞名；用 `MakeUniqueObjectName`，或名字里带唯一后缀。
3. **以为“挂在 Actor 下就不会被 GC”**：Outer 不保活；成员还是要标 `UPROPERTY`。
4. **用 `GetTransientPackage()` 存需要存盘的数据**：打包后数据丢失。
5. **把 Outer 当父类做业务判断**：Outer 是归属关系，不是类型关系；判断能力用 `IsA` 或接口。

### ⑤ 练习

**A 写**：在 Actor 里创建三个 `UProbeObject`：固定名、`MakeUniqueObjectName`、`GetTransientPackage()` 各一个；打印三者的 `GetPathName()` 和 `GetOuter()->GetName()`；再尝试用固定名创建同名对象并记录结果（先看日志，不要放进正式流程）。

**提示**：① 固定名只用于实验观察，正式流程批量创建一律走 `MakeUniqueObjectName`；② 判断归属关系用 `GetTypedOuter<AActor>()`，别拿 `GetOuter()` 做业务类型判断；③ 想确认 Outer 不保活，让子对象只挂在 Outer 下、不标 `UPROPERTY`，强制 GC 后用弱指针看是否失效。

验收标准：路径能看出 Outer 链；唯一名版本不冲突；Transient 版本的路径包含 transient 包；能解释重名时的两种可能行为。

**B 讲**：90 秒讲“Outer 与命名”。覆盖归属链、路径、唯一性、非强引用四点。

验收标准：不看稿；能口述一个 Outer 选错的后果；能说清 `MakeUniqueObjectName` 解决什么问题。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-07"></a>
## U7 · Q07 GC 卡顿从哪来，怎么优化？

> 来源：题库 UE 第 7 题 ｜ 速背卡：[Q07](./速背.md#ue-q07) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：GC 卡顿的根源是“对象数 × 引用数”的图遍历成本，优化顺序永远是先减对象、再分散、最后才调参。

**学完能做到**
- 写代码：做一个短命 UObject 压力场景，对比“每帧 NewObject”和“对象池复用”的 GC 时长。
- 讲出来：说清标记/清理两段成本、增量 GC 的代价，以及定位工具。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 调大每帧时间预算就能消除 GC 卡顿 | 预算只是把工作量摊开，总工作量仍由对象数 × 引用数决定 |
| 开了增量 GC 就不会再有尖峰 | 清理阶段和大量对象同帧死亡仍会形成尖峰；增量本身还抬高内存峰值 |
| 对象池复用之后就不用再管状态 | 复用对象带着上一轮状态，不重置就是逻辑 bug，比卡顿更难查 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| GC 成本近似与对象数 × 引用数成正比 | 减少常驻和短命 UObject 比调参数更根本 |
| 标记阶段从根集遍历引用图 | 引用越密、跨簇越多，标记越慢 |
| 清理阶段销毁不可达对象、释放内存 | 大量对象同帧死亡会形成尖峰 |
| 增量 GC 把标记和清理拆到多帧，并设软时间上限 | 单帧卡顿下降，但对象存活变长、内存峰值上升 |
| 对象池能复用对象，但状态重置要自己保证 | 池不是免费午餐，残留状态会变成逻辑 bug |

卡顿分两段：标记（遍历图）和清理（销毁、释放）。UE5 默认增量 GC，把标记拆到多帧，每帧有软时间上限；清理阶段也按毫秒级时间片推进，常见是 2 ms 量级，具体视项目配置。

成本模型决定优化顺序：少造（短命对象改栈上、USTRUCT 或池化）、少留（流式加载、World Partition 控制常驻）、分散（批量生成拆帧、加载与 GC 错开）、配置（时间预算、GC 集群）、定位（`stat GC`、Insights、`obj list`）。

增量 GC 不是免费：标记跨帧意味着不可达对象在清理前仍占内存，逻辑不能假设“`MarkAsGarbage` 立刻释放”；内存峰值和对象存活时间都会上升。

GC 集群把相关对象打包处理，减少跨簇遍历；但粒度变粗，可能提高滞留内存，使用前要确认版本行为。

**设计动机**：GC 的总工作量由对象图和存活状态决定，靠单点优化消不掉，而主机和低配 PC 对单帧停顿的容忍度极低。增量 GC 把一次不可控的全量停顿摊到多帧、用时间预算封顶，把“偶发大卡顿”换成“可预测的小开销”；代价是对象多活几帧、内存峰值上升，优化重心因此回到减少对象数和引用密度。

**版本差异**：UE5 默认增量 GC，并暴露每帧时间预算、GC 集群等参数（参数名视版本），UE4 传统模式多为单帧全量 GC；`stat GC` 与 Insights 的 GC 轨道两代都有。

### ② 开发怎么用

| 需求 | 写法/做法 |
| --- | --- |
| 看 GC 各阶段耗时 | 控制台 `stat GC` |
| 看卡顿帧与 GC 轨道 | Unreal Insights |
| 看谁在制造对象 | `obj list -countsort` |
| 减少短命对象 | 用 USTRUCT、栈对象或对象池，别每帧 NewObject |
| 控制常驻 | 流式加载、World Partition、远处 Actor 卸载 |
| 分散峰值 | 批量 Spawn/Destroy 拆到多帧，加载与 GC 错开 |
| 调参 | 增量 GC 开关、每帧时间预算、GC 集群（视版本/项目） |

**示例说明**：以下为 Actor 的 `Tick` 实现片段，依赖 `CoreMinimal.h`、`UHitInfoObject` 的 UCLASS 声明与 UHT 生成的 `.generated.h`；对象池成员需在头文件里声明，不能独立编译。

```cpp
// 反面示例：每帧创建短命 UObject，GC 基数越滚越大
void AMyEmitter::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    for (int32 i = 0; i < 100; ++i)
    {
        UHitInfoObject* Info = NewObject<UHitInfoObject>(this);
        ProcessHit(Info);          // 用完就不管，等 GC
    }
}

// 正面示例：池化 + 复用，避免制造垃圾
void AMyEmitter::TickPooled(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    for (int32 i = 0; i < 100; ++i)
    {
        UHitInfoObject* Info = Pool[NextIndex];
        NextIndex = (NextIndex + 1) % Pool.Num();
        Info->ResetForReuse();     // 自己负责清状态
        ProcessHit(Info);
    }
}
// 成员声明：UPROPERTY() TArray<TObjectPtr<UHitInfoObject>> Pool;
```

出处：Epic《Incremental Garbage Collection》《Primer: Debugging GC Performance》《The Great Hitch Hunt》；命令与默认时间片以对应版本为准。

**可观察验证**

```cpp
// 两种模式各跑 30 秒，只改创建方式，其余逻辑保持一致
const double Start = FPlatformTime::Seconds();
// ... 这里放 Tick 或 TickPooled 的循环 ...
UE_LOG(LogTemp, Log, TEXT("mode=%s elapsed=%.1fs"),
    bPooled ? TEXT("pool") : TEXT("new"), FPlatformTime::Seconds() - Start);
```

```plaintext
stat gc                          # GC 次数、单次耗时、当前 UObject 数
obj list -countsort              # 谁在批量制造对象
Unreal Insights → GC 轨道         # 尖峰落在哪一帧
```

- 用 `stat gc` 记 30 秒：池化模式的对象数与 GC 次数基本恒定，每帧 `NewObject` 模式两项持续上升。
- 在 Insights 把尖峰帧和批量 `MarkAsGarbage`/`Destroy` 对齐：尖峰只出现在集中死亡的那几帧，说明成本是图遍历加集中清理。

### ③ 面试怎么讲

**30 秒口述稿**

> 卡顿主要来自标记和清理两段。UE5 默认增量 GC，把可达性分析拆到多帧，每帧有软时间上限；清理阶段也按毫秒级切片。要降卡顿，顺序是：减少 UObject 总数、少造短命对象、用对象池、避免一帧内大量 Spawn/Destroy、把大块加载错开，最后才调 GC 参数或做集群。定位用 stat GC 和 Unreal Insights 看各阶段时长。注意增量 GC 的代价是对象存活变长、内存峰值上升，不能假设不可达就立刻释放。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 增量 GC 有什么代价？ | 对象存活时间变长、内存峰值上升，逻辑不能依赖立即释放。 |
| 为什么减少 UObject 数量比调参数更有效？ | 成本近似对象数 × 引用数，调参只改切片方式，不改总工作量。 |
| 对象池有什么坑？ | 状态重置不干净会串数据；池本身也要 `UPROPERTY` 保活。 |
| GC 集群是什么？ | 把相关对象打包处理，减少跨簇遍历；粒度变粗可能增加滞留内存。 |
| 怎么定位谁在制造对象？ | `obj list -countsort` 看数量，Insights 看时间线，`stat GC` 看阶段。 |

### ④ 真实坑

1. **Tick 里 NewObject**：每帧制造垃圾，GC 频率和单次耗时一起涨。
2. **一帧内批量 Spawn/Destroy**：死亡对象集中，清理阶段形成尖峰；拆到多帧。
3. **只调 GC 参数不改代码**：对象基数不变，卡顿只是从“大尖峰”变成“长尾”。
4. **用对象池但不 Reset**：复用对象带着上一轮状态，逻辑 bug 比卡顿更难查。
5. **对象池成员不标 UPROPERTY**：池里的对象被 GC 回收，池变成悬垂指针数组。

### ⑤ 练习

**A 写**：做一个 `AMyEmitter`，提供两种模式：每帧 `NewObject<UHitInfoObject>` 100 个（用完不引用），以及维护一个 100 个对象的池复用；用 `stat GC` 或 Insights 记录 30 秒内的 GC 次数和总时长，对比两种模式。

**提示**：① 两版只改创建方式，其他逻辑和日志位置保持一致，否则耗时无法归因；② 至少记录 30 秒并重复三次，单次 `stat gc` 的波动很大；③ 池化版本必须实现并调用重置函数，否则测到的是状态残留，不是 GC 变快。

验收标准：池化模式的对象数量稳定；每帧新建模式的 GC 次数或时长明显更高；池化对象有 `ResetForReuse` 且池成员标了 `UPROPERTY`；能说出一个“调参无法解决”的场景。

**B 讲**：2 分钟讲“GC 卡顿从哪来、怎么优化”。覆盖成本模型、两个阶段、增量代价、五步优化顺序。

验收标准：不看稿；顺序正确；能说出至少两个定位命令或工具。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-08"></a>
## U8 · Q08 UObject 的销毁和 Actor 的销毁有什么不同？

> 来源：题库 UE 第 8 题 ｜ 速背卡：[Q08](./速背.md#ue-q08) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：Actor 的 `Destroy` 是“离场流程”，先走 EndPlay、广播 Destroyed，再交给 GC；UObject 没有离场流程，只能标记待回收，等 GC 走两段销毁。

**学完能做到**
- 写代码：给 Actor 重写 `EndPlay`、给 UObject 重写 `BeginDestroy`，对比 `Destroy`/`MarkAsGarbage` 的日志顺序。
- 讲出来：说清 EndPlay、Destroyed 广播、BeginDestroy/FinishDestroy 的先后，以及 `IsValid`/`bActorIsBeingDestroyed` 的使用边界。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `MarkAsGarbage` 一个 Actor 也会走离场流程 | 它跳过 `EndPlay` 和 Destroyed 广播；Actor 离场要用 `Destroy()` |
| `Destroy()` 之后内存立刻释放、指针立刻为空 | 只是标记待回收，内存等 GC；`IsValid` 变 false，但裸指针通常仍非空 |
| 玩法清理放 `BeginDestroy` 也一样 | 这时 World 可能已在销毁，Actor 查询和广播都不安全；玩法清理放 `EndPlay` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Actor 用 `Destroy()`，先 EndPlay，再广播 Destroyed | 玩法层清理放 EndPlay；监听销毁用 `OnDestroyed` |
| Destroy 之后 Actor 被标记待回收，内存不会立刻释放 | 指针可能非空；用 `IsValid` 或 `IsActorBeingDestroyed` 判断 |
| UObject 没有 Destroy，用 `MarkAsGarbage`/`ConditionalBeginDestroy` | 主动放弃引用即可，销毁时机交给 GC |
| 两者最终都走 BeginDestroy → FinishDestroy → 内存回收 | 异步资源释放仍要在这两个钩子里做 |

Actor 的销毁是玩法生命周期的一部分：`Destroy()` 拒绝重复销毁，路由 EndPlay（带原因），广播 Destroyed，然后把 Actor 标记为垃圾；它自己的组件也会在流程中解注册或销毁。

UObject 没有玩法生命周期，只有 GC 生命周期：`MarkAsGarbage` 只是标记待回收，真正的 `BeginDestroy`/`FinishDestroy` 由 GC 在合适时机调用。

“销毁后还能访问成员吗？”内存可能还在，但对象已处于无效状态，不要访问。`IsValid` 在标记后返回 false；Actor 在 Destroy 流程中还可以用 `IsActorBeingDestroyed()` 判断。

最终都会到 `BeginDestroy`/`FinishDestroy`：资源释放代码可以复用，但玩法清理必须放 EndPlay（Actor），不能塞进 BeginDestroy。

**设计动机**：Actor 的“离场”有两层含义——玩法上它不该再 Tick、不该再发事件，这必须在离开世界的瞬间完成；资源上它占用的渲染/物理资源可能还被其他线程引用，不能立刻释放。拆成 `EndPlay` 与 `BeginDestroy`/`FinishDestroy`，是让人在正确的时机做正确的事；代价是同一个对象有两套销毁路径，混用就会漏清理或访问到已销毁的 World。

**版本差异**：UE5 起“待回收”标记统一为 `MarkAsGarbage`（旧版 `MarkPendingKill`），Actor 的 `Destroy()` → `EndPlay` → Destroyed 广播 → GC 流程两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 主动销毁 Actor | `Actor->Destroy()` |
| 玩法层清理 | 重写 `EndPlay(const EEndPlayReason::Type Reason)` |
| 监听销毁 | 绑定 `OnDestroyed` |
| 判断 Actor 正在销毁 | `IsActorBeingDestroyed()` / `bActorIsBeingDestroyed` |
| 判断对象还能用 | `IsValid(Obj)` 或弱指针 |
| 主动放弃 UObject | `Obj->MarkAsGarbage();` |
| 组件销毁 | `Component->DestroyComponent();`，必要时先 Unregister |

**示例说明**：以下为 Actor 成员函数片段，依赖 `CoreMinimal.h`、`Engine/World.h`、`TimerManager.h` 与 UHT 生成的 `.generated.h`；`bCleanedUp`、`ReleaseRenderResources` 需在类里自行声明，不能独立编译。

```cpp
void AMyActor::EndPlay(const EEndPlayReason::Type Reason)
{
    // 可能由 Destroy、关卡切换、PIE 结束等多条路径触发，必须幂等
    if (bCleanedUp)          // bool bCleanedUp = false; 声明在头文件
    {
        Super::EndPlay(Reason);
        return;
    }
    bCleanedUp = true;

    if (UWorld* World = GetWorld())
    {
        World->GetTimerManager().ClearAllTimersForObject(this);
    }

    UE_LOG(LogTemp, Log, TEXT("EndPlay reason=%d"), static_cast<int32>(Reason));
    Super::EndPlay(Reason);  // Super 放在最后
}

void AMyActor::BeginDestroy()
{
    // 资源释放：不要碰 World 和玩法状态
    ReleaseRenderResources();
    Super::BeginDestroy();
}
```

出处：Epic《Actor Lifecycle》《Objects in Unreal Engine》；EndPlay 的原因枚举与调用路径以对应版本文档为准。

**可观察验证**

```cpp
// Destroy 之后：IsValid 立刻为 false，裸指针通常仍非空
AMyActor* Raw = SpawnedActor;        // 故意保留裸指针
SpawnedActor->Destroy();
UE_LOG(LogTemp, Log, TEXT("isvalid=%d nullptr=%d"),
    IsValid(Raw), Raw == nullptr ? 1 : 0);   // 期望 0 / 0
```

```plaintext
obj list class=AMyActor    # Destroy 后对象还在表里，强制 GC 后才消失
stat gc                    # 内存回收落在 Destroy 之后的哪一帧
```

- `Destroy()` 后立刻打印 `IsValid(Raw)` 和 `Raw == nullptr`：前者 0、后者 0，这是“销毁不等于内存释放”的直接证据。
- 同类对象上分别用 `Destroy()` 和 `MarkAsGarbage()`：只有前者打出 `EndPlay` 日志，后者直接进 `BeginDestroy`，说明离场流程是 `Destroy` 独有的。

### ③ 面试怎么讲

**30 秒口述稿**

> Actor 用 Destroy：先 EndPlay，带销毁原因，再广播 Destroyed，然后把 Actor 标记待回收，最后和普通 UObject 一样走 BeginDestroy、FinishDestroy。UObject 没有 Destroy，只能 MarkAsGarbage 或 ConditionalBeginDestroy，回收等 GC。销毁后指针不一定立刻变空，用 IsValid 判断；Actor 在 Destroy 流程里还可以看 bActorIsBeingDestroyed。玩法清理放 EndPlay，资源释放放 BeginDestroy，别在 BeginDestroy 里碰 World。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Destroy 之后还能访问成员吗？ | 内存可能还在，但对象已无效；不要访问，用 `IsValid` 或弱指针判断。 |
| 为什么 EndPlay 可能被调用多次？ | Destroy、关卡切换、PIE 结束、移出世界都可能触发；逻辑要幂等。 |
| EndPlay 和 BeginDestroy 怎么分工？ | EndPlay 做玩法层清理（定时器、委托、状态），BeginDestroy 做资源释放。 |
| `MarkAsGarbage` 后 Actor 会走 EndPlay 吗？ | 不会，Actor 的离场流程要 `Destroy`；直接标记会跳过 EndPlay 和广播。 |

### ④ 真实坑

1. **Destroy 后继续用指针**：`if (Actor)` 仍为真；用 `IsValid` 或 `IsActorBeingDestroyed`。
2. **在 EndPlay 里访问已销毁的组件**：组件销毁顺序不保证；先判 `IsValid` 再解引用。
3. **EndPlay 不幂等**：多条路径重复清理，重复移除委托或清定时器导致断言。
4. **把玩法清理放 BeginDestroy**：World 可能已销毁，Actor 查询和广播都不安全。
5. **边遍历边 Destroy**：`TActorIterator` 会失效；先收集到数组，再统一销毁。

### ⑤ 练习

**A 写**：写 `AMyActor`，重写 `BeginPlay`、`EndPlay`、`BeginDestroy`，在 `EndPlay` 里清定时器并做幂等保护；写 `UMyCache` 重写 `BeginDestroy`。在关卡里用触发器调用 `Destroy()`，另建一个对象调 `MarkAsGarbage()`，打印两者日志与 `IsValid` 结果。

**提示**：① 用日志顺序验证三件事：`EndPlay` → Destroyed 广播 → `BeginDestroy`，`FinishDestroy` 可能更晚；② `EndPlay` 里先判 `bCleanedUp` 再清理，重复触发才不崩；③ 想确认 `MarkAsGarbage` 跳过离场，对比两条路径的日志条数，而不是看指针是否为空。

验收标准：Actor 日志顺序是 EndPlay → Destroyed → BeginDestroy（FinishDestroy 可能更晚）；UObject 没有 EndPlay；Destroy 后 `IsValid(Actor)` 为 false 但指针非空；重复 Destroy/重复 EndPlay 不崩。

**B 讲**：2 分钟讲“Actor 销毁和 UObject 销毁的区别”。覆盖 Destroy/EndPlay/广播、MarkAsGarbage/GC、IsValid/bActorIsBeingDestroyed 三组差异。

验收标准：不看稿；顺序正确；能说出一个“在 BeginDestroy 里碰 World”的事故。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ②：反射系统](#ch7)


<a id="ch7"></a>
# 第 7 章 · UE ②：反射系统

> 对应速背 UE 主题 02（Q09–Q14），完整答题卡见 [速背 UE 02](./速背.md#ue-t02)。
> 上一篇：[UE ①：UObject 与 GC](#ch6) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-09"></a>
## U9 · Q09 UCLASS / UPROPERTY / UFUNCTION 各自做什么？

> 来源：题库 UE 第 9 题 ｜ 速背卡：[Q09](./速背.md#ue-q09) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：三个宏是给 UHT 的标记，分别把类、成员、函数登记成运行期可查的 `UClass`、`FProperty`、`UFunction`，引擎从此才看得见它们。

**学完能做到**
- 写代码：写一个带编辑器属性、蓝图函数和复制属性的 Actor，并让蓝图子类能改能调。
- 讲出来：说清三个宏各自登记什么、登记之后谁在用、不加宏会缺什么。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 加了 `UCLASS()`，类里的成员就自动能被 GC 和蓝图看见 | 成员要各自加 `UPROPERTY()` 才会登记成 `FProperty`；漏标的成员不参与 GC、序列化、网络复制和蓝图读写 |
| `UPROPERTY()` 只是让编辑器细节面板显示属性 | 它同时是 GC 引用遍历、序列化、网络复制和蓝图读写的登记入口，细节面板只是其中一个消费者 |
| 三个宏本身参与运行期逻辑 | 宏只是给 UHT 的标记，运行期生效的是生成文件里的注册代码 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `UCLASS()` 把类注册成运行期的 `UClass`，`UClass` 本身是 `UObject`，与 `UStruct` 同族 | 类有了名字、`StaticClass()` 和 CDO，才能被 `NewObject`、`SpawnActor`、蓝图继承按类创建 |
| `UPROPERTY()` 把成员登记成 `FProperty`，挂到类的属性链上 | 只有它参与 GC 引用遍历、序列化、网络复制、编辑器细节面板和蓝图读写 |
| `UFUNCTION()` 把函数登记成 `UFunction`，挂到类的函数链上 | 才能被蓝图调用、被 `ProcessEvent` 按名字调用、被网络 RPC 系统识别 |
| 三者都由 UHT 解析，产出 `generated.h` 与 `gen.cpp` | 宏写错、类型不支持时，报错落在 UHT 阶段而不是 C++ 编译阶段 |
| 宏本身只是标记，没有一个字符进入运行期 | 真正生效的是生成文件里的注册代码；反射表的完整性由构建流程保证 |

反射解决的是「C++ 编译完就把类型信息扔掉了」这个问题。引擎想要在运行期做 GC、存档、网络、编辑器，就必须提前把「这个类有哪些成员、每个成员是什么类型、多大、偏移多少」记下来。`UCLASS`/`UPROPERTY`/`UFUNCTION` 就是告诉 UHT「这一行值得记」，UHT 再把它们翻译成一张表，由 `UClass` 持有。

三个宏的粒度不同，代价也不同。类级宏只影响「类是否存在」；成员级宏影响 GC 与序列化这两条最热的路径；函数级宏影响调用方式——直接调 `Collect()` 是普通函数调用，走 `ProcessEvent` 是查表加间接调用，后者贵得多。所以「能不反射就不反射」是对的，但在需要蓝图、网络、编辑器的地方，这笔钱必须花。

边界要记牢：不带 `UCLASS` 的 `UObject` 派生类，引擎完全看不见，既没有 `StaticClass()` 也没有 CDO；绕过 `NewObject` 直接 `new` 一个 `UObject` 更危险，GC 不认识它，随时可能被当成垃圾。同理，漏了 `UPROPERTY` 的 `UObject*` 成员不会被遍历到，指向的对象可能在任意时刻被回收。另外，UE4 早期这套类型叫 `UProperty`，UE5 统一叫 `FProperty`，`UPROPERTY` 里的对象指针推荐写成 `TObjectPtr<T>`。

**设计动机**：引擎要让 GC、存档、网络、蓝图、编辑器这些通用机制在运行期处理任意业务类，就不能依赖每个类手写的代码；三个宏把「这个类 / 成员 / 函数需要被通用机制处理」显式声明出来，由 UHT 统一生成 `UClass`、属性链和函数链。这样「参与反射」变成一个看得见的决定：漏写就是静默地不参与，写错则在 UHT 阶段被拦住。

**版本差异**：UE4 早期把属性类型叫 `UProperty`，UE5 统一为 `FProperty`，`UPROPERTY` 里的对象指针在 UE5 推荐 `TObjectPtr<T>`、UE4 是裸 `UObject*`；三个宏的分工两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 类要能被蓝图继承或创建 | `UCLASS(Blueprintable)`，只想当变量类型用 `BlueprintType` |
| 成员要被 GC 追踪 | `UPROPERTY()`，对象指针成员一个都不能漏 |
| 成员要在编辑器里配 | `UPROPERTY(EditAnywhere, Category = "X")`，只允许改 CDO 用 `EditDefaultsOnly` |
| 成员要蓝图读写 | `UPROPERTY(BlueprintReadWrite)`，只读用 `BlueprintReadOnly` |
| 成员要网络同步 | `UPROPERTY(Replicated)` 或 `ReplicatedUsing = OnRep_X`，并在 `GetLifetimeReplicatedProps` 里注册 |
| 函数要蓝图能调 | `UFUNCTION(BlueprintCallable, Category = "X")` |
| 蓝图实现、C++ 调用 | `UFUNCTION(BlueprintImplementableEvent)`；要 C++ 兜底用 `BlueprintNativeEvent` + `_Implementation` |
| 服务器/客户端 RPC | `UFUNCTION(Server, Reliable)`、`Client`、`NetMulticast` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `Pickup.generated.h`，不能脱离工程独立编译；`MYGAME_API` 换成你项目的模块宏。

```cpp
// Pickup.h
#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Pickup.generated.h"          // 必须是本文件最后一个 include

UCLASS(Blueprintable)
class MYGAME_API APickup : public AActor
{
    GENERATED_BODY()

public:
    // FProperty：GC 可见、可存档、编辑器可改、蓝图可读写
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Pickup")
    float Radius = 100.f;

    // 复制属性：标了 Replicated 还要在 GetLifetimeReplicatedProps 里注册
    UPROPERTY(Replicated, BlueprintReadOnly, Category = "Pickup")
    bool bTaken = false;

    UFUNCTION(BlueprintCallable, Category = "Pickup")
    void Collect(AActor* Collector);           // UFunction：蓝图可调用

    UFUNCTION(BlueprintImplementableEvent, Category = "Pickup")
    void OnCollected(AActor* Collector);       // 蓝图实现、C++ 调用
};
```

出处：反射宏与生成流程见 Epic 官方文档《Reflection System in Unreal Engine》与博客《Unreal Property System (Reflection)》。网络复制相关说明符（`Replicated`、`ReplicatedUsing`、`GetLifetimeReplicatedProps`）在 UE4/UE5 各版本可用范围略有差异，以项目实际引擎版本为准。

**可观察验证**

```cpp
// 属性链、函数链都能查到，说明登记成功
for (TFieldIterator<FProperty> It(APickup::StaticClass()); It; ++It)
{
    UE_LOG(LogTemp, Log, TEXT("prop: %s (%s)"), *It->GetName(), *It->GetCPPType());
}
UE_LOG(LogTemp, Log, TEXT("Collect is UFUNCTION: %d"),
    APickup::StaticClass()->FindFunctionByName(TEXT("Collect")) != nullptr);
```

```plaintext
obj list class=APickup     # 场景里存活的 APickup 实例
stat gc                    # 观察 GC；漏标 UPROPERTY 的对象会被回收
```

- 把 `Radius` 的 `UPROPERTY` 注释掉重新构建：类照样能创建、蓝图照样能继承，但细节面板与蓝图中都没有这个属性——这就是类级宏与成员级宏的粒度差别。
- 去掉 `Collect` 的 `UFUNCTION()`：`FindFunctionByName` 返回空，蓝图也调不到，反射调用同样失败。

### ③ 面试怎么讲

**30 秒口述稿**

> `UCLASS` 把类注册进反射，生成 `UClass`，这样才能被 GC、序列化、蓝图识别；`UPROPERTY` 把成员登记成 `FProperty`，管 GC 引用遍历、序列化、编辑器和网络复制；`UFUNCTION` 把函数登记成 `UFunction`，蓝图能调、能按名字反射调用，RPC 也靠它。三者都由 UHT 解析，产出的 `generated.h` 和 `gen.cpp` 才是真正的胶水代码。没有这些宏，引擎完全看不见这个类，指针成员还可能被 GC 当垃圾收掉。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 反射数据存在哪？ | 运行期挂在 `UClass` 上：属性是一条 `FProperty` 链，函数是一条 `UFunction` 链，类对象本身由引擎管理。 |
| 不加宏会怎样？ | 类没有 `StaticClass()`、没有 CDO，蓝图和 `SpawnActor` 都用不了；成员指针不被遍历，GC 可能误回收。 |
| 只加 `UCLASS` 不加 `UPROPERTY` 能编译吗？ | 能。但成员不参与 GC 和序列化，是「编译通过、运行期出问题」的典型。 |
| `UCLASS` 和 `USTRUCT` 宏能混用吗？ | 不能。一个是 `UObject` 类，一个是纯数据结构，生成代码和用途完全不同。 |
| `BlueprintNativeEvent` 和 `BlueprintImplementableEvent` 区别？ | 前者有 C++ 默认实现（写在 `_Implementation`），蓝图可覆盖；后者只有蓝图实现，C++ 只声明。 |

### ④ 真实坑

1. **指针成员漏 `UPROPERTY`**：成员能正常赋值，过一段时间访问就崩，指针指向的对象已被 GC 回收。所有 `UObject*` 成员都要加宏，UE5 用 `TObjectPtr<T>`。
2. **复制属性忘了注册**：标了 `Replicated` 却没在 `GetLifetimeReplicatedProps` 里写 `DOREPLIFETIME`，服务器改了值客户端永远收不到，而且不报任何错。
3. **`BlueprintImplementableEvent` 在 C++ 写了实现**：编译期重复定义或链接报错；想要 C++ 默认行为就用 `BlueprintNativeEvent`，实现写在 `函数名_Implementation`。
4. **属性/函数改名断链**：蓝图引脚、存档字段、网络字段都按名字匹配，改名后老资产直接失效。要么保留旧名，要么配 `CoreRedirects` 做重定向。
5. **构造函数里做依赖世界的逻辑**：构造函数在 CDO 和编辑器加载时也会执行，此时没有玩家、没有世界；找玩家、播特效一律搬到 `BeginPlay`。

### ⑤ 练习

**A 写**：新建 `APickup`（继承 `AActor`），带 `Radius`、`bTaken` 两个 `UPROPERTY` 和一个 `BlueprintCallable` 的 `Collect()`；编译后在蓝图子类里改 `Radius` 并调用 `Collect()`，在 `Output Log` 里打印结果。

**提示**：① 先只加 `UCLASS()` 确认类能被创建、被蓝图继承，再逐个补 `UPROPERTY`，观察面板、蓝图引脚和 GC 行为各少了什么；② `bTaken` 标了 `Replicated` 后去 `GetLifetimeReplicatedProps` 里补 `DOREPLIFETIME`，不补不会报错、但值不同步；③ 分别用 `EditAnywhere` 和 `EditDefaultsOnly` 构建一次，对比实例面板的可改范围。

验收标准：构建无 UHT 报错；蓝图细节面板能看到并修改两个属性、能调用 `Collect`；把 `Radius` 改成 `EditDefaultsOnly` 后实例上不可改、蓝图默认值仍可改，能解释这个差别。

**B 讲**：2 分钟口述「三个宏各自登记什么、登记后谁在用、不加会缺什么」。必须覆盖 GC、序列化、蓝图、网络四条使用方，并主动举一个「漏 `UPROPERTY` 导致崩溃」的例子。

验收标准：不看稿；三个宏各一句明确结论；能说清 `UCLASS` 与 `UPROPERTY` 的粒度差别。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-10"></a>
## U10 · Q10 .generated.h 是什么，为什么必须最后一个 include？

> 来源：题库 UE 第 10 题 ｜ 速背卡：[Q10](./速背.md#ue-q10) ｜ 耗时 12 min ｜ 难度 ★☆☆

**一句话**：`generated.h` 是 UHT 按你的宏生成的「补丁头文件」，里面引用了你前面声明的类型，所以必须排在所有 include 之后。

**学完能做到**
- 写代码：正确搭一个 UCLASS 头文件的 include 顺序，并在生成目录里找到生成物。
- 讲出来：说清 `generated.h` 与 `gen.cpp` 各自装什么、为什么顺序不能反。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `generated.h` 是作者手写的补充头文件 | 它是 UHT 的构建产物，每次构建按头文件里的宏重新生成，手改会在下次构建被覆盖 |
| 只要把 `GENERATED_BODY()` 写进类里，include 放哪都行 | 生成代码引用了上方声明的类型，`generated.h` 不在最后就会在「类型还不认识」的时候展开 |
| 头文件改名只要改文件名 | include、生成物名、工程文件要同步改，否则 UHT 阶段就报找不到 `X.generated.h` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UHT 为每个带反射宏的头文件生成同名 `X.generated.h` | 文件名由头文件名决定，头文件改名必须同步改 include，否则报找不到文件 |
| 里面是 `GENERATED_BODY()` 的展开：`StaticClass()` 声明、`Super` 别名，旧式宏下还有构造函数声明 | 它必须写在类体最前面，后续成员才能引用它引入的符号 |
| 另一份产物 `X.gen.cpp` 装 `UClass` 静态注册、属性布局表、`Z_Construct_*` 函数 | 这些代码在链接期进入二进制，运行期据此构造出 `UClass` 和属性链 |
| 生成代码引用了你在上方声明的成员类型，UHT 不负责补 include | 顺序颠倒时，编译器先看到「不认识的类型」，报错位置却在生成文件里 |
| 它是构建产物，可以重新生成，但不该手改 | 手改会在下次构建被覆盖；排查问题时读它比猜宏展开更快 |

`GENERATED_BODY()` 是个占位宏，真正的内容被 UHT 写进了 `generated.h`。所以「宏在哪、生成物在哪」是两件事：宏在类体最前，生成物在文件末尾被 include 进来。两者必须咬合，类的声明才完整。

为什么必须最后一个 include：生成代码里会出现形如「声明一个指向 `UHealthComponent` 的静态函数」「用 `FProperty` 描述 `float` 成员」的内容，这些依赖你在上方 include 进来的 `ActorComponent.h`、`CoreMinimal.h`。UHT 是文本级扫描器，它不会替你在生成文件里补 `#include`。于是顺序变成硬约束：先让所有类型就位，再展开生成代码。

反过来，如果 `generated.h` 放在前面，编译器会在「还不知道 `UActorComponent` 是什么」的时候去解析生成代码，报出的第一行错误往往落在 `generated.h` 内部，看起来完全不像你写的代码。这类错误的定位诀窍是：先看 include 顺序，再看宏参数。

`gen.cpp` 则完全不给 C++ 编译器看声明，它负责注册。可以把它理解成「把这张表挂到全局对象系统上的构造代码」：静态初始化时构造 `UClass`，把属性链、函数链、父类指针都接好。这也是为什么只改头文件必须重新编译——表和声明必须同源。

**设计动机**：UHT 是文本级扫描器，它只在生成文件里写「补丁声明」，不会替作者补 `#include`；把生成物规定为「本头文件最后一个 include」，就能保证展开时上方声明的类型已经就位。这条顺序约束换来的是声明与注册代码天然同源：头文件一变就必须重跑 UHT，`UClass` 才能和新的类布局对上。

**版本差异**：UE5 的生成文件按 `TObjectPtr` 描述对象引用，UE4 是裸指针；文件命名与「必须最后 include」的规则两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 新头文件引入生成代码 | `#include "MyThing.generated.h"`，放在本文件所有 include 之后 |
| 头文件改名 | 文件名与 include 同步改，重新生成项目文件 |
| 查看生成结果 | 到 `Intermediate/Build/.../Inc/<Module>/UHT/` 下找 `X.generated.h` 与 `X.gen.cpp` |
| 头文件里要用别的类型 | 在上方 include 或前向声明，不能指望生成文件帮你找 |
| 一个头文件里有多个 UCLASS | 只 include 一次自己的 `generated.h`，多个类共用同一份生成文件 |

**示例说明**：以下为模块内头文件片段，依赖 `CoreMinimal.h`、`Components/ActorComponent.h` 与 UHT 生成的 `HealthComponent.generated.h`；`MYGAME_API` 按项目模块名替换。

```cpp
// HealthComponent.h
#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "HealthComponent.generated.h"     // 本头文件最后一个 include

UCLASS(ClassGroup = (Gameplay), meta = (BlueprintSpawnableComponent))
class MYGAME_API UHealthComponent : public UActorComponent
{
    GENERATED_BODY()                    // 必须在类体最前面

public:
    UPROPERTY(EditAnywhere, Category = "Health")
    float MaxHealth = 100.f;

    UPROPERTY(VisibleAnywhere, Category = "Health")
    float CurrentHealth = 100.f;
};
```

```plaintext
Intermediate/Build/<Platform>/<Target>/Inc/<Module>/UHT/
├─ HealthComponent.generated.h   ← 声明补丁，参与编译
└─ HealthComponent.gen.cpp       ← 注册代码，参与链接
```

出处：生成文件的位置与命名规则见 Epic 文档《Reflection System in Unreal Engine》；具体中间目录层级随 UBT 版本和构建目标变化，以工程实际输出为准。

**可观察验证**

```cpp
// 生成文件里能看到 GENERATED_BODY 的展开结果
static UClass* StaticClass();               // 声明补丁，在 generated.h 里
// Z_Construct_UClass_UHealthComponent_*()   // 注册代码，在 gen.cpp 里
```

```plaintext
# 改一次头文件并重新构建：两个生成物的时间戳都会刷新（Windows cmd）
dir /T:W Intermediate\Build\Win64\MyGameEditor\Inc\MyGame\UHT\HealthComponent.*
```

- 在类里加一个 `UPROPERTY` 重新构建，到 `HealthComponent.generated.h` 里搜属性名：对应的属性注册会新增几行——生成物确实是「按宏生成」的。
- 把 `generated.h` 挪到第一个 include 再构建：第一条错误落在生成文件内部、而不是你写的行上；改回最后一行后立即通过。

### ③ 面试怎么讲

**30 秒口述稿**

> `generated.h` 是 UHT 根据头文件里的宏生成的，里面有 `GENERATED_BODY` 的展开、`StaticClass` 声明、`Super` 别名和反射注册相关的声明。它必须放在本头文件所有 include 的最后，因为生成代码依赖前面声明的类型，放前面编译器会在还不认识类型时先看生成代码，直接编译不过。文件名固定是「所在头文件名.generated.h」，头文件改名就要同步改 include。配套还有一份 `gen.cpp`，装的是运行期注册代码。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么不能手写这些代码？ | 生成代码必须和本次编译的类布局严格对应，手写一处偏差就是运行期内存错乱；而且每次构建都会被覆盖。 |
| `gen.cpp` 里有什么？ | `UClass` 的静态注册、属性/函数布局表、`Z_Construct_*` 构造函数，链接后由静态初始化触发。 |
| 头文件改名会怎样？ | include 还指向旧名字，UHT 阶段就报找不到 `X.generated.h`；改名要三处同步：文件名、include、重新生成工程。 |
| 为什么 `GENERATED_BODY()` 要写在类体最前？ | 它要声明 `Super`、`StaticClass()` 等符号，后面的成员和函数声明都依赖这些名字。 |
| 一个头文件能 include 别人的 `generated.h` 吗？ | 不该。每个生成文件只服务于自己的头文件，交叉 include 会造成重复定义和顺序混乱。 |

### ④ 真实坑

1. **`generated.h` 放到了前面**：编译器报一堆「未定义类型」，第一行错误却落在生成文件内部；把 include 挪到最后即可，这是最高频的 UHT/C++ 混合报错。
2. **头文件改名只改了一半**：文件名改了、include 还是旧的，构建报找不到 `OldName.generated.h`；三处（文件名、include、工程文件）必须一起改。
3. **在 `generated.h` 之后又 include 业务头**：被 include 的类型对生成代码不可见，等于把顺序问题换了个位置，照样编译失败。
4. **手改生成文件「修 bug」**：改完能过，下一次构建被覆盖，问题原样复现；正确做法是回头改宏或改 include 顺序。
5. **把生成文件提交进版本库并手动合并**：分支合并后生成物与源码不一致，出现只有某台机器能编过的怪现象；生成目录应被忽略。

### ⑤ 练习

**A 写**：新建一个 `UHealthComponent` 头文件，按正确顺序写 include 与 `GENERATED_BODY()`；编译后打开 `Intermediate/.../UHT/` 下的 `HealthComponent.generated.h` 和 `.gen.cpp`，找到 `StaticClass` 声明与 `Z_Construct_` 函数；再给类加一个 `UPROPERTY` 重新编译，对比两份文件的差异。

**提示**：① 用「挪 include → 构建 → 还原」复现一次报错，把第一条错误行抄进注释；② 在生成文件里分别搜 `StaticClass` 和 `Z_Construct_`，确认「声明补丁」和「注册代码」各在哪份产物里；③ 删掉一个 `UPROPERTY` 再构建，对比生成文件少了哪几行。

验收标准：能指出新增属性在生成文件里对应哪几行；把 `generated.h` 手动挪到最前面能复现编译错误并还原；能说清 `generated.h` 与 `gen.cpp` 各自参与哪个阶段。

**B 讲**：2 分钟口述「生成文件的两份产物 + include 顺序的因果」。必须讲清「生成代码依赖上方声明」这一条，并给出顺序颠倒时的报错特征。

验收标准：不看稿；能区分「声明补丁」与「注册代码」；能解释为什么 UHT 不替我们补 include。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-11"></a>
## U11 · Q11 UHT 的工作流程是怎样的？

> 来源：题库 UE 第 11 题 ｜ 速背卡：[Q11](./速背.md#ue-q11) ｜ 耗时 12 min ｜ 难度 ★★★

**一句话**：UHT 是编译前的一道独立工序，由 UBT 喂入模块头文件，解析宏、做类型检查、吐出生僻的生成文件，然后才轮到 C++ 编译器。

**学完能做到**
- 写代码：能判断一次改动会触发 UHT 还是只走普通编译。
- 讲出来：说清 UBT、UHT、编译器三者的分工，以及两类报错怎么区分。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| UHT 就是编译器的一步，报错格式和 C++ 一样 | 它是编译前的独立工序，报错在构建日志前半段，末尾常有 `UnrealHeaderTool failed for target ...` 的总结行 |
| 把 `UCLASS` 写进 `.cpp` 也能注册，只是风格不好 | UHT 只扫模块登记的头文件，`.cpp` 里的类被静默跳过，最终以缺 `StaticClass()` 在链接期炸出来 |
| 反射改动可以用 Live Coding 热更 | Live Coding 只 patch 已加载模块的函数体，不重建 `UClass` 和属性表；动宏、加类、改继承都要完整构建 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UHT 是构建流程里独立的一步，跑在 C++ 编译之前 | 报错格式与普通编译不同，混在一起看会把简单问题查成复杂问题 |
| 它只扫描模块登记的头文件，不解析 `.cpp` | 把 `UCLASS` 写进 `.cpp` 不会被处理，最终以缺符号的形式在链接期炸出来 |
| 它会做语法与类型检查：宏参数、成员类型是否在白名单、继承是否合法 | 「类型不支持」这类错在 UHT 阶段就被拦住，根本到不了编译器 |
| 产物是 `generated.h` 和 `gen.cpp`，交给后续阶段 | 改了头文件就必须重跑；只改函数体则不触发 |
| 文件列表由 UBT 收集，UHT 不自己找文件 | 新模块没在 `.Build.cs` 里登记，UHT 就看不到它的头文件 |

把三方关系理顺，很多现象就都解释得通了：UBT 是调度者，负责确定「这个模块有哪些头文件、依赖哪些模块、用什么编译参数」；UHT 是被调度的一步，输入是头文件列表，输出是生成文件；编译器最后接手，把「你写的声明 + 生成的声明」一起编。所以 UHT 报错通常出现在构建日志的前半段，而 C++ 报错在后半段。

UHT 只处理头文件，这是一条硬边界。原因很实际：反射要生成「在类外可见」的声明，只有头文件里的类定义才能被别的翻译单元看到；写在 `.cpp` 里的类天生是文件局部的，没有注册的意义。把 `UCLASS` 写进 `.cpp` 时，UHT 静默跳过，你觉得「没报错」，直到链接器说找不到 `StaticClass()`。

这套流程也解释了 Live Coding 的边界。Live Coding 做的是把新函数体 patch 进已加载的模块，不重建反射表；所以改函数实现能热更，动 `UPROPERTY`、加类、改继承就必须关掉编辑器走完整构建。所谓「改头文件要重开编辑器」，本质是 UHT 那一步没法在模块已加载的状态下安全重跑。

判断一次改动走哪条路的经验规则：动宏、动成员声明、动继承、加新类 → 全量构建；只动函数体内部 → Live Coding 可以；动 `.Build.cs` 的模块依赖 → 重新生成工程文件再构建。

**设计动机**：反射表必须与类布局严格同源，而 C++ 又是按翻译单元增量编译的；把「扫描宏 → 生成声明与注册代码」拆成编译前独立的一步，UBT 才能精确判断「头文件变了才重跑 UHT」。这样既保证表与布局一致，又不必每次全量重建；代价是构建多一道工序，而且这道工序的输入边界（只扫头文件、只扫模块登记文件）必须由开发者记住。

**版本差异**：UE4 时代热更走 Hot Reload，UE5 默认 Live Coding；两者都不能可靠地重建反射表，动 `UPROPERTY`、加类、改继承仍然要完整构建。

### ② 开发怎么用

| 需求 | 写法/操作 |
| --- | --- |
| 改了头文件 | 关闭编辑器，用 IDE 或 UBT 重新构建 |
| 只改函数体 | Live Coding 可以；一旦看到「无法热更」的提示就老实重启 |
| 定位 UHT 报错 | 在构建输出里找到 `UnrealHeaderTool failed for target ...`，往上看第一条 `Error` |
| 新增模块 | 在 `.Build.cs` 里声明依赖，否则被引用的类型 UHT 找不到 |
| 确认生成物 | 看 `Intermediate/Build/.../Inc/<Module>/UHT/` |
| 只想要生成文件不编译 | UBT 支持只跑生成步骤（具体开关随版本，用 `-help` 确认） |

```plaintext
UBT：收集模块头文件（Public/Private 下带反射宏的 .h）
  │
  ├─→ UHT：解析 UCLASS / UPROPERTY / UFUNCTION，做类型与语法检查
  │        └─→ 生成 X.generated.h + X.gen.cpp
  │
  └─→ C++ 编译器：编译「手写声明 + 生成声明」
           └─→ 链接：gen.cpp 里的静态注册代码进入二进制
```

出处：UHT 在构建管线中的位置见 Epic 文档《Reflection System in Unreal Engine》与 UBT 相关说明；日志文案与命令行开关随引擎版本变化，以本机 `-help` 输出为准。

**可观察验证**

```plaintext
# 完整构建一次，在日志里找 UHT 段落的位置
Build.bat MyGameEditor Win64 Development -WaitMutex
#   改头文件 → 日志前半段先出现 UHT 行，随后才是编译/链接
#   只改 .cpp → UHT 段落不出现，直接进入编译
```

- 把 `UPROPERTY` 的说明符拼错（例如 `BlueprintReadWirte`）：构建在 UHT 阶段失败，C++ 编译器根本没启动——这条错该归 UHT，不该去查代码模板。
- 把 `UCLASS` 挪进 `.cpp`：构建看似通过，链接期报 `StaticClass` 未定义——直接验证「UHT 不解析 `.cpp`」。
- 只改函数体再构建：日志里不再出现 UHT 段落，这就是增量边界。

### ③ 面试怎么讲

**30 秒口述稿**

> UHT 是 Unreal Header Tool，编译前先跑。UBT 把模块里的头文件列表喂给它，它扫描 `UCLASS`、`UPROPERTY`、`UFUNCTION` 这些标记，做语法和类型检查，然后生成 `.generated.h` 和 `.gen.cpp`，再由 C++ 编译器编译、链接。所以宏写错、类型不支持、`generated.h` 位置不对，报错都发生在 UHT 阶段，要和普通编译错误分开看。它只扫头文件，`.cpp` 里的类它不管。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| UHT 报错和 C++ 报错怎么区分？ | 看阶段：UHT 错出现在构建前半段，末尾常有 `UnrealHeaderTool failed for target ...` 的总结行；C++ 错带编译器自己的错误码和模板展开。 |
| 为什么改了头文件要重新生成？ | 反射表必须与类布局同源；不重跑 UHT，生成文件还是旧的，声明与表对不上。 |
| 为什么 `UCLASS` 不能写在 `.cpp`？ | UHT 不解析 `.cpp`，也不会为文件局部类生成注册代码；结果是没有 `StaticClass()`。 |
| Live Coding 为什么改不了反射？ | 它只替换已加载模块里的函数体，不重建 `UClass` 和属性表；新增/修改反射信息必须重新构建。 |
| UHT 能查出哪些错？ | 宏拼写、参数组合非法、成员类型不在白名单、继承不合法、`GENERATED_BODY` 位置不对。 |

### ④ 真实坑

1. **改头文件后用 Live Coding**：提示无法应用补丁或编辑器行为与代码不一致；反射改动必须重启编辑器全量编译，别在原地反复试。
2. **`UCLASS` 写在 `.cpp` 里**：UHT 静默跳过，编译看似正常，链接报 `StaticClass` 未定义；类必须放头文件。
3. **新模块没加依赖**：`.Build.cs` 缺 `PublicDependencyModuleNames`，UHT 报找不到类型，实际是模块边界问题，改 C++ 代码没用。
4. **宏参数拼错**：`BlueprintReadWirte` 这类拼写错误让整条说明符失效，UHT 报未知说明符，症状却像是「属性没生效」。
5. **交叉 include 生成文件**：A 头文件 include 了 B 的 `generated.h`，两边注册代码互相污染，出现重复定义；每个头文件只 include 自己的那份。

### ⑤ 练习

**A 写**：在工程里故意制造三个错误——把 `UCLASS` 挪进 `.cpp`、给 `UPROPERTY` 标一个 `std::vector<int32>` 成员、把 `generated.h` 放到第一个 include——分别构建，记录报错原文与它出现的阶段，然后逐个修好。

**提示**：① 三次实验一次只改一处，只记录「第一条错误 + 它出现在日志的哪一段」；② 判断阶段先看日志有没有 UHT 段落，再看有没有编译器自己的错误码；③ `.cpp` 那个实验要看到链接错误才算数，编译通过的提示不能下结论。

验收标准：三次报错都能明确归到 UHT 阶段或 C++/链接阶段；修复后构建通过；能复述每条报错的第一行关键信息。

**B 讲**：2 分钟口述「UBT、UHT、编译器三者的分工与交接物」。必须覆盖输入是什么、输出是什么、以及为什么 `.cpp` 不参与。

验收标准：不看稿；能画/说出流程图；能举一个「UHT 静默跳过、链接期才炸」的例子。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-12"></a>
## U12 · Q12 反射系统到底能做什么？

> 来源：题库 UE 第 12 题 ｜ 速背卡：[Q12](./速背.md#ue-q12) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：反射把编译期的类结构变成运行期可遍历的数据表，GC、序列化、蓝图、网络、编辑器全都是这张表的消费者。

**学完能做到**
- 写代码：在运行期遍历属性、按名字调函数，并说清开销。
- 讲出来：按「六大使用方」讲清能力边界，并能回答性能代价在哪。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 反射是编辑器/调试功能，打包后可以不要 | GC、序列化、网络复制在运行期都靠属性表，cooked 包里同样存在，只有 `WITH_EDITORONLY_DATA` 的成员被剥离 |
| 反射遍历慢，所以任何地方都别用 | 慢在按名字查表和无法内联；初始化、工具、编辑器场景照用，热路径才需要缓存结果或绕开 |
| 加了 `UPROPERTY` 就能拿到成员的完整语义 | 反射只描述类型、偏移和元数据，业务语义仍要自己维护；属性名还会被存档和网络当成键 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| GC 靠属性链遍历，找出所有 `UObject` 引用 | 漏标 `UPROPERTY` 的指针不会被当成根，指向对象可能被回收 |
| 序列化按属性表逐字段读写 | 存档、复制、资产保存都不用为每个类手写读写函数 |
| 蓝图通过 `UClass`/`UFunction` 读写属性、调用函数 | C++ 加一个 `UPROPERTY`，蓝图立刻多一个可连的引脚 |
| 网络同步比较属性表、按 `UFunction` 标记发 RPC | 属性名和类型参与协议，改名改类型都会影响兼容性 |
| 编辑器按属性元数据生成细节面板、类选择器 | `Category`、`meta`、`ClampMin` 直接决定 UI 长什么样 |
| 反射调用走 `FindFunction` + `ProcessEvent` | 功能换来了灵活性，代价是查表与无法内联 |

反射最核心的价值是「一次登记，多处复用」。同一个 `UPROPERTY`，GC 用它找引用，存档用它读写字节，网络用它做差异比较，编辑器用它画控件，蓝图用它生成引脚。如果不用反射，这五套逻辑都得为每个类手写一遍，而且极易漏。引擎选择用宏 + 代码生成来换这份复用。

代价有三块，面试要能主动说。第一是侵入：每个参与反射的类型都得加宏、放对 include、走 UHT，纯 C++ 类型天然被排除在外。第二是构建：多一道 UHT 工序，头文件改动会触发更大的重编译范围。第三是运行期：反射调用要按名字查找 `UFunction`，再走 `ProcessEvent`，无法内联、无法被编译器优化；属性遍历是链表式访问，缓存局部性也差。

能力边界同样重要。反射只覆盖带宏的 `UCLASS`/`USTRUCT`/`UENUM`，普通 C++ 类、`std::` 容器、模板实例都不在里面。所以「能不能用反射做 X」的判断标准是：X 涉及的对象是不是反射类型。是，就用；不是，就得在边界上做一次转换，比如把 `std::vector` 拷进 `TArray` 再交给反射。

还有一层容易忽略：编辑器专用数据。用 `WITH_EDITORONLY_DATA` 包住的属性在 cooked 构建里被剥离，反射表里也就没有它。这既是包体优化，也是「编辑器里好好的、打包后逻辑没了」的常见来源。

**设计动机**：C++ 编译完就把类型信息丢了，而运行期有五套机制都想读同一份描述；把类结构登记成表，是唯一能让 GC、序列化、网络、蓝图、编辑器共享数据的做法。所以反射优化的是复用而不是单次调用速度——这也解释了为什么代价恰好落在「查表、间接调用、链表遍历」上。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 遍历一个对象的全部属性 | `for (TFieldIterator<FProperty> It(Obj->GetClass()); It; ++It)` |
| 按名字拿属性再读写 | `FindPropertyByName` + `ContainerPtrToValuePtr` |
| 按名字调函数 | `FindFunction(FName)` 拿到 `UFunction*`，再 `ProcessEvent` |
| 取类默认对象 | `GetClass()->GetDefaultObject()`，模板版 `GetDefaultObject<T>()` |
| 判断类型关系 | `IsA<T>()`、`Cast<T>()`；反射层等价于沿 `Super` 链向上找 |
| 查函数是否存在 | `FindFunction` 返回空即不存在，适合做可选接口式调用 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与工程模块；`TFieldIterator`/`ProcessEvent` 需要 `Obj` 是有效的反射对象，不能脱离工程独立编译。

```cpp
// 遍历属性：只读名字与类型，工具/调试场景够用
void UMyDebugLibrary::DumpProperties(UObject* Obj)
{
    if (!Obj) return;
    for (TFieldIterator<FProperty> It(Obj->GetClass()); It; ++It)
    {
        FProperty* Prop = *It;
        UE_LOG(LogTemp, Log, TEXT("%s : %s"), *Prop->GetName(), *Prop->GetCPPType());
    }
}

// 按名字调用：参数缓冲区必须与 UFunction 的期望布局一致，无参函数可直接传 nullptr
void UMyDebugLibrary::CallByReflection(UObject* Obj, FName FuncName)
{
    UFunction* Func = Obj ? Obj->FindFunction(FuncName) : nullptr;
    if (!Func) return;
    Obj->ProcessEvent(Func, nullptr);
}
```

出处：`TFieldIterator`、`FProperty`、`ProcessEvent` 的语义见 Epic 文档《Reflection System in Unreal Engine》与 API 参考；`GetCPPType` 等调试用接口随版本可能调整，编译前以本机头文件为准。

**可观察验证**

```cpp
// 属性链：工具能遍历到名字和类型，GC 也沿同一条链找引用
int32 Count = 0;
for (TFieldIterator<FProperty> It(Obj->GetClass()); It; ++It) { ++Count; }
UE_LOG(LogTemp, Log, TEXT("%s: %d reflected properties"), *Obj->GetName(), Count);

// 反射调用 vs 直接调用的耗时（Fn 已缓存）
const double T0 = FPlatformTime::Seconds();
for (int32 i = 0; i < 100000; ++i) { Obj->ProcessEvent(Fn, nullptr); }
UE_LOG(LogTemp, Log, TEXT("ProcessEvent x100k: %.2f ms"), (FPlatformTime::Seconds() - T0) * 1000.0);
```

```plaintext
obj list class=AMyActor     # 反射能按类枚举实例
stat gc                     # GC 依据属性链遍历；漏标即丢引用
```

- `DumpProperties` 的输出里能看到基类属性：属性链沿继承累积，这正是「一条链服务多个消费者」的直接证据。
- 去掉 `ResetState` 的 `UFUNCTION()` 再 `FindFunction`：返回空、`ProcessEvent` 什么也不做——反射调用依赖函数链，失败是静默的。

### ③ 面试怎么讲

**30 秒口述稿**

> 反射让引擎在运行期知道类的结构：GC 靠属性链找引用，序列化靠属性表存盘和复制，蓝图靠它读写属性和调函数，网络靠它同步属性和发 RPC，编辑器靠它画细节面板，另外还有对象复制、调试和脚本绑定。等于把编译期信息变成运行期数据表。代价是宏侵入、多一道 UHT 构建，以及运行期查表和间接调用的开销。它只覆盖带宏的类型，普通 C++ 类和模板不在里面。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 纯 C++ 项目能不能不要反射？ | 能。但 GC、蓝图、网络、编辑器那套都得自己实现，等于放弃引擎生态；UE 里没有实际可行性。 |
| 反射的性能代价在哪？ | 按名字查 `UFunction`、`ProcessEvent` 无法内联、属性链表遍历缓存不友好；热路径要缓存结果或绕开反射。 |
| 反射能改私有成员吗？ | 能读到偏移并写入，但这是绕过封装的危险操作；正常业务应通过公开接口。 |
| 编辑器属性在打包后还在吗？ | `WITH_EDITORONLY_DATA` 包住的会被剥离，cooked 包里没有；运行期逻辑不能依赖它们。 |
| 为什么属性遍历顺序不保证？ | 属性链的顺序由生成器决定，业务逻辑不应依赖顺序，按名字查找更稳。 |

### ④ 真实坑

1. **每帧 `FindFunction`**：名字查找 + 反射调用，开销是直接调用的若干倍；把 `UFunction*` 缓存到成员里，或干脆改成直接调用。
2. **用反射遍历做逐帧热逻辑**：属性链遍历缓存不友好，还挡住内联优化；反射适合初始化、工具、编辑器，不适合 Tick。
3. **拿属性名当业务键**：存档字段、网络字段、配置键都用字符串名字，改名即断档；必须配版本迁移或 `CoreRedirects`。
4. **依赖编辑器专用属性**：`WITH_EDITORONLY_DATA` 的成员在打包后不存在，逻辑读到的永远是默认值；运行期逻辑要用普通 `UPROPERTY`。
5. **`ProcessEvent` 参数布局传错**：参数缓冲区大小或字段顺序与 `UFunction` 不一致，会写坏栈，崩溃点看起来毫不相关；能用直接调用就别手搓参数块。

### ⑤ 练习

**A 写**：给一个 Actor 加 `UFUNCTION(BlueprintCallable)` 的无参函数 `ResetState()`，在 C++ 里用 `FindFunction` + `ProcessEvent` 调用它并验证生效；再写一个函数遍历自身属性，打印名字与 C++ 类型，确认基类属性也被列出。

**提示**：① 先确认 `FindFunction` 拿到非空 `UFunction*`，再调 `ProcessEvent`，否则失败没有任何提示；② 计时循环里只放调用，日志会把反射开销盖掉；③ 缓存 `UFunction*` 与每次 `FindFunction` 各测一轮，用差值说明开销来源。

验收标准：反射调用确实执行了函数体（日志可证）；属性列表包含继承来的成员；能估算「缓存 `UFunction*` 前后」的调用次数差异并说明原因。

**B 讲**：2 分钟口述「反射的六大使用方 + 三个代价」。每个使用方一句具体结论，不能只说名词。

验收标准：不看稿；六个使用方能各举一个引擎里的具体场景；能回答「为什么 Tick 里不该用反射调用」。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-13"></a>
## U13 · Q13 GENERATED_BODY 和 GENERATED_UCLASS_BODY 有什么区别？

> 来源：题库 UE 第 13 题 ｜ 速背卡：[Q13](./速背.md#ue-q13) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：新版宏只补反射必需的最小内容，构造函数和访问权限由你写；老版宏会替你塞进 `public:` 和带 `FObjectInitializer` 的构造函数声明。

**学完能做到**
- 写代码：把一段 `GENERATED_UCLASS_BODY` 老代码迁到 `GENERATED_BODY` 并保持可编译。
- 讲出来：说清两者展开内容的差异，以及为什么新写法更安全。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 两个宏只是新旧名字，展开内容一样 | 老宏会插入 `public:` 和带 `FObjectInitializer` 的构造函数声明，新宏不插，权限和签名都交给你写 |
| 换成 `GENERATED_BODY()` 后构造函数不用管 | 构造声明要自己写；漏了就是编译器生成的默认构造，构造里创建的子对象全为空 |
| 老宏里的构造函数声明是作者写的 | 声明由宏给出，作者只实现了它；迁移时必须自己把声明补回来 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `GENERATED_BODY()` 只展开反射必需内容，构造函数、访问修饰符由你声明 | 类看起来接近普通 C++，读代码不用猜哪些声明是被塞进来的 |
| `GENERATED_UCLASS_BODY()` 会插入 `public:` 和带 `FObjectInitializer` 的构造函数声明 | 实现必须严格匹配它给的签名，否则链接期报找不到定义 |
| 两者都必须写在类体最前面 | 它们要声明 `Super`、`StaticClass()` 等后续代码依赖的符号 |
| 同一个类只能写一个 | 两个都写会重复声明，编译期直接失败 |
| 新代码统一用 `GENERATED_BODY()` | 老代码见到 `GENERATED_UCLASS_BODY` 只需知道「构造声明不是作者写的」 |

`FObjectInitializer` 是老宏存在的理由。它允许在构造期间替换子对象的类、给子对象传参，比如「这个组件的默认类换成我的子类」。老宏自动把带 `FObjectInitializer` 的构造函数声明出来，等于默认每个类都支持这套玩法；新宏把选择权交回给你：需要就自己声明这个签名，不需要就用普通默认构造。

新写法更安全的地方在于「显式」。自动插入的 `public:` 会改变你后面成员的实际访问级别，读者看到的 `private:` 可能被宏重置；自动声明的构造函数一旦和你手写的签名冲突，报错信息会非常绕。`GENERATED_BODY()` 把这两件事都还给作者，代价是你必须记得自己声明构造函数。

迁移的实际动作只有三步：换宏、补构造函数声明、补实现。要留意签名——老代码里的实现是 `AMyActor::AMyActor(const FObjectInitializer& ObjectInitializer)`，换成新宏后如果还保留这个签名，就必须自己声明它；如果改成无参构造，实现也要同步改，并把 `Super(ObjectInitializer)` 换成 `Super()`。读老 UE4 代码时有个实用判断：看到 `GENERATED_UCLASS_BODY()`，先去找构造函数实现确认参数，别以为它有默认构造。

**设计动机**：老宏替作者做两个决定：默认 `public:`、默认支持 `FObjectInitializer`，换来少写两行，代价是访问级别和构造签名被隐式改写；新宏把这些交还给作者，让类声明「看到什么就是什么」，反射必需的最小内容仍由宏展开。这样可读性和安全性都提高，代价是作者必须记得声明构造函数。

**版本差异**：`GENERATED_UCLASS_BODY` 是 UE4 早期写法，UE5 新代码统一 `GENERATED_BODY()`；老宏在 UE5 里仍为兼容旧代码保留，但已不推荐使用。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 新写一个类 | `GENERATED_BODY()`，需要构造函数就自己声明 |
| 需要替换子对象类或传参 | 自己声明 `AMyActor(const FObjectInitializer& ObjectInitializer)` |
| 迁移老类 | 宏换成 `GENERATED_BODY()`，补声明与实现，检查 `Super(...)` 的实参 |
| 不想暴露构造给外部 | 声明放 `protected`/`private`，新宏不会替你改成 `public` |

**示例说明**：以下两段是同一逻辑的新旧写法对照，均为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
// 老写法：宏自带 public: 和构造函数声明
UCLASS()
class MYGAME_API ALegacyDoor : public AActor
{
    GENERATED_UCLASS_BODY()      // 展开后已有 public: 与 ALegacyDoor(const FObjectInitializer&)
public:
    UPROPERTY(EditAnywhere, Category = "Door")
    bool bLocked = false;
};

ALegacyDoor::ALegacyDoor(const FObjectInitializer& ObjectInitializer)
    : Super(ObjectInitializer) {}
```

```cpp
// 新写法：构造与访问权限全部自己写
UCLASS()
class MYGAME_API ADoor : public AActor
{
    GENERATED_BODY()
public:
    ADoor();                     // 自己声明，签名自己定
    UPROPERTY(EditAnywhere, Category = "Door")
    bool bLocked = false;
};

ADoor::ADoor() {}
```

出处：两种宏的展开差异见 Epic 文档《Reflection System in Unreal Engine》与 `ObjectMacros.h` 相关说明；具体展开内容随引擎版本变化，以本机生成文件为准。

**可观察验证**

```cpp
// 新写法：构造函数自己声明、自己实现，打点确认调用
ADoor::ADoor()
{
    UE_LOG(LogTemp, Log, TEXT("ADoor ctor: %s, CDO=%d"),
        *GetName(), HasAnyFlags(RF_ClassDefaultObject) ? 1 : 0);
}
```

```plaintext
obj list class=ADoor     # 确认运行期实例已创建
```

- 老写法里把构造函数实现删掉再构建：链接期报找不到定义——声明确实是宏给的，不是作者写的。
- 新写法里把构造声明注释掉再构建：编译或链接直接失败；补回声明后通过——显式声明是必须付的成本。
- 迁移前后各在蓝图子类里改一次 `bLocked`：面板行为不变，说明换宏不影响反射登记。

### ③ 面试怎么讲

**30 秒口述稿**

> `GENERATED_BODY` 是 UE4 之后的写法，构造函数、访问权限都由你自己声明，更接近普通 C++。`GENERATED_UCLASS_BODY` 是老写法，会自动插入 `public:` 构造函数声明和序列化相关内容，所以实现必须按它给的 `FObjectInitializer` 签名写，容易和手写构造函数冲突。新代码统一用 `GENERATED_BODY`；看到老代码用 `UCLASS_BODY`，知道构造函数声明是宏给的就行。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 老代码混用会怎样？ | 同一个类写两个生成宏会重复声明，编译直接失败；不同类各用各的宏则能共存，只是风格不统一。 |
| 为什么新写法更安全？ | 访问权限和构造声明都是显式的，不会被宏悄悄改写，也不会和手写签名打架。 |
| `FObjectInitializer` 还需要吗？ | 需要时照用，比如替换子对象类、给子对象传参；只是不再强制每个类都有。 |
| 换宏后必须做什么？ | 补构造函数声明与实现，检查 `Super(...)` 的实参，然后全量重新构建。 |

### ④ 真实坑

1. **换宏后忘了声明构造函数**：编译器生成默认构造，原本在构造里创建的子对象全为空，运行期空指针崩溃；换宏必须同步补构造。
2. **保留老签名却没写实现**：声明是 `(const FObjectInitializer&)`，实现还是无参版本，链接报找不到定义；声明与实现必须成对改。
3. **把 `GENERATED_BODY()` 写在成员之后**：它要声明 `Super` 等符号供后续代码用，位置错了直接编译失败；永远放类体第一行。
4. **复制老类只改类名**：`#include "OldName.generated.h"` 没跟着改，构建报找不到生成文件；改名要三处同步。
5. **以为宏会保留旧的 `public:` 段**：依赖宏给的访问级别写成员，换宏后成员落到 `private`，子类和蓝图都访问不到；访问修饰符自己写清楚。

### ⑤ 练习

**A 写**：准备一个最小 `ALegacyDoor`（用 `GENERATED_UCLASS_BODY`，构造函数带 `FObjectInitializer`），把它迁移成 `GENERATED_BODY` 版本：自己声明构造函数、改实现、保留 `UPROPERTY`；再建一个蓝图子类确认仍能正常创建和编辑属性。

**提示**：① 迁移按「换宏 → 补声明 → 补实现 → 全量构建」四步，不要只换宏就编译；② 老实现里的 `Super(ObjectInitializer)` 换成无参构造时要同步改成 `Super()`，声明与实现成对改；③ 最后用蓝图子类验证属性仍可编辑，确认反射登记没被改坏。

验收标准：迁移后编译、链接均无错误；蓝图子类能正常生成且 `bLocked` 可编辑；能指出迁移中改动的三处（宏、声明、实现）。

**B 讲**：2 分钟口述「两个宏的展开差异 + 迁移步骤 + 为什么新写法更安全」。必须提到 `FObjectInitializer` 的用途和访问权限被自动改写的问题。

验收标准：不看稿；能说出老宏自动插入的两样东西；能给出迁移的三步动作。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-14"></a>
## U14 · Q14 反射系统有哪些限制？

> 来源：题库 UE 第 14 题 ｜ 速背卡：[Q14](./速背.md#ue-q14) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：反射只认一份类型白名单，并且要求单继承、可静态命名、无模板——越界的类型 UHT 直接拒绝，不会留到运行期。

**学完能做到**
- 写代码：用 `USTRUCT`、`UENUM`、`UINTERFACE` 绕过三类典型限制。
- 讲出来：说清白名单、模板、单继承、成员限制四条边界及其原因。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 类型不支持也能先编译过，运行期再处理 | UHT 阶段直接报错，越界类型根本到不了编译器，更到不了运行期 |
| 这些限制是引擎没做，打个标记就能放开 | 限制来自 GC 与序列化对「这段字节怎么遍历、怎么拷贝」的前提，没有绕过标记这回事 |
| 接口可以像 C++ 多重继承一样带状态 | `UINTERFACE` 只允许函数，成员变量必须放在实现类的 `UPROPERTY` 里 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 成员类型走白名单：基本类型、`FString`/`FName`/`FText`、数学类型、`UObject` 指针、`USTRUCT`、`TArray`/`TMap`/`TSet`、`UENUM` | 白名单外的类型（`std::vector`、`TFunction`、裸指针）不能出现在 `UPROPERTY` 里 |
| 模板类不能直接加 `UCLASS`/`USTRUCT` | `template<typename T> class TFoo` 无法反射；只能在属性里写具体实例化 |
| 继承只允许一个 `UObject` 基类 + 若干 `UINTERFACE` | 想复用多份能力就得走接口，不能像 C++ 那样多重继承实现 |
| 接口不能有成员变量，`UPROPERTY` 不能标 `static` | 状态要放在实现类里；类级配置要用 `Config` 或设置类承载 |
| 蓝图可见的 `UENUM` 基础类型必须是 `uint8` | 用 `int32`/`uint32` 做底层类型的枚举在蓝图里不可用 |
| 越界在 UHT 阶段就报错 | 不存在「先编译过、运行期再发现」的侥幸 |

模板被排除的原因值得讲清。UHT 做的是文本级扫描，它需要为每个反射类型生成一份**唯一、可命名**的注册代码和静态布局描述；模板实例化在 UHT 阶段还没有稳定符号，一个 `TFoo<int>` 和 `TFoo<float>` 也无法共用同一份 `UClass`。所以引擎的选择是：容器类型（`TArray`/`TMap`/`TSet`）由 UHT 特判支持，用户自定义模板一律不反射。

接口的设计也是被限制推出来的。C++ 多重继承会带来菱形和二义性，而 `UObject` 有统一的内存布局、GC 遍历和序列化要求，允许多个 `UObject` 基类会让这些机制失控。UE 的方案是「一个 `UObject` 基类 + 多个纯接口」：`UINTERFACE` 类负责反射登记，`I` 前缀类负责纯虚函数，实现类同时继承 `AActor` 和 `IInteractable`。这样既有接口复用，又保住了单继承。

白名单的本质是「GC 和序列化必须知道怎么处理这段字节」。GC 要能沿指针找到对象，序列化要知道字段边界与构造/析构语义；`std::vector` 的内部布局不受引擎控制，`TFunction` 无法稳定序列化，裸函数指针更是无法跨平台保存。所以限制不是保守，而是这两套机制的前提。而且限制是**编译期**的：类型不在白名单，UHT 直接报错，不存在「打个标记绕过」；正确姿势是换类型或加一层适配。

**设计动机**：GC 必须能沿每个反射引用找到对象，序列化必须知道每个字段的边界与构造/析构语义；只有类型白名单、单继承、无模板这些前提成立，引擎才能按偏移安全地遍历和拷贝内存。所以 UHT 宁可在编译期把越界类型整类拒绝，也不把问题留到运行期——一条限制被突破，整条自动处理链就断了。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 想反射一个模板容器 | 在 `UPROPERTY` 里写具体实例：`TArray<FDamageInfo>`、`TMap<FName, int32>` |
| 想「多重继承」 | 抽 `UINTERFACE`，实现类继承 `AActor` + `IInteractable` |
| 想要类级静态配置 | `UCLASS(config=Game)` + `UPROPERTY(Config)`，或继承 `UDeveloperSettings` |
| `std::vector` / `std::map` | 换成 `TArray` / `TMap` |
| 想在结构体里存回调 | 不能用 `TFunction` 成员；改成 `UFUNCTION` 或 delegate 属性 |
| 枚举要暴露给蓝图 | `enum class EFoo : uint8`，配 `UENUM(BlueprintType)` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与 UHT 生成的 `Interactable.generated.h`、`DamageInfo.generated.h`；`MYGAME_API` 按项目模块名替换。

```cpp
// 接口：U 前缀类负责反射登记，I 前缀类负责纯虚函数
UINTERFACE(MinimalAPI, Blueprintable)
class UInteractable : public UInterface { GENERATED_BODY() };

class MYGAME_API IInteractable
{
    GENERATED_BODY()
public:
    // 接口里只放函数；状态必须放在实现类的成员里
    UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Interact")
    void Interact(AActor* InstigatorActor);
};

// 结构体：只承载数据，不能有虚函数、不能继承
USTRUCT(BlueprintType)
struct FDamageInfo
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Damage")
    float Amount = 0.f;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Damage")
    TObjectPtr<AActor> Causer = nullptr;
};
```

出处：支持类型与接口写法见 Epic 文档《Reflection System in Unreal Engine》；`UENUM` 的 `uint8` 约束与蓝图支持范围以目标引擎版本的蓝图编译器为准。

**可观察验证**

```cpp
// 白名单内：容器、USTRUCT、TObjectPtr 都可以登记
UPROPERTY(EditAnywhere, Category = "Damage")
TArray<FDamageInfo> RecentHits;

// 白名单外：取消注释后 UHT 直接报错，用来验证限制是编译期的
// UPROPERTY() std::vector<int32> BadTypes;
```

```plaintext
# 构建日志前半段搜 UHT 的类型报错；换回 TArray 后同一构建通过
Build.bat MyGameEditor Win64 Development -WaitMutex
```

- 在 `UPROPERTY` 里写 `std::vector<int32>`：构建在 UHT 阶段失败、日志前半段报类型不识别；换成 `TArray<int32>` 立即通过——白名单是编译期硬约束。
- 给 `USTRUCT` 加虚函数：UHT 直接拒绝；要运行时多态只能改用 `UObject` + `UINTERFACE`。
- 把枚举底层类型从 `uint8` 改成 `int32`：C++ 能编过，但蓝图侧枚举节点不可用——两条编译链的约束不同。

### ③ 面试怎么讲

**30 秒口述稿**

> 反射只支持能识别的类型：基本类型、`FString`、`FName`、`FVector` 这些数学类型、`UObject` 指针、`USTRUCT`、`TArray`、`TMap`、`TSet` 和 `UENUM`。模板类不能直接 `UCLASS` 或 `USTRUCT`；继承只能一个 `UObject` 基类加若干 `UINTERFACE`，接口里不能有成员变量；`UPROPERTY` 不能标 `static`，也不支持引用成员和 `std::` 容器。类型不支持时 UHT 直接报错，编译期就拦住。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么模板不能反射？ | UHT 需要每个反射类型有唯一、可命名的静态布局与注册入口，模板实例在 UHT 阶段没有稳定符号；容器类型由引擎特判支持。 |
| 接口为什么用 `UINTERFACE`？ | 反射只允许单 `UObject` 继承，接口用「U 类登记 + I 类纯虚」绕过菱形，同时让蓝图和 C++ 都能实现。 |
| 为什么 `UPROPERTY` 不能 static？ | 反射属性是「对象上的偏移」，静态成员不属于任何实例，GC 和序列化都无处安放；类级配置用 `Config`。 |
| 枚举为什么要 `uint8`？ | 蓝图虚拟机对枚举按单字节处理，其他底层类型无法在蓝图里正确传递。 |
| 类型不支持能绕过吗？ | 不能，UHT 直接报错；正确做法是换成白名单类型或加适配层。 |

### ④ 真实坑

1. **`UPROPERTY` 里写 `std::vector`**：UHT 报无法识别的类型，整份头文件构建失败；换成 `TArray`。
2. **接口里放成员变量**：`UINTERFACE` 只允许函数，声明成员会直接报错；状态放到实现类的 `UPROPERTY` 里。
3. **给 `USTRUCT` 加虚函数或继承**：结构体只承载数据，虚表和继承都不支持；需要多态就改用 `UObject` + 接口。
4. **蓝图枚举用了 `int32` 底层类型**：C++ 能编过，蓝图里看不到或报错；统一 `uint8`。
5. **`UPROPERTY` 标 `static`**：UHT 直接拒绝；类级配置改用 `UPROPERTY(Config)` 或 `UDeveloperSettings`。

### ⑤ 练习

**A 写**：定义 `FDamageInfo`（含 `float` 与 `TObjectPtr<AActor>` 两个 `UPROPERTY`）、`EFoo : uint8` 枚举，以及一个带 `BlueprintNativeEvent` 函数的 `UINTERFACE`；让一个 Actor 实现该接口并在蓝图里重写。

**提示**：① 每条限制只造一个最小反例，先看 UHT 报错的第一行，再换正确写法；② 接口实验把状态写到实现类的 `UPROPERTY`，验证「接口只放函数」不是风格建议；③ 枚举实验要同时看 C++ 编译结果和蓝图节点，两边结论可能不一致。

验收标准：编译无 UHT 报错；蓝图里能看到 `FDamageInfo` 字段与枚举；接口函数在蓝图事件图表里可重写且运行期被调到。

**B 讲**：2 分钟口述「反射的四类限制与各自的绕法」。必须覆盖类型白名单、模板、单继承/接口、成员限制，并解释每条限制背后的机制原因。

验收标准：不看稿；每条限制能给出一个替代写法；能回答「为什么模板不能反射」而不是只背结论。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ③：引用类型与智能指针](#ch8)


<a id="ch8"></a>
# 第 8 章 · UE ③：引用类型与智能指针

> 对应速背 UE 主题 03（Q15–Q21），完整答题卡见 [速背 UE 03](./速背.md#ue-t03)。
> 上一篇：[UE ②：反射系统](#ch7) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-15"></a>
## U15 · Q15 裸指针和 TObjectPtr 有什么区别，该怎么选？

> 来源：题库 UE 第 15 题 ｜ 速背卡：[Q15](./速背.md#ue-q15) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：运行时两者都只是地址，`TObjectPtr` 的价值全在编辑器和反射那一层；至于对象会不会被 GC 收走，只取决于有没有 `UPROPERTY`。

**学完能做到**
- 写代码：把 UObject 成员指针改成 `UPROPERTY() TObjectPtr<T>`，同时保留函数参数和局部变量的裸指针。
- 讲出来：说清“运行时几乎一样、编辑器多一层能力、UPROPERTY 才是保命符”三件事，并解释为什么 Shipping 下不必担心变慢。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 用了 `TObjectPtr` 对象就不会被 GC 回收 | 引用边来自 `UPROPERTY`，不是指针类型；漏写 `UPROPERTY` 的 `TObjectPtr` 一样会被回收 |
| `TObjectPtr` 会有运行时开销，成员应该尽量用裸指针 | Shipping 构建里通常退化为裸指针大小，成本在反射与 GC 遍历；只有编辑器/开发构建才带句柄与访问追踪 |
| `TObjectPtr` 可以当弱引用用 | 它是强引用语义，配了 `UPROPERTY` 就会保活对象；要“不保活”得用 `TWeakObjectPtr` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `TObjectPtr<T>` 是模板包装，编辑器/开发构建里可携带对象句柄，Shipping 构建通常退化为裸指针大小（视引擎版本与构建配置） | 不要因为“怕指针变慢”就拒绝在成员上用它，真正的成本在反射与 GC 遍历，不在指针本身 |
| GC 只认反射出来的引用边，也就是 `UPROPERTY` | 裸指针加 `UPROPERTY` 一样能保命；`TObjectPtr` 不加 `UPROPERTY` 一样会被回收 |
| 编辑器构建下支持访问追踪与延迟解析，对象被重定向或尚未加载时能拿到可用对象 | 编辑器工具、cook 依赖分析更准；Shipping 里这层能力不存在，逻辑不能依赖它 |
| `TObjectPtr` 仍是强引用语义，不是“可选引用” | 想表达“可能没有、有了也不该保活”，应该用 `TWeakObjectPtr` |
| `TObjectPtr` 不能绑定到 `UObject*&` 这种输出参数 | 需要回填的 API 要先把裸指针取出来，再写回成员 |

`TObjectPtr` 是 UE5 才成为默认风格的。它解决的不是“指针不安全”，而是“编辑器需要知道这个指针被谁访问过、指的对象现在解析到哪”。在支持对象句柄的构建里，它可以把“资源还没加载完”这件事延后处理；在普通 Shipping 构建里，这层包装往往被编译掉，所以运行时开销和裸指针基本相同。关键点在于：**类型本身不产生引用边**。GC 收集时只看反射数据里记录的强引用属性，`UPROPERTY()` 才是登记入口。很多“我用了 TObjectPtr 所以对象不会死”的错觉，都是漏了 `UPROPERTY` 或者把它写在了不被反射的普通 `struct` 里。

所以选择规则可以很机械：只要这个指针是 `UCLASS`/`USTRUCT` 的成员，并且需要跨帧存活，就写 `UPROPERTY() TObjectPtr<T>`；只要是函数参数、返回值、循环里的临时结果，就用裸指针。前者是为了让引擎看见，后者是为了让读代码的人少绕一层。

**设计动机**：编辑器需要知道“这个指针被谁访问过、现在解析到哪个对象”，才能做重定向、惰性加载和 cook 依赖分析；但运行时不想为每个指针付一层间接成本。`TObjectPtr` 的设计就是把这两件事拆开：编辑器/开发构建里它是带句柄的包装，Shipping 里退化成裸指针。也正因为它只是包装，引用语义没有被改变——保活依然是 `UPROPERTY` 的职责，指针类型只负责“让引擎看见”。

**版本差异**：`TObjectPtr` 是 UE5 才引入并成为 UObject 成员默认写法的；UE4 项目里这类成员就是裸指针加 `UPROPERTY`，迁移时两种写法可以并存，但不能把 `TObjectPtr` 绑定到 `T*&` 这类输出参数上。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| UObject 成员，需要被 GC 保活 | `UPROPERTY(VisibleAnywhere) TObjectPtr<UStaticMeshComponent> Mesh;` |
| 容器成员 | `UPROPERTY() TArray<TObjectPtr<AActor>> Targets;` |
| 函数参数 / 返回值 | `void SetTarget(AActor* Target);` |
| 局部变量、循环临时结果 | `AActor* Best = nullptr;` |
| 可选、不该保活的目标 | `UPROPERTY() TWeakObjectPtr<AActor> Target;` |

**示例说明**：以下为 `AMyTurret.h` 的模块内片段，依赖 `CoreMinimal.h`、`USceneComponent`/`TArray` 相关头文件与 UHT 生成的 `MyTurret.generated.h`，不能脱离工程独立编译。

```cpp
// AMyTurret.h
UCLASS()
class AMyTurret : public AActor
{
    GENERATED_BODY()

public:
    // 成员：反射可见 → 进 GC 图，编辑器也能追踪访问
    UPROPERTY(VisibleAnywhere, Category = "Turret")
    TObjectPtr<USceneComponent> TurretRoot;
    // 容器成员同理，元素也必须反射可见，否则里面的对象照样会被回收
    UPROPERTY()
    TArray<TObjectPtr<AActor>> SeenActors;
    // 参数用裸指针：生命周期只在调用期，不需要额外语义
    void AimAt(AActor* Target);

    void Tick(float DeltaSeconds)
    {
        AActor* Best = nullptr;                       // 局部变量：栈不是 GC 根，无需包装
        for (const TObjectPtr<AActor>& It : SeenActors)
        {
            if (!IsValid(It)) { continue; }           // 包装类型一样要判有效
            if (!Best || It->GetDistanceTo(this) < Best->GetDistanceTo(this))
            {
                Best = It;                            // 隐式转成裸指针
            }
        }
        AimAt(Best);
    }
};
```

**可观察验证**

```cpp
// 判活与指针类型无关：换成 TObjectPtr 不会自动变安全
UPROPERTY() TObjectPtr<AActor> TargetPtr;
UE_LOG(LogTemp, Log, TEXT("isValid=%d"), IsValid(TargetPtr));

// 容器元素也同理：遍历时逐个判有效
for (const TObjectPtr<AActor>& It : SeenActors) { if (!IsValid(It)) { continue; } }
```

```plaintext
obj list class=AMyTurret        # 确认 Actor 是否还存活
obj refs name=<TurretName>      # 查看谁持有它（编辑器/开发构建）
stat gc                         # 触发一次 GC 前后对比
```

- 删掉某个成员的 `UPROPERTY` 后在 PIE 里跑一会儿，控制台执行 `obj gc`，再 `obj list class=...`：对象被回收，说明保活靠的是 `UPROPERTY` 而不是 `TObjectPtr`。
- 在编辑器里对成员做重定向或断点观察访问追踪；同样代码打进 Shipping 包，这层能力观察不到——这就是“编辑器能力、运行时退化”的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 运行时两者都是地址，区别在编辑器那一层。`TObjectPtr` 在编辑器构建里会记录访问、支持延迟解析，对象被重定向或者还没加载时也能拿到可用指针；到了 Shipping 通常退化成裸指针大小，所以它本身不慢。真正决定对象会不会被 GC 的是 `UPROPERTY`，不是指针类型——没有 `UPROPERTY` 就没有引用边，`TObjectPtr` 也一样被回收。我的规则很固定：UObject 成员用 `UPROPERTY` 加 `TObjectPtr`，函数参数和局部变量用裸指针，省开销也少噪音。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Shipping 里 `TObjectPtr` 还是包装类型吗？ | 视构建配置和引擎版本，通常退化为裸指针大小；编辑器/开发构建才有句柄和访问追踪。不能靠它做运行时逻辑。 |
| 为什么不加 `UPROPERTY` 就没用？ | GC 只遍历反射出的强引用属性。指针类型只是 C++ 语法，`UPROPERTY` 才是把成员登记进引用图的声明。 |
| 局部变量为什么不也用 `TObjectPtr`？ | 栈不是 GC 根，包装没有任何收益，还会让读代码的人以为有额外语义。 |
| `TObjectPtr` 能当弱引用吗？ | 不能。它和裸指针一样是强引用语义，配了 `UPROPERTY` 就会保活对象；要弱引用用 `TWeakObjectPtr`。 |
| 老项目全是裸指针，要全换吗？ | 不必。新增和正在改的 UObject 成员逐步换，收益主要在编辑器和延迟加载；一次性重构风险大于收益。 |
| 普通 `struct` 里能放吗？ | 需要是 `USTRUCT` 且成员标 `UPROPERTY` 才会被反射；否则和普通裸指针一样不被 GC 看见。 |

### ④ 真实坑

1. **成员漏写 `UPROPERTY`**：编译完全通过，运行时对象被 GC 回收，指针变成悬垂。这是“用了 `TObjectPtr` 就安全”的最大反例，正确做法是成员一律 `UPROPERTY` + `TObjectPtr` 成对出现。
2. **普通 `struct` 里塞 `TObjectPtr`**：没有 `USTRUCT`/`UPROPERTY` 就没有反射信息，容器里的对象不会被标记，表现为“偶发丢失”。要么把结构体反射化，要么改用 `TWeakObjectPtr` 并在取用时判有效。
3. **用 `TObjectPtr` 表达可选引用**：本来是“有就用、没有就算”的缓存，写成了强引用成员，对象因为这条边永远活着，看着像内存泄漏。该用 `TWeakObjectPtr`。
4. **把 `TObjectPtr` 传给 `T*&` 输出参数**：编译失败，因为不能把包装对象绑定到裸指针的引用上。正确做法是先声明局部裸指针传进去，成功后再赋回成员。
5. **在异步任务或 lambda 里跨帧捕获 `TObjectPtr`**：包装不保证对象有效，任务真正执行时对象可能已被销毁。取用前必须 `IsValid`，或者干脆捕获弱引用。

### ⑤ 练习

**A 写**：把一个小 Actor 的三个成员改成 `UPROPERTY() TObjectPtr<T>`（其中一个是 `TArray<TObjectPtr<AActor>>`），再加一个 `Tick` 里的筛选函数，选出距离最近且有效的目标并用裸指针传给 `AimAt`。总行数控制在 25 行内。

**提示**：① 一次只改一个成员，编译后打开编辑器确认细节面板仍正常显示；② 把成员临时换回裸指针再编译，UHT 一样能过，但 GC 不会保活，借此把“类型没错、声明错了”对齐；③ 故意写一次把 `TObjectPtr` 传给 `T*&` 的调用，抄下报错信息。

验收标准：UHT 编译通过且无 `UPROPERTY` 相关警告；故意删掉一个 `UPROPERTY` 后能说清对象会在什么时机被回收；能解释这段代码在编辑器和 Shipping 下行为差异在哪。

**B 讲**：2 分钟口述“裸指针和 `TObjectPtr` 怎么选”。必须给出成员、参数、局部三类写法，并主动举一个漏写 `UPROPERTY` 的反例。

验收标准：不看稿讲完；三类写法各有一句明确结论；反例能说清“类型没错、声明错了”。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-16"></a>
## U16 · Q16 TWeakObjectPtr 的语义和适用场景？

> 来源：题库 UE 第 16 题 ｜ 速背卡：[Q16](./速背.md#ue-q16) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：`TWeakObjectPtr` 是“我记得这个对象是谁，但不拥有它”，对象一销毁就自动失效，代价是每次取用都要回去问一次引擎。

**学完能做到**
- 写代码：用 `TWeakObjectPtr` 缓存一个可能被销毁的目标，并在每帧取用时重新判有效。
- 讲出来：说清它为什么不阻止 GC、失效是怎么被检测到的、以及为什么不能跨线程用。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 标了 `UPROPERTY` 的 `TWeakObjectPtr` 会保活对象 | `UPROPERTY` 只让它进入反射/序列化流程；弱引用没有强引用边，对象照样被回收 |
| 弱指针失效后会自动变空，所以随时可以当普通指针用 | 它只保证取用时能判有效；判完到真正使用之间对象仍可能被销毁 |
| 弱指针可以跨线程读 | 它要读全局对象数组和 GC 状态，没有原子保护，只能在游戏线程访问 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 内部记录对象索引和序列号，不持有强引用边 | 不阻止 GC，对象销毁后 `IsValid()` 返回 false，不会变成悬垂访问 |
| 失效检测靠“槽位 + 序列号”比对，`IsValid`/`Get` 都要查当前对象数组状态 | 它不是零成本判空，热路径上不要每帧调用几十次 |
| 不产生 GC 强引用，因此可以用来打断 UObject 之间的强引用链 | 父子、目标、回调这类“回指”关系优先考虑弱引用 |
| 非线程安全 | 只能在游戏线程访问；跨线程使用会读到不一致的 GC 状态 |
| 不是必须标 `UPROPERTY`，但标了会进入反射/序列化流程 | 想给蓝图或编辑器暴露就标，纯内部缓存可以不标 |

为什么需要它：游戏里大量引用是“观察”而不是“拥有”。UI 指向当前角色、AI 记着当前目标、技能系统缓存上一次命中的对象——这些对象随时可能被销毁，而持有方并不想因为自己还活着就让对方活着。裸指针做不到自动失效，`TObjectPtr` 又会保活，`TWeakObjectPtr` 正好补这个空档。它和共享指针体系里的 `TWeakPtr` 解决的是同一类问题，但作用域完全不同：`TWeakObjectPtr` 观察的是 GC 管理的 UObject，失效由 GC 状态决定；`TWeakPtr` 观察的是引用计数对象，失效由计数归零决定。两者不能互换，也不能拿一个去管另一个世界的对象。

边界要记牢：弱指针只保证“取用时能判断有效性”，不保证“判完之后对象还在”。在同一帧里，`IsValid` 和真正使用之间如果调用了可能销毁目标的代码，仍然会出问题。正确姿势是取一次、用一个局部裸指针、把使用区间压到最短。

**设计动机**：游戏里大量引用是“观察”而不是“拥有”：UI 指向当前角色、AI 记着当前目标、技能缓存上次命中的对象。这些关系如果用强指针，会让对象因为“还有人指着我”而无法回收；用裸指针又没有自动失效能力。`TWeakObjectPtr` 就是给这类关系准备的：不产生 GC 强引用边，靠对象索引与序列号判断对方还在不在，把“要不要保活”和“怎么记住它”拆成两件独立的事。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 缓存可能被销毁的目标 | `UPROPERTY() TWeakObjectPtr<AActor> CurrentTarget;` |
| 安全取用 | `if (AActor* T = CurrentTarget.Get()) { ... }` |
| 只判不取 | `if (CurrentTarget.IsValid()) { ... }` |
| 清空 | `CurrentTarget.Reset();` |
| 定时器/委托里弱捕获 | 捕获 `TWeakObjectPtr`，回调里 `Get()` 后再用 |

**示例说明**：以下为组件类片段，依赖 `CoreMinimal.h`、`AITargetingComponent.generated.h` 以及 `AActor`/`UActorComponent` 头文件，不能脱离工程独立编译。

```cpp
UCLASS()
class UAITargetingComponent : public UActorComponent
{
    GENERATED_BODY()

public:
    void SetTarget(AActor* InTarget)
    {
        CurrentTarget = InTarget;                 // 赋值不会保活对方
    }
    void TickComponent(float DeltaTime, ELevelTick TickType,
                       FActorComponentTickFunction* ThisTickFunction) override
    {
        Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

        // 每帧重新取一次：上一帧有效不代表这一帧有效
        AActor* Target = CurrentTarget.Get();     // Get 内部已做有效性检查
        if (!Target)
        {
            CurrentTarget.Reset();                // 失效就清掉，避免留个假句柄
            return;
        }

        MoveToward(Target->GetActorLocation());
    }

private:
    UPROPERTY()
    TWeakObjectPtr<AActor> CurrentTarget;
};
```

**可观察验证**

```cpp
// 失效检测是可观察的：Destroy 前后各打一次
CurrentTarget = SomeActor;
UE_LOG(LogTemp, Log, TEXT("before=%d"), CurrentTarget.IsValid());
SomeActor->Destroy();
UE_LOG(LogTemp, Log, TEXT("after=%d"), CurrentTarget.IsValid());   // 期望 0

// 一次取用只 Get 一次，局部裸指针把使用区间压短
if (AActor* T = CurrentTarget.Get()) { MoveToward(T->GetActorLocation()); }
```

```plaintext
obj list class=AActor          # 目标是否已从对象列表消失
stat gc                        # 触发 GC 后再看弱指针状态
```

- 同一个目标分别用弱指针和提前缓存的裸指针观察：销毁后弱指针 `IsValid()` 变 false、`Get()` 返回空，而裸指针仍非空。
- 把 `Get()` 的结果存成成员跨帧使用，下一帧访问会崩或读到半销毁状态——这是“每次取用都要重新 `Get()`”的最直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> `TWeakObjectPtr` 是弱引用：它不阻止 GC，对象被回收之后自动变成无效，用 `IsValid` 或者 `Get` 检查就行。它适合缓存一个随时可能被销毁的目标，比如 UI 指向的角色、AI 的当前目标、技能缓存的上次命中对象。它内部是对象索引加序列号，靠比对来判断对象还在不在，所以 `Get` 不是免费的。还有两点要注意：它不是线程安全的，不能拿到别的线程去读；跨帧缓存的话，每次取用都要重新判一次有效，不能缓存 `Get` 的结果。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 弱指针怎么知道对象没了？ | 它记的是对象索引加序列号。对象销毁后槽位会被复用或序列号变化，比对不上就判定无效，所以不会读到悬垂地址。 |
| 为什么不能跨线程用？ | 它要读全局对象数组和 GC 状态，这些没有原子保护。要在别的线程用，就把裸指针和生命周期一起交给任务系统管理。 |
| `Get()` 有开销吗？ | 有，需要回查对象状态，不是简单判空。热路径上取一次存局部变量，别在循环里反复调用。 |
| 标了 `UPROPERTY` 会阻止 GC 吗？ | 不会。`UPROPERTY` 只是让它进入反射/序列化流程，弱引用的语义仍然是不保活。 |
| 弱指针能当 GC 根吗？ | 不能。它没有强引用边，对象该被回收时照样回收。 |
| `TWeakObjectPtr` 和 `TWeakPtr` 什么区别？ | 前者观察 GC 管理的 UObject，失效由 GC 决定；后者观察引用计数对象，失效由计数归零决定。 |

### ④ 真实坑

1. **缓存 `Get()` 的结果跨帧使用**：`AActor* Cached = Weak.Get();` 存成成员，下一帧对象已经被销毁，`Cached` 是悬垂裸指针。正确做法是只存弱指针，每次用之前重新 `Get()`。
2. **在异步任务里读弱指针**：`AsyncTask` 或线程池里调用 `IsValid()`，读到的是不一致的 GC 状态，轻则误判重则崩溃。跨线程只能在游戏线程取好数据再传出去。
3. **`IsValid` 之后又调用了可能销毁对象的代码**：判完有效、中间触发 `Destroy()` 或别的系统清场，再用就晚了。先取局部裸指针，把使用区间压到最短。
4. **把弱指针当“会自动变 null 的强引用”**：需要保活的对象写成弱引用，结果被 GC 提前收走，表现为功能时好时坏。要保活就老老实实 `UPROPERTY` 强引用。
5. **以为 `UPROPERTY` 的弱引用能序列化恢复关系**：存档或蓝图默认值里它可能为空，加载后需要重新解析目标，不能假设存取前后指向同一个对象实例。

### ⑤ 练习

**A 写**：实现上面的 `UAITargetingComponent`，要求 `SetTarget`、`TickComponent` 里安全取用并自动清空，总行数 20 行左右。

**提示**：① 目标用 `Destroy()` 后隔一帧再下结论，别在同一帧里打印；② 在 `Get()` 前后各打一条日志，确认一次 Tick 只取一次；③ 把成员改成 `UPROPERTY() TObjectPtr<AActor>` 跑一遍，观察目标是否还会被回收。

验收标准：把目标 Actor 手动 `Destroy()` 后，下一帧组件不崩溃且 `CurrentTarget` 变为无效；代码里没有跨帧保存的裸指针；能指出一次 Tick 里 `Get()` 被调用了多少次。

**B 讲**：2 分钟口述“弱指针为什么会自动失效，以及什么时候不该用它”。要覆盖内部表示、非线程安全、不能当保活手段三个点。

验收标准：不看稿讲完；三个点各有一句结论；能举一个“该用强引用却用了弱引用”的反例。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-17"></a>
## U17 · Q17 TSharedPtr、TSharedRef、TUniquePtr 有什么区别？

> 来源：题库 UE 第 17 题 ｜ 速背卡：[Q17](./速背.md#ue-q17) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：这三个是在回答“谁拥有这个非 UObject 对象”——唯一拥有、共享拥有、还是共享拥有且保证非空。

**学完能做到**
- 写代码：用 `TUniquePtr` 持有独占成员，用 `TSharedPtr` 分发共享对象，用 `TSharedRef` 表达非空参数。
- 讲出来：说清三者的所有权、可空性、拷贝规则，以及为什么它们不能用来管 UObject。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `TUniquePtr` 只是“不能拷贝”，没什么实际价值 | 它没有控制块和原子计数，大小基本等于一个指针，是独占成员最省的选择 |
| `TSharedRef` 是“更安全的共享指针”，两者可以随便互转 | 只能由非空构造或 `ToSharedRef()` 得到；空指针强转会触发检查失败 |
| UE 的 `TSharedPtr` 就是 `std::shared_ptr` 的别名 | 是独立实现，另有 `ESPMode` 等配置；和 `std::shared_ptr` 混着传会重复计数 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `TUniquePtr` 独占所有权，禁止拷贝，只能 `MoveTemp` 转移 | 所有权清晰、零引用计数开销，适合成员变量和工厂返回值 |
| `TSharedPtr` 共享所有权，引用计数归零才析构，可以为空 | 多所有者场景用它；计数默认原子，有成本 |
| `TSharedRef` 是共享所有权的非空版本，构造时就绑定对象 | 接口参数用它表达“必定有效”，函数体里省掉判空分支 |
| `TSharedRef` 可隐式转 `TSharedPtr`，反向要 `ToSharedRef()` 且自行保证非空 | 降级安全、升级有前置条件，空指针强转会触发检查失败 |
| 三者都只用于非 UObject 对象 | 拿它们管 UObject 会出现两套所有权，见下面第 ④ 节第一条 |
| UE 智能指针不是 `std` 的别名，另有 `ESPMode` 等配置 | 不要把 `std::shared_ptr` 和 `TSharedPtr` 混着传 |

`TUniquePtr` 是最容易被低估的一个。它没有控制块、没有原子操作、大小基本等于一个指针，删除动作由自己的 deleter 完成，还能直接作为 `UPROPERTY` 之外的最简 RAII 成员。凡是“这个对象只归我”的场合，都应该先想到它，而不是上来就 `TSharedPtr`。

`TSharedPtr`/`TSharedRef` 共用一套引用计数，内部通常有共享计数和弱计数两份。`MakeShared` 会把对象和控制块一次分配，是首选构造方式；`MakeShareable` 用于接管已存在的裸指针并允许自定义 deleter。共享计数默认是线程安全模式（`ESPMode::ThreadSafe`），原子操作换来跨线程安全；如果确定只在游戏线程用，可以显式选 `NotThreadSafe` 降开销。

它们和 UObject 的分界线必须画清楚：UObject 的生命周期由 GC 决定，销毁流程里有 `BeginDestroy`、引用清理、GC 回收这些阶段；共享指针只会在计数归零时直接 `delete`。两套机制同时存在时，GC 不知道共享指针的存在，共享指针也不知道对象可能已经被 GC 收走，最终不是漏就是崩。

**设计动机**：UE 需要一套不依赖异常、能与 `ESPMode`、Slate 和平台构建设置配合的所有权工具，所以自研了这三件套。三者按所有权强度分层：`TUniquePtr` 表达“只有我一个所有者”，零计数开销；`TSharedPtr` 表达“多个所有者、寿命对不齐”，用计数决定析构；`TSharedRef` 再把“非空”提升成类型契约。分层不是语法糖，而是让所有权在函数签名上就能读出来，减少“谁负责释放”的争论。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 独占成员 | `TUniquePtr<FMyService> Service;` 配合 `MakeUnique<FMyService>()` |
| 转移所有权 | 返回值 `return MoveTemp(Service);`，调用方用 `TUniquePtr` 接收 |
| 多处共享 | `TSharedPtr<FDecodedImage> Image = MakeShared<FDecodedImage>();` |
| 表达参数必定非空 | `void Upload(const TSharedRef<FDecodedImage>& Image);` |
| 观察共享对象 | `TWeakPtr<FDecodedImage> Preview;` |
| 类内部取回自己的共享指针 | 继承 `TSharedFromThis<T>` 后调 `AsShared()` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`（`TSharedPtr`/`TUniquePtr`/`MakeShared` 来自 `Templates/SharedPointer.h` 等头文件）以及自定义类型 `FAssetCache`/`FDecodedImage`/`FScopedTimer`，不能脱离工程独立编译。

```cpp
class FAssetCache : public TSharedFromThis<FAssetCache>
{
public:
    // 参数用 TSharedRef：调用方必须保证非空，函数体里不用再判
    void Add(const TSharedRef<FDecodedImage>& Image) { Items.Add(Image->Key, Image); }
    TSharedPtr<FDecodedImage> Find(FName Key) const { return Items.FindRef(Key); }

private:
    TMap<FName, TSharedPtr<FDecodedImage>> Items;
};

void BuildCache()
{
    TSharedRef<FAssetCache> Cache = MakeShared<FAssetCache>();  // MakeShared 返回非空引用
    TSharedPtr<FAssetCache> Alias = Cache;                      // 非空 → 可空，隐式安全
    if (!Alias.IsValid()) { return; }

    TSharedPtr<FDecodedImage> Image = MakeShared<FDecodedImage>();
    if (Image.IsValid())
    {
        Cache->Add(Image.ToSharedRef());                        // 先判空再升级
    }

    TUniquePtr<FScopedTimer> Timer = MakeUnique<FScopedTimer>();// 独占，出作用域自动析构
    // TUniquePtr<FScopedTimer> Copy = Timer;                   // 编译错误：不可拷贝
    TUniquePtr<FScopedTimer> Moved = MoveTemp(Timer);           // 只能转移所有权
}
```

**可观察验证**

```cpp
// 计数变化直接可见：分发、释放各打一次
TSharedPtr<FDecodedImage> A = MakeShared<FDecodedImage>();
UE_LOG(LogTemp, Log, TEXT("count=%d"), A.GetSharedReferenceCount()); // 1
TSharedPtr<FDecodedImage> B = A;
UE_LOG(LogTemp, Log, TEXT("count=%d"), A.GetSharedReferenceCount()); // 2
B.Reset();
UE_LOG(LogTemp, Log, TEXT("count=%d"), A.GetSharedReferenceCount()); // 1

// 独占性由编译期保证：取消下一行注释就编译失败
// TUniquePtr<FScopedTimer> Copy = Timer;
```

```plaintext
编译期自测：把 TSharedPtr<FDecodedImage> 直接赋给 TSharedRef<FDecodedImage>
观察报错——可空不能隐式升非空，必须走 ToSharedRef
```

- 打印 `GetSharedReferenceCount()`：分发后为 2，一个持有者释放后回到 1，归零时析构函数打日志——这是“计数决定析构”的直接证据。
- 取消拷贝 `TUniquePtr` 那行的注释得到编译错误，改用 `MoveTemp` 后编译通过且原指针变空。

### ③ 面试怎么讲

**30 秒口述稿**

> 这三个都用于非 UObject 对象，区别在所有权。`TUniquePtr` 是独占的，不能拷贝只能 move，出了作用域就把对象删掉，开销最小。`TSharedPtr` 是共享所有权，引用计数归零才删，可以为空；`TSharedRef` 是它的非空版本，构造的时候就必须有对象，适合放在接口参数里表达“我传进来的一定是有效的”。它们都不能用来管 UObject，因为 UObject 归 GC 管，再套一层引用计数就变成两个所有者，GC 不知道共享指针，共享指针也不走 `BeginDestroy`，最后不是漏就是崩。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `TSharedPtr` 怎么转 `TSharedRef`？ | 用 `ToSharedRef()`，但对象为空时会触发检查失败；先 `IsValid()` 再转，或者从源头就用 `MakeShared` 拿到 `TSharedRef`。 |
| `TSharedRef` 能转 `TSharedPtr` 吗？ | 可以隐式转换，方向是安全的，非空降级为可空。 |
| `TUniquePtr` 能拷贝吗？ | 不能，拷贝构造和拷贝赋值都被删了，只能 `MoveTemp`。需要“拷贝”语义就用 `Clone()` 之类的显式接口。 |
| 引用计数线程安全吗？ | 默认 `ThreadSafe`，计数增减是原子的；`NotThreadSafe` 省开销但只适合单线程。注意这只保护计数，不保护对象内容。 |
| `MakeShared` 和 `MakeShareable` 区别？ | `MakeShared` 一次分配对象和控制块，要求类型可直接构造；`MakeShareable` 接管已有裸指针并允许自定义 deleter，但会多一次分配。 |
| 为什么 UObject 不能用？ | 共享指针不把对象登记进 GC 图，GC 仍可能回收；计数归零时又直接 `delete`，绕过 UObject 的销毁流程。 |

### ④ 真实坑

1. **给 UObject 套 `TSharedPtr`**：最严重的一类错误。共享指针不进入 GC 图，GC 可能先把对象收走；或者计数归零直接 `delete`，绕过 `BeginDestroy` 和引用清理，编辑器里就可能崩。UObject 一律 `UPROPERTY` 强引用 + GC。
2. **共享指针成环**：A 持有 B、B 持有 A，双方计数都不可能归零，对象永远不析构。设计时就要定好哪条边是 `TWeakPtr`，详见 U19。
3. **热路径按值传 `TSharedPtr`**：每次拷贝都在动原子计数，还会多一次 cache miss。只读传参用 `const TSharedPtr<T>&`，需要非空语义就用 `TSharedRef`。
4. **在 `UPROPERTY` 里写 `TSharedPtr`**：UHT 不支持，反射声明阶段就会报错。反射成员只能用 `TObjectPtr`/裸指针/`TWeakObjectPtr` 这类 UObject 指针。
5. **对空的 `TSharedPtr` 调 `ToSharedRef()`**：检查失败直接崩，或者在某些配置下断言。升级前必须判空，或者让上游直接传 `TSharedRef`。

### ⑤ 练习

**A 写**：写一个 20 行左右的小工厂：用 `TUniquePtr<FJob>` 生产任务，转成 `TSharedPtr<FJob>` 分发给两个持有者，打印 `GetSharedReferenceCount()` 的变化过程；再加一个接收 `TSharedRef<FJob>` 的函数。

**提示**：① 先给 `FJob` 的析构函数加打印，计数变化才有观测点；② 三个类型各写一个最小用例，别揉进同一个函数；③ 试一次对空的 `TSharedPtr` 调 `ToSharedRef()`，看清检查失败的形态。

验收标准：分发后计数为 3，两个持有者离开作用域后逐步降到 0 并触发析构；`TSharedRef` 版本能编译通过，并能解释为什么调用方无法传空；能说清 `TUniquePtr` 那一步为什么必须用 `MoveTemp`。

**B 讲**：2 分钟口述“三种智能指针怎么选”，必须覆盖所有权、可空性、拷贝规则，并解释 UObject 为什么被排除在外。

验收标准：不看稿讲完；三个类型各有一句区分性结论；UObject 部分能说出“双重所有权”和“绕过销毁流程”两个后果。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-18"></a>
## U18 · Q18 什么时候该用共享指针？

> 来源：题库 UE 第 18 题 ｜ 速背卡：[Q18](./速背.md#ue-q18) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：能独占就别共享，共享只留给“确实有多个所有者、而且寿命对不齐”的对象，UObject 永远轮不到共享指针。

**学完能做到**
- 写代码：给一个模块设计所有权，分别落在 `TUniquePtr`、`TSharedPtr`、`TWeakPtr` 上。
- 讲出来：说清共享指针的成本从哪来、线程安全模式选错的后果、以及为什么接口参数偏爱 `TSharedRef`。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 智能指针更现代，成员默认就该用 `TSharedPtr` | 默认答案应是 `TUniquePtr`；共享带来控制块、原子计数和成环风险 |
| `ThreadSafe` 说明被指对象也是线程安全的 | 只保证引用计数增减原子，对象内容的数据竞争它不负责 |
| 共享指针也能管 UObject，只要不标 `UPROPERTY` | UObject 归 GC；共享指针不进 GC 图，计数归零还会绕过 `BeginDestroy` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 大多数对象的所有权是单一的，默认答案应该是 `TUniquePtr` | 少一层控制块、少一组原子计数，语义也更清楚 |
| 共享指针的成本是控制块分配 + 原子计数 + 间接访问 | 高频创建和按值传递的地方会成为热点，不要用“看起来现代”做决策 |
| `ThreadSafe` 只保证计数安全，不保证被指对象安全 | 跨线程访问对象内容仍然要自己加锁或做消息传递 |
| 接口参数用 `TSharedRef` 可以把“非空”变成类型契约 | 函数体不用判空，调用方在编译期就被要求证明 |
| 观察者用 `TWeakPtr`，不延长寿命 | 缓存、回调、订阅这类关系不该由观察方决定对象生死 |
| UObject 一律走 `UPROPERTY` + GC | 混用共享指针就是双重所有权，结局是漏或崩 |

选择顺序可以背下来：先问“是不是 UObject”，是就结束，回到 `UPROPERTY`；不是 UObject，再问“是不是只有我一个所有者”，是就 `TUniquePtr`；确实要多方共享，才用 `TSharedPtr`；如果共享对象不该被观察方保活，就把观察方那一条边改成 `TWeakPtr`；如果参数语义是“必须给我一个有效对象”，就用 `TSharedRef`。

共享指针真正的成本不在“智能”，而在“共享”。控制块通常和对象分开分配（`MakeShared` 可以合并，但仍有控制块），每次拷贝都要原子自增，每次析构都要原子自减并在归零时做一次同步。单帧几百次可能无所谓，几万个粒子、几百个 UI 元素每帧传来传去就会变成可测量的开销。

还有一个容易忽略的替代方案：如果只是想避免拷贝、又不需要共享所有权，用引用或指针传参就够了；如果只是想表达“可能没有”，用 `nullptr` 或 `TOptional` 比 `TSharedPtr` 轻得多。共享指针不是默认选项，而是明确的所有权声明。

**设计动机**：UE 里大多数对象的所有权是单一的：组件归 Actor、子系统归引擎、局部流水线的对象归流水线。用 `TUniquePtr` 表达这种关系，生命周期是一条直线，读代码的人不用去追计数。共享指针真正要解决的是“多个系统同时持有一个非 UObject、而且谁先放手不确定”这一小类问题；它的代价是控制块分配、原子计数和成环风险。所以设计上把“共享”当成需要论证的例外：观察方用 `TWeakPtr` 不延长寿命，接口参数用 `TSharedRef` 把非空变成契约。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 唯一所有者 | `TUniquePtr<FImageDecoder> Decoder = MakeUnique<FImageDecoder>();` |
| 多个系统都要持有 | `TSharedPtr<FDecodedImage> Image = MakeShared<FDecodedImage>();` |
| 参数要求非空 | `void Upload(const TSharedRef<FDecodedImage>& Image);` |
| 只是观察，不该保活 | `TWeakPtr<FDecodedImage> Preview = Image;` |
| 确定只在游戏线程用 | `TSharedPtr<FHitCache, ESPMode::NotThreadSafe> Cache;` |
| 类内部需要交出共享指针 | 继承 `TSharedFromThis<T>`，用 `AsShared()` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 以及自定义类型 `FImagePipeline`/`FDecodedImage`/`FHitCache`，不能脱离工程独立编译。

```cpp
void FImagePipeline::Run()
{
    // 1) 解码器只归本流水线所有 → 独占
    TUniquePtr<FImageDecoder> Decoder = MakeUnique<FImageDecoder>();

    // 2) 解码结果要被 UI 和缓存同时持有 → 共享
    TSharedPtr<FDecodedImage> Image = MakeShared<FDecodedImage>();
    Image->Pixels = Decoder->Decode();

    // 3) 缩略图面板只观察，不该延长这张图的生命周期 → 弱引用
    TWeakPtr<FDecodedImage> Preview = Image;
    // 4) 上传接口要求非空，先把契约表达清楚
    if (Image.IsValid())
    {
        UploadTexture(Image.ToSharedRef());
    }

    // 5) 高频命中的纯游戏线程缓存，可以关掉原子计数
    TSharedPtr<FHitCache, ESPMode::NotThreadSafe> Cache = HitCache;
    Cache->Record(Image->Key);
}

void FImagePipeline::UploadTexture(const TSharedRef<FDecodedImage>& Image)
{
    // Image 必定有效，不需要判空
    RHIUpload(Image->Pixels);
}
```

**可观察验证**

```cpp
TSharedPtr<FDecodedImage> Image = MakeShared<FDecodedImage>();
UE_LOG(LogTemp, Log, TEXT("strong=%d"), Image.GetSharedReferenceCount());  // 1
TWeakPtr<FDecodedImage> Preview = Image;   // 观察边：不增加共享计数
UE_LOG(LogTemp, Log, TEXT("strong=%d"), Image.GetSharedReferenceCount());  // 仍是 1

// 线程安全模式是编译期选择：确定只在游戏线程用才关原子计数
TSharedPtr<FHitCache, ESPMode::NotThreadSafe> Cache = HitCache;
```

```plaintext
memreport -full                 # 长跑后看共享对象是否迟迟不释放
Unreal Insights：对比高频路径改前/改后的 CPU 采样
```

- 把 `Preview` 从 `TWeakPtr` 改成 `TSharedPtr`，计数多 1，对象寿命被观察方延长——这是“观察边别用强引用”的可观察后果。
- 把 `ESPMode::NotThreadSafe` 换回默认 `ThreadSafe` 后在同一热路径采样，能看出计数原子操作的开销（看倍数，别看绝对值）。

### ③ 面试怎么讲

**30 秒口述稿**

> 我的默认答案是能独占就 `TUniquePtr`，只有确实需要多个所有者、而且生命周期对不齐的时候才用 `TSharedPtr`。接口参数如果要表达“一定给我一个有效对象”，就用 `TSharedRef`，把判空变成类型契约。跨线程共享注意线程安全模式：默认 `ThreadSafe` 只是让引用计数原子，对象内容它不管，该加的同步还得加；确定单线程可以用 `NotThreadSafe` 省开销。UObject 一律不用共享指针，交给 `UPROPERTY` 和 GC；非 UObject 里只是观察的用 `TWeakPtr`。不要因为“看起来现代”就全用共享指针，引用计数本身也是成本。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 共享指针的线程安全指什么？ | 只指引用计数的增减是原子的，多个线程同时拷贝/释放不会把计数搞坏；被指对象的数据竞争它不负责。 |
| 为什么接口参数偏爱 `TSharedRef`？ | 用类型表达非空契约，函数体不用写判空分支，调用方必须证明对象有效，错误在编译期暴露。 |
| 为什么不用 `std::shared_ptr`？ | UE 自研的这套配合 `ESPMode`、Slate、UE 容器和平台构建；两套模型混用会出现重复计数和销毁不一致。 |
| 什么时候宁可用裸指针？ | 非拥有观察、只在调用期有效的参数、局部变量。裸指针不表达所有权，正好适合这些场合。 |
| 共享指针会阻止 GC 吗？ | 对 UObject 没有 GC 关系，因为共享指针不进 GC 图；对非 UObject 它靠计数自己 `delete`，不存在 GC。 |
| 共享指针能当成员吗？ | 能，但它是非反射成员，不会被序列化；如果对象需要跨关卡存活，要想清楚谁负责在合适时机释放。 |

### ④ 真实坑

1. **无脑把成员写成 `TSharedPtr`**：引用计数开销、成环风险、生命周期难以追踪三件事同时中招。先证明“真的多所有者”，再改成共享。
2. **把 `ThreadSafe` 理解成“对象线程安全”**：多个线程通过共享指针访问同一个对象的数据，照样数据竞争。计数安全只是不把计数搞坏。
3. **把 `TSharedPtr` 交给异步任务长期持有**：任务排队期间对象被强行延寿，资源迟迟不释放，表现为内存曲线只涨不落。异步任务里应持弱引用，执行时再升级。
4. **给 UObject 用共享指针**：和 U17 同一个坑，表现为“GC 收走但共享指针还指着”，或者“计数归零绕过 `BeginDestroy` 直接 delete”。
5. **在结构体里按值塞 `TSharedPtr` 并频繁拷贝**：每次拷贝一次原子操作，容器扩容时还会批量拷贝。能传引用就传引用，能移动就移动。

### ⑤ 练习

**A 写**：为 `FWeaponRuntime` 设计所有权：武器管理器用 `TUniquePtr` 持有它，UI 面板用 `TSharedPtr` 引用它，统计面板用 `TWeakPtr` 观察它。写 20 行左右，并在关键节点打印引用计数。

**提示**：① 先画出所有权图（谁拥有、谁观察、谁只临时用），再选类型；② 每个 `TSharedPtr` 成员旁注释“所有者是谁”，过度共享在评审时一眼可见；③ 接口先改成 `TSharedRef` 试一遍，很多判空分支会直接消失。

验收标准：管理器释放后 UI 仍能安全访问（如果设计为共享）；UI 释放后统计面板能检测到失效；能解释每一步为什么选这个类型而不是另外两个。

**B 讲**：2 分钟口述“共享指针的使用决策树”，从“是不是 UObject”开始逐层收敛。

验收标准：不看稿讲完；决策树至少四层且每层有一句判断依据；能说出共享指针的两个具体成本。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-19"></a>
## U19 · Q19 循环引用会泄漏吗？UObject 和共享指针有何不同？

> 来源：题库 UE 第 19 题 ｜ 速背卡：[Q19](./速背.md#ue-q19) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：UObject 的环按“从根集是否可达”判断，不可达的环整组被清除；共享指针的环按“计数是否归零”判断，环内互撑永远不归零。

**学完能做到**
- 写代码：把一个双向强引用的共享指针结构改成一条强、一条弱，并验证析构发生。
- 讲出来：说清两套回收判据的差别、UObject 环在什么情况下才真的泄漏、以及共享指针环怎么排查。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| UObject 之间强引用成环就一定会泄漏 | GC 是标记-清除，整组不可达的环会被一起回收；真正漏的是被根集挂住的环 |
| 共享指针成环也能被 GC 收掉，因为引擎有 GC | 共享指针不走 GC，判据是计数归零；环内互撑永远不归零 |
| 弱引用只是“省内存”的强引用 | 弱引用不产生强引用边，不阻止 GC，也决定不了对象生死 |

### ① 本质

| 机制 | 回收判据 | 成环后果 |
| --- | --- | --- |
| UObject GC | 从根集是否可达 | 不可达的环整体回收，不泄漏 |
| 共享指针 | 引用计数是否归零 | 环内计数互相支撑，永远不归零 |
| UObject 的“真泄漏” | 环上任意节点被根集挂住 | 整组永远活着，逻辑上没用了但回收不掉 |

标记-清除的关键是“根”。引擎会从一组明确的根出发（引擎全局对象、世界、游戏实例、`AddToRoot` 的对象、静态强引用等）沿引用边遍历，能走到的标记为存活，走不到的统一清除。这个算法天然处理环：只要整组都不可达，它们就一起被清掉，不需要引用计数那种“必须有人先放手”的前提。

所以 UObject 侧讨论“循环引用会不会泄漏”，答案要分两半：纯环本身不会漏；但如果环被某个根对象强引用着，那就会漏，而且漏得非常稳定。现实中的形态通常是：某个全局管理器（被游戏实例或引擎持有）用一个 `UPROPERTY` 容器记着所有生成过的 Actor，Actor 又反过来强引用管理器。管理器是根可达的，于是整条链都活着，哪怕玩家早就离开了那个关卡。

共享指针没有“根”的概念，只有计数。A 持有 B、B 持有 A 时，两个对象的共享计数都至少是 1，任何一方都不会先析构，析构又永远不会发生，于是形成稳定的泄漏。更隐蔽的是自引用：对象把自己的 `TSharedPtr` 存进自己的成员（常见于缓存回调、lambda），计数同样永不归零。

破环手段只有两类：把某条边降级成弱引用，或者在明确的生命周期节点上显式断链（`Reset()`、清容器、解绑委托）。前者是设计层面的，后者是流程层面的。引擎没有为共享指针提供类似 GC 的引用图工具，所以排查主要靠构造/析构计数、内存快照和代码审查，这也是为什么“设计时就想清楚哪条边是弱的”比事后排查重要得多。

**设计动机**：两套机制服务于两类对象，判据必须不同。GC 管的是 UObject，它需要“从根集出发”才能安全地在引用图上回收，天然能处理环；共享指针管的是非 UObject，没有全局根集，只有引用计数，所以环内互撑就是稳定泄漏。UE 的取舍是：生命周期长、参与反射与复制的对象交给 GC；生命周期局部、需要确定析构时机的对象交给计数——而计数体系里破环只能靠设计，即把回指边降成 `TWeakPtr`。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 共享指针父子结构破环 | 父持有子用 `TSharedPtr`，子回指父用 `TWeakPtr` |
| 回调不延长对象寿命 | lambda 捕弱引用，执行时 `Pin()`/`Get()` |
| UObject 打断回指 | 成员改 `TWeakObjectPtr<AActor>` |
| 确认是否真的泄漏 | 析构函数打日志、静态计数、退出时检查剩余实例 |
| 生命周期结束主动清理 | 容器 `Empty()`、`Reset()`、解绑委托 |

**示例说明**：以下为模块内片段，`FNode` 依赖 `CoreMinimal.h` 与 `TSharedFromThis`，`UWaveManager` 还需 UHT 生成的 `WaveManager.generated.h`，不能脱离工程独立编译。

```cpp
class FNode : public TSharedFromThis<FNode>
{
public:
    void SetChild(const TSharedPtr<FNode>& InChild)
    {
        Child = InChild;                   // 父 → 子：强引用，父子关系成立
        InChild->Parent = AsShared();      // 子 → 父：弱引用，环在这里被打开
    }

    ~FNode()
    {
        UE_LOG(LogTemp, Log, TEXT("FNode destroyed"));
    }

private:
    TSharedPtr<FNode> Child;
    TWeakPtr<FNode> Parent;               // 如果写成 TSharedPtr，两个节点都不会析构
};

// UObject 侧：管理器被根持有，容器若强引用敌人，敌人就永远回收不掉
UCLASS()
class UWaveManager : public UObject
{
    GENERATED_BODY()
public:
    // 错：UPROPERTY() TArray<TObjectPtr<AEnemy>> SpawnedEnemies;
    // 对：只记录、不保活，清场时容器自然变空
    UPROPERTY()
    TArray<TWeakObjectPtr<AEnemy>> SpawnedEnemies;
};
```

**可观察验证**

```cpp
// 破环前后对比：强引用版本一条析构日志都不会出现
{
    TSharedPtr<FNode> Root = MakeShared<FNode>();
    TSharedPtr<FNode> Leaf = MakeShared<FNode>();
    Root->SetChild(Leaf);   // Parent 是 TWeakPtr 时，作用域结束能看到两条 destroyed
}
UE_LOG(LogTemp, Log, TEXT("scope left"));

// UObject 侧：管理器被根持有，容器用弱引用才不保活
UPROPERTY() TArray<TWeakObjectPtr<AEnemy>> SpawnedEnemies;
```

```plaintext
obj list class=AEnemy           # 切关卡后旧 Enemy 是否还在
obj refs name=<ManagerName>     # 谁在强引用这组对象
stat gc                         # 手动 GC 后对象计数是否下降
```

- 把 `Parent` 从 `TWeakPtr` 改回 `TSharedPtr` 重跑：`FNode destroyed` 一条都不打印，程序退出也不打印——计数泄漏的直接证据。
- UObject 侧在清场逻辑里 `SpawnedEnemies.Empty()` 后再 `obj list class=AEnemy`：对象从列表消失；不清则残留，说明是业务没断链而不是算法失效。

### ③ 面试怎么讲

**30 秒口述稿**

> 要分两套机制说。UObject 之间强引用成环本身不会漏，因为 GC 是标记-清除，从根集出发判断可达性，整组都不可达就一起回收。真正会漏的是这个环被根集挂住了，比如全局管理器里有个 `UPROPERTY` 容器强引用着这些对象，管理器又是根可达的，那整组就永远活着，这属于引用关系没断，不是算法问题。`TSharedPtr` 成环就一定会漏，因为它的判据是引用计数归零，环内两边互相撑着，计数永远不归零，必须把其中一边改成 `TWeakPtr`。还有一种常见形态是对象把自己的回调 lambda 存成成员、lambda 又通过 `shared_from_this` 持有自己，也是自引用环。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 那 UObject 环什么时候会泄漏？ | 环上任意节点从根集可达时。典型是全局管理器、`AddToRoot`、静态强引用持有了一组互相引用的对象。 |
| 怎么排查共享指针环？ | 引擎没有 GC 那样的引用图工具。主要靠析构计数、内存快照、构造/析构日志，加上代码审查重点看双向引用和自捕获。 |
| 弱引用会阻止 GC 吗？ | 不会。`TWeakObjectPtr` 不产生强引用边，对象该回收时照样回收，回收后弱指针自动失效。 |
| 为什么回指关系总建议用弱引用？ | 回指通常只表达“我知道你是谁”，不该由被指向方决定持有方的生死；弱引用正好表达这个语义。 |
| 除了改弱引用还能怎么破？ | 在明确的节点显式断链：清容器、`Reset()`、解绑委托、切换关卡时统一清理。 |

### ④ 真实坑

1. **共享指针父子双向强引用**：父 `TSharedPtr` 子、子 `TSharedPtr` 父，两个对象析构函数永远不执行。改成子指向父用 `TWeakPtr`，强弱方向按“谁决定谁的生命周期”来定。
2. **成员里存捕获了 `AsShared()` 的 lambda**：对象持有 lambda，lambda 持有对象，自引用环，计数永不归零。回调改成捕弱引用，执行时再 `Pin()`。
3. **UObject 侧把用过的对象留在管理器容器里**：不是算法漏，是业务没清。表现为关卡切换后内存不降，`Obj List` 里还能看到旧 Actor。清场逻辑里要主动 `Empty()`。
4. **委托绑定形成环**：A 把委托绑到 B，B 又用 `UPROPERTY` 强引用 A，B 被根持有，于是 A 也永远活着。绑定前想清楚谁的生命周期长，必要时解绑。
5. **用 `TSharedPtr` 缓存 UObject 想“延长寿命”**：既没进 GC 图，又在计数归零时绕过销毁流程，属于双重所有权，见 U17 第 ④ 节。

### ⑤ 练习

**A 写**：实现上面的 `FNode` 父子结构。先写双向 `TSharedPtr` 版本，在 `main` 里创建父子并离开作用域，观察析构日志为 0 条；再把 `Parent` 改成 `TWeakPtr`，重新运行，观察两条析构日志。

**提示**：① 只改弱的方向（子→父），父→子保持强引用，语义最清楚；② 用析构日志或静态计数验证，不要靠“应该释放了”的直觉；③ 顺带检查 lambda 捕获 `AsShared()` 造成的自引用环。

验收标准：强引用版本程序结束时没有任何 `FNode destroyed` 输出；弱引用版本两个节点都正常析构；能画出两种情况的引用图并指出计数卡在哪。

**B 讲**：2 分钟口述“两套回收判据的差别”，各举一个真实泄漏场景，并说明破环手段。

验收标准：不看稿讲完；两套判据各有一句准确表述；两个场景一个属于“根挂住环”，一个属于“计数不归零”。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-20"></a>
## U20 · Q20 IsValid 和 nullptr 判断有什么区别？

> 来源：题库 UE 第 20 题 ｜ 速背卡：[Q20](./速背.md#ue-q20) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：`nullptr` 只回答“地址是不是空”，`IsValid` 才回答“这个 UObject 现在还能不能用”。

**学完能做到**
- 写代码：把跨帧缓存的目标改成“每次取用前判有效”，并正确处理 Actor 的销毁中间态。
- 讲出来：说清“非空但已失效”的三种来源，以及为什么 Actor 要额外看一眼。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `if (Ptr)` 判空通过就说明对象能用 | `Destroy()` 后内存可能还没回收，指针非空但对象已不该用 |
| `IsValid` 能防住所有悬垂指针 | 它只对 UObject 有效，靠对象状态判断失效；普通堆对象和野指针它管不了 |
| Actor 的 `IsValid` 通过就可以放心操作 | Actor 还有销毁流程中间态，要额外看 `IsActorBeingDestroyed()` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `Destroy()` 之后对象内存可能还没被回收，指针仍然非空 | 判空通过后照样访问已销毁对象，崩溃或读到半销毁状态 |
| 对象可能已被标记为垃圾、等待 GC 回收 | `IsValid` 会把它判为无效，普通判空不会 |
| `IsValid(Ptr)` = 非空 + UObject 自身有效性检查（垃圾标记等，具体标志随引擎版本演进） | 业务代码统一用它，比 `!= nullptr` 严格 |
| Actor 还有销毁流程窗口（`bActorIsBeingDestroyed` / `IsActorBeingDestroyed()`） | 要额外判断，别在半销毁状态操作组件和世界 |
| 跨帧缓存的对象，上一帧有效不代表这一帧有效 | 每次取用前复查，不能只在赋值时判一次 |
| `IsValid` 有成本，弱指针上尤其明显 | 同一次使用里取一次局部指针，别反复调用 |

UE 的销毁是分阶段的：调用 `Destroy()` 只是发起销毁，Actor 会走 `EndPlay`、从世界移除、组件注销，真正的内存回收要等 GC。这中间存在一个窗口——对象还在内存里，指针非空，但它已经不该被使用了。C++ 的 `nullptr` 判断对这个窗口完全无能为力，因为它只看地址。

`IsValid` 补的就是这一段：它先判空，再检查对象自身的状态位。不同引擎版本里这些标志的名字和组合方式有差异（早期常见 `PendingKill`，UE5 里更多用垃圾标记相关判断），所以背的时候记“检查对象是否已失效”，不要死记某一个标志名。

Actor 还要多看一眼：Actor 的销毁是流程性的，`Destroy()` 之后它可能在本帧内仍然存在，组件开始拆、世界引用开始清。这时候即使 `IsValid` 通过，直接操作它的组件也可能出问题。稳妥写法是 `IsValid(Actor) && !Actor->IsActorBeingDestroyed()`，两个条件都满足才继续。

**设计动机**：UE 的销毁是分阶段的：`Destroy()` 只是发起，Actor 要依次走 `EndPlay`、从世界移除、注销组件，内存回收还要等 GC。这段窗口里对象还在内存、指针非空，但已经不该被使用；C++ 的空判断只看地址，对这个窗口无能为力。`IsValid` 的设计就是把“对象自身状态”也纳入判活，给业务代码一个统一且比判空更严格的入口；Actor 的销毁中间态再额外用一个接口暴露出来。

**版本差异**：UE5 里 `IsPendingKill()` 一类旧接口被废弃，判活改为走 GC 垃圾标记相关判断；`IsValid` 的语义两代一致，迁移时不要依赖某个具体标志名。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 判断裸指针 / `TObjectPtr` | `if (IsValid(Ptr)) { ... }` |
| 判断弱指针并取用 | `if (AActor* A = WeakPtr.Get()) { ... }` |
| 只判弱指针 | `if (WeakPtr.IsValid()) { ... }` |
| 判断 Actor 是否在销毁中 | `if (Actor->IsActorBeingDestroyed()) { return; }` |
| 调试期更严格 | `IsValidChecked`（编辑器断言，发布构建行为随配置） |
| 跨帧缓存 | 每帧重新取一次，失效就 `Reset()` |

**示例说明**：以下为 HUD 类片段，依赖 `CoreMinimal.h`、`MyHUD.generated.h` 以及 `AActor`/`TWeakObjectPtr`，不能脱离工程独立编译。

```cpp
void AMyHUD::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);

    // 跨帧缓存必须用弱引用 + 每帧复查
    AActor* Target = CachedTarget.Get();          // Get 内含有效性检查
    if (!Target)
    {
        CachedTarget.Reset();
        return;
    }

    // Actor 专属：销毁流程中，指针可能还是非空的
    if (Target->IsActorBeingDestroyed())
    {
        CachedTarget.Reset();
        return;
    }

    DrawMarkerAt(Target->GetActorLocation());
}

void AMyHUD::OnTargetHit(AActor* Other)
{
    if (!IsValid(Other)) { return; }               // 比 Other != nullptr 严格
    CachedTarget = Other;                          // 赋给 TWeakObjectPtr
}
```

**可观察验证**

```cpp
// 同一时刻三种判断的结果对比
AActor* Target = CachedTarget.Get();
UE_LOG(LogTemp, Log, TEXT("raw=%d valid=%d destroying=%d"),
    Target != nullptr,
    IsValid(Target),
    Target ? Target->IsActorBeingDestroyed() : false);

// 调试期用严格版，尽早暴露问题
IsValidChecked(Target);
```

```plaintext
obj list class=AActor           # Destroy() 后对象何时从列表消失
stat gc                         # 手动 GC，观察“非空但已失效”的窗口
```

- 对目标 `Destroy()` 后下一帧打印三项：`raw` 仍可能为 1、`valid` 已经为 0——这就是“非空不等于有效”的直接证据。
- 把 `IsValid` 换回 `!= nullptr` 跑同一段 Tick：拦截失效，随后访问崩或读到半销毁状态。

### ③ 面试怎么讲

**30 秒口述稿**

> `nullptr` 只说明地址是空的，不说明对象还能用。UE 里 `Destroy()` 之后对象内存可能还没回收，指针非空但已经悬垂了，这时候判空是通过的，访问就出事。所以我统一用 `IsValid`，它会先判空，再检查对象是不是已经被标记失效，具体标志随引擎版本演进，早期常说是 `PendingKill`。Actor 还要额外看一眼销毁流程，`bActorIsBeingDestroyed` 这个窗口里对象还在但已经不能正常用了。还有一点，跨帧缓存的对象不能只在赋值时判一次，每次取用前都要重新判。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `IsValid` 能防悬垂吗？ | 对 UObject 有效，它能识别已销毁/已标记的对象；对普通堆对象、野指针无效。它防的是“对象失效”，不是所有内存错误。 |
| 为什么 Actor 要单独判断？ | Actor 的销毁是流程性的，`Destroy()` 到真正回收之间对象还在，组件和世界关系已经在拆了，需要用 `IsActorBeingDestroyed()` 额外拦一下。 |
| `IsValid` 和 `IsValidLowLevel` 区别？ | 后者检查更低层的内存和对象数组合法性，主要给调试和断言用；业务逻辑用 `IsValid`。 |
| 直接 `if (Ptr)` 行不行？ | 能编译，但语义只是判空，`Destroy()` 过的对象照样通过。想表达“可用”就用 `IsValid`。 |
| 弱指针上 `IsValid` 和 `Get` 有区别吗？ | 都要回查状态；`Get` 直接返回可用指针，一次调用就够，写 `if (auto* P = W.Get())` 更省。 |
| 发布构建里断言会消失吗？ | `check`/`ensure` 的行为随构建配置变化，业务正确性不能依赖断言，必须显式判断。 |

### ④ 真实坑

1. **用 `Ptr != nullptr` 之后访问已 `Destroy()` 的对象**：判空通过、访问崩溃，日志里看不出原因。所有 UObject 判活统一改成 `IsValid`。
2. **跨帧缓存裸指针，只在赋值时判一次**：后续帧对象被销毁，指针悬垂。缓存一律存弱引用，取用时再取裸指针。
3. **`IsValid` 与使用之间插入了可能销毁目标的代码**：比如判完有效后调用了会清场的系统函数，再用就晚了。先取局部指针，把使用区间压到最短。
4. **对非 UObject 指针套用 UE 的 `IsValid`**：语义不对，普通对象没有那些状态位。非 UObject 就用自己的生命周期管理，别混用。
5. **在非游戏线程调用弱指针的 `IsValid`**：不是线程安全的，可能读到不一致状态。跨线程要先把有效性判断放回游戏线程。

### ⑤ 练习

**A 写**：写一个 HUD，用 `TWeakObjectPtr<AActor>` 缓存目标，在 `Tick` 里安全取用并绘制，目标销毁后自动清空。总行数 20 行左右。

**提示**：① 把 `Destroy()`、判活、实际使用打上时间戳，看清窗口有多长；② Actor 判活写成 `IsValid` 加 `IsActorBeingDestroyed()` 两个条件；③ 弱指针一次 `Get()` 拿局部裸指针，别在分支里反复判。

验收标准：目标 `Destroy()` 后下一帧不再绘制且不崩溃；同一次使用中 `Get()` 只调用一次；能口头说明 `IsValid` 与 `!= nullptr` 在这段代码里分别会得到什么结果。

**B 讲**：2 分钟口述“非空不等于有效”，要覆盖三种失效来源（已销毁未回收、已标记垃圾、Actor 销毁中间态）和跨帧复查原则。

验收标准：不看稿讲完；三种来源各有一句解释；能说出为什么 Actor 需要额外判断。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-21"></a>
## U21 · Q21 TSoftObjectPtr 和 TSubclassOf 分别解决什么问题？

> 来源：题库 UE 第 21 题 ｜ 速背卡：[Q21](./速背.md#ue-q21) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：`TSoftObjectPtr` 解决“资源先别加载”，`TSubclassOf` 解决“要生成哪个类”，一个存路径，一个存类型安全的类引用。

**学完能做到**
- 写代码：用 `TSoftObjectPtr` 异步加载一个模型，用 `TSubclassOf` 在蓝图里指定要生成的项目类。
- 讲出来：说清软引用为什么不加载也不保活、加载后归谁管，以及 `TSubclassOf` 到底防住了什么错。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `TSoftObjectPtr` 是“延迟加载的指针”，用的时候会自动加载 | 它只存 `FSoftObjectPath`，必须显式 `LoadSynchronous()` 或走 `StreamableManager` |
| 软引用也会被 cook 系统顺着依赖打进包 | 软引用不保证被追踪；打包后可能“编辑器正常、包里加载失败”，要额外配置兜底 |
| `TSubclassOf<T>` 保证运行时一定能生成成功 | 类型安全只约束可选范围；字段为空照样生成失败，必须判空 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `TSoftObjectPtr<T>` 内部是 `FSoftObjectPath`（包名 + 对象名），不是指针 | 不加载、不阻止 GC，可以当字符串序列化进配置 |
| 必须显式加载：`LoadSynchronous()` 或 `StreamableManager` 异步 | 用错要么卡主线程，要么拿到空指针 |
| 加载完成后对象仍是普通 UObject，需要强引用才能保活 | 软指针字段本身永远不保活，用完可能又被回收 |
| `TSubclassOf<T>` 是 `UClass*` 的类型安全包装 | 蓝图/编辑器里只能选 `T` 的子类，减少配错类 |
| `TSubclassOf` 运行时空指针仍可能为空 | 生成前必须判空，类型安全不等于实例有效 |
| `TSoftClassPtr<T>` 是“类”的软引用 | 不要用 `TSoftObjectPtr<UClass>` 硬凑 |

软引用的价值在于把“加载”从“引用”里拆出来。开放世界或大体量项目里，配置表可能有几千条资源路径，如果都用硬引用，加载一张表就等于加载全部资源。`TSoftObjectPtr` 只保存路径，什么时候加载由业务决定：进关卡前预加载、用到时同步加载、或者交给 `StreamableManager` 异步加载并挂回调。代价是它不会自动帮你把资源打进包。硬引用会被 cook 系统顺着依赖收进去，软引用在某些流程里不会被自动追踪，所以打包后可能出现“编辑器里好好的、包里加载失败”。兜底办法是显式配置总要 cook 的目录，或者让资源同时被某个硬引用触达，具体行为视项目和引擎版本。

`TSubclassOf` 解决的是另一类问题：蓝图里要让策划指定“发射哪种子弹”，如果字段是裸 `UClass*`，编辑器里可以选到任何类，运行时 `SpawnActor` 才炸。`TSubclassOf<AProjectile>` 把可选范围限制在 `AProjectile` 及其子类，错误在编辑器阶段就暴露；同时它和 `SpawnActor` 的模板配合，返回值类型也是确定的。两者都会“为空”，但含义不同：软引用为空通常是没配置或者路径失效；`TSubclassOf` 为空是没选类。处理方式都是判空，但前者还要考虑加载失败和 cook 缺失。

**设计动机**：硬引用会让“引用”等于“加载”：配置表里写几千条资源路径，读一次表就等于把全部资源拉进内存，这在开放世界和大型项目里不可接受。`TSoftObjectPtr` 把“我知道这个资源是谁”和“我什么时候把它加载进来”拆成两步，加载时机交给业务（预加载、同步、异步流送）。`TSubclassOf` 解决另一类错误：裸 `UClass*` 让配置者能选到任何类，错误要到 `SpawnActor` 才暴露；类型包装把可选范围收窄到 `T` 及其子类，把关口提前到编辑器阶段。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 配置里写资源路径 | `UPROPERTY(EditDefaultsOnly) TSoftObjectPtr<UStaticMesh> MeshAsset;` |
| 同步加载（小资源 / 加载界面） | `UStaticMesh* M = MeshAsset.LoadSynchronous();` |
| 异步加载 | `Streamable.RequestAsyncLoad(MeshAsset.ToSoftObjectPath(), FStreamableDelegate::CreateUObject(this, &ThisClass::OnReady));` |
| 蓝图里指定要生成的类 | `UPROPERTY(EditAnywhere) TSubclassOf<AActor> ProjectileClass;` |
| 生成实例 | `GetWorld()->SpawnActor<AActor>(ProjectileClass, Loc, Rot);` |

**示例说明**：以下为武器类片段，依赖 `CoreMinimal.h`、`Weapon.generated.h`、`Engine/AssetManager.h` 与 `Engine/StreamableManager.h`；`AMyWeapon` 的 `MeshComponent`、`LoadHandle` 等成员省略，不能脱离工程独立编译。

```cpp
UPROPERTY(EditDefaultsOnly, Category = "Weapon")
TSoftObjectPtr<UStaticMesh> MeshAsset;            // 只存路径，不加载、不保活
UPROPERTY(EditDefaultsOnly, Category = "Weapon")
TSubclassOf<AActor> ProjectileClass;              // 类型安全的类引用

void AMyWeapon::Preload()
{
    if (MeshAsset.IsNull()) { return; }           // 没配置，不是加载失败
    FStreamableManager& Streamable = UAssetManager::GetStreamableManager();
    LoadHandle = Streamable.RequestAsyncLoad(
        MeshAsset.ToSoftObjectPath(),
        FStreamableDelegate::CreateUObject(this, &AMyWeapon::OnMeshReady));
}
void AMyWeapon::OnMeshReady()
{
    UStaticMesh* Mesh = MeshAsset.Get();          // 此时资源已在内存
    if (!Mesh) { return; }
    MeshComponent->SetStaticMesh(Mesh);           // 组件上的强引用负责保活
}
void AMyWeapon::Fire()
{
    if (!ProjectileClass) { return; }             // 类型安全 != 一定配置了
    GetWorld()->SpawnActor<AActor>(ProjectileClass, GetActorLocation(), GetActorRotation());
}
```

```ini
[/Script/UnrealEd.ProjectPackagingSettings]
; 软引用不保证资源被打进包，总要 cook 的目录要显式配置（具体行为视项目/引擎版本）
+DirectoriesToAlwaysCook=(Path="/Game/Weapons")
```

**可观察验证**

```cpp
// “没配置”和“加载失败”要分开看
UE_LOG(LogTemp, Log, TEXT("isNull=%d path=%s"),
    MeshAsset.IsNull(), *MeshAsset.ToString());

// TSubclassOf 的约束在编辑器阶段，运行时仍要判空
UE_LOG(LogTemp, Log, TEXT("classValid=%d"), ProjectileClass != nullptr);
```

```plaintext
Asset Audit / Reference Viewer     # 检查资源的引用关系与软引用是否被追踪
打包后跑一次加载校验：日志里搜“找不到对象”
```

- 不配置 `MeshAsset` 直接运行：`IsNull()` 为 true、`Preload()` 直接返回、不崩，说明“没配置”能被提前识别。
- 打包后实测一次软引用加载：若失败，加上 `DirectoriesToAlwaysCook` 兜底再验证，这条 ini 就是可观察的修复手段。

### ③ 面试怎么讲

**30 秒口述稿**

> `TSoftObjectPtr` 存的是路径不是指针，它不加载、也不阻止 GC，适合大资源和可选项，需要的时候用 `StreamableManager` 异步加载，加载完拿到的还是普通 UObject，要靠强引用保活。`TSubclassOf` 是 `UClass*` 的类型安全包装，用来让蓝图指定“要生成哪个类”，编辑器里只能选指定基类的子类，比裸 `UClass*` 安全。一个管资源延迟加载，一个管类引用，不要混用。两个都有坑：软引用不保证资源被打进包，`TSubclassOf` 运行时也可能为空，该判空还得判。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 软指针什么时候变成硬指针？ | 加载之后 `Get()` 拿到对象指针，并且你把它存进了 `UPROPERTY` 强引用，才真正“硬”起来；软指针字段本身永远只是路径。 |
| `TSubclassOf` 能防什么错误？ | 防编辑器/蓝图里选到不相干的类，把类型契约提前到配置阶段；运行时空指针仍然要判。 |
| 软引用会被自动 cook 进包吗？ | 不保证。硬引用会顺着依赖被收进去，软引用需要额外配置或硬引用兜底，具体规则视项目和引擎版本。 |
| 为什么不在游戏线程 `LoadSynchronous`？ | 同步加载是磁盘 IO 加反序列化，大资源会造成明显卡帧。只在加载界面或确实很小的资源上用。 |

### ④ 真实坑

1. **把 `TSoftObjectPtr` 当指针直接用**：写 `MeshAsset->GetBounds()` 编译不过，因为它是路径包装。必须先加载再 `Get()`。
2. **资源改名或移动后路径失效**：编辑器里的 redirector 能救一部分，打包后不一定。改完资源要跑一遍 cook 或加载校验。
3. **主线程 `LoadSynchronous` 大资源**：一帧里同步读盘，直接卡顿。改用 `StreamableManager` 异步加载并挂回调。
4. **`TSubclassOf` 为空直接 `SpawnActor`**：轻则返回空、重则崩，取决于调用的重载和配置。生成前一律判空并打日志。
5. **软引用资源没被 cook**：编辑器里一切正常，打包后加载失败，日志只有“找不到对象”。用 `DirectoriesToAlwaysCook` 或硬引用兜底，并在打包后实测。

### ⑤ 练习

**A 写**：给武器类加一个软引用模型和一个 `TSubclassOf` 弹丸类。`BeginPlay` 里异步加载模型，回调中设置到组件；`Fire` 里判空后生成弹丸。总行数 25 行内。

**提示**：① 先在编辑器里不配置资源跑一遍，确认只打日志不崩；② 异步回调里重新 `Get()` 一次，不要缓存回调外的裸指针；③ 打包后专门验一次软引用加载，别只信编辑器。

验收标准：不配置模型时只打日志、不崩溃；异步回调里 `Get()` 拿到非空指针并成功设置；能解释打包目录那行 ini 为什么必要。

**B 讲**：2 分钟口述“两种引用各解决什么问题”，并分别说出一种失效方式和兜底手段。

验收标准：不看稿讲完；两种引用各有一句准确的定位；失效方式与兜底手段一一对应。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ④：Actor 与 Component 生命周期](#ch9)


<a id="ch9"></a>
# 第 9 章 · UE ④：Actor 与 Component 生命周期

> 对应速背 UE 主题 04（Q22–Q28），完整答题卡见 [速背 UE 04](./速背.md#ue-t04)。
> 上一篇：[UE ③：引用类型与智能指针](#ch8) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-22"></a>
## U22 · Q22 讲一下 Actor 的完整生命周期。

> 来源：题库 UE 第 22 题 ｜ 速背卡：[Q22](./速背.md#ue-q22) ｜ 耗时 18 min ｜ 难度 ★★☆

**一句话**：Actor 的生命周期是一条单向流水线——构造只决定“长什么样”，初始化才连上世界，BeginPlay 才开始“做什么”，EndPlay 负责“收干净”。

**学完能做到**
- 写代码：给一个 Actor 在每个阶段打日志，验证 Load 与 Spawn 两条路径的差异。
- 讲出来：按顺序背出六个初始化回调、三个结束回调，并说清哪两步顺序不保证。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `PostLoad` 是所有 Actor 的通用初始化钩子 | 只对从磁盘反序列化的对象生效（关卡加载、蓝图生成）；运行期 `SpawnActor` 走 `PostActorCreated`，根本不调 `PostLoad` |
| `BeginPlay` 的先后能靠关卡摆放顺序或层级保证 | Actor 之间的 `BeginPlay` 顺序无保证；跨 Actor 依赖要用 GameMode 统一调度或委托回调 |
| `EndPlay`、`Destroyed`、`BeginDestroy` 的先后都能依赖 | 能依赖的只有 `EndPlay` 在 `Destroyed` 之前、`Destroyed` 在回收之前；`BeginDestroy` 与 `FinishDestroy` 的顺序不保证 |

### ① 本质

| 阶段 | 触发时机 | 此刻的状态 |
| --- | --- | --- |
| 构造函数 | CDO 创建、每次实例化、蓝图重编译 | 没有 World、没有 Level，只能定默认值 |
| `PostLoad` | 只对从磁盘反序列化的对象（关卡加载、蓝图生成） | 成员数据已还原，组件尚未注册 |
| `PreInitializeComponents`、`InitializeComponent` | 关卡就绪，组件逐个初始化 | 组件还没全部就绪，不能遍历组件数组做逻辑 |
| `PostInitializeComponents` | 所有组件初始化之后 | World 可用、组件已注册，第一个安全的业务钩子 |
| `BeginPlay` | 世界开始 Play，或游戏开始后 Spawn 完成 | 逻辑起点，跨 Actor 顺序无保证 |
| `EndPlay` → `Destroyed` → `BeginDestroy`/`FinishDestroy` | Destroy、切关卡、PIE 结束、退出 | 清理与回收，后两步顺序不保证 |

这条顺序的根源是 Actor 本身是 UObject：构造、`PostLoad`、GC 回收都继承自 UObject 的生命周期。UE 在其上又叠了两层概念——“组件必须注册进 World”和“游戏必须真的开始”——于是多出了 `InitializeComponents` 和 `BeginPlay` 两个分界：编辑器里打开地图会构造 Actor、注册组件，但不会跑玩法逻辑；只有世界真正进入 Play，`BeginPlay` 才会被调用。

Spawn 与 Load 的结构性差异只有一处：`PostActorCreated`。它标记“这个对象刚刚被创建出来”，给需要区分“新生成”与“从磁盘读出来”的逻辑一个钩子；反过来 `PostLoad` 在 Spawn 路径上根本不会被调用。所以任何写在 `PostLoad` 里的修正逻辑，对运行期生成的 Actor 都是失效的。

销毁阶段刻意不保证 `BeginDestroy` 与 `FinishDestroy` 的先后，因为 GC 是无序回收的。能保证的只有两条：`EndPlay` 一定在 `Destroyed` 广播之前，`Destroyed` 一定在对象被回收之前。把清理逻辑放在“能保证”的位置，是这一题最重要的工程结论。

**设计动机**：Actor 是 UObject，但它的初始化还取决于两件外部事实——组件是否注册进 World、游戏是否真的开始——而编辑器打开地图时这两件都不成立。引擎于是把初始化拆成 `InitializeComponents`（组件装好）与 `BeginPlay`（世界开始玩）两个分界，并把结束统一收口到与 `BeginPlay` 对称的 `EndPlay`：既能覆盖 Destroy、切图、PIE 结束等所有路径，又让清理逻辑有一个必然触发的位置。

**版本差异**：UE5 默认增量 GC（标记分帧、清理按时间片），对象从标记待销毁到内存真正回收可能跨帧；UE4 传统模式多为单帧全量 GC。`EndPlay` → `Destroyed` → `BeginDestroy`/`FinishDestroy` 的顺序两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 设默认值、建默认组件 | 构造函数 + `CreateDefaultSubobject` |
| 修正反序列化后的数据 | 重写 `PostLoad`（只对 Load 生效） |
| 缓存组件引用、绑组件委托 | `PostInitializeComponents` |
| 启动玩法、生成 Actor、开 tick | `BeginPlay` |
| 解绑委托、停定时器、清引用 | `EndPlay(EEndPlayReason)` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Engine` 与 UHT 生成的 `ProbeActor.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS()
class AProbeActor : public AActor
{
    GENERATED_BODY()
public:
    AProbeActor()
    {
        PrimaryActorTick.bCanEverTick = false;
        UE_LOG(LogTemp, Log, TEXT("[%s] Constructor"), *GetName());
    }

    virtual void PostLoad() override
    {
        Super::PostLoad();
        // 只有从磁盘加载才会走到这里，Spawn 不会
        UE_LOG(LogTemp, Log, TEXT("[%s] PostLoad"), *GetName());
    }

    virtual void BeginPlay() override
    {
        Super::BeginPlay();
        UE_LOG(LogTemp, Log, TEXT("[%s] BeginPlay"), *GetName());
    }

    virtual void EndPlay(const EEndPlayReason::Type Reason) override
    {
        UE_LOG(LogTemp, Log, TEXT("[%s] EndPlay"), *GetName());
        Super::EndPlay(Reason);   // 必须调 Super，否则组件收不到 EndPlay
    }
};
```

出处：Epic 官方文档《Unreal Engine Actor Lifecycle》给出的正是这张阶段表；`PostLoad` 的触发条件见 UObject 序列化说明。

**可观察验证**

```cpp
// 每个阶段打在同一个前缀下，Output Log 里按时间排序即可还原顺序
UE_LOG(LogTemp, Log, TEXT("[Lifecycle] BeginPlay %s"), *GetName());
UE_LOG(LogTemp, Log, TEXT("[Lifecycle] EndPlay %s reason=%d"),
    *GetName(), static_cast<int32>(Reason));
```

```plaintext
stat game        # Game 线程各阶段耗时，观察初始化/销毁帧
stat unit        # Frame/Game/Draw 三分，判断是否 Game 线程受限
```

- 关卡加载后看 Output Log：Load 出来的实例出现 `PostLoad`，PIE 里 `SpawnActor` 出来的实例没有。
- 反复进出 PIE：每个实例的 `BeginPlay`/`EndPlay` 成对出现，`BeginPlay` 的相对顺序可能变化。

### ③ 面试怎么讲

**30 秒口述稿**

> Actor 生命周期分两段。加载路径是构造函数、PostLoad、PreInitializeComponents、每个组件 InitializeComponent、PostInitializeComponents、BeginPlay；Spawn 路径只多一个 PostActorCreated，后面完全一样。销毁时先 EndPlay 带 Reason，再广播 Destroyed，标记待销毁、本帧末从关卡移除，最后 BeginDestroy、FinishDestroy 交给 GC，这两步顺序不保证。要记住两个无保证：Actor 之间的初始化顺序、BeginPlay 的先后，都别赌。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Spawn 和 Load 差在哪？ | Spawn 走 `PostActorCreated`、不调 `PostLoad`；Load 反过来，且数据来自磁盘而非默认值。 |
| BeginPlay 一定只调一次吗？ | 单个 Play 会话内是一次。但 PIE 反复进出、Actor 被放进另一个 World 时，会对应新会话再触发；所以别拿它做全局只注册一次的初始化。 |
| EndPlay 一定被调吗？ | 正常结束路径都会（Destroy、切图、PIE 结束、退出）；进程被强杀不会。 |

### ④ 真实坑

1. **在 BeginPlay 里找别的 Actor**：`BeginPlay` 顺序无保证，对方可能还没初始化，读到空数据。正确做法是让 GameMode 统一调度，或用委托在对方就绪后回调。
2. **把 `PostLoad` 当通用初始化**：运行期 `SpawnActor` 的 Actor 永远不触发 `PostLoad`，修正逻辑只对关卡里的对象生效，行为在不同来源的 Actor 上不一致。
3. **`EndPlay` 忘调 `Super`**：组件收不到 `EndPlay`，定时器、委托、子组件 tick 全部残留；这类泄漏在 PIE 里最容易被忽略。
4. **以为 Destroy 后裸指针会变空**：对象只是被标记为垃圾，内存仍在，`if (Actor)` 依然为真。要用 `IsValid` 或 `TWeakObjectPtr`。

### ⑤ 练习

**A 写**：写一个 `AProbeActor`，按上面的骨架在六个阶段打日志；在关卡里放两个实例，另在 GameMode 的 `BeginPlay` 里再 Spawn 一个。要求日志带 `GetName()`，能区分 CDO、关卡实例和运行期实例。

**提示**：① 六个阶段用统一前缀（如 `[Lifecycle]`）并带 `GetName()`，Output Log 才能按时间还原顺序；② 别用 `Warning`/`Error` 级别打点，否则编辑器弹消息框会打断连续观察；③ 想看 Spawn 与 Load 的差异，就在 GameMode 的 `BeginPlay` 里生成一个，和关卡里摆的实例对比日志。

验收标准：日志里能看到 Spawn 出来的 Actor 没有 `PostLoad`；两个关卡实例的 `BeginPlay` 相对顺序在多次运行中可能变化；按 PIE 停止时每个 Actor 都有且只有一次 `EndPlay`。

**B 讲**：2 分钟口述完整生命周期，必须按“加载路径、Spawn 差异、销毁路径、两处无保证”四段组织，并主动说出“清理只能放 EndPlay”。

验收标准：不看稿；六个初始化回调顺序正确；能立刻答出 `PostLoad` 为什么在 Spawn 路径缺失。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-23"></a>
## U23 · Q23 构造函数里能做什么、不能做什么？

> 来源：题库 UE 第 23 题 ｜ 速背卡：[Q23](./速背.md#ue-q23) ｜ 耗时 15 min ｜ 难度 ★☆☆

**一句话**：构造函数运行在“没有 World、没有关卡、组件还没注册”的真空中，所以它只能定义对象的默认形态，任何需要外部世界的行为都必须推迟。

**学完能做到**
- 写代码：在构造函数里识别 CDO，安全地建默认组件并设置 tick 开关。
- 讲出来：用一条判断标准区分“能放构造函数”和“必须放 BeginPlay”的代码。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 构造函数只跑一次，可以顺手做全局注册 | CDO、每个实例、蓝图重编译都会构造；副作用成倍出现，必须幂等 |
| `if (GetWorld())` 判空后就能在构造函数里做 World 逻辑 | `World` 恒为空，判空只是让代码静默不执行，比直接崩更难查 |
| 构造函数里读到的成员值就是编辑器里配好的值 | 序列化在构造之后才覆盖成员，这里读到的是代码默认值 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 构造函数会在 CDO 和每个实例上各跑一次，蓝图重编译还会再造 CDO | 静态计数、全局注册、日志这类副作用会成倍出现，必须幂等 |
| CDO 构造时没有 Level、没有 World | `GetWorld()` 为空，`SpawnActor`、射线、导航、计时器全部不可用 |
| 默认组件只能在此阶段用 `CreateDefaultSubobject` 创建 | 运行期加组件要走 `NewObject` + `RegisterComponent`，两套路径不能混用 |
| 序列化数据在构造之后才覆盖成员 | 构造函数里读编辑器改过的值，读到的是默认值 |

为什么引擎允许它跑这么多次：Actor 是 UObject，CDO 是类的“默认样板”。蓝图编译时编辑器会重建 CDO 来对比差异、刷新实例，因此构造函数在编辑器里的调用次数远超直觉。任何“构造即注册到全局管理器”的写法，都会在编辑器里积累出成百上千条幽灵记录。

真正能安全做的只有三类：给成员设默认值、用 `CreateDefaultSubobject` 建默认组件、设置不依赖外部世界的类级开关（`bReplicates`、`PrimaryActorTick.bCanEverTick`、碰撞配置等）。它们只描述自己，不查询别人。被禁止的操作也能归成一条判断标准：是否需要 World，或是否需要别的对象已经存在。`GetWorld()->GetTimerManager()`、`FindActor`、`SpawnActor`、依赖玩家控制器的逻辑，全都属于此类。

`ConstructorHelpers::FObjectFinder` 是唯一“看起来属于构造函数”的资源 API，但它本质是一次同步 `LoadObject`，会把资源硬引用进包。滥用会让关卡加载变慢、内存常驻；能用编辑器里指定的 `UPROPERTY` 引用，就不要在构造函数里查资源。

**设计动机**：CDO 是每个实例的“样板”——蓝图子类、Spawn、序列化都从它复制属性。要让复制结果一致，构造函数就只能描述“自己长什么样”（成员默认值、默认组件、类级开关），不能查询外部世界；一旦允许它依赖 World，CDO 阶段就无处安放，实例行为也会随加载顺序漂移。这就是“构造函数只做幂等的自我描述”这条边界的来源。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 设默认成员值 | 类内默认值或初始化列表 |
| 建默认组件 | `CreateDefaultSubobject<T>(TEXT("唯一名字"))` |
| 设 tick、复制开关 | 构造函数里改 `PrimaryActorTick` / `bReplicates` |
| 依赖 World 的初始化 | 移到 `PostInitializeComponents` / `BeginPlay` |
| 运行期加组件 | `NewObject` + `SetupAttachment` + `RegisterComponent` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Character.h` 与 UHT 生成的 `MyEnemy.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS()
class AMyEnemy : public ACharacter
{
    GENERATED_BODY()
public:
    AMyEnemy()
    {
        PrimaryActorTick.bCanEverTick = true;
        PrimaryActorTick.bStartWithTickEnabled = false;  // 先关，BeginPlay 再开
        bReplicates = true;

        Weapon = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Weapon"));
        Weapon->SetupAttachment(GetMesh(), TEXT("hand_r"));

        // CDO 构造时 World 一定为空；实例构造时通常也为空
        UE_LOG(LogTemp, Log, TEXT("%s: World=%s, CDO=%d"), *GetName(),
            GetWorld() ? TEXT("valid") : TEXT("null"),
            HasAnyFlags(RF_ClassDefaultObject) ? 1 : 0);
    }

protected:
    virtual void BeginPlay() override
    {
        Super::BeginPlay();
        SetActorTickEnabled(true);   // 真正开始游戏逻辑
    }

private:
    UPROPERTY()
    TObjectPtr<UStaticMeshComponent> Weapon;
};
```

出处：Epic 官方文档《Unreal Engine Actor Lifecycle》明确说明构造函数阶段 World 不可用；`CreateDefaultSubobject` 只能在构造函数中调用，见 `UObject` API 说明。

**可观察验证**

```cpp
// 构造函数里只有这两件事是稳定的：CDO 标记、空 World
UE_LOG(LogTemp, Log, TEXT("Ctor %s: CDO=%d World=%s"), *GetName(),
    HasAnyFlags(RF_ClassDefaultObject) ? 1 : 0,
    GetWorld() ? TEXT("valid") : TEXT("null"));

// 默认组件在构造后就能按名字找到（运行期组件此时还不存在）
UE_LOG(LogTemp, Log, TEXT("Weapon=%s"), *GetNameSafe(Weapon));
```

```plaintext
obj list class=AMyEnemy    # 对照实例与 CDO 的数量
stat game                  # 确认构造期没有副作用堆积
```

- 打开蓝图编辑器并反复编译，看构造日志条数增长：每次重编译都会再造一次 CDO，这是“副作用必须幂等”的直接证据。
- `GetWorld()` 在所有构造日志里都是 `null`，包括 `SpawnActor` 出来的实例。

### ③ 面试怎么讲

**30 秒口述稿**

> 构造函数在 CDO 和每个实例上都会跑，这时 World 还没有，组件也没注册。所以只能初始化成员默认值、用 CreateDefaultSubobject 建默认组件、设置层级和默认属性。不能 GetWorld、不能 SpawnActor、不能查其他 Actor、不能调依赖 World 的 API，也不写游戏逻辑，那些放 BeginPlay 或 PostInitializeComponents。判断标准就一条：这段代码是否依赖 World 或依赖别的对象已存在，依赖就往后放。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么构造函数会跑两次？ | 一次是 CDO，一次是实例；编辑器里蓝图重编译还会再构造 CDO，所以可能是很多次。 |
| 构造函数里 LoadObject 行不行？ | 能编译，但会同步阻塞加载、可能引发递归加载，CDO 阶段加载的资源还会常驻；改成 `UPROPERTY` 硬引用或提前异步加载。 |
| 能在构造函数里绑委托吗？ | 绑自己的组件可以，但 CDO 上绑的没有意义；依赖外部对象的绑定必须放 PIC 或 BeginPlay。 |
| 构造函数里能 SpawnActor 吗？ | 不能，`GetWorld()` 为空，加判空后也只是“静默不生成”。 |

### ④ 真实坑

1. **构造函数里写全局注册**：编辑器打开蓝图就注册一次，每次编译再注册一次，管理器里堆满失效指针。
2. **用判空“修好”构造函数里的 World 调用**：`if (GetWorld())` 让代码不崩，但逻辑永远不执行，比崩溃更难查。
3. **`CreateDefaultSubobject` 名字重复**：两个组件用同一个名字会断言或互相覆盖，报错信息指向不明显。
4. **在构造函数里读编辑器配置**：序列化在构造之后完成，读到的是代码默认值，导致“编辑器里改了却没生效”。

### ⑤ 练习

**A 写**：写一个 Actor，构造函数里打印 `HasAnyFlags(RF_ClassDefaultObject)` 和 `GetWorld() == nullptr`，并加一个 `static int32` 计数器；在关卡里放两个实例，再创建一个蓝图子类。

**提示**：① 用 `static int32` 计数器 + `HasAnyFlags(RF_ClassDefaultObject)` 同时打点，一眼分清 CDO 与实例；② 需要读编辑器配置的值就放到 `PostInitializeComponents`/`BeginPlay`，构造函数里读到的一定是代码默认值；③ 构造日志用 `Verbose` 或只在 `WITH_EDITOR` 下打，避免运行时被刷屏。

验收标准：日志能区分 CDO 构造与实例构造；`GetWorld()` 在所有构造调用中都为空；能解释为什么计数器数值大于“实例数 + 1”。

**B 讲**：2 分钟讲“构造函数的能力边界”。必须给出那条判断标准（是否依赖 World / 是否依赖其他对象已存在），并举一个把逻辑从构造函数挪到 `BeginPlay` 的具体例子。

验收标准：不看稿；能说出三类允许的操作；能解释 CDO 为什么让副作用翻倍。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-24"></a>
## U24 · Q24 BeginPlay 和 PostInitializeComponents 有什么区别？

> 来源：题库 UE 第 24 题 ｜ 速背卡：[Q24](./速背.md#ue-q24) ｜ 耗时 16 min ｜ 难度 ★★☆

**一句话**：`PostInitializeComponents` 说的是“我的组件都装好了”，`BeginPlay` 说的是“游戏开始了”；前者解决自身依赖，后者才是逻辑起点，两者都不保证别的 Actor 已就绪。

**学完能做到**
- 写代码：在 PIC 里缓存组件并绑委托，在 BeginPlay 里启动玩法，在 EndPlay 里对称解绑。
- 讲出来：说清两个回调的时机差、能力差，以及为什么跨 Actor 依赖两边都不能赌。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| PIC 比 BeginPlay 早，所以能安全拿到别的 Actor 的初始化结果 | 它只保证本 Actor 组件就绪；跨 Actor 依赖两边都不能赌 |
| 组件的 BeginPlay 先于 Actor 的 BeginPlay | Actor 的 BeginPlay 先跑、再派发组件的 BeginPlay；在 `Actor::BeginPlay` 里读组件 BeginPlay 的产物会读到未初始化值 |
| 关卡加载和运行期 Spawn 走同一套顺序 | 关卡加载时所有 Actor 的初始化跑完才统一派发 BeginPlay；Spawn 的 BeginPlay 紧跟 PIC 同步执行 |

### ① 本质

| 维度 | `PostInitializeComponents` | `BeginPlay` |
| --- | --- | --- |
| 时机 | 本 Actor 所有组件 `InitializeComponent` 之后，`BeginPlay` 之前 | 世界开始 Play，或游戏开始后 Spawn 完成初始化时 |
| World | 可用 | 可用 |
| 组件状态 | 已注册，可 `FindComponentByClass` | 已注册；但 Actor 的 BeginPlay 早于自己组件的 BeginPlay |
| 关卡级保证 | 只保证自己的组件就绪 | 只保证本 Actor 已初始化 |
| 适合做的事 | 缓存组件、绑组件委托、修正组件参数 | 启动玩法、生成 Actor、开 tick、播动画 |

为什么需要 PIC：Actor 是由多个组件拼装出来的，组件自己的 `InitializeComponent` 需要一个“全部装完”的汇合点，这个汇合点就是 PIC；在它之前遍历组件数组是危险的，因为数组可能还在增长。而 BeginPlay 解决的是另一半问题：编辑器和加载阶段 Actor 已经构造完毕，但游戏没开始——打开编辑器不能刷怪、不能播音效、不能发网络请求。`BeginPlay` 是“世界真的开始玩了”的唯一信号。

关卡加载时，引擎会先把所有 Actor 的初始化阶段跑完，再统一派发 BeginPlay，所以任何 PIC 都早于任何 BeginPlay。但 BeginPlay 之间的相对顺序没有保证，跨 Actor 依赖仍然要靠委托、接口或延迟一帧。

运行期 Spawn 的 Actor 不参与这个批量流程：它的 BeginPlay 紧跟在 PIC 之后同步执行，此时别的 Actor 早就跑完 BeginPlay 了。这是“关卡内对象”和“晚生成对象”最大的行为差异，也是同一个类在两种来源下表现不同的常见原因。

**设计动机**：一个 Actor 由多个组件拼装而成，组件需要一个“全部装完”的汇合点，才能安全地做缓存和绑定委托——这就是 `PostInitializeComponents`；而编辑器打开地图时 Actor 已构造、组件已注册，游戏却还没开始，所以还需要一个“世界真的开始玩”的信号——这就是 `BeginPlay`。两个钩子分别解决“自身就绪”和“世界就绪”，合成一个就会让编辑器里误跑玩法逻辑。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 绑组件委托 | PIC 里 `AddDynamic`，`EndPlay` 里 `RemoveDynamic` |
| 生成 Actor、开玩法 | `BeginPlay` |
| 依赖关卡里所有 Actor 都就绪 | GameMode 的 `StartPlay`，或延迟一帧 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与 `AMyTower`、`UHealthComponent` 所属头文件，不能脱离工程独立编译。

```cpp
void AMyTower::PostInitializeComponents()
{
    Super::PostInitializeComponents();

    // 组件已注册，这里拿到的指针在本 Actor 生命周期内有效
    HealthComp = FindComponentByClass<UHealthComponent>();
    if (HealthComp)
    {
        HealthComp->OnHealthZero.AddDynamic(this, &AMyTower::HandleDeath);
    }
}

void AMyTower::BeginPlay()
{
    Super::BeginPlay();
    SetActorTickEnabled(true);

    // 不要在这里遍历别的 Actor 并假设它已经 BeginPlay
    if (AMyGameMode* GM = GetWorld()->GetAuthGameMode<AMyGameMode>())
    {
        GM->RegisterTower(this);   // 交给 GameMode 统一调度
    }
}

void AMyTower::EndPlay(const EEndPlayReason::Type Reason)
{
    if (HealthComp)
    {
        HealthComp->OnHealthZero.RemoveDynamic(this, &AMyTower::HandleDeath);
    }
    Super::EndPlay(Reason);
}
```

出处：Epic 官方文档《Unreal Engine Actor Lifecycle》对这两个阶段的定位；`AActor::BeginPlay` 派发组件 BeginPlay 的行为见 `AActor` API 说明。

**可观察验证**

```cpp
// 两个回调各一条日志，谁的时机更早、各自能拿到什么，一眼可见
UE_LOG(LogTemp, Log, TEXT("[PIC] %s HealthComp=%s"),
    *GetName(), *GetNameSafe(HealthComp));
UE_LOG(LogTemp, Log, TEXT("[BeginPlay] %s HealthComp=%s"),
    *GetName(), *GetNameSafe(HealthComp));
```

```plaintext
stat game    # BeginPlay 集中派发时的加载帧耗时
```

- 关卡里放 A、B 两个互相依赖的 Actor：A 在 PIC 里缓存 B，在 BeginPlay 里读 B 在 BeginPlay 才赋的值，能复现“拿得到指针、拿到旧值”。
- 运行期 Spawn 同一个类：日志里 PIC 与 BeginPlay 紧挨着出现，而关卡实例早已 BeginPlay。

### ③ 面试怎么讲

**30 秒口述稿**

> PostInitializeComponents 在组件都初始化完之后调用，这时 World 可用、组件已注册，但还没 BeginPlay，适合做依赖组件的初始化和绑定委托。BeginPlay 是关卡开始玩时调用，适合启动游戏逻辑。两者都可能早于其他 Actor 的 BeginPlay，跨 Actor 的依赖要用委托或延迟一帧。一句话记：PIC 管自己，BeginPlay 管玩法。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 哪个更早？ | PIC 一定更早；关卡加载时所有 Actor 的 PIC 都早于任何 BeginPlay。 |
| 为什么不在 PIC 里生成 Actor？ | 技术上 World 可用、能生成，但你无法确定其他 Actor 是否就绪，而且生成发生在初始化循环里，容易出现顺序和计数上的意外。统一放 BeginPlay 或 GameMode 更稳。 |
| BeginPlay 里能拿到别的 Actor 吗？ | 能拿到对象，但不保证它已经 BeginPlay；拿组件和数据可以，拿“它初始化后的结果”不行。 |
| 自己组件的 BeginPlay 在 Actor 的 BeginPlay 之前还是之后？ | 之后。Actor 的 BeginPlay 先跑，再派发组件 BeginPlay。 |

### ④ 真实坑

1. **BeginPlay 里遍历 Actors 找队友**：顺序问题导致一半概率找不到，改用 GameMode 注册或委托。
2. **在 PIC 里生成 Actor，生成的 Actor 又在 PIC 里生成**：递归膨胀，关卡加载时间翻倍。
3. **在 Actor::BeginPlay 里用组件 BeginPlay 的产物**：组件还没 BeginPlay，读到未初始化的成员。
4. **BeginPlay 才绑组件委托**：组件在 BeginPlay 之前已经发过事件，早期事件被丢掉；需要初始状态就在 PIC 里主动读一次。

### ⑤ 练习

**A 写**：场景里放 A、B 两个 Actor。A 在 `PostInitializeComponents` 里找 B 并缓存指针，在 `BeginPlay` 里读取 B 上由 B 的 BeginPlay 才赋值的成员；再改成 A 延迟一帧读取。

**提示**：① 绑组件委托放 PIC、解绑放 `EndPlay`，用同一个函数指针，避免漏解；② 需要“所有 Actor 都就绪”就用 GameMode 的 `StartPlay` 或延迟一帧，不要在 `BeginPlay` 里轮询；③ PIC 里打一条带组件名的日志，确认 `FindComponentByClass` 拿到的不是空。

验收标准：能复现“PIC 里拿得到 B 的指针、但拿不到 B 的 BeginPlay 结果”；延迟一帧后读到正确值；换成委托回调同样正确。

**B 讲**：2 分钟对比两个回调。必须覆盖时机、能力、跨 Actor 保证三层，并解释“为什么 PIC 早于 BeginPlay，但仍然不能依赖别的 Actor”。

验收标准：不看稿；能说出组件 BeginPlay 在 Actor BeginPlay 之后；能给出一个必须放 PIC 而不能放 BeginPlay 的场景。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-25"></a>
## U25 · Q25 Actor 的 Tick 是怎么被调用的？

> 来源：题库 UE 第 25 题 ｜ 速背卡：[Q25](./速背.md#ue-q25) ｜ 耗时 17 min ｜ 难度 ★★☆

**一句话**：Tick 不是“每帧自动调用”，而是 TickManager 按 TickGroup 收集、排序后批量派发的任务；开不开、多久一次、暂停跑不跑，全由 `PrimaryActorTick` 决定。

**学完能做到**
- 写代码：给一个 Actor 配出“每帧 / 降频 / 关闭”三种 tick 模式并统计执行次数。
- 讲出来：说出 TickGroup 的作用、`TickInterval` 的代价，以及为什么 Tick 里不能做查找。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 运行期 `SetActorTickEnabled(true)` 就能让任何 Actor 开始 tick | `bCanEverTick = false` 时 tick 函数根本没注册，运行期再开也不生效 |
| `TickInterval` 是精确定时器 | 它靠累积时间跳帧执行，实际间隔被帧长量化，掉帧时抖动明显 |
| 关掉 Actor tick 就省掉了这个 Actor 的全部每帧开销 | 组件的 `PrimaryComponentTick` 独立注册，仍会执行 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Tick 函数由 TickManager 按 TickGroup 分桶，组内按注册顺序和前置依赖派发 | 组间有明确先后，组内顺序不可依赖 |
| `bCanEverTick = false` 时根本不注册 tick 函数 | 运行期再打开也不生效，必须在构造函数里设好 |
| `TickInterval > 0` 会累积时间后跳帧执行 | 能降频省 CPU，但不是精确定时器 |
| `bTickEvenWhenPaused` 决定暂停时是否继续 | UI、相机需要，普通玩法对象通常不需要 |
| 组件有独立的 `PrimaryComponentTick` | Actor tick 关掉不代表组件不 tick |

TickGroup 存在的意义是给“和物理相关”的更新定顺序：PrePhysics 改 Transform，StartPhysics / DuringPhysics 与物理交互，PostPhysics 读物理结果，PostUpdateWork 做最后的相机与 UI 修正。默认 Actor 落在 PrePhysics。TickManager 每帧收集所有启用的 tick 函数，按组排序后依序执行；`AddPrerequisite` 能在同一组内建立偏序，这是“我的 Actor 必须在另一个之后 tick”的唯一正确写法，靠 Spawn 顺序或层级顺序都是碰运气。

`TickInterval` 不是定时器：累积到间隔才执行，实际间隔会被帧长量化，掉帧时抖动明显；对精度有要求就自己累计 `DeltaTime`，或者干脆用 Timer。另外，间隔执行时传进来的 `DeltaSeconds` 语义视引擎版本而定，别假设它一定等于 `TickInterval`。性能上，Tick 的成本不只是函数体，还有 tick 函数的注册、排序和虚调用，几百个空 Tick 也能测出可观开销，所以“不需要就别开”是硬规则；把每帧逻辑挪到事件、委托、Timer 上，通常比优化 Tick 内部更有效。

**设计动机**：每帧要更新的对象成千上万，其中不少更新还有物理顺序要求（先改 Transform 再模拟、先读物理结果再摆相机）。引擎于是把 Tick 统一收进 TickManager：按 `TickGroup` 分桶给出粗粒度顺序，桶内用 `AddPrerequisite` 表达偏序，再批量派发——既控制组间先后，又不必给每个对象维护一条排序链。代价是“每帧调用”成为稀缺资源，所以默认关闭、需要才开。

**版本差异**：设了 `TickInterval` 时，间隔执行那一帧传入的 `DeltaSeconds` 语义在 UE4/UE5 各版本间并不一致（有版本给实际帧长、有版本给接近间隔的值），跨版本移植的计时逻辑要按目标版本实测，别写死假设。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 彻底关闭 tick | 构造函数 `PrimaryActorTick.bCanEverTick = false` |
| 运行期开关 | `SetActorTickEnabled(bool)`（前提是构造函数里 `bCanEverTick = true`） |
| 降频 | `SetActorTickInterval(0.1f)` |
| 暂停时也执行 | `PrimaryActorTick.bTickEvenWhenPaused = true` |
| 指定执行组 | `PrimaryActorTick.TickGroup = TG_PostPhysics` |
| 保证在别人之后 | `PrimaryActorTick.AddPrerequisite(Other, Other->PrimaryActorTick)` |
| 组件 tick | 构造函数 `PrimaryComponentTick.bCanEverTick = true` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `MyProjectile.generated.h`，不能脱离工程独立编译。

```cpp
AMyProjectile::AMyProjectile()
{
    PrimaryActorTick.bCanEverTick = true;
    PrimaryActorTick.bStartWithTickEnabled = false;  // 注册了但先禁用
    PrimaryActorTick.TickGroup = TG_PrePhysics;
    PrimaryActorTick.TickInterval = 0.f;             // 0 表示每帧
}

void AMyProjectile::BeginPlay()
{
    Super::BeginPlay();
    SetActorTickEnabled(true);                       // 飞行中才需要逐帧
}

void AMyProjectile::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);

    // 不要在 Tick 里 FindComponentByClass 或 GetAllActorsOfClass
    // 这些应该在 BeginPlay 缓存好
    const FVector Next = GetActorLocation() + Velocity * DeltaSeconds;
    SetActorLocation(Next, true);
}

void AMyProjectile::OnHit(UPrimitiveComponent* /*HitComp*/, AActor* /*OtherActor*/,
    UPrimitiveComponent* /*OtherComp*/, FVector /*NormalImpulse*/,
    const FHitResult& /*Hit*/)
{
    SetActorTickEnabled(false);                      // 命中后立刻停，别空转
}
```

出处：Epic 官方文档《Actor Ticking in Unreal Engine》与《Common Memory and CPU Performance Considerations》；TickGroup 枚举见 `ETickingGroup` 定义。

**可观察验证**

```cpp
// Tick 里累加计数：降频与关闭的差异直接体现在计数上
++TickCount;
UE_LOG(LogTemp, Verbose, TEXT("[Tick] %s n=%d dt=%.4f"),
    *GetName(), TickCount, DeltaSeconds);
```

```plaintext
stat game        # Game 线程各阶段耗时，含 Tick 派发
stat unit        # Frame/Game/Draw 三分，判断是否 Game 线程受限
```

- 三个对比对象：每帧 tick 的计数≈帧数，`SetActorTickInterval(0.5f)` 的明显更少，`bCanEverTick = false` 的恒为 0。
- 运行期把 `bCanEverTick` 改回 true，计数仍为 0——tick 函数从未注册，这正是必须“构造函数设 true + 先禁用”的原因。

### ③ 面试怎么讲

**30 秒口述稿**

> Tick 由 TickManager 按 TickGroup 调度，Actor 的 PrimaryActorTick 控制开关、间隔、暂停时是否也 tick。默认每帧一次，设 TickInterval 可以降频；不需要就 bCanEverTick 设 false，或者运行期 SetActorTickEnabled。Tick 里只做必须逐帧的事，能事件驱动、定时器、委托解决的都不要放 Tick。要注意 bCanEverTick 必须在构造函数里设，运行期改它不会补注册。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| TickGroup 有哪些？ | PrePhysics、StartPhysics、DuringPhysics、EndPhysics、PostPhysics、PostUpdateWork、LastDemotable，另有 NewlySpawned 用于把本帧新生成对象延后。 |
| 什么时候用 PostPhysics？ | 需要读物理模拟结果再决定表现的：相机、挂点跟随、IK 修正。 |
| 组件 tick 和 Actor tick 什么关系？ | 两套独立的 tick 函数，各自受 `bCanEverTick` 控制；可以用 `AddPrerequisite` 约束先后。 |
| `SetActorTickEnabled(false)` 后 Tick 还会调吗？ | 不会，tick 函数从调度里移除；但 Actor 仍存在，组件 tick 不受影响。 |

### ④ 真实坑

1. **运行期把 `bCanEverTick` 从 false 改 true**：tick 函数压根没注册，改了也不执行。正确写法是构造函数设 `true` + `bStartWithTickEnabled = false`。
2. **Tick 里 `FindComponentByClass` 或 `GetAllActorsOfClass`**：每帧 O(n) 遍历，项目里最典型的隐形热点。
3. **把 TickInterval 当精确定时器**：低帧率下累积误差被放大，节奏类玩法直接失准。
4. **暂停时仍在跑 tick 却没做暂停判断**：暂停菜单背后逻辑继续推进，存档状态被改。

### ⑤ 练习

**A 写**：一个 Actor 里放三个子对象配置：A 每帧 tick、B 用 `SetActorTickInterval(0.5f)`、C 在构造函数里 `bCanEverTick = false`。三者都在 Tick 里累加计数，运行 10 秒后打印。

**提示**：① 想“注册但不跑”就用 `bCanEverTick = true` + `bStartWithTickEnabled = false`，运行期再 `SetActorTickEnabled`；② 降频先用 `SetActorTickInterval` 看收益，真要精确定时改用 `FTimerManager`；③ Tick 里只做逐帧必需的事，查找类操作在 `BeginPlay`/PIC 里缓存好。

验收标准：A 的计数约等于帧数，B 约为帧数的二十分之一，C 恒为 0；用 `stat game` 能看到 A、B 的开销而 C 不出现；把 C 运行期改成 `bCanEverTick = true` 后仍然不 tick，能解释原因。

**B 讲**：2 分钟讲“Tick 调度与性能”。必须覆盖 TickGroup 的作用、三种关闭/降频手段、以及一条“什么逻辑不该放 Tick”的判断。

验收标准：不看稿；能说出 `bCanEverTick` 与 `SetActorTickEnabled` 的区别；能举一个用 Timer 替代 Tick 的例子。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-26"></a>
## U26 · Q26 EndPlay 和 Destroy 有什么区别？

> 来源：题库 UE 第 26 题 ｜ 速背卡：[Q26](./速背.md#ue-q26) ｜ 耗时 16 min ｜ 难度 ★★☆

**一句话**：Destroy 只是“请求销毁”的一个入口，真正该重写的是 EndPlay——它覆盖 Destroy、切关卡、退出等所有结束路径，而 Destroyed 广播和 GC 回收都在它之后。

**学完能做到**
- 写代码：把定时器和委托清理集中到 EndPlay，并验证切关卡时同样生效。
- 讲出来：说出 EndPlay 的五个 Reason、Destroy 之后对象的真实状态。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 重写 `Destroy()` 就能覆盖所有销毁路径 | 切关卡、PIE 结束、退出都不经过 `Destroy`；清理必须放 `EndPlay` |
| `Destroy` 之后裸指针会变成 `nullptr` | 对象只是被标记待销毁并从关卡移除，内存仍在；判存活要用 `IsValid` |
| `EndPlay` 不保证被调用，所以清理可以放别处 | 正常结束路径都会触发 `EndPlay`，它是与 `BeginPlay` 对称的唯一清理点 |

### ① 本质

| 步骤 | 做什么 | 注意 |
| --- | --- | --- |
| `Destroy()` | 转调 `World->DestroyActor`，做合法性检查 | 不是清理点，且多种结束路径会绕过它 |
| `EndPlay(Reason)` | 解绑委托、停定时器、清引用 | 正常生命周期一次，必须调 `Super` |
| `Destroyed` 广播 | `OnDestroyed` 通知外部监听者 | 在 EndPlay 之后，此时对象仍可访问 |
| 标记待销毁、注销组件 | 从关卡 Actors 数组移除、组件反注册 | 本帧末完成，不是立刻释放内存 |
| `BeginDestroy` / `FinishDestroy` | 释放 UObject 持有的资源，等待 GC | 时机与相对顺序不保证 |

`EEndPlayReason` 是“为什么结束”的上下文：`Destroyed` 表示被 `Destroy`，`LevelTransition` 表示切图，`EndPlayInEditor` 表示 PIE 结束，`RemovedFromWorld` 表示从世界移除，`Quit` 表示退出。同一份清理逻辑要能吃下所有 Reason，不能只在 `Destroyed` 分支里做事。

为什么不能重写 `Destroy`：`Destroy` 只是众多结束路径中的一条。切关卡、PIE 停止、世界销毁都不会经过它，重写它会漏掉大半场景。`EndPlay` 是引擎保证的对称回调——有 BeginPlay 就一定有 EndPlay，这才是清理的唯一正确位置。

Destroy 之后对象不是立刻消失：它被标记成垃圾、从关卡的 Actors 数组移除，内存要等 GC 才释放。所以裸指针 `!= nullptr` 仍然为真，用 `if (Actor)` 判存活是错的；要用 `IsValid`，长期持有则用 `TWeakObjectPtr`。

`UPROPERTY` 的对象指针也不会因为目标被 Destroy 就自动置空。它只是一个被 GC 追踪的引用，目标变成垃圾后指针值仍在，直到你手动置空或对象内存被回收。这正是“销毁后访问崩溃”最常见的成因。

**设计动机**：销毁的触发源不止一个（显式 `Destroy`、切图、PIE 停止、退出），而清理必须对所有路径都成立。引擎因此把“为什么结束”做成 `EndPlay(EEndPlayReason)` 的参数，把清理收口到与 `BeginPlay` 严格对称的 `EndPlay`，`Destroy` 只保留“请求销毁”的入口语义。这样重写 `Destroy` 就只是众多路径中的一条，不能成为清理的依赖点。

**版本差异**：UE5 起“待回收”标记统一为 `MarkAsGarbage`（旧版 `MarkPendingKill`）；`Destroy()` → `EndPlay` → `Destroyed` 广播 → GC 回收的流程两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 解绑委托 | `EndPlay` 里 `RemoveDynamic` |
| 停定时器 | `GetWorldTimerManager().ClearTimer(Handle)` |
| 通知外部“我要没了” | 监听 `OnDestroyed`，或在 `EndPlay` 里自己广播 |
| 安全持有引用 | `TWeakObjectPtr<T>` + `IsValid` |
| 遍历中批量销毁 | 倒序遍历，或先收集到数组再统一 Destroy |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Engine/World.h`、`TimerManager.h` 与 `AMyActor` 所属头文件，不能脱离工程独立编译。

```cpp
void AMyActor::BeginPlay()
{
    Super::BeginPlay();
    GetWorldTimerManager().SetTimer(Handle, this, &AMyActor::Pulse, 1.f, true);
}

void AMyActor::EndPlay(const EEndPlayReason::Type Reason)
{
    // Destroy、切图、PIE 结束、退出，四条路径都会到这里
    GetWorldTimerManager().ClearTimer(Handle);
    if (UMySubsystem* S = GetWorld()->GetSubsystem<UMySubsystem>())
    {
        S->Unregister(this);          // 清理要自包含，别依赖别的 Actor 还在
    }
    Super::EndPlay(Reason);
}

// 外部观察者：EndPlay 之后收到通知，此时对象还没被 GC
void AObserver::Watch(AMyActor* Target)
{
    Target->OnDestroyed.AddDynamic(this, &AObserver::HandleTargetDestroyed);
}

void AObserver::HandleTargetDestroyed(AActor* /*DestroyedActor*/)
{
    CachedTarget.Reset();             // CachedTarget 是 TWeakObjectPtr<AMyActor>
}
```

出处：Epic 官方文档《Unreal Engine Actor Lifecycle》对 `EndPlay`、`Destroyed`、`BeginDestroy` 的顺序说明；`EEndPlayReason` 枚举见 `EngineTypes.h` 定义。

**可观察验证**

```cpp
// 打出 Reason 就能区分 Destroy / 切图 / PIE 结束 / 退出
UE_LOG(LogTemp, Log, TEXT("[EndPlay] %s reason=%d"),
    *GetName(), static_cast<int32>(Reason));

// 销毁后同时打印两种判活方式，说明裸指针为什么不可靠
UE_LOG(LogTemp, Log, TEXT("[Check] IsValid=%d rawNull=%d"),
    IsValid(CachedTarget.Get()), CachedTarget.Get() == nullptr);
```

```plaintext
obj list class=AMyActor    # Destroy 后对象仍在列表里，直到 GC 回收
stat game                  # 批量销毁那一帧的耗时
```

- 分别用 GameMode 调 `Destroy` 和控制台 `OpenLevel` 结束：Reason 分别是 `Destroyed` 与 `LevelTransition`，且各恰好一次。
- Destroy 后立刻 `obj list`：对象还在（已标记待销毁），下一轮 GC 之后才消失。

### ③ 面试怎么讲

**30 秒口述稿**

> Destroy 是请求销毁：先调 EndPlay，带 EEndPlayReason，比如 Destroyed、LevelTransition、Quit；然后广播 Destroyed，Actor 被标记待销毁，World 在本帧末真正移除它。EndPlay 适合解绑委托、停定时器、清引用，不要重写 Destroy 做清理，因为切关卡根本不走 Destroy，要重写 EndPlay。销毁后指针不一定立刻变空，访问前用 IsValid。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| EndPlay 的 Reason 有哪些？ | `Destroyed`、`LevelTransition`、`EndPlayInEditor`、`RemovedFromWorld`、`Quit`。 |
| 为什么不能在 Destroy 里做清理？ | 切图、PIE 结束、世界销毁都不经过 Destroy；EndPlay 才是与 BeginPlay 对称、必然触发的点。 |
| Destroy 后指针为什么还能用？ | 内存没释放，只是标记垃圾并从关卡移除；用 `IsValid` 判断，别用 `nullptr` 判断。 |
| Destroy 是立即生效吗？ | 不是。本帧末才从关卡移除，期间仍可能被遍历到。 |

### ④ 真实坑

1. **重写 `Destroy` 做清理**：切关卡时完全不触发，委托和定时器泄漏，日志里只在 PIE 停止时才暴露。
2. **`EndPlay` 忘调 `Super`**：自己 Actor 的清理跑了，但组件收不到 EndPlay，子组件 tick 和内部定时器继续。
3. **用 `if (Actor)` 判存活**：Destroy 后指针仍非空，访问成员直接崩；必须 `IsValid`。
4. **遍历 Actors 数组时 Destroy**：容器在迭代中被修改，越界或漏处理；应倒序或先收集。
5. **在 `EndPlay` 里依赖别的 Actor**：Actor 之间 EndPlay 顺序无保证，对方可能已经清理完，读到的都是脏数据。

### ⑤ 练习

**A 写**：一个 Actor 在 `BeginPlay` 里起循环定时器并绑定另一个 Actor 的委托，在 `EndPlay` 里全部解绑并打日志。分别用“GameMode 调 `Destroy`”和“控制台 `OpenLevel` 切图”两种方式结束，对比 Reason。

**提示**：① 清理集中在 `EndPlay`，并且必须调 `Super::EndPlay(Reason)`，否则组件收不到；② 把 `Reason` 打进日志而不是静默处理，切图相关的问题往往一眼可见；③ 外部引用用 `TWeakObjectPtr` + `IsValid`，`OnDestroyed` 只用来清缓存，不放业务逻辑。

验收标准：两条路径都恰好触发一次 EndPlay，Reason 分别是 `Destroyed` 和 `LevelTransition`；Destroy 后 `IsValid` 为 false 而裸指针非空；把清理改写到 `Destroy` 重写里后，切图路径不再打印清理日志。

**B 讲**：2 分钟讲“销毁的正确姿势”。必须覆盖 Destroy 与 EndPlay 的关系、五种 Reason、销毁后的对象状态，以及一条“为什么不能重写 Destroy”。

验收标准：不看稿；能说出清理必须在 EndPlay 且必须调 `Super`；能解释 `IsValid` 与 `nullptr` 判断的区别。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-27"></a>
## U27 · Q27 Component 的生命周期是怎样的？

> 来源：题库 UE 第 27 题 ｜ 速背卡：[Q27](./速背.md#ue-q27) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：组件有自己的“构造—注册—初始化—BeginPlay—反注册—销毁”链条，和 Actor 平行但不重合；`OnRegister` 可能多次，`InitializeComponent` 通常一次。

**学完能做到**
- 写代码：写一个带 tick 的自定义 `UActorComponent`，并在运行期动态挂一个场景组件。
- 讲出来：说清注册与初始化的分工，以及运行期加组件的四步。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 组件只有一套“创建—销毁”流程，`OnRegister` 一辈子只跑一次 | 注册可能多次（换 World、重新注册）；一次性订阅放 `OnRegister` 会重复执行 |
| `NewObject` 出来的组件会自己出现在场景里 | 必须 `SetupAttachment` + `RegisterComponent`，否则不渲染、不 tick、不参与碰撞 |
| 关掉 Actor tick，组件的每帧开销也没了 | 组件 tick 是独立注册的 tick 函数，要自己关 `PrimaryComponentTick` |

### ① 本质

| 阶段 | 回调 | 说明 |
| --- | --- | --- |
| 构造 | 构造函数 + `CreateDefaultSubobject` | 只有默认子对象能在这里建，可设 tick 开关 |
| 注册 | `OnRegister` | 可能多次（换 World、重新注册），不能放一次性逻辑 |
| 初始化 | `InitializeComponent` | 受 `bWantsInitializeComponent` 控制，通常一次 |
| 开始 | `BeginPlay` | 紧跟 Actor 的 BeginPlay 之后派发 |
| 每帧 | `TickComponent` | 独立于 Actor tick，需要自己开 `PrimaryComponentTick` |
| 结束 | `EndPlay` | 与 Actor 的 EndPlay 一起触发 |
| 反注册与销毁 | `OnUnregister` → `OnComponentDestroyed` → GC | `UnregisterComponent` 与 `DestroyComponent` 之后 |

为什么要拆成 `OnRegister` 和 `InitializeComponent`：注册解决的是“这个组件接入了哪个 World、要不要创建渲染代理”，初始化解决的是“数据准备好了、可以参与逻辑”；注册可能在 PIE 世界和编辑器世界之间来回切，初始化只做一次。默认子组件和运行期组件也要分清：前者由 `CreateDefaultSubobject` 创建，随 Actor 序列化、可被蓝图继承；后者用 `NewObject`，必须自己 `SetupAttachment` + `RegisterComponent`，否则不参与渲染、物理和 tick，只占内存。

组件 tick 是独立注册的 tick 函数，不是 Actor tick 里的循环，所以 Actor 调 `SetActorTickEnabled(false)` 不会关掉组件 tick，组件的 tick 也可以靠 TickGroup 和 `AddPrerequisite` 排在 Actor tick 之前或之后。销毁路径有两条：Actor 被销毁时带着组件一起走，组件收到 EndPlay 和 `OnComponentDestroyed`；也可能单独 `DestroyComponent`。依赖组件回调的逻辑必须同时考虑这两条路径。

**设计动机**：组件的“接入世界”和“参与逻辑”不是同一件事：注册解决接进哪个 World、要不要创建渲染代理；初始化解决数据是否备好、能否参与逻辑。同一个组件可能在不同 World 之间反复注册（编辑器世界 / PIE 世界），初始化却应该只做一次——把两者拆开，组件才能既被复用、被重新注册，又安全持有只初始化一次的状态。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 运行期加场景组件 | `NewObject<T>(this)` + `SetupAttachment` + `RegisterComponent` |
| 注册前设层级 | `SetupAttachment`（只能在注册前） |
| 注册后改父级 | `AttachToComponent(..., EAttachmentRule::SnapToTarget, true)` |
| 组件要 tick | 构造函数 `PrimaryComponentTick.bCanEverTick = true` |
| 销毁组件 | `DestroyComponent()` |
| 用现成 API 加组件 | `AddComponentByClass(Class, bManualAttachment, Transform, bDeferredFinish)` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Components/ActorComponent.h` 与 UHT 生成的 `MyPulseComponent.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS()
class UMyPulseComponent : public UActorComponent
{
    GENERATED_BODY()
public:
    UMyPulseComponent()
    {
        PrimaryComponentTick.bCanEverTick = true;    // 组件 tick 要自己开
        bWantsInitializeComponent = true;
    }

    virtual void InitializeComponent() override
    {
        Super::InitializeComponent();
        CachedOwner = GetOwner();                    // 通常只一次，适合缓存
    }

    virtual void OnRegister() override { Super::OnRegister(); }   // 可能多次，别订阅
    virtual void BeginPlay() override { Super::BeginPlay(); }     // 在 Owner 之后

    virtual void EndPlay(const EEndPlayReason::Type Reason) override
    {
        Super::EndPlay(Reason);                      // 清理放这里，别放析构
    }

private:
    UPROPERTY()
    TObjectPtr<AActor> CachedOwner = nullptr;
};
```

出处：Epic 官方文档《Unreal Engine Actor Lifecycle》中的组件阶段说明；`UActorComponent` 的 `OnRegister`、`InitializeComponent`、`OnComponentDestroyed` 语义见 API 文档。

**可观察验证**

```cpp
// 四个阶段各一条日志：注册次数与初始化次数的差异会直接显现
UE_LOG(LogTemp, Log, TEXT("[Comp] OnRegister %s"), *GetName());
UE_LOG(LogTemp, Log, TEXT("[Comp] InitializeComponent %s"), *GetName());

// 运行期组件：注册前后的状态对比
UE_LOG(LogTemp, Log, TEXT("[Comp] registered=%d visible=%d"),
    RuntimeComp->IsRegistered(), RuntimeComp->IsVisible());
```

```plaintext
obj list class=UMyPulseComponent    # 确认运行期组件确实被创建
stat game                           # 组件 tick 的开销是否仍在
```

- 编辑器里反复编译蓝图：`OnRegister` 日志条数增加，`InitializeComponent` 仍只有一次。
- 运行期 `NewObject` 后先不 `RegisterComponent`：`IsRegistered()` 为 false 且场景里看不到；注册之后两者同时变化。

### ③ 面试怎么讲

**30 秒口述稿**

> 组件在构造里用 CreateDefaultSubobject 创建，注册时走 OnRegister，然后 InitializeComponent、BeginPlay、Tick、EndPlay、OnUnregister，最后销毁。注册可以批量做，也可以运行期 NewObject 之后 RegisterComponent。组件 Tick 要自己开 PrimaryComponentTick，和 Actor 的 Tick 是两套。要注意 OnRegister 可能被调多次，InitializeComponent 通常一次，所以一次性逻辑别放 OnRegister。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 运行期加组件要注意什么？ | Outer 设成 Owner、注册前 `SetupAttachment`、注册后改父级用 `AttachToComponent`、需要同步就 `SetIsReplicated`、要让蓝图和序列化看到就 `AddInstanceComponent`。 |
| 组件能单独销毁吗？ | 能，`DestroyComponent` 会反注册并标记垃圾；但默认子对象被销毁后蓝图可能仍引用，通常用隐藏或停 tick 代替。 |
| 组件 BeginPlay 和 Actor BeginPlay 谁先？ | Actor 的先，随后派发组件的。 |

### ④ 真实坑

1. **运行期 `NewObject` 后忘了 `RegisterComponent`**：组件不可见、不 tick、不参与碰撞，日志里毫无提示。
2. **注册后才 `SetupAttachment`**：断言或层级无效，注册后必须改用 `AttachToComponent`。
3. **在 `OnRegister` 里做一次性订阅**：重新注册时重复订阅，回调被调多次。
4. **用 `DestroyComponent` 删默认子组件**：蓝图和序列化引用悬空；应该 `SetVisibility(false)` + `SetComponentTickEnabled(false)`。
5. **以为关了 Actor tick 就省了开销**：组件的 PrimaryComponentTick 还在跑，性能分析里依旧有热点。

### ⑤ 练习

**A 写**：实现上面的 `UMyPulseComponent`，在 `OnRegister`、`InitializeComponent`、`BeginPlay`、`EndPlay` 各打一条带 `GetName()` 的日志；再在 Actor 的 `BeginPlay` 里运行期 `NewObject` 一个 `UStaticMeshComponent`，用 `SetupAttachment` + `RegisterComponent` 挂上去。

**提示**：① 一次性逻辑（订阅事件、分配资源）放 `InitializeComponent`，可重复逻辑放 `OnRegister`；② 运行期加组件顺序固定为 `NewObject` → `SetupAttachment` → `RegisterComponent`，要让蓝图可见再加 `AddInstanceComponent`；③ 用 `IsRegistered()`/`GetOwner()` 打点确认组件真的接上了，别只看指针非空。

验收标准：日志顺序符合“OnRegister → InitializeComponent → BeginPlay → EndPlay”；编辑器里反复编译蓝图时 `OnRegister` 出现多次而 `InitializeComponent` 只有一次；运行期组件在 `RegisterComponent` 之后才出现在场景中。

**B 讲**：2 分钟讲“组件生命周期与运行期加组件”。必须覆盖注册与初始化的分工、运行期加组件的四步、以及组件 tick 与 Actor tick 的独立性。

验收标准：不看稿；能说出 `OnRegister` 为什么可能多次；能解释为什么清理放 `EndPlay` 而不是析构函数。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-28"></a>
## U28 · Q28 SpawnActor 内部做了什么？什么时候用 Deferred？

> 来源：题库 UE 第 28 题 ｜ 速背卡：[Q28](./速背.md#ue-q28) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：`SpawnActor` 是“分配 + 构造 + 应用参数 + 组件初始化 + BeginPlay”的一条同步流水线，而 `SpawnActorDeferred` 在“构造完”和“初始化完”之间开了一个可配置的窗口。

**学完能做到**
- 写代码：用 Deferred 在 BeginPlay 之前注入数据，并对比直接 Spawn 的错误结果。
- 讲出来：按顺序说出 Spawn 的六个内部步骤，并说明 Deferred 期间对象的真实状态。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `SpawnActor` 返回后再赋值也一样，反正对象刚生成 | 返回时 `BeginPlay` 已跑完（世界已开始 Play），之后的赋值对初始化逻辑太晚 |
| Deferred 期间 Actor 已经“活着”，可以挂接、做重叠查询 | 组件未注册、不在关卡里、没有 BeginPlay，只适合纯数据赋值 |
| 忘了 `FinishSpawning` 只是没设置 Transform | Actor 停在半成品状态，不可见、不 tick，也不报错 |

### ① 本质

| 步骤 | 发生什么 | Deferred 时是否已执行 |
| --- | --- | --- |
| 检查参数与类 | 类非空、非 Abstract、World 有效 | 是 |
| 分配并构造 | `StaticConstructObject`，跑构造函数 | 是 |
| 应用 SpawnParams | Owner、Instigator、Name、Transform、碰撞处理 | 部分（最终 Transform 在 FinishSpawning） |
| `PostActorCreated` | 标记“新生对象”的钩子 | 是 |
| Construction Script | `OnConstruction` / 蓝图 Construction Script | 否 |
| 组件初始化 | `PreInitializeComponents`、`InitializeComponents`、PIC | 否 |
| `BeginPlay` | 仅当 World 已开始 Play | 否 |
| `FinishSpawning` | 补上 Transform 并跑完上面三步 | — |

`SpawnCollisionHandlingOverride` 决定“生成位置被占用怎么办”：`AlwaysSpawn` 直接生成，`AdjustIfPossibleButAlwaysSpawn` 尝试微调后生成，`DontSpawnIfColliding` 直接返回空。批量生成时通常用 `AlwaysSpawn`，省掉一次碰撞查询，也避免对象静默丢失。

Deferred 期间的 Actor 是个“半成品”：对象存在、构造函数跑过、成员可读写，但组件没注册、没进关卡、没 BeginPlay。此时不能依赖需要初始化的玩法服务，也不该做挂接或重叠查询，只适合做纯数据赋值。

Deferred 真正解决的问题是“初始化读到了默认值”：BeginPlay 里通常会读配置做初始化，如果先 `SpawnActor` 再赋值，BeginPlay 已经用默认值跑完了。Deferred 把赋值插在 PIC 和 BeginPlay 之前，保证 Actor 第一次读到的就是最终值。

批量生成的瓶颈通常不在 `SpawnActor` 的参数，而在构造、组件注册、资源加载和随后的 GC。高频短命对象（子弹、飘字、特效）优先对象池；非要批量生成，就分帧摊开，并在生成前把类和资源准备好。

**设计动机**：Spawn 是一条同步流水线，而 `BeginPlay` 会读配置做初始化；如果配置只能在生成之后赋值，初始化必然读到默认值。`SpawnActorDeferred` 因此在“构造完成”与“初始化完成”之间开了一个窗口，让调用方在组件注册、PIC、BeginPlay 之前把数据写好，再 `FinishSpawning` 收口。代价是窗口期的对象处于半成品状态：只能碰它的成员，不能碰它的世界关系。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 生成后立刻可用 | `SpawnActor<T>(Class, &Transform, Params)` |
| 生成前注入数据 | `SpawnActorDeferred` + 赋值 + `FinishSpawning` |
| 跳过碰撞检查 | `Params.SpawnCollisionHandlingOverride = AlwaysSpawn` |
| 指定归属 | `Params.Owner = this` |
| 高频对象 | 对象池 + 复用，不反复 Spawn/Destroy |
| 避免首帧卡顿 | 预加载类与资源，加载完成后再生成 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Engine/World.h` 与 `AEnemy`/`EnemyData` 所属头文件，不能脱离工程独立编译。

```cpp
FActorSpawnParameters Params;
Params.Owner = this;
Params.SpawnCollisionHandlingOverride =
    ESpawnActorCollisionHandlingMethod::AlwaysSpawn;

// 直接生成：返回时 BeginPlay 已经跑完，之后的赋值太晚
AEnemy* Fast = GetWorld()->SpawnActor<AEnemy>(EnemyClass, SpawnTransform, Params);
UE_LOG(LogTemp, Log, TEXT("Spawned %s, level=%d"),
    *GetNameSafe(Fast), Fast ? Fast->GetLevel() : -1);

// 延迟生成：把配置塞进构造与 BeginPlay 之间
AEnemy* E = GetWorld()->SpawnActorDeferred<AEnemy>(
    EnemyClass, SpawnTransform, this, nullptr,
    ESpawnActorCollisionHandlingMethod::AlwaysSpawn);
if (E)
{
    E->SetLevel(EnemyData.Level);        // BeginPlay 能读到正确值
    E->SetFaction(EnemyData.Faction);
    E->FinishSpawning(SpawnTransform);   // 这里才跑 Construction、组件初始化、BeginPlay
}
```

出处：Epic 官方文档《Unreal Engine Actor Lifecycle》与《Objects in Unreal Engine》；`FActorSpawnParameters`、`FinishSpawning` 的语义见 API 文档。

**可观察验证**

```cpp
// 直接 Spawn：BeginPlay 里打印的是默认等级，之后 GetLevel() 才是 5
UE_LOG(LogTemp, Log, TEXT("[Spawn] %s level=%d"), *GetNameSafe(E), E->GetLevel());

// Deferred 窗口内：已构造但未初始化；FinishSpawning 之后才变 true
UE_LOG(LogTemp, Log, TEXT("[Deferred] initialized=%d begunPlay=%d"),
    E->IsActorInitialized() ? 1 : 0, E->HasActorBegunPlay() ? 1 : 0);
```

```plaintext
obj list class=AEnemy    # 对照已生成与半成品对象
stat game                # 批量生成时的帧时间尖峰
```

- 两条路径对比日志：直接 Spawn 的 BeginPlay 打印默认等级，Deferred 路径打印注入后的值。
- 省略 `FinishSpawning`：对象停在半成品状态，BeginPlay 日志不出现，场景里也看不到。

### ③ 面试怎么讲

**30 秒口述稿**

> SpawnActor 内部先检查类，然后分配 Actor、跑构造函数，应用 SpawnParams 和 Transform，调 PostActorCreated，再跑 Construction Script、注册组件、PostInitializeComponents，如果 World 已经开始游戏就调 BeginPlay。要先设属性就改用 SpawnActorDeferred，设置完再 FinishSpawning。因为 BeginPlay 会读配置做初始化，直接 Spawn 完再赋值，初始化已经用默认值跑错了。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Deferred 期间 Actor 是什么状态？ | 对象和构造已完成，但组件未注册、不在关卡里、没有 BeginPlay，属于“存在但未初始化”。 |
| 批量生成怎么优化？ | 池化 + `AlwaysSpawn` 跳过碰撞 + 预加载资源 + 分帧生成；别在高频路径里同步加载类。 |
| SpawnActor 返回空的原因？ | 类为空或 Abstract、位置碰撞且用 `DontSpawnIfColliding`、World 无效。 |
| Deferred 时能设 Transform 吗？ | 最终值以 `FinishSpawning` 传入的为准；之前设的会被覆盖或需要自己处理。 |

### ④ 真实坑

1. **`SpawnActor` 之后才赋值**：BeginPlay 已用默认值初始化，属性看着对、行为不对，最难查的一类 bug。
2. **忘记 `FinishSpawning`**：Actor 永远停在半成品状态，不可见、不 tick，也不报错。
3. **在 Tick 里循环生成上百个对象**：构造加注册集中在同一帧，帧时间直接尖峰；要分帧或池化。
4. **特效、子弹用 `DontSpawnIfColliding`**：位置被占就静默返回空，表现成“偶尔不出效果”。

### ⑤ 练习

**A 写**：写一个 `AEnemy`，在 `BeginPlay` 里读 `Level` 并打日志。用两条路径生成：一条直接 `SpawnActor` 后 `SetLevel(5)`，一条 `SpawnActorDeferred` 后 `SetLevel(5)` 再 `FinishSpawning`。

**提示**：① 需要“初始化就读到正确数据”就用 Deferred，赋值集中在 `FinishSpawning` 之前，别在 Tick 里补；② 批量生成用 `AlwaysSpawn` 跳过碰撞查询，并提前把类与资源加载好；③ 高频短命对象（子弹、飘字、特效）优先池化，别把 Spawn/Destroy 放进每帧路径。

验收标准：直接路径日志打印默认等级，Deferred 路径打印 5；省略 `FinishSpawning` 时对象不出现在场景且没有 BeginPlay 日志；两次生成都能在 `stat game` 里看到构造开销。

**B 讲**：2 分钟讲“SpawnActor 内部流程与 Deferred 的适用场景”。必须按顺序说出六个步骤，并举一个“直接 Spawn 会出错”的具体例子。

验收标准：不看稿；能说出 Deferred 期间对象缺什么；能解释批量的瓶颈为什么通常在构造、注册和 GC，而不是 Spawn 参数。

> ↑ 返回[目录](#toc)

---

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ⑤：蓝图与 C++ 互调](#ch10)


<a id="ch10"></a>
# 第 10 章 · UE ⑤：蓝图与 C++ 互调

> 对应速背 UE 主题 05（Q29–Q34），完整答题卡见 [速背 UE 05](./速背.md#ue-t05)。
> 上一篇：[UE ④：Actor 与 Component 生命周期](#ch9) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-29"></a>
## U29 · Q29 C++ 如何调用蓝图实现的逻辑？

> 来源：题库 UE 第 29 题 ｜ 速背卡：[Q29](./速背.md#ue-q29) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：C++ 只声明一个 `BlueprintImplementableEvent`，UHT 生成转发桩，运行时把调用交给蓝图脚本；蓝图没实现就安静返回默认值。

**学完能做到**
- 写代码：在 Actor 上声明带参数、带返回值的事件，并在 C++ 生命周期里调用。
- 讲出来：说清“声明—生成桩—脚本查找”这条链，以及接口场景为什么必须 `Execute_`。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `BlueprintImplementableEvent` 调用前必须判断蓝图有没有实现 | 不用；接收对象有效就能直接调，脚本层没实现时分发器查不到、安静返回 |
| 蓝图没实现会导致崩溃或报错 | 不会崩，只是一次空调用；带返回值时拿到默认初始化值（`0`、`false`、空） |
| `BlueprintImplementableEvent` 可以当网络事件用 | 它只是本机事件，不参与复制；联网要另配 `Server`/`Client`/`NetMulticast` 的 RPC |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `BlueprintImplementableEvent` 只有声明，C++ 不写函数体 | 编译单元里的函数体由 UHT 生成，职责是把调用送进脚本虚拟机 |
| 生成体按函数在对象的蓝图类里找脚本实现 | 有实现就执行蓝图节点，没实现就直接返回，不会崩 |
| 返回值与输出参数在无实现时保持默认初始化 | 调用方拿到 `0`、`false`、空指针或默认结构体，不能当作“一定有结果” |
| 事件属于反射系统，参数必须是反射支持的类型 | `std::string`、裸数组、非 `USTRUCT` 结构体过不了 UHT |

UHT 展开头文件时，会为这个 `UFUNCTION` 生成一个同名函数体。你在 C++ 里写 `OnPlayerEntered(Other)`，看起来是普通成员函数调用，实际入口是反射分发，最后才落到蓝图事件图。

这也解释了为什么“没实现不用判空”：对象始终存在，只是脚本层没有对应函数，分发器查不到就返回。反过来，如果接收对象本身为空，你调成员函数照样崩，这跟事件机制无关。

设计目的是把“框架时机”和“内容表现”拆开：C++ 负责发通知，策划在蓝图里决定播什么特效、加多少分；引擎的 `ReceiveBeginPlay`、`ReceiveTick` 就是同一套机制。边界是：不能有 C++ 默认实现，不自动跨网络，也不能被 C++ 子类用 `virtual` 覆盖。

**设计动机**：调用方需要一个稳定的 C++ 签名——参数检查、编译期类型错误、断点都留在 C++ 侧；蓝图里的实现又要能在不重编 C++ 的前提下随时改。UHT 生成同名函数体正是为同时满足这两点：调用点是普通成员函数调用，函数体内部却是反射分发，脚本层换实现不必动 C++ 一行。如果 C++ 必须写默认实现，它就变成 `BlueprintNativeEvent`；如果让调用方自己去找脚本函数，反射细节就会漏进每个调用点。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 发一个“到此一游”的通知 | `UFUNCTION(BlueprintImplementableEvent)`，无返回值 |
| 让蓝图给 C++ 一个结果 | 声明返回值，蓝图没实现时按默认值处理 |
| 让任意实现了某能力的对象响应 | `UINTERFACE` + 蓝图实现 + `IInterface::Execute_函数名` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `MyTrigger.generated.h`，不能脱离工程独立编译。

```cpp
// AMyTrigger.h
UCLASS()
class AMyTrigger : public AActor
{
    GENERATED_BODY()
public:
    // 只声明，不写实现；蓝图子类在事件图里实现
    UFUNCTION(BlueprintImplementableEvent, Category = "Trigger")
    void OnPlayerEntered(AActor* Who);

    // 带返回值：蓝图没实现时返回 0
    UFUNCTION(BlueprintImplementableEvent, Category = "Trigger")
    int32 GetScoreBonus();

protected:
    virtual void NotifyActorBeginOverlap(AActor* Other) override;
};

// AMyTrigger.cpp
void AMyTrigger::NotifyActorBeginOverlap(AActor* Other)
{
    Super::NotifyActorBeginOverlap(Other);
    OnPlayerEntered(Other);                 // 转发给蓝图事件
    const int32 Bonus = GetScoreBonus();    // 无实现时拿到默认值
    UE_LOG(LogTemp, Log, TEXT("Bonus=%d"), Bonus);
}
```

接口版本把“能力”从具体类上剥出来，调用侧只认接口：

```cpp
// 接口事件在 UINTERFACE 里声明，调用必须走 Execute_
if (Target && Target->Implements<UInteractable>())
{
    IInteractable::Execute_OnInteract(Target, this);
}
```

**可观察验证**

```cpp
// 脚本层有没有实现：查得到 UFunction 才说明蓝图侧接住了
UFunction* Fn = FindFunction(TEXT("OnPlayerEntered"));
UE_LOG(LogTemp, Log, TEXT("impl=%d"), Fn != nullptr);

// 返回值就是证据：蓝图没实现时拿到默认值 0
UE_LOG(LogTemp, Log, TEXT("Bonus=%d"), GetScoreBonus());
```

- 在蓝图子类里加、删这个事件的实现各跑一次：`FindFunction` 的结果和 `GetScoreBonus()` 的返回值会跟着变，说明“有没有实现”由脚本层决定。
- 把事件调用从 `BeginPlay` 挪进构造函数再试：日志不再出现，印证构造阶段还没有脚本接收者。

### ③ 面试怎么讲

**30 秒口述稿**

> C++ 调蓝图实现，主力是 `BlueprintImplementableEvent`：C++ 只声明、不写函数体，UHT 生成一个转发桩，运行时按函数在蓝图类里找脚本实现。蓝图实现了就执行，没实现就是一次空调用，不会崩，带返回值时拿到默认值。如果逻辑挂在接口上，就用 `I接口::Execute_函数名` 调，因为接口没有对象实例可以自己分发。要注意它只是本机事件，不负责网络复制。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 没实现会崩吗？ | 不会。分发器找不到脚本函数就返回；但接收对象为空、或返回值被直接解引用，仍会崩。 |
| 能传结构体吗？ | 能，结构体要标 `USTRUCT(BlueprintType)`，字段用 `UPROPERTY` 暴露；`std::` 容器和非反射类型不行。 |
| 和 `BlueprintNativeEvent` 怎么选？ | 没有合理的 C++ 默认行为、只是钩子，用 ImplementableEvent；有默认逻辑、允许覆盖，用 NativeEvent。 |
| 能当 RPC 用吗？ | 不能。事件是本机调用，网络同步要另配 `Server`/`Client`/`NetMulticast` 的 `UFUNCTION`。 |

### ④ 真实坑

1. **在构造函数里发事件**：CDO 和蓝图子类构造阶段对象不完整，事件没有接收者，日志一片安静；把调用挪到 `BeginPlay` 或重叠回调里。
2. **把返回值当成必有值**：蓝图没实现时返回 `0`，紧接着做除法就除零；调用侧先判断或给安全默认。
3. **蓝图里改名或删除实现**：C++ 声明还在，编译不报错，运行时静默不执行；用日志或断点确认事件真的被接住。
4. **参数用了非反射类型**：`TArray<FMyPlainStruct>` 里结构体没标 `USTRUCT(BlueprintType)`，UHT 直接报错；先修类型再谈逻辑。

### ⑤ 练习

**A 写**：声明 `OnPlayerEntered(AActor*)` 和 `int32 GetScoreBonus()` 两个事件，在重叠回调里调用并打日志；创建一个蓝图子类只实现第一个事件，观察第二个的返回值；再加一个接口版本，用 `Execute_` 调用。

**提示**：① 只判接收对象是否有效，不要给事件本身加“有没有实现”的判断；② 排查时先用 `FindFunction` 确认事件名与脚本实现，再怀疑调用时机；③ 接口版本先 `Implements<UInteractable>()` 再 `Execute_`，直接对接口指针调成员函数是编译不过的。

验收标准：未实现事件时不崩且日志输出返回值 `0`；蓝图实现后日志顺序符合预期；接口调用在 `Implements<>` 为假时被安全跳过。

**B 讲**：2 分钟口述“C++ 调用蓝图实现的三条路径”，覆盖事件、接口，以及为什么没实现不用判空。

验收标准：能画出声明到脚本分发的链路；接口场景能主动说出 `Execute_`；能顺带指出网络不自动同步。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-30"></a>
## U30 · Q30 蓝图如何调用 C++？

> 来源：题库 UE 第 30 题 ｜ 速背卡：[Q30](./速背.md#ue-q30) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：蓝图能看到的 C++，只有被 `UFUNCTION` / `UPROPERTY` 注册进反射的那一部分；能不能调，取决于标记、类型和编译刷新三件事。

**学完能做到**
- 写代码：在一个 `UCLASS` 里暴露可调用函数、只读属性和纯查询函数。
- 讲出来：说清 `BlueprintCallable` 与 `BlueprintPure` 的差别，以及“蓝图里看不到函数”的排查顺序。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 在 `UCLASS` 里写好的函数，蓝图自动就能看到 | 必须标 `UFUNCTION`；没标的不进反射，蓝图节点菜单里根本没有 |
| `BlueprintReadOnly` 表示谁都不能写 | 它只限制蓝图图表读取；C++ 内部照常写，要蓝图可写再配 `BlueprintReadWrite` 或 setter |
| `BlueprintPure` 节点只会求值一次 | 没有执行引脚，按连线求值，同一节点连到多个输入上可能被多次求值 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 只有标了 `UFUNCTION` 的成员函数才会生成蓝图节点 | 普通 C++ 函数写得再好，蓝图面板里也不存在 |
| 参数和返回值必须是反射支持的类型 | 引擎内置类型、`UObject*`、`USTRUCT`、`TArray` 等可用，`std::` 类型不可用 |
| `BlueprintCallable` 生成带执行引脚的节点 | 适合“做一件事”，有明确的前后顺序 |
| `BlueprintPure` 不产生执行引脚，连线时按需重新求值 | 适合无副作用的查询；每次被引用都可能执行一次 |
| `UPROPERTY` 配 `BlueprintReadOnly` / `BlueprintReadWrite` 才暴露属性 | 编辑器可编辑与蓝图可读写是两条独立开关 |

UHT 扫描头文件后，把类、函数、属性的元数据写进生成代码，蓝图编辑器再读这些元数据构建节点菜单。所以“C++ 是源，蓝图是消费者”，C++ 没编译通过或没刷新，蓝图侧就不会出现新节点。

`BlueprintPure` 的求值模型值得单独记：它没有执行引脚，节点值在需要时计算，同一个纯节点连到多个输入上可能被多次求值。因此纯函数应当便宜、确定、无副作用，不要在里面生成 Actor、改全局状态或做重 IO。

**设计动机**：蓝图是数据流图，需要两类节点——一类按执行顺序“做事”，一类在连线处“取值”。`BlueprintCallable` 用执行引脚表达前者，保证副作用按可见顺序发生；`BlueprintPure` 去掉执行引脚，把取值变成拉式求值，节点位置可以随连线自由摆放。代价是纯节点没有“只算一次”的保证，所以引擎把“无副作用”当成使用约定，而不是强制检查。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 让蓝图触发一个动作 | `UFUNCTION(BlueprintCallable, Category="...")` |
| 让蓝图读取一个值 | `UFUNCTION(BlueprintPure)` + `const` |
| 蓝图只读属性 | `UPROPERTY(BlueprintReadOnly, Category="...")` |
| 私有属性仍要暴露 | `meta=(AllowPrivateAccess="true")` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `MyDoor.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS(Blueprintable)
class AMyDoor : public AActor
{
    GENERATED_BODY()
public:
    UFUNCTION(BlueprintCallable, Category = "Door")
    void SetOpen(bool bNewOpen);

    UFUNCTION(BlueprintPure, Category = "Door")
    bool IsOpen() const { return bOpen; }

    UFUNCTION(BlueprintCallable, Category = "Door")
    void ApplyProgress(float Delta);

private:
    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Door",
              meta = (AllowPrivateAccess = "true"))
    bool bOpen = false;

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Door",
              meta = (AllowPrivateAccess = "true", ClampMin = "0.0", ClampMax = "1.0"))
    float Progress = 0.f;
};

void AMyDoor::SetOpen(bool bNewOpen)
{
    bOpen = bNewOpen;                       // 统一入口，方便打日志和加校验
}

void AMyDoor::ApplyProgress(float Delta)
{
    Progress = FMath::Clamp(Progress + Delta, 0.f, 1.f);
}
```

**可观察验证**

```cpp
// 编译后查反射：能按名字查到函数，说明 UHT 已把它收进元数据
UFunction* Fn = AMyDoor::StaticClass()->FindFunctionByName(TEXT("SetOpen"));
UE_LOG(LogTemp, Log, TEXT("SetOpen=%d"), Fn != nullptr);
```

- 在蓝图图表里右键搜 `SetOpen`、拖出 `AMyDoor` 引用看 `IsOpen` 节点：搜到即已进反射，搜不到先查 `UFUNCTION` 与编译。
- 把 `IsOpen` 上的 `UFUNCTION(BlueprintPure)` 整行注释掉再编译：蓝图里该节点消失，这就是“没标记就不可见”的最小复现。

### ③ 面试怎么讲

**30 秒口述稿**

> 蓝图调 C++ 靠反射声明：函数放在 `UCLASS` 里，标 `UFUNCTION(BlueprintCallable)`，参数和返回值用反射支持的类型，编译后蓝图里才会出现节点。纯查询用 `BlueprintPure`，没有执行引脚，连线时求值。属性用 `UPROPERTY` 加 `BlueprintReadWrite` 或 `BlueprintReadOnly`，私有成员还要 `meta AllowPrivateAccess`。如果蓝图里看不到，先查有没有 `UFUNCTION`、类能不能被蓝图继承、类型过不过 UHT，最后才是重新编译和刷新编辑器。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Callable 和 Pure 怎么选？ | 有副作用、有明确执行顺序用 Callable；无副作用、随时可算的查询用 Pure。 |
| 为什么蓝图里看不到某个函数？ | 常见是漏了 `UFUNCTION`、类不是 `UCLASS`/不可蓝图化、参数类型不支持、没重新编译或编辑器没刷新。 |
| `BlueprintReadOnly` 是只读吗？ | 只限制蓝图图表读取，不限制 C++；需要蓝图写入就再配 `BlueprintReadWrite` 或提供 setter。 |
| 纯函数能改状态吗？ | 技术上能写，但语义上不该；它可能被多次求值，副作用会重复发生。 |

### ④ 真实坑

1. **漏写 `UFUNCTION`**：函数在 C++ 里正常，蓝图面板完全找不到，排查半天以为是模块没加载。
2. **改了签名不完整编译**：蓝图节点还按旧签名存在，出现坏引脚或编译错误；改头文件后完整编译并重启编辑器。
3. **在 `BlueprintPure` 里生成 Actor**：节点每被求值一次就生成一个，行为随连线方式变化；副作用一律放 Callable。
4. **私有属性忘加 `AllowPrivateAccess`**：`UPROPERTY` 写了但蓝图仍不可见，误判为反射失效。

### ⑤ 练习

**A 写**：写一个 `UMyHealthComponent`，包含私有 `Health`（`BlueprintReadOnly` + `AllowPrivateAccess`）、`ApplyDamage(float)` 和 `IsDead()` 纯函数；在蓝图里按键调用 `ApplyDamage`，并读取 `Health` 显示。

**提示**：① 参数与返回值优先用 `int32`/`float`/`bool`/`FName`/`FString`/`UObject*`/`USTRUCT`/`TArray`，`std::` 类型过不了 UHT；② 加完函数做完整编译并重启编辑器，只热重载经常看不到新节点；③ 纯函数保持无副作用，有写入或生成对象就换 `BlueprintCallable`。

验收标准：蓝图能调用函数并读到属性；传入超过上限的伤害后生命被钳制；`IsDead` 节点没有执行引脚。

**B 讲**：2 分钟口述“把一个 C++ 类暴露给蓝图的完整清单”，按函数、属性、类型、编译刷新四块讲。

验收标准：四块各至少一条检查项；能举一个“看不到节点”的真实原因；能说明 Pure 的重复求值风险。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-31"></a>
## U31 · Q31 BlueprintNativeEvent 和 BlueprintImplementableEvent 有什么区别？

> 来源：题库 UE 第 31 题 ｜ 速背卡：[Q31](./速背.md#ue-q31) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：两者都是“C++ 声明、蓝图参与”，区别在默认实现归谁——ImplementableEvent 没有 C++ 实现，NativeEvent 有，而且可以被蓝图覆盖。

**学完能做到**
- 写代码：声明 `BlueprintNativeEvent`，把默认逻辑写进 `_Implementation`。
- 讲出来：解释 `_Implementation` 后缀的由来、覆盖后的调用顺序，以及 Parent 节点的作用。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `BlueprintNativeEvent` 的 C++ 默认实现就写在声明函数里 | 默认实现必须写在 `函数名_Implementation`；声明函数是反射分发入口 |
| 蓝图覆盖后 C++ 默认逻辑仍会先执行 | 覆盖后默认实现让位；要父类逻辑得在蓝图里显式接 Parent 节点 |
| 两者区别只在“有没有默认实现” | 还差在可覆写性：`_Implementation` 是虚函数，C++ 子类也能覆写；接口场景两者都必须走 `Execute_` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `BlueprintImplementableEvent` 没有 C++ 实现 | 蓝图不实现就是空调用，C++ 侧无法提供保底行为 |
| `BlueprintNativeEvent` 的 C++ 默认实现写在 `函数名_Implementation` | 声明函数是分发入口，`_Implementation` 才是 C++ 逻辑本体 |
| 蓝图覆盖后，默认实现不会自动执行 | 需要父类逻辑时，必须在蓝图里显式调 Parent 节点 |
| 声明与 `_Implementation` 的签名必须完全一致，包括 `const` | 差一个修饰符就编译或链接失败 |
| 类上的事件直接调声明名，接口上的事件要 `Execute_` | 接口没有对象实例，不能自己完成分发 |

为什么要有 `_Implementation`：UHT 需要两个名字。一个是对外的 `UFUNCTION`，负责生成反射入口和脚本分发；另一个是 C++ 虚函数，负责默认逻辑并允许 C++ 子类继续覆写。如果两者同名，UHT 没法在中间插入转发代码，所以默认实现被改名为 `_Implementation`。

分发顺序可以记成“蓝图覆盖优先，否则回落 C++”：调用声明函数后，反射系统先找蓝图类的脚本实现；有就执行蓝图，没有就调用 `_Implementation`。因此蓝图里一旦覆盖，C++ 的默认逻辑就完全让位，除非蓝图主动调 Parent。

**设计动机**：这个机制要同时满足两种扩展方式——策划在蓝图里整段替换逻辑（不必改 C++），程序在 C++ 子类里沿继承链改写默认行为。把默认实现放进 `_Implementation` 并保持 `virtual`，两者就各有一个明确的覆盖点；声明名只负责分发，所以无论从蓝图还是从 C++ 进来，走的都是同一条反射入口。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| C++ 有默认逻辑，策划可改 | `BlueprintNativeEvent` |
| 纯钩子，C++ 无从实现 | `BlueprintImplementableEvent` |
| C++ 子类想改默认逻辑 | 覆写 `_Implementation`（它本身是 `virtual`） |
| 蓝图覆盖后还要保留父逻辑 | 蓝图里调 Parent 节点 |
| 接口上的同类事件 | `I接口::Execute_函数名` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `MyWeapon.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS()
class AMyWeapon : public AActor
{
    GENERATED_BODY()
public:
    // 声明是分发入口；蓝图可以覆盖
    UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Damage")
    float ComputeDamage(float Base, AActor* Target) const;

    // 默认实现：名字必须是 _Implementation，签名完全一致
    virtual float ComputeDamage_Implementation(float Base, AActor* Target) const;

protected:
    UPROPERTY(EditDefaultsOnly, Category = "Damage")
    float DamageScale = 1.5f;
};

float AMyWeapon::ComputeDamage_Implementation(float Base, AActor* Target) const
{
    return Base * DamageScale;
}

// 调用方：类上的 NativeEvent 直接调声明名，蓝图覆盖会自动生效
const float D = Weapon->ComputeDamage(10.f, Victim);
```

接口上的事件换一种调用方式：

```cpp
// UDamageable 接口里声明 BlueprintNativeEvent 的 ComputeDamage
if (Obj && Obj->Implements<UDamageable>())
{
    const float D = IDamageable::Execute_ComputeDamage(Obj, 10.f, Victim);
}
```

**可观察验证**

```cpp
// 默认实现有没有跑：在 _Implementation 里打点
UE_LOG(LogTemp, Log, TEXT("C++ default: Base=%.1f Scale=%.2f"), Base, DamageScale);

// 接口版本要走 Execute_：Implements 为假时不会进分发
UE_LOG(LogTemp, Log, TEXT("damageable=%d"), Obj && Obj->Implements<UDamageable>());
```

- 不覆盖、覆盖不接 Parent、覆盖并接 Parent 各跑一次：默认日志只在第一、三种出现，输出分别为 `15` 与 `15`。
- 把 C++ 里改成直接调 `ComputeDamage_Implementation`：蓝图覆盖不再生效，日志只剩 C++ 默认值——这就是绕过分发的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 区别在默认实现：`BlueprintImplementableEvent` 是 C++ 只声明、蓝图实现，没实现就空调用；`BlueprintNativeEvent` 是 C++ 有默认实现、蓝图可以覆盖，默认实现必须写在 `函数名_Implementation` 里。调用时类上的事件直接调声明函数，接口上的用 `Execute_`。蓝图覆盖以后，C++ 默认逻辑不会自动跑，想保留就在蓝图里接 Parent 节点。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 不覆盖时执行谁？ | 执行 C++ 的 `_Implementation`；C++ 子类也可以覆写这个虚函数。 |
| 为什么要有 `_Implementation` 后缀？ | 给 UHT 留出同名反射入口的位置，由它在脚本实现和 C++ 默认实现之间分发。 |
| 蓝图覆盖后还能调父类吗？ | 能，蓝图里调 Parent 节点；不接就不会执行默认逻辑。 |
| 接口事件能直接调吗？ | 不能，必须 `Execute_`；调用前通常先 `Implements<>` 判断。 |

### ④ 真实坑

1. **只声明 `_Implementation` 不写定义**：编译能过、链接报未解析符号；头文件声明和 cpp 定义要成对出现。
2. **签名差一个 `const`**：UHT 报签名不匹配或链接失败；复制声明时把修饰符一起复制。
3. **C++ 里直接调 `_Implementation`**：绕过反射分发，蓝图覆盖永远不生效；对外一律调声明名。
4. **蓝图覆盖后忘接 Parent**：默认伤害、默认治疗量全部丢失，表现为“数值变成 0 或没变化”。
5. **把接口事件当类事件调**：`Obj->ComputeDamage(...)` 在接口指针上编译不过；改用 `Execute_`。

### ⑤ 练习

**A 写**：实现上面的 `ComputeDamage`，默认返回 `Base * DamageScale`；创建蓝图子类覆盖它，分别测试“不覆盖”“覆盖但不接 Parent”“覆盖并接 Parent”三种情况。

**提示**：① 声明与 `_Implementation` 的签名逐字符对齐（含 `const`），复制粘贴后别再手改；② 业务代码一律调声明名，`_Implementation` 只在 C++ 子类覆写时出现；③ 蓝图覆盖后要保留父逻辑就接 Parent 节点，并用日志确认默认实现真的执行了。

验收标准：三种情况输出分别为 `15`、自定义值、`15`（按 `DamageScale=1.5`）；C++ 子类覆写 `_Implementation` 也能改变默认结果；代码里没有直接调用 `_Implementation` 的业务路径。

**B 讲**：2 分钟口述“NativeEvent 从声明到执行的完整链路”，必须提到 UHT、反射分发、`_Implementation`、Parent 节点。

验收标准：顺序正确；能解释 `_Implementation` 存在的原因；能说出接口场景的差异。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-32"></a>
## U32 · Q32 怎么把 C++ 属性安全地暴露给蓝图？

> 来源：题库 UE 第 32 题 ｜ 速背卡：[Q32](./速背.md#ue-q32) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：暴露属性不是“加个 `UPROPERTY` 就完事”，而是在“策划可调、蓝图可读写、内部不变量”三者之间划一条最小边界。

**学完能做到**
- 写代码：把私有属性配好 `BlueprintReadOnly`、`AllowPrivateAccess` 和常用 `meta`。
- 讲出来：说清编辑器编辑权限与蓝图读写权限是两条独立开关，以及 `BlueprintReadWrite` 的风险。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 加了 `UPROPERTY` 蓝图就能看到 | 还要配 `BlueprintReadOnly`/`BlueprintReadWrite`；私有属性再加 `meta=(AllowPrivateAccess="true")` |
| `EditAnywhere` 就等于蓝图可读写 | 它只控制编辑器 Details；蓝图图表权限由 `Blueprint*` 系列单独控制 |
| `ClampMin`/`ClampMax` 能保证运行时数值合法 | 只在编辑器输入时校验；运行时赋值仍要自己检查，否则蓝图或代码都能写越界 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `BlueprintReadOnly` / `BlueprintReadWrite` 只控制蓝图图表访问 | 与 Details 面板能否编辑是两回事，需要配合 `EditAnywhere` 等 |
| `EditAnywhere` / `EditDefaultsOnly` / `EditInstanceOnly` 控制编辑器编辑范围 | 选错会让策划改不到，或让实例覆盖默认值 |
| 私有属性要 `meta=(AllowPrivateAccess="true")` 才进蓝图 | 否则 `UPROPERTY` 加了也看不见 |
| `Category` 决定 Details 分组和节点菜单分类 | 不写分类，属性散落在默认组，团队找不到 |
| `meta` 控制显示名、提示、范围、条件、单位、高级面板 | 好的 `meta` 等于免费给策划写了一份表单说明 |
| `BlueprintProtected` 把访问限制在本类与子类 | 比全公开更安全，适合给子类蓝图用的受保护状态 |

先分清两条轴。第一条是编辑器轴：`EditAnywhere` 表示默认值和实例都能改，`EditDefaultsOnly` 只改类默认值，`EditInstanceOnly` 只改关卡实例，`Visible*` 只读展示。第二条是蓝图轴：`BlueprintReadOnly` 只让图表读，`BlueprintReadWrite` 让图表读写。两者可以任意组合。

`BlueprintReadWrite` 的风险不在性能，而在不变量。属性一旦可写，蓝图就能绕过 `ApplyDamage` 直接写 `Health`，负数、超上限、跳过死亡广播都可能出现；如果属性还参与网络复制，客户端写入不会发给服务器，表现为“改了又弹回去”。所以默认策略应是只读 + 受控写入函数。

`meta` 是暴露面的第二次收口。`ClampMin/ClampMax` 限制输入范围，`UIMin/UIMax` 只影响滑条显示，`EditCondition` 让不相关字段隐藏，`DisplayName/ToolTip/Units` 直接改善可用性。它们不替代运行时校验，但能把大部分错误挡在编辑阶段。

最后是变更成本：蓝图资产对 C++ 属性是硬引用。改名、改类型、删属性都会让引用它的蓝图节点失效。规模大了以后，重命名要配 Core Redirects，否则一次重构就是全工程蓝图报错。

**设计动机**：属性一旦进反射，就同时被 Details 面板、蓝图图表、序列化和网络复制四类消费者读取，而它们要的权限并不一样——策划要能调默认值、蓝图要能读状态、运行时又要守住不变量。一个“公开/私有”开关表达不了这种差异，于是 UE 把权限拆成编辑器轴与蓝图轴两组标记、逐属性组合，再由 `meta` 补上显示名、范围、条件这些表单级约束。暴露面越窄，蓝图对 C++ 的硬引用越少，重构成本越低。

**版本差异**：UE5 起对象引用属性可声明为 `TObjectPtr<T>`（编辑器下带访问追踪），UE4 只有裸指针；`Edit*`/`Blueprint*` 标记的写法两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 策划调默认值，运行时只读 | `UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)` |
| 关卡里每个实例单独调 | `UPROPERTY(EditInstanceOnly, BlueprintReadOnly)` |
| 蓝图只读、C++ 内部可写 | 私有属性 + `BlueprintReadOnly` + `AllowPrivateAccess` |
| 必须让蓝图写 | 优先提供 `BlueprintCallable` setter，其次才 `BlueprintReadWrite` |
| 限制数值范围 | `meta=(ClampMin="0", ClampMax="100", UIMin="0", UIMax="100")` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Components/ActorComponent.h` 与 UHT 生成的 `MyHealthComponent.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS()
class UMyHealthComponent : public UActorComponent
{
    GENERATED_BODY()
public:
    UFUNCTION(BlueprintPure, Category = "Health")
    float GetHealth() const { return Health; }

    // 唯一写入入口：钳制、死亡判断、广播都在这里做
    UFUNCTION(BlueprintCallable, Category = "Health")
    void ApplyDamage(float Amount);

private:
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Health",
              meta = (AllowPrivateAccess = "true", DisplayName = "当前生命",
                      ClampMin = "0.0", UIMin = "0.0", UIMax = "100.0"))
    float Health = 100.f;

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Health|Regen",
              meta = (AllowPrivateAccess = "true", EditCondition = "bCanRegen",
                      EditConditionHides, Units = "Seconds"))
    float RegenInterval = 1.f;

    UPROPERTY(EditAnywhere, Category = "Health|Regen",
              meta = (AllowPrivateAccess = "true"))
    bool bCanRegen = false;
};
```

**可观察验证**

```cpp
// 属性确实进了反射，且带蓝图可见标记
if (FProperty* P = UMyHealthComponent::StaticClass()->FindPropertyByName(TEXT("Health")))
{
    UE_LOG(LogTemp, Log, TEXT("Health visible=%d"),
        P->HasAnyPropertyFlags(CPF_BlueprintVisible));
}
```

- 取消勾选 `bCanRegen`：Details 面板里 `RegenInterval` 立刻隐藏，说明 `EditCondition` 作用在编辑器层。
- 蓝图图表里拖出 `Health`：只有读取引脚，写操作必须走 `ApplyDamage`，说明只读权限真的生效。

### ③ 面试怎么讲

**30 秒口述稿**

> 属性暴露分两条轴：编辑器轴用 `EditAnywhere`、`EditDefaultsOnly` 这类控制谁能改；蓝图轴用 `BlueprintReadOnly` 或 `BlueprintReadWrite` 控制图表能不能读写。私有成员还要加 `meta AllowPrivateAccess`，否则蓝图看不到。工程上我尽量只读，写入走带校验的函数，避免蓝图绕过不变量。再加 `Category` 和 `meta` 管范围、显示名、条件，暴露面越小越好，不然重构时到处是蓝图引用。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `BlueprintReadWrite` 有什么风险？ | 蓝图可绕过校验直接改状态，破坏不变量；复制属性在客户端写还会被服务器覆盖。 |
| `BlueprintReadOnly` 和 `EditAnywhere` 冲突吗？ | 不冲突，一个管蓝图图表，一个管编辑器 Details，可以组合。 |
| `meta` 常用键有哪些？ | `DisplayName`、`ToolTip`、`ClampMin/ClampMax`、`UIMin/UIMax`、`Units`、`EditCondition`、`AdvancedDisplay`、`AllowPrivateAccess`。 |
| 为什么属性改了名蓝图全报错？ | 蓝图资产按名字硬引用属性；用 Core Redirects 或保留旧名过渡。 |
| 私有属性加了 `UPROPERTY` 仍看不到？ | 缺 `meta=(AllowPrivateAccess="true")`，或者类本身没暴露给蓝图。 |

### ④ 真实坑

1. **只读属性配了 `BlueprintReadWrite`**：蓝图随手写，数值越界、状态跳变；改成只读并暴露带校验的 setter。
2. **私有属性漏 `AllowPrivateAccess`**：编译通过但蓝图不可见，浪费一轮排查；先确认访问修饰符和 `meta`。
3. **复制属性在客户端直接写**：本地看起来生效，下一帧被服务器值覆盖；改为 Server RPC 或只读展示。
4. **重命名没配 Core Redirect**：蓝图里大量 “Unknown property”，编译错误成片；重构前先加重定向。
5. **暴露 `TArray` 的 `BlueprintReadWrite`**：蓝图可随意增删元素，内部顺序和约束失效；改成只读 + Add/Remove 函数。

### ⑤ 练习

**A 写**：把 U30 里的 `UMyHealthComponent.Health` 改成 `private`，配 `BlueprintReadOnly`、`AllowPrivateAccess`、`ClampMin/UIMax` 和中文 `DisplayName`；新增 `RegenInterval`，用 `bCanRegen` 做 `EditCondition`；在蓝图里尝试直接写 `Health`，确认写不了。

**提示**：① 默认配 `BlueprintReadOnly`，写入收口到一个 `BlueprintCallable` 函数，别为省事开 `BlueprintReadWrite`；② `ClampMin`/`ClampMax` 管数值校验，`UIMin`/`UIMax` 只管滑条范围，两者别混；③ 改名或改类型前先配 Core Redirects，并跑一次全工程蓝图编译。

验收标准：蓝图 Details 能看到中文分组与滑条范围；`bCanRegen` 关闭时 `RegenInterval` 隐藏；蓝图图表里对 `Health` 的写操作编译失败。

**B 讲**：2 分钟口述“属性暴露的安全清单”，覆盖两条轴、私有访问、`meta`、重命名成本。

验收标准：能各举一个 `Edit*` 与 `Blueprint*` 的组合；能说清 `BlueprintReadWrite` 的两个具体风险；能给出 Core Redirect 的用途。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-33"></a>
## U33 · Q33 什么时候用 C++，什么时候用蓝图？

> 来源：题库 UE 第 33 题 ｜ 速背卡：[Q33](./速背.md#ue-q33) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：选型不看信仰，看三条线——执行频率、变更频率、维护者是谁；高频和系统沉 C++，低频内容和胶水留蓝图。

**学完能做到**
- 写代码：搭一个 C++ 基类，把高频逻辑留在 C++，把表现钩子暴露给蓝图子类。
- 讲出来：用执行频率和迭代成本解释分层，而不是只说“蓝图慢”。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| “蓝图一定慢”，所以逻辑尽量都放进 C++ | 低频事件和 UI 用蓝图完全够用；成本要在高频、循环里才被放大 |
| 全部下沉 C++ 更专业 | 规则和内容会失去可迭代性，策划改一个数值也要等编译重启 |
| 蓝图 Nativization 可以当作性能方案 | UE5 已没有这条常规路径；热点还是要手写 C++ 或改数据驱动 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 蓝图编译成字节码，由虚拟机逐节点执行 | 同样逻辑比原生 C++ 多一层解释和反射调用开销 |
| 循环和 Tick 会放大单节点成本 | 每帧遍历、复杂数学、批量数据处理应下沉到 C++ |
| 蓝图改完即生效，不需要完整编译 | 内容组装、演出、UI 调整用蓝图迭代最快 |
| C++ 改动要编译、重启或热重载 | 适合稳定下来、复用率高、性能敏感的底层 |
| 蓝图资产是二进制，C++ 是文本 | 代码评审、合并、diff 的体验完全不同，影响团队协作方式 |

蓝图慢的根源不是“节点多”本身，而是每个节点都要经过虚拟机取指令、解析引脚、再调进原生函数。一次事件响应多几微秒通常无感，但放进每帧 Tick 或上千次循环里，就会变成 GameThread 上的稳定开销。

蓝图快的根源是迭代：改一个数值、换一个特效、调一段镜头，不需要程序员和编译。原型阶段用蓝图验证玩法，验证完再把热点和规则下沉到 C++，是比“一开始就全 C++”更省时间的路径。

分层不是二选一。常见结构是 C++ 抽象基类定义生命周期、网络、存档和性能边界，蓝图子类负责资源引用、参数配置和表现；C++ 通过 `BlueprintCallable` 和 `BlueprintNativeEvent` 留钩子，蓝图只写“发生什么”而不写“怎么算”。

**设计动机**：这是两套成本曲线相反的工具——蓝图把编译期换成运行期，改完即生效但要过虚拟机；C++ 改一次要编译重启，执行却几乎没有额外开销。项目里天然存在“改得频繁、跑得少”的内容和“改得少、每帧都跑”的系统，让它们各用成本最低的那套工具，比强行统一成一种更省时间；C++ 基类加蓝图子类的分层，就是把这个分工固化成结构。

**版本差异**：UE4 曾提供蓝图 Nativization（把蓝图转成 C++ 再编译），UE5 已移除；性能下沉只能靠手写 C++ 或数据驱动改造。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 逐帧移动、碰撞、大量循环 | C++ |
| 伤害公式、属性结算等规则 | C++ 计算 + DataAsset 配数值 |
| 关卡演出、特效、音效触发 | 蓝图事件图 |
| UI 布局与动画 | UMG 蓝图 + C++ 基类 |
| 原型验证 | 先蓝图跑通，再按热点下沉 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `WeaponBase.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS(Abstract, Blueprintable)
class AWeaponBase : public AActor
{
    GENERATED_BODY()
public:
    UFUNCTION(BlueprintCallable, Category = "Weapon")
    void TryFire();
protected:
    // 高频、可复用的逻辑留在 C++
    void FireInternal();
    // 表现层钩子：蓝图子类决定播什么特效、什么音效
    UFUNCTION(BlueprintNativeEvent, Category = "Weapon")
    void OnFired();
    virtual void OnFired_Implementation() {}
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Weapon",
              meta = (ClampMin = "0.0"))
    float Damage = 10.f;
};

void AWeaponBase::TryFire()
{
    FireInternal();                       // 命中判定、弹药、冷却都在 C++
}

void AWeaponBase::FireInternal()
{
    // ... 高频计算，蓝图不参与
    OnFired();                            // 只把“开火了”这个事实通知蓝图
}
```

蓝图子类只需要配资源、连表现，不再承担数值计算和逐帧逻辑。

**可观察验证**

```plaintext
stat unit        # 看 Frame/Game 时间，确认瓶颈在 GameThread
stat game        # 看 Game 线程各段耗时，定位蓝图 Tick 与逐帧遍历的开销
```

- 改造前后同一场景对比 `stat unit` 的 Game 时间：下降幅度要能解释成“省掉的每帧遍历”，而不是主观体感。
- 用 Unreal Insights 抓 GameThread：热点应从蓝图 VM、逐帧遍历挪到低频事件；若仍偏高，说明还有逻辑该继续下沉。

### ③ 面试怎么讲

**30 秒口述稿**

> 我按三条线分：执行频率、变更频率、维护者。逐帧逻辑、大量循环、底层系统和网络存档放 C++；内容组装、演出、UI、策划要调的规则放蓝图。蓝图是虚拟机执行，比 C++ 慢一个量级，循环里更明显，但迭代快。常见做法是 C++ 基类定骨架和性能边界，蓝图子类填资源和表现，中间用 `BlueprintCallable` 和 `NativeEvent` 连接。真要优化，先用 Insights 测，不靠感觉。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 蓝图到底慢多少？ | 量级上慢一个数量级，但具体倍数取决于节点类型、调用频率和平台，必须实测，不能背固定数字。 |
| 团队协作怎么划边界？ | C++ 负责框架、接口、网络和性能；策划/美术负责蓝图资产；用基类和接口约定契约，减少互相改对方文件。 |
| 蓝图 nativization 能解决性能吗？ | 不能当作 UE5 的常规方案，热点还是应该手写 C++ 或改数据驱动。 |
| 怎么发现该下沉了？ | 看 Insights 的 GameThread 热点、`stat game` 占比，以及同一段逻辑的调用频率。 |

### ④ 真实坑

1. **蓝图 Tick 里遍历全场 Actor**：每帧 `Get All Actors Of Class` 再算距离，场景一大就掉帧；改事件驱动或 C++ 管理器缓存。
2. **数值公式散落在蓝图大图里**：调平衡要翻几十个节点，还容易改漏；抽到 DataAsset/DataTable，用 C++ 统一计算。
3. **C++ 随意改名不同步**：全工程蓝图编译错误；配 Core Redirects，并在提交前跑一次蓝图编译。
4. **只在编辑器里觉得不卡**：PIE 和打包、低端机差异很大；用 Insights 看真实 GameThread 时间。
5. **把“蓝图一定慢”当教条**：低频事件和 UI 用蓝图完全够用，过度 C++ 化会让迭代变慢。

### ⑤ 练习

**A 写**：找一个蓝图 Tick 里“每帧找最近敌人并算距离”的逻辑，改成 C++ 组件：用定时器低频更新或重叠事件触发，蓝图只负责显示目标标记；对比修改前后的 `stat unit`。

**提示**：① 下沉前先写等价的 C++ 版本与蓝图版本并存对照，确认行为一致再切换；② 用定时器或事件驱动替掉每帧遍历，别把同样的频率原样搬进 C++；③ 改完用 `stat unit` 或 Insights 量化，别用编辑器里的主观流畅度下结论。

验收标准：功能行为一致；GameThread 时间下降或有明确数据；蓝图侧不再有每帧遍历节点。

**B 讲**：2 分钟口述“给一个武器系统划 C++/蓝图边界”，必须用三条线各举一个例子。

验收标准：能说出哪些逻辑放 C++、哪些放蓝图；能给出测量方法；能承认蓝图在低频场景下的优势。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-34"></a>
## U34 · Q34 蓝图之间有哪些通信方式？

> 来源：题库 UE 第 34 题 ｜ 速背卡：[Q34](./速背.md#ue-q34) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：通信方式的选择本质是“谁认识谁”——Cast 是硬认识具体类型，接口是只认识能力，事件分发器是单向广播，消息总线是谁都不认识谁。

**学完能做到**
- 写代码：用接口替换一处具体类 Cast，并用动态多播委托做一对多通知。
- 讲出来：按耦合、方向、生命周期三个维度比较四种通信方式。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| Cast 被诟病是因为性能差 | 贵的是依赖：绑定具体类，换类或换父类时所有 Cast 点都要改 |
| 事件分发器能跨网络同步 | 它只是本地多播，不参与复制；联网要另配 RPC 或复制属性 |
| 消息总线最解耦，所以到处都该用 | 依赖变隐式、调用链难追；没有 Tag 规范和集中登记，排障成本更高 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Cast 需要具体类型，失败返回空 | 调用方与实现类强耦合，换类或换继承关系时大量节点要改 |
| Blueprint Interface 按“能力”调用 | 调用方只知道接口，不知道对方是门、宝箱还是 NPC |
| Event Dispatcher 就是动态多播委托 | 拥有者广播，多个监听者响应，适合 UI 刷新和状态通知 |
| GameplayMessageSubsystem 按 GameplayTag 发布/订阅 | 双方不互相引用，适合跨系统；但调用链隐式，调试更难 |
| `Get All Actors Of Class` 遍历世界 | 适合初始化收集，不适合每帧调用 |
| 编辑器里直接指定引用 | 简单直观，但关系固定，换实例或换关卡容易断 |

Cast 本身不贵，贵的是依赖。蓝图 Cast 节点里存着目标类，目标类改名、换父类、拆模块，所有 Cast 点都要跟着改；Cast 失败返回空，不检查就直接调成员，是蓝图崩溃的常见来源。

接口解决“能力”问题：交互、受伤、可拾取这类跨类型行为，用接口声明，调用方只判断 `Implements` 再 `Execute_`。代价是接口不能有成员变量，状态仍要放在实现类或组件里；接口方法也不能直接当普通函数调，必须走 `Execute_`。

事件分发器解决“一对多”：广播方只负责发，不关心谁听；监听方需要拿到广播方引用才能 Bind。它同步执行，同一帧内完成；不会自动网络复制，客户端广播只在本地生效。对象销毁后要清理绑定，避免残留条目。

消息总线解决“跨系统互不认识”：Lyra 示例里的 `GameplayMessageSubsystem` 以 GameplayTag 路由，发布者和订阅者都不需要互相引用。它把依赖从代码里拿掉，但把流程藏进了 Tag，排查时要靠日志和集中登记。

**设计动机**：UE 没有只给一种通信方式，是因为“耦合程度”和“调用可追踪性”是一对反向指标。硬引用与 Cast 最直白、断点最好下，但换类型就要全图改；接口把依赖降到能力层，代价是不能带状态；分发器让广播方不认识监听方，代价是监听方仍要持有广播方引用；消息总线把最后一点引用也去掉，代价是流程藏进 Tag。选型就是按项目当前能承受的耦合与维护成本，挑一个位置停住。

**版本差异**：`GameplayMessageSubsystem` 来自 UE5 的 Lyra 示例工程，UE4 项目没有现成实现，需自建或退回事件分发器。

### ② 开发怎么用

| 场景 | 推荐方式 |
| --- | --- |
| 双方类型固定、一次性调用 | 直接引用或 Cast |
| 多种类共享一种能力 | Blueprint Interface |
| 一个事件多个 UI/系统关心 | Event Dispatcher |
| 跨系统、双方不该互相引用 | GameplayMessageSubsystem |
| 初始化时收集场景对象 | `Get All Actors Of Class`，结果缓存 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`UObject/Interface.h`、`Components/ActorComponent.h` 以及 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
// 能力接口：调用方只认能力，不 Cast 到具体类
UINTERFACE(MinimalAPI, Blueprintable)
class UInteractable : public UInterface { GENERATED_BODY() };
class IInteractable
{
    GENERATED_BODY()
public:
    UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Interact")
    void Interact(AActor* Instigator);
};
// 调用：if (HitActor->Implements<UInteractable>()) IInteractable::Execute_Interact(HitActor, this);

// 广播：动态多播委托，多个监听者响应同一次通知
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnHealthChanged, float, OldValue, float, NewValue);
UCLASS()
class UMyHealthComponent : public UActorComponent
{
    GENERATED_BODY()
public:
    UPROPERTY(BlueprintAssignable, Category = "Health")
    FOnHealthChanged OnHealthChanged;
};
```

**可观察验证**

```cpp
// 接口调用前先判能力：Implements 为假就跳过，不依赖具体类
UE_LOG(LogTemp, Log, TEXT("interactable=%d"),
    HitActor != nullptr && HitActor->Implements<UInteractable>());

// 广播是否送到：两个监听者的回调里各打一行
UE_LOG(LogTemp, Log, TEXT("OnHealthChanged: %.1f -> %.1f"), OldValue, NewValue);
```

- 新增第三种可交互物时调用方代码零改动、`Implements` 直接为真——这就是依赖从具体类型挪到能力的证据。
- 在 `EndPlay` 里清掉绑定后再广播：对应监听者的日志不再出现，说明失效槽位确实被清理。

### ③ 面试怎么讲

**30 秒口述稿**

> 常用四层：直接 Cast 最简单，但耦合具体类，失败返回空；接口最解耦，适合“能交互”“能受伤”这种能力；事件分发器就是多播委托，适合一对多广播，比如血量变化通知 UI；再大一点用 Lyra 那类消息总线，按 Tag 发布订阅，双方不用互相引用。Actor 之间尽量别 Cast 到具体类，优先接口或委托，否则换类名就到处改节点。还要注意这些默认都不跨网络。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Cast 为什么被诟病？ | 不是性能，而是耦合：绑定具体类，换类型要改所有节点；失败还返回空，容易空引用崩溃。 |
| 事件分发器和接口怎么选？ | 一对一“让对方做事”用接口；一对多“通知发生了什么”用分发器。 |
| 事件分发器跨网络吗？ | 不跨。它只是本地多播，要联网得用 RPC 或复制属性。 |
| 消息总线有什么代价？ | 依赖变隐式，调用链难追；需要 Tag 规范、日志和集中登记。 |

### ④ 真实坑

1. **到处 Cast 到具体蓝图类**：换类名或调整继承后全图报错；把稳定能力抽成接口，只在确需具体行为时 Cast。
2. **Cast 失败不判空**：`Cast` 返回空后直接调成员，运行时崩溃；所有 Cast 结果先检查。
3. **每帧 `Get All Actors Of Class`**：遍历世界，规模大就掉帧；初始化时收集缓存，之后用事件维护。
4. **分发器绑定后不清**：频繁生成销毁的 Actor 上残留失效条目；在 `EndPlay` 里 `RemoveDynamic` 或清空绑定。
5. **消息总线滥用**：发布者不知道谁消费，出问题只能猜；给 Tag 建命名规范、集中登记、关键路径打日志。

### ⑤ 练习

**A 写**：把一处“Cast 到具体门类再开门”改成 `IInteractable` 接口调用；再给血量组件加一个 `BlueprintAssignable` 的 `OnHealthChanged`，让血条和音效两个蓝图同时监听。

**提示**：① 跨类型行为优先抽接口，Cast 只留在“确实需要具体类型”的地方；② 动态多播在 `EndPlay` 里 `RemoveDynamic` 或 `Clear`，避免残留失效槽位；③ 用消息总线时先定 Tag 规范、集中登记并给关键路径打日志，别让调用链只剩猜。

验收标准：新增第三种可交互物时，交互方代码零改动；两个监听者都能收到同一次广播；销毁监听者后不再触发回调。

**B 讲**：2 分钟口述“蓝图通信四件套”，按耦合、方向、生命周期三个维度比较。

验收标准：每种方式能给出一个适用场景和一个缺点；能主动说明网络不自动同步；能解释接口为什么必须 `Execute_`。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ⑥：委托（Delegate）](#ch11)


<a id="ch11"></a>
# 第 11 章 · UE ⑥：委托（Delegate）

> 对应速背 UE 主题 06（Q35–Q40），完整答题卡见 [速背 UE 06](./速背.md#ue-t06)。
> 上一篇：[UE ⑤：蓝图与 C++ 互调](#ch10) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-35"></a>
## U35 · Q35 单播、多播、动态委托有什么区别？

> 来源：题库 UE 第 35 题 ｜ 速背卡：[Q35](./速背.md#ue-q35) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：三类委托的差别只有两个维度——“有几个槽位”和“能不能被蓝图与序列化看见”。

**学完能做到**
- 写代码：在一个组件里同时声明原生多播和动态多播，并在另一个类里用 AddDynamic 绑上。
- 讲出来：用“槽位 / 绑定对象 / 蓝图可见 / 返回值”四列，把四类委托一次说完。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| “动态”指运行期才决定绑谁 | 绑谁在 `AddDynamic` 那一刻就写死；动态指广播时按函数名去反射表里查函数 |
| 多播就是“更安全的单播” | 单播只有一个槽位且可以有返回值；多播是通知、顺序不保证、没有有意义的返回值 |
| 动态委托是原生委托的升级版 | 动态是叠在原生之上的反射适配层，每次调用多一次查表与 `ProcessEvent`，热路径仍用原生 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 单播只有一个槽位，后一次绑定覆盖前一次 | 适合“唯一的处理器”；想挂第二个回调就必须换成多播 |
| 多播维护槽位列表，Broadcast 逐个调用 | 适合通知；发布方不需要知道谁在听 |
| 动态委托保存“UObject 弱引用 + FName”，不存函数地址 | 能被反射系统识别，才能给蓝图用、才能序列化 |
| 动态多播挂在 `UPROPERTY(BlueprintAssignable)` 上就是蓝图里的 Event Dispatcher | 蓝图叫“事件派发器”，C++ 侧就是动态多播，同一个东西 |
| 动态委托只能绑 UObject 的 UFUNCTION | lambda、静态函数、普通 C++ 类都绑不上 |

委托在 C++ 层就是模板：单播是 `TDelegate<...>`，多播是 `TMulticastDelegate<...>`；动态版本在它之上包了一层 `FScriptDelegate`，把“调用谁”从编译期挪进了反射系统。所以“动态”不是“运行期才决定绑谁”——绑谁在你 AddDynamic 那一刻就写死了，动态指的是“广播时按函数名去反射表里找函数”。

这四类不是新旧替代关系。原生单播和多播是性能最好的基座；动态版本是加在基座上的“反射适配层”，每次调用多一次查表加一次 `ProcessEvent`。所以工程默认策略是：C++ 内部热路径用原生，蓝图边界才用动态。反过来，动态委托独有四项能力：能被 `UPROPERTY` 描述、能进蓝图、能随对象序列化、能被编辑器识别成 Event Dispatcher，原生委托一项都没有。返回值要单记一句：单播可以有返回值；多播即使声明了带返回值的宏，也只有最后执行的那个槽位的结果有意义——把多播当“收集所有返回值”来用，是下一个单元要展开的错误。

**设计动机**：委托在 C++ 层只需要“可调用物 + 调用”两件事，模板就能做到，原生委托因此没有额外开销；但蓝图函数在运行期没有可用的 C++ 函数指针，只有 `UFunction` 元数据，而绑定关系还要能存进 `UPROPERTY`、随对象序列化、被编辑器识别成 Event Dispatcher。于是引擎在原生多播之上再包一层“UObject 弱引用 + FName”的反射适配层，用一次查表换蓝图可见与可序列化。四类委托并存，本质就是“性能基座”与“反射边界”两种需求的结果。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 一对一、需要返回值、纯 C++ | `DECLARE_DELEGATE_RetVal_OneParam(bool, FCanAttack, AActor*)` |
| 一对多通知、纯 C++ | `DECLARE_MULTICAST_DELEGATE_OneParam(FOnDied, AActor*)` |
| 要给蓝图绑、要显示成事件派发器 | `DECLARE_DYNAMIC_MULTICAST_DELEGATE_*` + `UPROPERTY(BlueprintAssignable)` |
| 蓝图传进来的回调参数 | `DECLARE_DYNAMIC_DELEGATE_*`，参数只用反射类型 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、UHT 生成的 `MyHealthComponent.generated.h` 与模块导出宏 `MYGAME_API`；`UMyHUD` 的定义在另一个头文件里，片段不能脱离工程独立编译。

```cpp
// MyHealthComponent.h：动态委托宏必须在 UCLASS 之外的文件作用域
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnHealthChanged, float, NewHealth, float, Delta);
DECLARE_MULTICAST_DELEGATE_OneParam(FOnDied, AActor*);   // 原生多播，蓝图不可见

UCLASS()
class MYGAME_API UMyHealthComponent : public UActorComponent
{
    GENERATED_BODY()
public:
    // 蓝图里显示为 OnHealthChanged 事件派发器
    UPROPERTY(BlueprintAssignable, Category="Health")
    FOnHealthChanged OnHealthChanged;
    FOnDied OnDied;

    void ApplyDamage(float Amount)
    {
        Health = FMath::Max(0.f, Health - Amount);
        OnHealthChanged.Broadcast(Health, -Amount);          // 蓝图与 C++ 槽位一起调
        if (Health <= 0.f) { OnDied.Broadcast(GetOwner()); }
    }

private:
    float Health = 100.f;
};

// 别的类里绑定：不用改 HealthComponent 一行代码
UFUNCTION()
void UMyHUD::HandleHealthChanged(float NewHealth, float Delta);

void UMyHUD::BindToHealth(UMyHealthComponent* Comp)
{
    Comp->OnHealthChanged.AddDynamic(this, &UMyHUD::HandleHealthChanged);
}
```

**可观察验证**

```cpp
DECLARE_DELEGATE_RetVal_OneParam(bool, FCanAttackProbe, AActor*);

void UMyHUD::BindProbe(UMyHealthComponent* Comp, FCanAttackProbe& CanAttack)
{
    // 单播：两次 Bind 只保留最后一个槽位
    CanAttack.BindUObject(this, &UMyHUD::CanAttackAsHUD);
    CanAttack.BindUObject(this, &UMyHUD::CanAttackAsSystem);
    // 多播：两次 Add 留下两个槽位
    Comp->OnHealthChanged.AddDynamic(this, &UMyHUD::HandleHealthChanged);
    Comp->OnHealthChanged.AddDynamic(this, &UMyHUD::HandleHealthChanged);

    UE_LOG(LogTemp, Log, TEXT("single=%d multi=%d"),
        CanAttack.IsBound() ? 1 : 0, Comp->OnHealthChanged.IsBound() ? 1 : 0);
}
```

```plaintext
Output Log 过滤 LogTemp：`AddDynamic` 绑两次后，一次 `ApplyDamage` 打出两条 OnHealthChanged 回调日志
蓝图编辑器 My Blueprint 面板：Event Dispatchers 下能拖出 OnHealthChanged 的 Bind Event
```

- 广播一次后数日志条数：多播 `Add` 两次就是两条，单播 `Bind` 两次只有最后一条——槽位数量的差别直接可见。
- 去掉 `UPROPERTY` 的 `BlueprintAssignable` 再编译：蓝图面板里事件派发器消失，但 C++ 的 `Broadcast` 照常执行，可见性与调用是两件事。

### ③ 面试怎么讲

**30 秒口述稿**

> 分两个维度看：槽位数，和能不能被蓝图看见。单播只有一个槽位，后绑的覆盖前面的，可以有返回值，适合一对一；多播维护槽位列表，Broadcast 全部调用，返回值没有实际意义，适合一对多通知。动态版本是原生版本的反射适配层，它不存函数指针，存 UObject 弱引用加函数名，所以能被蓝图绑定、能序列化，代价是每次调用要查表走 ProcessEvent。动态多播加上 BlueprintAssignable，就是蓝图里的 Event Dispatcher。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 动态委托为什么只能绑 UFUNCTION？ | 反射系统只能按 UFunction 找到函数并构造参数栈；lambda 和静态函数没有 UFunction 元数据，绑不上。 |
| 多播能返回值吗？ | 宏上可以声明，但 Broadcast 是循环覆盖，只有最后一个槽位的返回值有意义，工程上按无返回值对待。 |
| 单播重复 Bind 会加两个回调吗？ | 不会，单播就一个槽位，后一次覆盖前一次，而且不报错，很容易误判。 |
| 动态委托参数能随便写吗？ | 不能。参数要按反射布局组包给 `ProcessEvent`，必须是 UHT 能描述的类型，比如 UObject 指针、`FString`、`int32`、标记 BlueprintType 的结构体。 |

### ④ 真实坑

1. **动态委托宏写在 UCLASS 里面**：UHT 解析头文件直接失败。正确做法是放在 `#include "X.generated.h"` 之后、`UCLASS` 之前的文件作用域。
2. **单播当多播用**：两个系统各自 `BindUObject`，只有后绑的生效，前一个静默失效，现象是“功能时好时坏”。需要多方监听就一开始声明成多播。
3. **动态委托参数写裸指针**：`FMyStruct*` 这类非反射类型 UHT 无法生成，或者蓝图里参数不可用；改成 `UObject*`、值传递的 USTRUCT，或退回原生委托。
4. **以为多播返回值能汇总**：`DECLARE_MULTICAST_DELEGATE_RetVal` 编译得过，运行只拿到最后一个结果，逻辑上少算一路。
5. **没标 `BlueprintAssignable`**：C++ 里绑得好好的，美术在蓝图里找不到这个事件，误判为“没编译”。

### ⑤ 练习

**A 写**：照上面写一个 `UMyHealthComponent`，包含动态多播 `OnHealthChanged(float, float)` 和原生多播 `OnDied(AActor*)`；再写 `UMyHUD`，分别用 `AddDynamic`、`AddUObject` 绑定并打日志。HUD 只依赖组件的公开头文件，不改组件代码。

**提示**：① 动态多播宏写在文件作用域，即 `#include "X.generated.h"` 之后、`UCLASS` 之前，写进类体里 UHT 会直接报错；② `AddDynamic` 的目标函数必须标 `UFUNCTION()` 且签名与宏参数逐个对齐，否则绑定失败或静默不触发；③ 验证槽位差别时，让同一个 HUD 对单播 `Bind` 两次、对多播 `Add` 两次，各广播一次数日志条数即可。

验收标准：编译无 UHT 报错；一次 `ApplyDamage` 能同时触发两个回调；把 `OnHealthChanged` 改成非动态后，`AddDynamic` 必须编译失败，并能解释原因。

**B 讲**：2 分钟口述“四类委托怎么选”。必须用“槽位 / 绑定对象 / 蓝图可见 / 返回值”四列组织，每列至少给一个具体场景。

验收标准：不看稿；四类都能落到具体需求（如“UI 监听血量”“蓝图做成就提示”）；能说清“动态”指反射查找，不是延迟绑定。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-36"></a>
## U36 · Q36 动态委托的底层原理是什么？

> 来源：题库 UE 第 36 题 ｜ 速背卡：[Q36](./速背.md#ue-q36) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：动态委托慢，不是因为它存在堆上，而是因为每次调用都要“按名字找函数，再走反射调用”。

**学完能做到**
- 写代码：手写一个“对象弱引用 + FName”的等价结构，把动态委托的调用链路还原出来。
- 讲出来：把一次广播拆成“查表 → 组包 → ProcessEvent”三步，并说出每步的成本来源。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 「动态」是指运行期临时决定绑谁 | 动态指通过反射按名字查函数；绑定仍要显式 `AddDynamic`，目标必须是 UFUNCTION |
| 动态委托能绑 Lambda、函数指针 | 不能，参数和函数都要能被反射描述，只能绑 UFUNCTION |
| 动态委托慢是因为在堆上分配 | 慢在每次调用：查 `UFunction` + 按反射布局组包 + `ProcessEvent`；对象侧还有弱引用检查 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 动态委托存 `TWeakObjectPtr<UObject>` + `FName`（UE5；早期字段形态不同，思路一致） | 对象被 GC 不会悬垂，但拿不到函数地址做直接调用 |
| 调用时在目标的 UClass 上按名字查 `UFunction` | 每次广播多一次哈希查找，高频路径上是纯开销 |
| 找到后走 `ProcessEvent`，参数按反射布局打包 | 参数越多打包越贵；蓝图目标还要再进虚拟机执行 |
| 参数类型必须能被反射描述 | 所以只能绑 UFUNCTION，且不能出现非反射类型 |
| 序列化只记录对象路径 + 函数名 | 存档、复制后还能恢复绑定，这是原生委托没有的能力 |

原生委托的调用链路很短：`TDelegate` 里存一个成员函数指针或小型可调用物，`Execute` 就是一次间接调用，参数按 ABI 直接进寄存器。动态委托完全是另一条路：`FScriptDelegate` 里只有“对象”和“函数名”两个字段，调用时必须现场把名字翻译成函数。

这个翻译分三步。查表：拿 `FName` 去目标的 `UClass` 函数表里找 `UFunction`，找不到就静默返回。组包：把本次 `Broadcast` 的参数按 `UFunction` 的反射布局写进缓冲区。调用：`ProcessEvent(Function, Parms)`，由反射系统分派到真正的实现。如果目标是蓝图函数，之后还要进蓝图虚拟机逐条执行字节码，读写属性也走反射。

所以“动态委托广播给蓝图”比“动态委托广播给 C++ UFUNCTION”还要再贵一档，这不是委托的成本，是蓝图的成本。两条硬限制也由此而来：查表结果必须是 `UFunction`，没有元数据的可调用物进不了表；组包要按反射布局算偏移和大小，UHT 描述不了的类型没法安全拷贝。

**设计动机**：蓝图函数在运行时没有可用的 C++ 函数指针，只有 `UFunction` 元数据；而且绑定关系要能随存档、复制一起保存。于是动态委托只能存“对象 + 函数名”，运行时再翻译成 `UFunction` 去调用——换来蓝图可见与可序列化，代价就是查表和反射组包。

**版本差异**：UE5 引入 `TObjectPtr`/`FObjectPtr` 体系，但动态委托内部仍是“对象弱引用 + `FName`”的思路，`ProcessEvent` 的反射调用链路两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 需要给蓝图绑、需要序列化 | 动态委托，接受查表成本 |
| 纯 C++ 高频回调（Tick、伤害结算） | 原生委托，别用动态版本 |
| 既要给蓝图，又不想全程付反射成本 | 内部走原生多播，最外层边界转一次动态广播 |
| 排查“蓝图没收到事件” | 检查函数是否 UFUNCTION、对象是否有效、名字是否被改过 |
| 量化开销 | 用 Unreal Insights 或 `FPlatformTime::Seconds` 包一段循环对比 |

**示例说明**：以下为模块内片段；`FScriptDelegateLike` 是教学用的还原结构，不是引擎真实类型，`TWeakObjectPtr`/`FindFunction` 依赖 `CoreMinimal.h`。

```cpp
// 动态委托在概念上等价于：对象弱引用 + 函数名
struct FScriptDelegateLike
{
    TWeakObjectPtr<UObject> Object;
    FName FunctionName;

    void Execute() const
    {
        UObject* Target = Object.Get();
        if (!Target) { return; }                            // 对象已销毁：跳过，不崩
        UFunction* Fn = Target->FindFunction(FunctionName); // 按名字查表
        if (!Fn) { return; }                                // 改名/移除：静默失败
        Target->ProcessEvent(Fn, nullptr);                  // 反射调用，参数需按布局组包
    }
};

// 高频路径只该有这一种调用：一次间接调用，无查表
DECLARE_DELEGATE_OneParam(FOnNativeDamage, float);

void AMyActor::Tick(float DeltaSeconds)
{
    OnNativeDamage.Execute(DeltaSeconds);
}
```

**可观察验证**

```cpp
// 1) 验证“按名字查表”：名字错或没标 UFUNCTION 时，FindFunction 返回空
UFunction* Fn = Target->FindFunction(TEXT("OnDamaged"));
UE_LOG(LogTemp, Log, TEXT("found=%d"), Fn != nullptr);

// 2) 对比耗时：同一逻辑的原生多播 vs 动态多播各广播 10 万次
const double T0 = FPlatformTime::Seconds();
for (int32 i = 0; i < 100000; ++i) { Dynamic.Broadcast(1.f); }
const double T1 = FPlatformTime::Seconds();
```

```plaintext
Unreal Insights：CPU 通道里搜 ProcessEvent，看动态委托的采样占比
stat unit / stat game：确认 ProcessEvent 是否吃掉了帧预算
```

- 同一个 `UFUNCTION` 分别挂到原生多播和动态多播上各广播 10 万次，用 `FPlatformTime::Seconds()` 计时，能看到明显倍数差。
- 把目标换成蓝图函数再测一次：占比会再升一档，这多出来的就是蓝图 VM 的成本。

### ③ 面试怎么讲

**30 秒口述稿**

> 动态委托不存函数指针，存的是 UObject 弱引用加 FName 函数名。广播时先拿名字去 UClass 的函数表里找 UFunction，找到了再按反射布局把参数打包，最后走 ProcessEvent 调用。这条链路换来蓝图可见和可序列化，代价是每次调用都有查表和反射开销；如果目标是蓝图函数，还要再进虚拟机，所以更慢。我的用法是 C++ 内部用原生委托，只有需要暴露给蓝图的那一层才用动态。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 对象销毁后动态委托会怎样？ | 弱引用失效，广播时跳过该槽位，不会野指针；但槽位还在，`IsBound()` 不能当作“还有人听”的判据。 |
| 为什么参数必须是反射类型？ | 参数要按 `UFunction` 的布局写进缓冲区再交给 `ProcessEvent`，UHT 描述不了的类型运行时无法安全组包。 |
| 动态委托能跨网络复制吗？ | 委托属性本身不参与复制；需要同步的是“发生了什么”，通常用 RPC 或复制属性，收到后本地广播。 |
| 有没有办法两全？ | 有，分层：内部全用原生多播，只在需要蓝图参与的最外层包一个动态多播，一次转换。 |
| 到底慢多少？ | 不给绝对数字，量级取决于参数个数和目标是否蓝图；用 Insights 对比同一逻辑的原生/动态两版，看倍数和占比。 |

### ④ 真实坑

1. **Tick 里广播动态多播给蓝图**：每个监听者一次查表加一次反射，蓝图目标再进虚拟机，帧时间被悄悄吃掉，Profiler 里表现为 `ProcessEvent` 占比高。
2. **拿 `IsBound()` 判对象是否还活着**：槽位不会因为对象销毁而消失，`IsBound()` 仍可能为 true，真正的判据是对象有效性。
3. **函数改名后旧存档失效**：序列化存的是 `FName`，改名后查不到 `UFunction`，表现为“读档后事件不触发”，而且不打日志。
4. **参数被迫改成 `UObject*`**：原本想传自定义结构，因为反射限制一路强转，语义丢失，最后只能退回原生委托。
5. **以为动态委托线程安全**：反射调用和蓝图 VM 都不能随便在其他线程碰，游戏线程之外广播动态委托基本等于埋雷。

### ⑤ 练习

**A 写**：写一个对比程序：同一个 `float` 参数的回调，一份用原生多播，一份用动态多播（目标都绑 C++ UFUNCTION），各循环 10 万次，用 `FPlatformTime::Seconds()` 计时，打印耗时与倍数。两版逻辑必须完全等价，只换委托类型。

**提示**：① 两版必须共用同一个回调实现，否则对比不公平；② 计时循环里别加日志，IO 会盖过反射开销；③ 结论只对“C++ 目标”成立，蓝图目标的额外 VM 成本要单独测，别外推。

验收标准：同机重复三次能得到稳定的倍数关系；能指出耗时主要花在查表还是组包；注释里写清“为什么这个结论不能直接外推到蓝图目标”。

**B 讲**：2 分钟讲“动态委托一次调用的完整链路”。按“查表 → 组包 → ProcessEvent →（蓝图则进 VM）”四步讲，并说明每步为什么比原生委托贵。

验收标准：四步顺序正确；能解释弱引用和 `FName` 各自解决什么问题；能给出“内部原生、边界动态”的落地建议。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-37"></a>
## U37 · Q37 AddDynamic、AddUObject、AddRaw、AddSP、AddLambda 有什么区别？

> 来源：题库 UE 第 37 题 ｜ 速背卡：[Q37](./速背.md#ue-q37) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：这些绑定 API 的差别只有两件事——绑的是什么可调用物，以及框架能不能替你判断它是否还活着。

**学完能做到**
- 写代码：在同一个多播上写出五种绑定，并在结束时用正确的 API 全部清掉。
- 讲出来：按“存什么 / 是否管生命周期 / 怎么移除”三列把五个 API 说完。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `AddLambda` 也是绑在 `this` 上，`RemoveAll(this)` 能清掉 | 闭包没有 UserObject，`RemoveAll(this)` 清不到它，只能用返回的 `FDelegateHandle` 精确移除 |
| `AddSP` 和 `AddRaw` 只是写法不同 | 前者是强引用，不解绑就延长目标寿命；后者不判活，目标销毁后再广播直接崩 |
| `AddUObject` 可以换成 `AddDynamic` | 前者用于原生委托、后者用于动态委托；动态委托只接受 UFUNCTION，原生委托上没有 `AddDynamic` |

### ① 本质

| API | 存什么 | 生命周期 | 移除方式 |
| --- | --- | --- | --- |
| `AddDynamic` | UObject 弱引用 + UFUNCTION 名 | 框架判活，失效跳过 | `RemoveDynamic` / `RemoveAll` |
| `AddUObject` | UObject 成员函数 + 弱引用 | 框架判活，失效跳过 | `Remove(Handle)` / `RemoveAll(this)` |
| `AddRaw` | 裸对象指针 + 成员函数指针 | 不管理，对象没了就崩 | 必须自己 `Remove(Handle)` |
| `AddSP` | `TSharedRef` 强引用 | 强引用，会延长目标寿命 | `Remove(Handle)`，否则泄漏 |
| `AddLambda` | 闭包，没有“绑定对象”概念 | 不管理，捕获 this 即裸指针 | 只能用 `Handle` 移除 |

`AddDynamic` 是动态委托专用，只接受“对象 + UFUNCTION”，编译期就能挡住绑错。`AddUObject` 是原生委托绑 UObject 成员的标准写法，内部存弱引用，对象销毁后这次调用会被跳过。两者是同一思路的两套实现，区别只在于走不走反射。

`AddRaw` 和 `AddSP` 面向非 UObject 的世界：前者给裸指针，适合生命周期由你自己保证的普通 C++ 对象；后者给共享指针，用强引用换安全，代价是只要不解绑，目标就永远不会销毁。

`AddLambda` 最灵活也最容易出事：闭包被存进委托，框架不知道它捕获了什么。捕获 `this` 就等价于存了个裸指针，`RemoveAll(this)` 也清不掉，因为这条槽位根本没有“UserObject”。另有 `AddWeakLambda(UObject*, Lambda)`，把某个对象当存活判据，是 UE5 里更稳的写法。

单播和多播还有命名约定：单播用 `Bind*`，没有返回值，重复绑定是覆盖；多播用 `Add*`，返回 `FDelegateHandle`，靠它精确移除。记混这两个前缀，就会出现“绑两次只跑一次”或者“以为覆盖其实加了两个槽位”。

**设计动机**：这五个 API 并存，是因为委托要同时服务三类目标：UObject（有 GC 和反射）、普通 C++ 对象（生命周期由你保证）、共享指针对象（有引用计数）。框架只能对“能识别出身份”的绑定做存活判断，UObject 版本用弱引用做到这一点；一旦可调用物没有身份（裸指针、闭包、静态函数），框架就无从判活，只能把 `FDelegateHandle` 交回给你，由你在合适的时机精确移除。所以选型的本质是问一句：框架能不能替我判活？不能就必须自己管。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 动态多播绑 C++ 成员 | `OnX.AddDynamic(this, &ThisClass::HandleX)` |
| 原生多播绑 UObject 成员 | `OnX.AddUObject(this, &ThisClass::HandleX)` |
| 原生多播写内联逻辑 | `OnX.AddWeakLambda(this, [this](...) { ... })` |
| 绑非 UObject 的长期对象 | `AddRaw`，并在对象析构前 `Remove` |
| 绑共享指针对象 | `AddSP(Obj.ToSharedRef(), &FObj::Fn)`，注意解绑 |
| 全部清掉 | `Clear()`；清某对象的全部槽位用 `RemoveAll(this)` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与工程内的 `UMyHUD`、`FRawListener`、`FScoreBoard`、`FScoreLog`，不能脱离工程独立编译。

```cpp
DECLARE_MULTICAST_DELEGATE_TwoParams(FOnScoreChanged, int32, NewScore, AActor*, Instigator);

void UMyHUD::BindAll()
{
    // 1) UObject 成员：弱引用，this 销毁后自动跳过
    FDelegateHandle H1 = OnScoreChanged.AddUObject(this, &UMyHUD::RefreshScore);

    // 2) Lambda：AddWeakLambda 把 this 当存活判据，避免捕获悬垂指针
    FDelegateHandle H2 = OnScoreChanged.AddWeakLambda(this,
        [this](int32 NewScore, AActor* Who) { ShowToast(NewScore); });

    // 3) 共享指针：强引用
    FDelegateHandle H3 = OnScoreChanged.AddSP(SharedBoard.ToSharedRef(), &FScoreBoard::OnScore);

    // 4) 裸指针：框架不认生命周期，RawListener 必须先于解绑存活
    FDelegateHandle H4 = OnScoreChanged.AddRaw(RawListener, &FRawListener::OnScore);
    // 5) 静态函数：没有对象，天然没有生命周期问题
    FDelegateHandle H5 = OnScoreChanged.AddStatic(&FScoreLog::Log);
}

void UMyHUD::UnbindAll()
{
    OnScoreChanged.Remove(H1);        // 精确移除最稳
    OnScoreChanged.Remove(H3);
    OnScoreChanged.Remove(H4);
    OnScoreChanged.RemoveAll(this);   // 清掉以 this 为 UserObject 的槽位
    OnScoreChanged.Clear();           // H5 无 UserObject，最后统一清
}
```

**可观察验证**

```cpp
FDelegateHandle HU = OnScoreChanged.AddUObject(this, &UMyHUD::RefreshScore);
FDelegateHandle HW = OnScoreChanged.AddWeakLambda(this, [this](int32 S, AActor*) { ShowToast(S); });
FDelegateHandle HL = OnScoreChanged.AddLambda([this](int32 S, AActor*) { UE_LOG(LogTemp, Log, TEXT("lambda:%d"), S); });

UE_LOG(LogTemp, Log, TEXT("bound=%d"), OnScoreChanged.IsBound() ? 1 : 0);
OnScoreChanged.RemoveAll(this);        // 只清有 UserObject 的 HU/HW
UE_LOG(LogTemp, Log, TEXT("after RemoveAll=%d"), OnScoreChanged.IsBound() ? 1 : 0);
OnScoreChanged.Remove(HL);             // lambda 槽位只能用 handle 精确移除
```

```plaintext
PIE 退出后看 Output Log：AddRaw 的槽位仍在广播时，崩溃栈落在 FRawListener::OnScore
```

- `RemoveAll(this)` 之后 `IsBound()` 仍为 1，补一句 `Remove(HL)` 才归零——这就是“闭包没有 UserObject”的直接证据。
- 提前 `delete RawListener` 再广播一次，崩溃点落在 `FRawListener::OnScore`，说明 `AddRaw` 完全不判活。

### ③ 面试怎么讲

**30 秒口述稿**

> 分两类看。AddDynamic 是动态委托专用，只能绑 UObject 加 UFUNCTION，框架存弱引用；AddUObject 是原生委托绑 UObject 成员，也是弱引用，对象销毁后跳过。AddRaw 绑裸指针，完全不管生命周期，对象没了就崩；AddSP 绑共享指针，是强引用，不解绑会延长目标寿命；AddLambda 存闭包，捕获 this 就等于裸指针，而且 RemoveAll(this) 清不掉，只能用返回的 handle。移除一定要和添加成对。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 重复 AddDynamic 会怎样？ | 多数版本允许重复，结果是两个槽位、回调跑两次；要幂等就先 `RemoveDynamic` 再 `Add`，或改用 `AddUniqueDynamic`（视版本提供）。 |
| Lambda 捕获 this 有什么风险？ | 闭包被存进委托，this 销毁后仍会被调用，访问成员就是野指针；用 `AddWeakLambda` 或捕获 `TWeakObjectPtr` 并判空。 |
| `Remove` 和 `RemoveAll` 区别？ | `Remove(Handle)` 精确删一条；`RemoveAll(UserObject)` 删掉该对象注册的所有槽位，对 lambda 和 raw 无效。 |
| `AddSP` 会泄漏吗？ | 会。共享指针是强引用，槽位不清目标就活着；长生命周期的全局多播上尤其危险。 |

### ④ 真实坑

1. **`AddDynamic` 的目标函数没标 `UFUNCTION()`**：绑定失败，报错信息指向委托而不是那个函数，容易查错方向。
2. **`RemoveDynamic` 的签名和添加时不匹配**：移除静默失败，槽位还在，表现为“退出界面后还在收事件”。
3. **lambda 捕获 `this` 又只靠 `RemoveAll(this)` 清理**：清不掉，因为槽位没有 UserObject；对象销毁后仍执行，崩在成员访问上。
4. **`AddSP` 绑了本该随关卡销毁的对象**：强引用让它活过切关，内存和逻辑一起串场。
5. **`AddRaw` 用在临时对象上**：对象提前销毁，委托还留着指针，下一次广播直接崩。

### ⑤ 练习

**A 写**：给 `OnScoreChanged` 写一个完整的绑定/解绑类，五种绑定各一个，并在 `EndPlay` 里清理。再验证：解绑前销毁对象 `A`，观察 `AddUObject`、`AddWeakLambda` 被跳过，而 `AddRaw` 的槽位会在广播时崩（预期可先用注释标出）。

**提示**：① 五种绑定都要把返回的 `FDelegateHandle` 存下来，`EndPlay` 里先按 handle 精确 `Remove`，最后 `RemoveAll(this)` 兜底；② 验证 lambda 陷阱时，`AddLambda` 与 `AddWeakLambda` 各绑一次，销毁对象后各广播一次，只有前者会崩；③ `AddRaw` 的崩溃实验放在最后做，先把 `RawListener` 的析构顺序写清楚，否则分不清是绑定问题还是析构问题。

验收标准：五种绑定都能编译且各触发一次；销毁后弱引用两类不回调、不崩；`Clear()` 之后 `IsBound()` 返回 false。

**B 讲**：2 分钟讲“五个 Add API 的选型”。必须覆盖存什么、管不管生命周期、怎么移除，并各给一个适用场景。

验收标准：三列信息齐全；能主动指出 `RemoveAll(this)` 对 lambda 无效；能说出 `AddSP` 的反向泄漏风险。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-38"></a>
## U38 · Q38 多播委托的调用顺序和返回值是怎样的？

> 来源：题库 UE 第 38 题 ｜ 速背卡：[Q38](./速背.md#ue-q38) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：多播是“广播”不是“函数调用”，它只保证每个有效槽位被调一次，不保证顺序，也不提供有意义的返回值。

**学完能做到**
- 写代码：用三个监听者观察实际调用顺序，并用“快照 + 延迟增删”改掉广播中修改列表的写法。
- 讲出来：说清顺序为什么不能当契约、返回值为什么不能用、广播中增删该怎么处理。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 广播按添加顺序执行，可以当契约用 | 按添加顺序是当前实现的细节，跨版本、跨蓝图与 C++ 混合绑定都不保证 |
| 声明了 RetVal 就能拿到多播的返回值 | 循环覆盖，只有最后一个执行的槽位结果有效，既不聚合也不短路 |
| 回调里 `Remove` 自己会立刻崩 | 内部有锁并延迟压缩，通常不崩；但后续槽位是否执行属于未定义行为，不要依赖 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `Broadcast` 遍历槽位列表，逐个调用 | 发布方不需要知道订阅方是谁，一对多天然成立 |
| 当前实现通常按添加顺序遍历 | 这是实现细节，不能写进设计契约；要顺序就自己串行调用 |
| 多播没有“单个槽位的返回值”概念 | 带 RetVal 的宏只有最后一个执行的槽位结果有效 |
| 广播过程要加锁并处理并发增删 | 单次广播比手写 for 循环贵；递归广播更危险 |
| 失效槽位会被跳过 | 广播次数和“实际执行次数”可能不一致，日志要按实际打印 |

顺序要这么理解：C++ 的 `Add*` 和蓝图侧绑定的 Event 最终都落到同一个槽位列表，但“谁在前”取决于添加时机、蓝图保存顺序，甚至热重载和版本实现。当前版本大概率按添加顺序走，你在编辑器里测出 A、B、C，看起来像契约；换版本、换绑定来源就可能变。

返回值更直接：多播的语义是“通知”，不是“求值”。`DECLARE_MULTICAST_DELEGATE_RetVal` 这类宏确实存在，但广播在循环里不断覆盖同一个返回值，最后留下的是最后一个执行槽位的结果。它既不聚合也不短路，拿来做“任一监听者同意就通过”是错的。

广播中增删是第三个边界。UE 内部加了锁并在合适时机压缩列表，所以“回调里 Remove 自己”通常不会立刻崩；但“本轮还会不会调用新加的那个”“删掉后后面的槽位还跑不跑”属于未定义行为，不要赌。稳妥做法是：广播中只记录意图，本轮结束后统一处理。

**设计动机**：多播被定成“只通知、不承诺”，是因为槽位有两个来源：C++ 的 `Add*` 和蓝图侧保存的绑定，列表顺序由添加时机与加载顺序共同决定，引擎没法把它固定成契约；同时它还要允许回调里增删绑定，只能靠加锁与延迟压缩保证不立刻崩，代价就是“本轮到底调了谁”不再可推理。返回值同理：通知语义下每个槽位是独立处理者，不存在“合成一个结果”的定义，带 RetVal 的宏只留下最后一次赋值。要顺序或结果，就得换成自己维护的列表或单播链。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 只是通知 | `OnX.Broadcast(Args)` |
| 需要严格顺序 | 自己维护 `TArray<TFunction<...>>`，按索引顺序调用 |
| 需要收集结果 | 改成单播逐个询问，或广播后单独查询状态 |
| 广播中要解绑 | 记录 `FDelegateHandle`，循环结束后统一 `Remove` |
| 广播中要新增 | 记录请求，下一帧或本轮结束后 `Add` |
| 需要“任一失败就中止” | 不要用多播，用带返回值的单播链或显式循环 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 的 `TFunction`/`TArray`；`FScoreDispatcher` 是教学用的手写实现，不是引擎委托类型，不能脱离工程独立编译。

```cpp
// 要顺序、又要在回调里增删：自己维护列表 + 快照 + 延迟落地
class FScoreDispatcher
{
public:
    using FListener = TFunction<void(int32)>;

    void Add(FListener L)
    {
        if (bBroadcasting) { Pending.Add(MoveTemp(L)); return; }
        Listeners.Add(MoveTemp(L));
    }

    void Broadcast(int32 Score)
    {
        bBroadcasting = true;
        const TArray<FListener> Snapshot = Listeners;   // 快照：回调里增删不影响本轮
        for (const FListener& L : Snapshot)
        {
            if (L) { L(Score); }
        }
        bBroadcasting = false;
        for (FListener& L : Pending) { Listeners.Add(MoveTemp(L)); }
        Pending.Reset();
    }

private:
    TArray<FListener> Listeners;
    TArray<FListener> Pending;
    bool bBroadcasting = false;
};
```

**可观察验证**

```cpp
OnScoreChanged.AddLambda([](int32 S, AActor*) { UE_LOG(LogTemp, Log, TEXT("A:%d"), S); });
OnScoreChanged.AddLambda([](int32 S, AActor*) { UE_LOG(LogTemp, Log, TEXT("B:%d"), S); });
OnScoreChanged.AddLambda([](int32 S, AActor*) { UE_LOG(LogTemp, Log, TEXT("C:%d"), S); });
OnScoreChanged.Broadcast(100);   // 日志行序即本轮实际遍历顺序
```

```plaintext
把添加顺序换成 C、B、A 后再广播一次，对比两轮 Output Log 的行序
```

- 两轮日志顺序跟着添加顺序变，说明顺序来自添加时机，不是可依赖的契约。
- 在 A 的回调里再 `Broadcast` 一次并加递归深度计数：会看到同一批监听者跑了两轮，这是重入。
- 换成 `DECLARE_MULTICAST_DELEGATE_RetVal` 让三个槽位返回不同值，打印结果恒为最后一个槽位的结果。

### ③ 面试怎么讲

**30 秒口述稿**

> 多播的语义是通知，不是求值。它会遍历所有有效槽位全部调一遍，当前实现一般按添加顺序，但这只是实现细节，跨版本、跨蓝图和 C++ 混合绑定都不保证，需要顺序就自己串行调用。返回值方面，多播不提供有意义的返回值，带返回值的宏也只有最后一个槽位的结果有效。广播过程中新增或删除绑定也不要依赖，稳妥做法是记录意图，本轮结束后统一处理，或者先拷贝一份列表再遍历。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么顺序不保证？ | 槽位来自 C++ 和蓝图两套绑定路径，列表顺序受添加时机和保存顺序影响，实现随时可能调整。 |
| 广播中解绑会崩吗？ | 通常不会立刻崩，内部有锁和延迟压缩；但后续槽位是否执行、新加的是否本轮执行都不保证，语义上应避免。 |
| 多播能返回值吗？ | 宏存在，但只有最后一次赋值有效，既不能聚合也不能短路，工程上按“无返回值”对待。 |
| 广播性能怎么估？ | 成本 ≈ 槽位数 × 单次调用成本，外加一次加锁；动态多播还要乘上反射开销。 |

### ④ 真实坑

1. **依赖添加顺序做“先扣血再判死”**：某个版本或热更后顺序变了，死亡判定先于扣血，出现“血量 0 还活着”。
2. **用多播 RetVal 收集所有结果**：只拿到最后一个监听者的值，前面的逻辑静默丢失。
3. **在回调里 `RemoveAll` 或 `Clear`**：本轮后续槽位可能被跳过；应该记录 handle 延后移除。
4. **在回调里再次 Broadcast 同一个多播**：重入导致同一批监听者被调用两次，UI 上表现为重复弹窗、重复扣费。
5. **回调里做重活**：一次广播等于串行执行 N 个监听者的逻辑，某个监听者卡住，整帧都卡。

### ⑤ 练习

**A 写**：给一个多播加三个监听者，分别打印 `A`、`B`、`C` 和帧号；记录实际顺序，再交换添加顺序对比。然后把“在 A 的回调里 Remove C”改成“记录 handle、广播结束后 Remove”；最后换成上面的快照版，验证回调里 Add 不影响本轮。

**提示**：① 顺序实验至少做两轮（原添加顺序、交换后顺序），两轮输出都留下，才能说明顺序来自添加时机；② 广播中增删一律走 handle 或延迟列表，别在回调里直接 `RemoveAll`/`Clear`；③ 验证重入时给递归广播加深度计数和上限，否则一次手滑就把编辑器卡死。

验收标准：能拿出“当前顺序”和“交换后顺序”两组输出；延迟移除后 C 仍在本轮执行；快照版在回调里 Add 时本轮不会多打印一条。

**B 讲**：2 分钟讲“多播的顺序、返回值、迭代安全”。三个点各给一个结论加一个反例。

验收标准：明确说出“顺序不是契约”；明确说出“返回值只有最后一个有效”；能给出广播中增删的两种安全写法。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-39"></a>
## U39 · Q39 委托的生命周期怎么管，什么时候必须解绑？

> 来源：题库 UE 第 39 题 ｜ 速背卡：[Q39](./速背.md#ue-q39) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：委托本身不“拥有”谁；真正要管的是绑进去的可调用物在对象死后还活不活。

**学完能做到**
- 写代码：在 `EndPlay` 里一次性清掉本对象的委托槽位和定时器，并复现一次 lambda 捕获 this 的崩溃。
- 讲出来：分清“弱引用兜底”覆盖哪些绑定、不覆盖哪些绑定。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 弱引用兜底能覆盖所有绑定方式 | 只覆盖 UObject 成员绑定；`AddLambda` 捕获的 this、`AddRaw` 裸指针、`AddSP` 强引用都不在保护范围 |
| 对象销毁后槽位会自动消失 | 槽位还在，只是广播时跳过失效目标，`IsBound()` 仍可能为 true |
| 在析构函数里统一解绑最省事 | UObject 的析构时机由 GC 决定，此时别的对象可能已半销毁；清理应放在 `EndPlay` / `BeginDestroy` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `AddUObject` / `AddDynamic` 内部是弱引用 | 对象销毁后不野指针，广播时跳过；但槽位还在 |
| 槽位不会因为对象销毁自动消失 | `IsBound()` 仍可能为 true，不能拿它判断“还有活着的监听者” |
| `AddLambda` 捕获 `this` 是裸指针语义 | 对象销毁后回调照常执行，访问成员即悬垂 |
| `AddRaw` 不参与生命周期管理 | 被绑对象析构前必须 `Remove`，否则下次广播崩 |
| `AddSP` 是强引用 | 反向风险：不解绑会让目标活过关卡，形成泄漏 |
| UObject 的销毁时机由 GC 决定 | 清理写在 `EndPlay` / `BeginDestroy`，不要赌析构顺序 |

“弱引用兜底”只对一半场景成立。成立的条件是：绑定基于 UObject（`AddUObject`、`AddDynamic`、`AddWeakLambda`），且失效判断发生在调用前。不成立的是：lambda 捕获 `this`、`AddRaw` 的裸指针、以及绑定非 UObject 对象的场景——这些路径上框架根本不知道对象是谁，自然无从判断。

跨对象委托是重点。A 订阅了 B 的事件，谁先销毁不确定：B 先死，槽位失效但还在；A 先死，如果 A 用的是 lambda，B 广播时就会调到已经销毁的 A。所以规范应该是双向的：订阅方在 `EndPlay` 里 `RemoveAll(this)`，被订阅方销毁前 `Clear()`，两边都做，才不依赖对方的行为。

还有一个容易忽略的时间点：切关卡。旧 World 的 Actor 被销毁，但挂在 GameInstance、Subsystem 或静态对象上的多播不会跟着清。只要槽位里是 lambda、裸指针或共享指针，就会把旧关卡对象拖住或留下悬垂引用。定时器同理，`FTimerManager` 按 World 管理，跨 World 的委托不会自动帮你清。至于“在析构里清”：UObject 析构时机由 GC 决定，此时其他对象可能已经先被回收，在析构里做跨对象解绑容易访问到半销毁状态；清理放进 `EndPlay` 或 `BeginDestroy` 更可控。

**设计动机**：委托被设计成“不拥有监听者”，因为发布方不该知道、也无法控制订阅方的生死——HUD、关卡 Actor、Subsystem 的存活范围完全不同。但“不拥有”带来一个不对称：基于 UObject 的绑定可以用弱引用在调用前判活，而 lambda、裸指针、共享指针没有统一身份可查，框架只能原样保存。于是引擎把判活责任部分交回给使用者：要么用能被识别的绑定方式，要么在对象仍有效的最后统一时机（`EndPlay` / `BeginDestroy`）自己把槽位清掉。

### ② 开发怎么用

| 场景 | 做法 |
| --- | --- |
| 组件/Actor 订阅了别人 | `EndPlay` 里对所有外部委托 `RemoveAll(this)` |
| 自己广播、别人订阅 | 销毁前 `Clear()`，别指望订阅方都记得解绑 |
| 用了 lambda | 优先 `AddWeakLambda(this, ...)`，或捕获 `TWeakObjectPtr` 并判空 |
| 用了 `AddSP` | 明确谁负责 `Remove(Handle)`，长生命周期对象上不要用 |
| 用了定时器 | `ClearAllTimersForObject(this)`，别只 Invalidate 一个 handle |
| 切换关卡/无缝旅行 | Subsystem、GameInstance 上的委托要显式清理 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、UHT 生成的 `MyHealthComponent.generated.h` 与工程内的 `UMyGameState`，不能脱离工程独立编译。

```cpp
void UMyHealthComponent::BeginPlay()
{
    Super::BeginPlay();
    // 跨对象订阅：由本对象负责在结束时解绑
    if (UMyGameState* GS = GetWorld()->GetGameState<UMyGameState>())
    {
        GS->OnWaveStarted.AddUObject(this, &UMyHealthComponent::HandleWaveStarted);
    }
    GetWorld()->GetTimerManager().SetTimer(
        RegenTimer, this, &UMyHealthComponent::Regen, 1.f, true);
}

void UMyHealthComponent::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    if (UWorld* World = GetWorld())
    {
        // 一次性清掉本对象注册的所有定时器
        World->GetTimerManager().ClearAllTimersForObject(this);
    }
    if (UMyGameState* GS = GetWorld() ? GetWorld()->GetGameState<UMyGameState>() : nullptr)
    {
        GS->OnWaveStarted.RemoveAll(this);
    }

    OnDied.Clear();                    // 自己广播的，清空所有槽位
    OnHealthChanged.RemoveAll(this);   // 动态多播同样按 UserObject 清

    Super::EndPlay(EndPlayReason);
}
```

**可观察验证**

```cpp
// EndPlay 里清理前后各打一条，槽位状态肉眼可见
UE_LOG(LogTemp, Log, TEXT("before: bound=%d"), OnDied.IsBound() ? 1 : 0);
OnDied.Clear();
OnHealthChanged.RemoveAll(this);
UE_LOG(LogTemp, Log, TEXT("after: bound=%d"), OnHealthChanged.IsBound() ? 1 : 0);
```

```plaintext
stat gc                            # 切关卡后看 GC 是否回收旧关卡对象
obj list class=UMyHealthComponent  # 计数不下降，说明还有强引用或残留槽位拖着
```

- 第一版只调 `RemoveAll(this)`：Owner 销毁后 lambda 槽位仍打印日志；换成 `AddWeakLambda` 后同一路径不再打印。
- 切关卡后再看 `obj list` 的实例数：旧对象还在，就说明有 `AddSP` 或捕获了共享指针的 lambda 在延长它的寿命。

### ③ 面试怎么讲

**30 秒口述稿**

> 分绑定方式看。AddUObject 和 AddDynamic 内部是弱引用，对象销毁后不会野指针，广播时跳过，但槽位还在，所以 IsBound 不能当存活判据。不安全的只有三类：lambda 捕获 this、AddRaw 的裸指针、AddSP 的强引用——前两个会崩，第三个会泄漏。我的习惯是在 EndPlay 里 RemoveAll(this)，定时器一起清，跨对象的委托两边都清，不指望弱引用兜底。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 弱引用为什么还会出问题？ | 弱引用只覆盖 UObject 成员绑定；lambda 捕获的 this 和 AddRaw 的裸指针不在保护范围，AddSP 则是强引用造成泄漏。 |
| 不解绑会导致对象无法回收吗？ | UObject 之间的委托不会，因为存弱引用；会的是 `AddSP` 或 lambda 捕获了共享指针，那是真实强引用。 |
| `IsBound()` 能判断有没有人听吗？ | 不能。对象销毁后槽位还在，`IsBound()` 可能仍为 true；要判断的是对象有效性，不是绑定数量。 |
| 什么时候必须解绑？ | 跨对象订阅、lambda/raw 绑定、长生命周期对象（Subsystem、GameInstance）、切关卡，这四类必须显式清。 |

### ④ 真实坑

1. **lambda 捕获 this 后只靠 `RemoveAll(this)` 清理**：清不掉，对象销毁后仍被调用，崩在成员访问上。
2. **只在一方解绑**：A 订阅 B，A 先销毁但 B 还在广播，lambda 路径直接崩；规范应该是双方都在自己结束时清。
3. **切关卡后 Subsystem 上的槽位残留**：旧关卡对象被 lambda 或 `AddSP` 拖住，新关卡收到本不该出现的通知。
4. **定时器只 Invalidate 一个 handle**：同一对象还注册了别的定时器，销毁后回调继续跑；应该按对象统一清。
5. **在析构函数里做跨对象解绑**：GC 顺序不可控，访问到的对象可能已经半销毁，表现为偶发崩溃、难复现。

### ⑤ 练习

**A 写**：写一个 `UListenerComponent`，在 `BeginPlay` 用三种方式订阅同一个外部多播：`AddUObject`、捕获 this 的 `AddLambda`、`AddRaw`。`EndPlay` 里只调用 `RemoveAll(this)`，观察 Owner 销毁后的行为；再把 lambda 换成 `AddWeakLambda` 加显式 handle 移除，对比两版。

**提示**：① 三种订阅都打上对象名和帧号，否则“销毁后是否仍回调”肉眼看不出来；② `EndPlay` 里定时器和委托两件事都要做：`ClearAllTimersForObject(this)` 加 `RemoveAll(this)`/`Clear()`，只做一件就留下一半泄漏；③ 切关卡要单独测：PIE 停止和无缝旅行各跑一次，Subsystem 上的残留槽位只有切图时才暴露。

验收标准：第一版能观察到 lambda 槽位在 Owner 销毁后仍被调用；第二版不再回调且不崩；`EndPlay` 之后所有外部委托都不再收到本对象的回调。

**B 讲**：2 分钟讲“委托生命周期与解绑时机”。覆盖弱引用兜底的范围、三类不安全绑定、清理位置（为什么不是析构）。

验收标准：能明确说出“弱引用不覆盖 lambda 和 raw”；能给出 `EndPlay` 清理清单（委托 + 定时器 + 跨对象）；能回答“不解绑会不会导致对象无法回收”。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-40"></a>
## U40 · Q40 委托、接口、直接调用，怎么选？

> 来源：题库 UE 第 40 题 ｜ 速背卡：[Q40](./速背.md#ue-q40) ｜ 耗时 12 min ｜ 难度 ★☆☆

**一句话**：接口回答“你具备什么能力”，委托回答“发生了什么事”，直接调用回答“我现在就要结果”。

**学完能做到**
- 写代码：同一个“开门”需求，分别用直接调用、接口、委托写三版，并说出取舍。
- 讲出来：用“耦合方向 / 数量关系 / 是否需要返回值 / 是否需要蓝图”四个问题做选型。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 想解耦就该上委托，委托比接口更高级 | 委托只解决“事件通知”；表达“具备某种能力”、需要同步返回值时，接口或直接调用更合适 |
| 直接调用不够解耦，一律要接口或委托 | 同模块、调用方明确知道目标时，直接调用最快、调用栈最好读，硬依赖只在跨模块才成问题 |
| 接口和委托可以互相替代 | 接口是能力查询（同步、有返回值、无绑定表），委托是事件通知（一对多、要管解绑），语义不同 |

### ① 本质

| 机制 | 耦合方向 | 适合 | 代价 |
| --- | --- | --- | --- |
| 直接调用 | 调用方依赖被调方 | 同模块、同步要结果、关系稳定 | 硬依赖，跨模块会拖编译 |
| 接口 | 调用方依赖“能力”，实现方依赖接口 | 表达“能被交互/伤害/存档” | 要 `Cast` 或 `Implements` 查询，有类型判断成本 |
| 单播委托 | 发布方不认识订阅方 | 一对一回调，需要返回值 | 要管绑定和解绑 |
| 多播委托 | 发布方完全不认识订阅方 | 一对多通知 | 顺序不保证、无返回值、广播有锁 |
| 动态委托 | 同上，再加反射 | 需要蓝图参与或序列化 | 每次调用多一层查表与 `ProcessEvent` |

直接调用是最容易低估的选项。同一个类、同一个模块、调用方明确知道被调方是谁，直接 `Door->TryOpen(this)` 比任何解耦机制都快，调用栈也最好读。它的代价只在你需要“调用方不该知道具体类型”时才显现。

接口解决“能力”问题。交互系统不关心眼前是门、箱子还是 NPC，只关心它是否实现了 `IInteractable`；伤害系统同理。接口调用是同步的、可以有返回值、不需要注册也不需要解绑，缺点是它描述“这类对象能做什么”，而不是“刚刚发生了什么”。委托解决“事件”问题：血量变化、关卡开始、任务完成，这些是“发生了某件事”，发布方不应该知道谁关心。委托把依赖方向反过来——不是发布方去找订阅方，而是订阅方来找发布方注册；代价是多一份绑定表，要管生命周期，而且多播不保证顺序、不提供返回值。

判断标准收敛成四个问题：是不是一对多？需不需要返回值？要不要暴露给蓝图？调用方能不能持有被调方的具体类型？一对多、不要返回值、要蓝图，就是动态多播；一对一、要返回值、纯 C++，就是单播或直接调用；只表达能力、可能被反复查询，就是接口。

**设计动机**：三种机制并存，是因为“耦合”不是一个维度：调用方需要知道多少、关系是一对一还是一对多、要不要返回值、要不要给蓝图用，四个变量组合出不同的最优点。直接调用把关系写在类型上，编译期查错、调用最快，但跨模块就成了硬依赖；接口把依赖收敛成“能力”，调用方不再关心具体类型，代价是一次类型查询；委托把依赖方向反过来，发布方完全不认识订阅方，代价是多一张绑定表和一套生命周期管理。所以选型不是找“最解耦”的那个，而是先看这四个约束里哪些真的存在。

### ② 开发怎么用

| 需求 | 选择 |
| --- | --- |
| 同一模块内，调用方明确知道目标 | 直接调用 |
| “任何可交互对象”统一处理 | 接口 `IInteractable` + `Cast` / `Execute_` |
| 门开了，任务、音效、成就都要知道 | 多播委托 |
| 只有一个监听者，且要拿到 bool 结果 | 单播委托，或直接调用 |
| 蓝图要做表现、要绑定事件 | 动态多播 + `BlueprintAssignable` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、UHT 生成的 `Interactable.generated.h` / `MyDoor.generated.h` 与工程内已定义的 `AMyPlayerController`、`AMyDoor`，不能脱离工程独立编译。

```cpp
// 能力用接口：任何“能被交互”的对象都实现它
UINTERFACE(MinimalAPI, Blueprintable)
class UInteractable : public UInterface { GENERATED_BODY() };
class IInteractable
{
    GENERATED_BODY()
public:
    UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category="Interact")
    void Interact(AActor* Instigator);
};
// 事件用委托：门被打开这件事，谁关心谁订阅
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnDoorOpened, AActor*, Opener);

void AMyPlayerController::TryInteract(AActor* HitActor)
{
    // 1) 直接调用：明确知道类型、同模块、要立刻处理
    if (AMyDoor* Door = Cast<AMyDoor>(HitActor)) { Door->TryOpen(this); return; }
    // 2) 接口：只知道“它能被交互”，不关心具体类型
    if (IInteractable* Target = Cast<IInteractable>(HitActor))
    {
        Target->Execute_Interact(HitActor, this);
    }
}

// 3) 委托：门自己广播，订阅方各自处理
void AMyDoor::Open(AActor* Opener)
{
    bOpened = true;
    OnOpened.Broadcast(Opener);   // 任务、音效、成就各自绑过
}
```

**可观察验证**

```cpp
// 三条路径各自打点，确认这次走的是哪一条
if (AMyDoor* Door = Cast<AMyDoor>(HitActor))
{
    Door->TryOpen(this);
    UE_LOG(LogTemp, Log, TEXT("direct path, door listeners=%d"),
        Door->OnOpened.IsBound() ? 1 : 0);
    return;
}
if (IInteractable* Target = Cast<IInteractable>(HitActor))
{
    Target->Execute_Interact(HitActor, this);
    UE_LOG(LogTemp, Log, TEXT("interface path"));
}
```

```plaintext
门销毁后再触发一次“开门”：委托版无回调（Clear 后 IsBound 为 false），接口版 Cast 失败直接跳过
改门类名并重编：直接调用版会带着调用方所在模块一起重编，接口版只依赖接口头文件
```

- 三版都要打同一条结果日志（`bOpened` 置位），行为一致才谈得上对比代价。
- 门销毁后再调一次：委托版安静跳过；直接调用版若手里还攥着裸指针就会崩——“要不要管解绑”由此可测。

### ③ 面试怎么讲

**30 秒口述稿**

> 我会先问四个问题：是不是一对多、要不要返回值、要不要给蓝图、调用方能不能知道具体类型。一对一、要返回值、同模块，直接调用最简单；表达“具备某种能力”，比如能被交互、能被伤害，用接口；表达“发生了某件事”，比如门开了、血量变了，用委托。一对多通知用多播，要蓝图参与就用动态多播或 Event Dispatcher。接口和委托不能互相替代：接口是能力查询，委托是事件通知。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 接口和委托能互相替代吗？ | 部分场景能凑合，但语义不同：接口是“你是谁、能做什么”，同步、有返回值；委托是“发生了什么”，一对多、要管解绑。 |
| 什么时候不该用委托？ | 高频 Tick 路径、需要严格顺序、需要同步返回值、只有唯一且明确的调用方，这几类用直接调用或接口更合适。 |
| 蓝图里怎么选？ | 要“调用某个对象的能力”用接口（BlueprintNativeEvent / BlueprintInterface）；要“通知多个蓝图”用 Event Dispatcher。 |
| `std::function` 和 UE 委托怎么选？ | 非 UObject 的工具代码可以用 `TFunction`/`std::function`；只要涉及 UObject 生命周期、蓝图或统一 RemoveAll，就用 UE 委托。 |

### ④ 真实坑

1. **用委托做能力查询**：为了“解耦”把 `CanBeDamaged()` 也做成委托，结果需要同步返回值和顺序，最后写成一堆单播链，比接口还难维护。
2. **高频路径用多播**：Tick 里广播，每次加锁加 N 次间接调用，性能问题定位到时已经改不动接口。
3. **所有东西都上动态委托**：想着“以后可能给蓝图用”，结果纯 C++ 逻辑也付了反射成本，蓝图侧还多出一堆没人绑的事件。
4. **跨模块直接调用具体类**：为省一个接口，公共模块 include 了实现模块的头，编译依赖扩散，改一个类触发全量重编。
5. **把委托当 RPC 用**：广播完立刻假设对方已处理完并读取状态，实际多播不保证顺序，也不保证同步语义。

### ⑤ 练习

**A 写**：实现“玩家开门”三版：第一版 `AMyPlayerController` 直接 `Cast<AMyDoor>` 调用 `TryOpen`；第二版定义 `IInteractable`，玩家只通过接口交互；第三版门广播 `OnOpened`，任务组件和音效组件各自订阅。三版都要能编译运行，结果一致。

**提示**：① 三版共用同一个结果（`bOpened` 置位 + 同一条日志），只换调用路径，否则比不出代价；② 每版写完记一条“调用方新增了什么依赖”——具体类的头文件、接口头文件、还是委托声明，这就是选型的直接证据；③ 委托版别忘了门销毁时 `Clear()`，否则“门没了还在通知”会成为第三个真实坑。

验收标准：三版行为一致；能说出每版新增/减少的一个依赖；第三版在门销毁后不再触发订阅方回调。

**B 讲**：2 分钟讲“委托、接口、直接调用怎么选”。必须用四个问题组织，并各举一个项目里的真实场景。

验收标准：四个问题都能给出判断依据；能说清“能力”和“事件”的语义差别；能主动说出一个“不该用委托”的反例。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ⑦：网络同步](#ch12)


<a id="ch12"></a>
# 第 12 章 · UE ⑦：网络同步

> 对应速背 UE 主题 07（Q41–Q48），完整答题卡见 [速背 UE 07](./速背.md#ue-t07)。
> 上一篇：[UE ⑥：委托（Delegate）](#ch11) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-41"></a>
## U41 · Q41 Server、Client、NetMulticast 三种 RPC 有什么区别？

> 来源：题库 UE 第 41 题 ｜ 速背卡：[Q41](./速背.md#ue-q41) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：三种 RPC 的区别不在“怎么发”，而在“谁有权调用、消息发给谁”——Server 向上、Client 向下、Multicast 向所有相关端，路由都由 Actor 的复制状态和 Owner 决定。

**学完能做到**
- 写代码：给一个可复制的武器 Actor 写出 Server / Client / NetMulticast 三个 RPC，让它们分别在服务器、拥有者客户端、所有客户端打印日志。
- 讲出来：用“方向 + 调用者 + 收件人”三个维度讲清三种 RPC，并说出没有 Owner 时会发生什么。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 客户端调 Multicast 也能广播给所有人 | 不会：客户端调 Multicast 只在本机执行一次，服务器和其他客户端都收不到 |
| 标了 RPC 宏就一定发得出去 | 还要 Actor 已复制、接收端已创建该 Actor，Server/Client 还有 Owner 链；缺一条就静默失败 |
| Reliable 是第四种 RPC 方向 | 不是，Reliable/Unreliable 是叠加在方向上的第二个维度，可与任一方向组合 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| RPC 的发送方向由 UFUNCTION 宏固定，不能运行时切换 | 在客户端调 Server RPC 会沿拥有者连接发到服务器；调 Client RPC 则不会“反向”跨端，只会报错或本地执行 |
| Server RPC 只接受 owning client 的调用 | Actor 必须有 Owner 且 Owner 连着这个客户端，否则调用静默失败，表现为“按了没反应” |
| Client RPC 只发给 Actor 的 Owner 连接 | 想让所有玩家看到，必须用 Multicast 或属性同步 |
| NetMulticast 由服务器广播给所有相关客户端，并在服务器本地也执行 | 客户端自己调 Multicast 不会转发给任何人，只在本机跑一遍 |
| 三者都要求 Actor 已复制，且接收端已经创建了这个 Actor | 在 Actor 还没同步到客户端时发 RPC，消息没有落点，时序问题常表现为“第一次不生效” |

RPC 是“事件”，不是“状态”。事件发生一次就该被处理一次，所以需要明确的方向和收件人；状态则需要能被晚加入的客户端直接读到。UE 因此拆出 RPC 和属性同步两套通道。路由依赖 Actor channel：服务器为每个连接维护“它知道哪些 Actor”，RPC 先找目标 Actor 在该连接上的 channel，再写入函数索引和参数；Actor 没复制、连接不知道它、或 Owner 链断了，RPC 就无处可去。Server RPC 找拥有这个 Actor 的连接，Client RPC 找同一个连接但方向相反，Multicast 遍历所有拥有该 Actor 相关性的连接。

Reliable 与 Unreliable 是叠加在方向之上的第二个维度，不是第四种 RPC。Reliable 会进入可靠窗口，保证到达和顺序；Unreliable 可能丢，但开销小。高频表现类 Multicast 用 Unreliable 是常规做法，关键结算才用 Reliable。Server RPC 还可以加 `WithValidation`，让服务器在执行前跑一遍廉价校验；校验不通过时通常会拒绝执行并记录日志，具体处置视项目配置。

**设计动机**：UE 是服务器权威模型：输入必须向上、结算只在服务器、表现向下，把方向固化成三个宏之后，客户端就没有“冒充服务器广播”的表达能力，服务器也不必为每次请求临时判断收件人集合；方向确定后，路由可以完全交给复制 channel 与 Owner 链——这正是三种 RPC 都依赖复制状态和 Owner 的原因。

**版本差异**：UE5 起可选的 Iris 复制后端（需在项目里显式启用）替换底层复制通道与序列化实现；`Server`/`Client`/`NetMulticast` 三个宏与 `_Implementation`/`_Validate` 的写法两代不变。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 客户端请求开火、交互、购买 | `UFUNCTION(Server, Reliable)`，实现写在 `_Implementation` |
| 服务器给拥有者发私有反馈（受击方向、镜头抖动） | `UFUNCTION(Client, Reliable)` |
| 服务器广播一次性表现（枪口火光、脚步、音效） | `UFUNCTION(NetMulticast, Unreliable)` |
| 需要防作弊的输入入口 | `Server, Reliable, WithValidation`，配 `_Validate` |
| 让 RPC 有落点 | Actor 构造里 `bReplicates = true`，并在合适时机 `SetOwner(PlayerController)` |

**示例说明**：以下为模块内片段，声明在 `AMyWeapon.h`、实现在 `AMyWeapon.cpp`，依赖 `CoreMinimal.h` 与 UHT 生成的 `MyWeapon.generated.h`，不能脱离工程独立编译。

```cpp
// AMyWeapon.h
UCLASS()
class AMyWeapon : public AActor
{
    GENERATED_BODY()
public:
    AMyWeapon() { bReplicates = true; }   // 不复制就没有 RPC 的落点

    UFUNCTION(Server, Reliable, WithValidation) void Server_Fire();
    UFUNCTION(Client, Reliable) void Client_PlayHitFeedback();
    UFUNCTION(NetMulticast, Unreliable) void Multicast_PlayMuzzleFX();
};

// AMyWeapon.cpp
void AMyWeapon::Server_Fire_Implementation()
{
    Multicast_PlayMuzzleFX();             // 结算后由服务器广播表现
}

bool AMyWeapon::Server_Fire_Validate() { return true; }  // 只做廉价校验

void AMyWeapon::Client_PlayHitFeedback_Implementation()
{
    // 只有 Owner 会执行：震动、准星、私有提示
}

void AMyWeapon::Multicast_PlayMuzzleFX_Implementation()
{
    // 服务器 + 所有相关客户端：只做表现
}
```

上例里“客户端调 Server_Fire，服务器调 Multicast”是最小闭环：输入向上、结算在服务器、表现向下。若想在本地立刻看到枪口火光，可以让客户端先本地播一次，但服务器再广播时要注意别让拥有者重复播放。

**可观察验证**

```cpp
// 三个 RPC 的实现里都打同一行，用端和 Role 区分谁在执行
UE_LOG(LogTemp, Log, TEXT("[RPC] %s auth=%d role=%d owner=%s"),
    *GetName(), HasAuthority() ? 1 : 0,
    static_cast<int32>(GetLocalRole()), *GetNameSafe(GetOwner()));
```

```plaintext
stat net                    # RPC 计数与带宽
Log LogNet Verbose          # 路由失败、没有 channel 的告警
```

- PIE 用 Listen Server + 2 Players 各跑一次：Server RPC 只在服务器打点，Client RPC 只在拥有者客户端打点，Multicast 在每个端各打一次。
- 把 Owner 清空后再调 Server RPC：那行打点不再出现，`LogNet Verbose` 里能看到找不到 owning connection 的告警。

### ③ 面试怎么讲

**30 秒口述稿**

> Server RPC 由拥有这个 Actor 的客户端调用，在服务器执行，适合开火、交互、购买这类请求；Client RPC 由服务器调用，只发给这个 Actor 的 Owner，适合私有提示和镜头反馈；NetMulticast 也由服务器调用，广播给服务器自己以及所有相关客户端，适合特效、音效、动画。三者都必须标 UFUNCTION，并选 Reliable 或 Unreliable；Actor 还要 bReplicates 为真，Server 和 Client 还依赖 Owner 链。客户端调 Multicast 不会转发，只在本机执行。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 客户端调 Multicast 会怎样？ | 只在本机执行一次，服务器和其他客户端都收不到；要广播必须由服务器发起。 |
| 没有 Owner 的 Actor 能发 RPC 吗？ | Server 和 Client RPC 都不行，因为没有“拥有者连接”作为收件人；Multicast 仍可由服务器广播，但前提是 Actor 对客户端相关。 |
| 为什么 RPC 会“静默失败”？ | 路由找不到连接时不会抛异常，只在日志里留痕；排查要看 Actor 是否复制、Owner 是否设置、客户端是否已经拥有该 Actor。 |
| Reliable 是不是越多越好？ | 不是。Reliable 占可靠窗口，堆积会阻塞后续可靠消息，高频表现应该用 Unreliable。 |

### ④ 真实坑

1. **只在客户端调 Multicast 就当广播**：本机有效果，别人看不到；正确做法是 Server RPC 上报，服务器结算后再 Multicast。
2. **武器没 SetOwner**：Server RPC 找不到 owning connection，开火没反应也不报错；装备时把 Owner 设为角色或 PlayerController。
3. **Actor 还没同步到客户端就发 RPC**：生成和 RPC 跨 Actor 时尤其明显，第一发丢失；把依赖放到确认同步之后，或由服务器统一发起。
4. **给高频表现标 Reliable**：每帧脚步都进可靠窗口，网络一抖就排队，严重时触发可靠缓冲溢出并断开连接。
5. **在 `_Validate` 里改状态**：校验函数可能被调用多次，且职责只是判断合法性；状态修改应放在 `_Implementation`。

### ⑤ 练习

**A 写**：在第三人称模板中新建 `AMyBeacon`（构造里 `bReplicates = true`），加 `Server_Ping`、`Client_Pong`、`Multicast_Blink` 三个 RPC，各自用 `UE_LOG` 打印 `GetName()` 和 `HasAuthority()`。PIE 开两个客户端，再把一个实例的 Owner 清空，对比调用结果。

**提示**：① 用 PIE 的 Listen Server + 2 Players，并在每个 RPC 实现里同时打印 `HasAuthority()` 和 `GetLocalRole()`，否则分不清“谁执行了”；② 测无 Owner 的失败要显式 `SetOwner(nullptr)`，别依赖 Spawn 的默认值；③ 先开 `LogNet Verbose` 跑一遍，把引擎自己的路由告警和你的 `UE_LOG` 对照，别只凭“没反应”猜。

验收标准：Server RPC 的日志只出现在服务器进程；Client RPC 只出现在拥有者客户端；Multicast 在每个客户端各出现一次；无 Owner 实例的 Server RPC 有明确失败日志或完全无执行。

**B 讲**：2 分钟口述“三种 RPC 的方向、调用者、收件人”，必须用一个具体功能（开火）串起来，并主动说明客户端调 Multicast 的后果。

验收标准：不看稿能画出“客户端 → 服务器 → 各客户端”的箭头图；三个 RPC 各有一句准确的调用约束；能解释 Owner 缺失为什么会静默失败。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-42"></a>
## U42 · Q42 属性同步是怎么做的？

> 来源：题库 UE 第 42 题 ｜ 速背卡：[Q42](./速背.md#ue-q42) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：属性同步是“服务器改状态、引擎负责把差异收敛到客户端”，声明 `Replicated` 只是报名，真正的注册在 `GetLifetimeReplicatedProps`，而 `OnRep` 是客户端收到新值后的表现钩子。

**学完能做到**
- 写代码：给角色加一个 `ReplicatedUsing` 的血量和一个只同步给拥有者的弹药，并正确注册。
- 讲出来：说清“为什么客户端改属性没用”“OnRep 该做什么、不该做什么”。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 标了 `Replicated` 属性就会同步 | 还必须在 `GetLifetimeReplicatedProps` 里 `DOREPLIFETIME` 注册；漏了永远不同步且不报错 |
| 客户端改属性会回传给服务器 | 同步方向固定为服务器 → 客户端，客户端改的是本地副本，下一次同步就被覆盖 |
| OnRep 可以承担初始化职责 | 服务器改属性不触发自己的 OnRep，首次同步是否触发也随版本/配置不定；刷新要写成幂等函数主动调 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `UPROPERTY(Replicated)` 只声明意图，必须在 `GetLifetimeReplicatedProps` 里 `DOREPLIFETIME` 注册 | 只标宏不注册，属性永远不同步，而且没有任何报错，是最常见的静默失败 |
| 同步方向固定为服务器 → 客户端 | 客户端改同名字段只是改本地副本，服务器不知道，下一次同步就被覆盖 |
| `ReplicatedUsing` 在值应用之后回调 OnRep | 适合刷新 UI、特效、音效；在 OnRep 里改“权威状态”不会回传服务器 |
| 属性同步是状态收敛语义，不是事件流 | 单个包丢了不要紧，后续比较会补发；晚加入的客户端也能直接拿到当前值 |

属性同步的核心是“每个连接各自维护一份已确认状态”：服务器每次网络更新时，把这个 Actor 当前值与该连接上次确认的值做比较，只把差异写进包；客户端应用后回执。这样即使中途丢包，只要值还在变，下一次比较就会补上，所以它适合“世界当前是什么样”，不适合“刚刚发生了一件事”。`GetLifetimeReplicatedProps` 是每个类声明“生命周期内要同步哪些字段”的地方，`Super::GetLifetimeReplicatedProps` 必须调用，否则父类字段会漏；`DOREPLIFETIME` 生成字段注册信息，`DOREPLIFETIME_CONDITION` 额外带条件（只发 Owner、只初始同步、跳过 Owner 等），是带宽优化的第一手段。

OnRep 的触发有一个容易踩的细节：服务器修改属性不会触发自己的 OnRep，必须自己调表现刷新；客户端在收到变化后触发。首次同步是否触发 OnRep，不同引擎版本和项目配置下表现不完全一致，所以不要只押在 OnRep 上——刷新逻辑写成幂等函数，`BeginPlay` 里主动调一次，OnRep 里也调，重复执行也无害。结构体和容器也能同步，自定义结构体最好实现 `NetSerialize`；组件属性要同步，组件本身必须先参与复制：构造里 `SetIsReplicatedByDefault(true)`，再在所属 Actor 的 `GetLifetimeReplicatedProps` 里注册，或走组件自己的复制流程。

**设计动机**：属性同步要在“每个连接、每次网络更新”里逐字段比较，如果引擎自动同步所有 `UPROPERTY`，CPU 和带宽都不可控；于是引擎把选择权交给类作者：宏声明意图、`GetLifetimeReplicatedProps` 显式登记、`COND_*` 追加发送条件，类注册时把这份登记表缓存下来，运行期只按表比较，既省 CPU 也把带宽开关交到项目手里。

**版本差异**：UE5 起可选用 Iris 复制后端（需显式启用）或 Push Model 降低属性比较开销；`UPROPERTY(Replicated)`/`ReplicatedUsing` 与 `DOREPLIFETIME` 的声明写法两代不变。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 普通状态，所有相关客户端可见 | `UPROPERTY(Replicated)` + `DOREPLIFETIME(AMyCharacter, Health)` |
| 收到变化要刷表现 | `UPROPERTY(ReplicatedUsing = OnRep_Health)` + `UFUNCTION() void OnRep_Health();` |
| 只同步给拥有者 | `DOREPLIFETIME_CONDITION(AMyCharacter, Ammo, COND_OwnerOnly)` |
| 只在初始同步发一次 | `COND_InitialOnly`，适合出生时确定、之后不变的外观配置 |
| 组件上的属性 | 组件构造里 `SetIsReplicatedByDefault(true)`，并确保 Actor 本身复制 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与 UHT 生成的 `MyCharacter.generated.h`（`ReplicatedUsing` 依赖 UHT 生成 `OnRep_Health` 的注册代码），不能脱离工程独立编译。

```cpp
// AMyCharacter.h
UCLASS()
class AMyCharacter : public ACharacter
{
    GENERATED_BODY()
public:
    virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

    UPROPERTY(ReplicatedUsing = OnRep_Health) float Health = 100.f;
    UPROPERTY(Replicated) int32 Ammo = 30;

    UFUNCTION() void OnRep_Health();
    UFUNCTION(BlueprintImplementableEvent) void RefreshHealthUI(float NewHealth);
};

// AMyCharacter.cpp
void AMyCharacter::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME(AMyCharacter, Health);
    DOREPLIFETIME_CONDITION(AMyCharacter, Ammo, COND_OwnerOnly);
}

void AMyCharacter::OnRep_Health()
{
    RefreshHealthUI(Health);            // 值已应用，刷新表现即可
}

void AMyCharacter::ApplyDamage(float Damage)
{
    if (!HasAuthority()) { return; }    // 只有服务器能改权威血量
    Health = FMath::Max(0.f, Health - Damage);
    RefreshHealthUI(Health);            // 服务器不会触发 OnRep，要手动刷
}
```

**可观察验证**

```cpp
// 同一个打点函数，看它在哪些端被调用：服务器改值不触发自己的 OnRep
void AMyCharacter::OnRep_Health()
{
    UE_LOG(LogTemp, Log, TEXT("[Rep] Health=%.1f role=%d"),
        Health, static_cast<int32>(GetLocalRole()));
    RefreshHealthUI(Health);
}

// 客户端本地改值：只改本地副本，约一个网络更新后被服务器值覆盖
if (!HasAuthority()) { Health = 1.f; }
```

```plaintext
stat net                    # 该 Actor 的属性带宽与 NetUpdateFrequency
Log LogNet Verbose          # 属性注册与序列化告警
```

- 第二个客户端晚 10 秒加入：一进来就显示当前血量而不是满血，这是属性同步区别于 RPC 的关键证据。
- 服务器扣血后看服务器端 UI：它不会触发自己的 OnRep，必须在修改处手动刷新一次。

### ③ 面试怎么讲

**30 秒口述稿**

> 属性同步分三步：UPROPERTY 标 Replicated，或者在 ReplicatedUsing 里指定 OnRep 函数；然后在 GetLifetimeReplicatedProps 里用 DOREPLIFETIME 注册；最后保证修改只发生在服务器。客户端改属性不会回传，因为同步方向是单向的。OnRep 是客户端收到新值之后的回调，适合刷 UI、播特效，不要在里面改权威状态。还可以用 DOREPLIFETIME_CONDITION 做条件复制，比如只发给 Owner，省带宽。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| OnRep 首次同步会调用吗？ | 视引擎版本和配置，行为不完全一致；不要依赖它做初始化，把刷新写成幂等函数并在 BeginPlay 手动调一次。 |
| 为什么客户端改属性没用？ | 属性同步只有服务器 → 客户端一个方向；客户端改的是本地副本，服务器下一次更新会把它覆盖。 |
| 只标 Replicated 为什么不同步？ | 缺少 GetLifetimeReplicatedProps 里的注册，引擎根本不知道要处理这个字段。 |
| OnRep 里能改游戏状态吗？ | 能改本地表现状态，但不要改需要服务器认可的权威状态；OnRep 不保证与其他 Actor 的同步顺序，也不回传。 |

### ④ 真实坑

1. **漏写 `DOREPLIFETIME`**：属性标了 `Replicated` 却永远不动，日志无报错；排查先看注册函数有没有调 `Super` 和对应宏。
2. **在客户端改血量并期待同步**：本地 UI 闪一下又跳回去，服务器从未收到；所有权威修改加 `HasAuthority()` 守卫。
3. **OnRep 里访问还没同步的对象**：初始同步阶段其他 Actor 可能还不存在，直接解引用就崩；先判空，或延迟到下一帧。
4. **只复制 Actor 不复制组件**：Actor 位置对了，但技能冷却、血条组件不动；组件要 `SetIsReplicatedByDefault(true)` 并注册字段。
5. **把所有字段都设成 `COND_InitialOnly`**：后续变化永远不发，表现为“只有第一次是对的”；条件复制要按字段语义选。

### ⑤ 练习

**A 写**：给角色加 `Health`（`ReplicatedUsing`）和 `Ammo`（`COND_OwnerOnly`），服务器每 2 秒扣 10 点血、每 3 秒扣 1 发弹药；两个客户端观察，并让第二个客户端晚 10 秒加入。

**提示**：① 注册函数第一行就调 `Super::GetLifetimeReplicatedProps`，否则父类（如 `ACharacter`）的字段会直接漏同步；② 把 UI 刷新抽成幂等函数，`BeginPlay` 和 `OnRep` 都调它，就不用赌首次同步会不会触发 OnRep；③ 用一个晚加入的第二个客户端验收，这是判断“状态还是事件”最快的实验。

验收标准：两个客户端血量一致；只有拥有者能看到自己的弹药变化；晚加入的客户端一进来就显示当前血量而不是满血；服务器端 UI 也能同步刷新。

**B 讲**：2 分钟口述“一条属性从服务器修改到客户端 UI 刷新的完整链路”，必须覆盖声明、注册、方向、OnRep、条件复制五个环节。

验收标准：能说清“漏注册”和“客户端改值”两种失败分别发生在哪一步；能解释 OnRep 为什么不能承担初始化职责。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-43"></a>
## U43 · Q43 Authority 和 Ownership 分别是什么？

> 来源：题库 UE 第 43 题 ｜ 速背卡：[Q43](./速背.md#ue-q43) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：Authority 回答“哪一份 Actor 说了算”，Ownership 回答“这个 Actor 归谁、消息往哪送”；前者决定逻辑分支，后者决定 RPC 路由和相关性的收件人。

**学完能做到**
- 写代码：用 `HasAuthority()`、`GetLocalRole()`、`GetOwner()` 把一段交互逻辑拆成服务器、自主代理、模拟代理三个分支。
- 讲出来：区分 Authority、Ownership、Instigator 三个概念，并说清 Owner 链断了会怎样。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| Authority 指“服务器这个进程” | 指服务器上那份权威副本；单机模式下 `HasAuthority()` 也为真，不能把“单机”当“客户端” |
| 设了 Instigator 就等于设了网络 Owner | Instigator 只做玩法归因，不参与 RPC 路由；两者要分别设置 |
| 自主代理和模拟代理可以手动指定 | 由引擎按“是否被本地玩家控制”分配，项目代码只能读 `GetLocalRole()` 判断 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Authority 指服务器上的权威实例；`HasAuthority()` 在服务器和单机为真 | 所有会改变同步状态的逻辑都要放在 Authority 分支，客户端只做预测和表现 |
| `GetLocalRole()` 描述本地这份 Actor 的身份：Authority / AutonomousProxy / SimulatedProxy | 用角色区分“我能预测”和“我只能看”，避免在模拟代理上跑输入逻辑 |
| Owner 是 Actor 的拥有者，通常是 PlayerController 或 Pawn；RPC 沿 Owner 链找连接 | Server/Client RPC 没有 Owner 就没有收件人；相关性也常用 Owner 做判定 |
| Instigator 是玩法归因，表示“谁造成了这件事”，不是网络 Owner | 算击杀、仇恨、伤害来源用 Instigator；不要拿它做 RPC 路由 |

Authority 不是“服务器这个进程”，而是“这份 Actor 在服务器上的副本”。同一个 Actor 在服务器上 Role 是 `ROLE_Authority`，在拥有它的客户端上是 `ROLE_AutonomousProxy`，在其他客户端上是 `ROLE_SimulatedProxy`。单机模式下 `HasAuthority()` 也为真，所以写逻辑时不能把“单机”和“客户端”混为一谈。监听服务器的主机玩家同时是服务器和本地玩家，它的 Pawn 仍然是 Authority，但也能本地控制，这种双重身份是很多“单机没事、联机出错”的来源。

Ownership 的实质是一条链：Pawn 的 Owner 通常指向 PlayerController，PlayerController 再关联到网络连接；武器、技能、投射物如果需要有 RPC 能力，就要把 Owner 设成角色或 PlayerController。`GetNetConnection()` 会沿这条链找到连接，找不到就说明这个 Actor 没有“发言权”。因此“给武器设 Owner”不是形式主义，而是让 Server RPC 有回程地址。

`bOnlyRelevantToOwner`、`COND_OwnerOnly`、`bNetUseOwnerRelevancy` 这些开关都建立在 Ownership 之上：只给拥有者发、继承拥有者的相关性、只对拥有者相关。它们能显著省带宽，但也会让“别人看不到”变成预期行为，调试时不要误判为 bug。

Instigator 经常被混淆。它回答的是“这件事算谁干的”，用于击杀归属、仇恨、统计；它不参与网络路由，也不会因为设了 Instigator 就让 RPC 找到连接。投射物可以 Owner 是武器、Instigator 是开火的角色，两者各司其职。

**设计动机**：服务器权威模型要同时回答三个不同的问题：谁能改（Authority）、消息发给谁（Owner/连接）、这件事算谁的（Instigator）。拆成三个独立概念后，逻辑分支、RPC 路由、玩法归因各用各的判据，不会出现“为了算击杀而让消息广播给所有人”这类耦合；代价是新建 Actor 时要分别记得设置。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 只有服务器能改状态 | `if (!HasAuthority()) return;` |
| 只有本地控制的玩家产生输入 | `if (!IsLocallyControlled()) return;` |
| 判断本地是自主代理还是模拟代理 | `GetLocalRole() == ROLE_AutonomousProxy` / `ROLE_SimulatedProxy` |
| 给动态创建的 Actor 建立 RPC 落点 | `Weapon->SetOwner(GetController())` 或 `SetOwner(this)` |
| 记录伤害归因 | `Projectile->SetInstigator(GetInstigator())`，与 Owner 分开设置 |

**示例说明**：以下为模块内片段，`AMyCharacter` 是已复制的 `ACharacter` 子类，`Server_Interact`/`Client_ShowHint` 需声明为对应 RPC；依赖 `CoreMinimal.h` 与 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
void AMyCharacter::EquipWeapon(AMyWeapon* Weapon)
{
    if (!HasAuthority() || !Weapon) { return; }

    // Owner：RPC 路由和相关性用，武器归这个角色
    Weapon->SetOwner(this);

    // Instigator：玩法归因用，伤害算在谁头上
    Weapon->SetInstigator(this);
}

void AMyCharacter::TryInteract()
{
    if (!IsLocallyControlled()) { return; }  // 只有本地玩家产生输入
    Server_Interact();                        // owning client -> server
}

void AMyCharacter::Server_Interact_Implementation()
{
    // 到服务器再校验一次，不信任客户端
    if (!HasAuthority() || bIsDead) { return; }
    DoInteract();
}

void AMyCharacter::ShowPrivateHint()
{
    if (!HasAuthority()) { return; }          // Client RPC 只能服务器发起
    Client_ShowHint();                        // 只发给 Owner
}
```

**可观察验证**

```cpp
// 一段逻辑在三个端上的身份，一次打印就能分清
UE_LOG(LogTemp, Log, TEXT("[Auth] %s auth=%d role=%d owner=%s conn=%s"),
    *GetName(), HasAuthority() ? 1 : 0, static_cast<int32>(GetLocalRole()),
    *GetNameSafe(GetOwner()), *GetNameSafe(GetNetConnection()));
```

```plaintext
stat net                    # 该 Actor 在哪个连接上有 channel
Log LogNet Verbose          # 无 Owner 时的路由告警
```

- 在服务器、拥有者客户端、其他客户端各看一次：`auth` 只在服务器为 1，`role` 依次是 Authority / AutonomousProxy / SimulatedProxy。
- 把实例的 Owner 清空后重跑：`conn` 变成 None，Server RPC 的打点消失。

### ③ 面试怎么讲

**30 秒口述稿**

> Authority 就是服务器权威，只有服务器能改同步状态；客户端上是自主代理或模拟代理，自主代理是本地控制的那份，模拟代理是别人的。Ownership 指这个 Actor 的 Owner 是谁，通常是 PlayerController 或 Pawn，它决定 Server RPC 往哪送、Client RPC 发给谁，也影响相关性。Server RPC 必须由 owning client 调，Client RPC 只发给 owner；没有 Owner 的 Actor 这两类 RPC 都发不了。Instigator 是伤害归因，不是网络 Owner，两者不要混。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `HasAuthority()` 什么时候为真？ | 服务器上的权威副本和单机模式为真；客户端上的自主代理、模拟代理都为假。 |
| Owner 和 Instigator 有什么区别？ | Owner 决定网络路由和相关性的收件人；Instigator 只表示玩法上“谁造成的”，不参与路由。 |
| 为什么 Pawn 要有 Owner？ | Pawn 的 Owner 通常指向 PlayerController，Server/Client RPC 才能沿链找到连接。 |
| 自主代理和模拟代理怎么选？ | 不是选的，是引擎按“是否被本地玩家控制”分配的；本地控制的是自主代理，其余是模拟代理。 |

### ④ 真实坑

1. **在客户端跑权威逻辑**：`if (HasAuthority())` 漏写，客户端扣血、扣钱、销毁 Actor，服务器一同步全被改回，表现为“回档”。
2. **动态 Actor 忘了 SetOwner**：Spawn 出来的投射物、掉落物调 Server RPC 全部静默失败；Spawn 后立刻设 Owner。
3. **把 Instigator 当 Owner 用**：伤害来源对了，但 RPC 还是找不到连接；两个字段分别设置。
4. **在模拟代理上读输入**：其他客户端的 Pawn 上没有本地输入，读出来是零；输入逻辑只放在 `IsLocallyControlled()` 分支。
5. **监听服务器上把主机当纯客户端**：主机既是 Authority 又是本地玩家，`HasAuthority()` 为真，不能再套一层“客户端预测”逻辑。

### ⑤ 练习

**A 写**：写一个 `AMyOwnedProbe`，Spawn 两个实例，一个 `SetOwner(PlayerController)`，一个不设 Owner；各自调用 Server RPC 打印 `HasAuthority()`、`GetLocalRole()`、`GetOwner()` 和 `GetNetConnection()`。再对拥有者实例调 Client RPC。

**提示**：① 用一行日志把 `HasAuthority()`、`GetLocalRole()`、`GetOwner()` 一起打出来，比逐个猜“我在哪个端”快得多；② 动态生成的 Actor 在 `SpawnActor` 之后立刻 `SetOwner`，别等 `BeginPlay`，否则第一帧的 RPC 没有落点；③ Owner 链保持短而明确（武器 → 角色 → PlayerController），中间任何一环为空都会让 `GetNetConnection()` 找不到连接。

验收标准：有 Owner 的实例 Server RPC 在服务器执行；无 Owner 的实例调用失败且有日志；Client RPC 只在拥有者客户端打印；`GetLocalRole()` 在三个端上的值符合 Authority / AutonomousProxy / SimulatedProxy。

**B 讲**：2 分钟口述“Authority 和 Ownership 的分工”，用武器开火链路举例：输入在哪个端产生、RPC 怎么路由、伤害归因记在谁身上。

验收标准：能准确说出三个角色值；能解释 Owner 链断开后 Server/Client RPC 各自的表现；能区分 Owner 与 Instigator。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-44"></a>
## U44 · Q44 客户端预测与回滚是怎么做的？

> 来源：题库 UE 第 44 题 ｜ 速背卡：[Q44](./速背.md#ue-q44) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：预测是“客户端先按输入跑一遍，不等服务器”，回滚是“服务器结果回来发现猜错了，就退回权威状态、重放还没被确认的输入”；核心成本在输入缓存、状态快照和重放一致性。

**学完能做到**
- 写代码：为自定义 Pawn 写出“记录输入序号 → 本地模拟 → 收到纠正后丢弃已确认输入 → 回滚重放”的简化闭环。
- 讲出来：说清移动预测的四步、误差阈值的作用，以及哪些逻辑不适合预测。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 预测就是“先显示，之后一定被纠正” | 误差在阈值内只更新确认序号、不回滚；回滚只在超过阈值时发生 |
| 回滚只需要把位置改回服务器值 | 必须同时重放未确认输入，否则玩家感觉到“吞输入” |
| 所有逻辑都适合预测 | 不可逆、依赖全局权威的逻辑（掉落、扣钱、击杀判定）不适合，只能做乐观表现 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 客户端收到输入立刻本地模拟，不等服务器 | 手感立刻响应；但本地状态只是“猜测”，随时可能被服务器纠正 |
| 服务器按自己的状态和输入重算，回发权威结果与已确认序号 | 客户端必须能识别“哪些输入还没被确认”，否则无法正确重放 |
| 误差超过阈值才回滚，回滚后重放未确认输入 | 阈值太紧会频繁拉扯抖动，太松会和服务器长期脱节 |
| CharacterMovement 内置移动预测，GAS 用预测键做技能预测 | 自定义系统要自己做输入缓存、快照、重放，成本很高，能复用就别重写 |

移动预测的闭环可以拆成四步：本地执行、上报、服务器权威计算、校正与重放。客户端每帧把输入（方向、跳跃、时间步长）应用到自己身上，同时把输入和序号存进“未确认队列”，再通过 Server RPC 上报。服务器拿到输入后，以自己的位置和状态为起点重算，把结果位置和“我已经处理到哪个序号”回发给客户端。客户端比较本地预测和服务器结果，误差在阈值内就只更新确认序号；超过阈值就回到服务器位置，再把队列里所有未确认输入重新模拟一遍。

这套机制成立的前提是“模拟是确定性的”：同样的初始状态加同样的输入，必须得到同样的结果。只要客户端和服务器用的移动参数、碰撞查询、时间步长处理不一致，重放就会持续产生误差，表现为角色被反复拉扯。CharacterMovement 把大量细节封装好了，所以项目里通常直接用 `ServerMove` / `ClientAdjustPosition` 这条链路，而不是自己写一套。

回滚的“闪”是工程问题，不是数学问题。位置瞬间跳变会被玩家看见，所以引擎通常配合平滑：小误差做插值收敛，大误差才硬切；镜头、动画、特效要单独处理，避免跟随回滚一起抖动。表现层可以延迟、可以插值，但权威状态必须严格按服务器结果对齐。

不适合预测的是“不可逆、依赖全局权威”的逻辑：掉落、扣钱、击杀判定、背包变更。这些操作一旦在客户端先执行，服务器拒绝时很难无损撤销；正确做法是客户端只做乐观表现（比如按钮按下态、预计动画），真正的状态等服务器确认。GAS 用预测键来标记“这批副作用是预测出来的”，服务器拒绝时回滚对应预测窗口内的效果，本质也是同一思路。

**设计动机**：纯服务器权威要让每个操作都等一个 RTT，手感不可接受；纯客户端权威又无法防作弊。预测 + 回滚是两者的折中：客户端先跑，服务器保留最终裁决权，误差超过阈值才退回权威状态并重放未确认输入——用输入缓存和确定性模拟换来“看起来零延迟、实际仍以服务器为准”。

**版本差异**：旧版 UE4 的 `ServerMove` 直接传位置等参数，UE4.25 起改为由 `FCharacterNetworkMoveData` 承载每次移动数据，UE5 沿用该模型；预测—校正—重放的语义不变。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 角色移动预测 | 直接用 `CharacterMovementComponent`，不要自己重写移动复制 |
| 技能预测 | 用 GAS 的预测键与预测性消耗/冷却，不要手写一套技能回滚 |
| 自定义轻量预测 | 缓存输入序号，收到权威结果后丢弃已确认项并重放 |
| 判断是否需要回滚 | 比较本地结果与服务器结果，误差超过项目设定阈值才回滚 |
| 掩盖回滚 | 小误差插值平滑，大误差硬切；镜头和动画单独做平滑 |

**示例说明**：以下为模块内片段，`Server_SendMove`/`Client_ApplyCorrection` 需在类里声明为 Server/Client RPC，`ReadMoveAxis`/`ApplyMove` 是待实现的项目函数；依赖 `CoreMinimal.h`，不能脱离工程独立编译。

```cpp
struct FMoveInput { float DeltaTime = 0.f; FVector2D Axis; uint32 Seq = 0; };

TArray<FMoveInput> UnackedInputs;   // 已发出、未被服务器确认的输入
uint32 LocalSeq = 0;

void AMyPawn::TickLocal(float DeltaTime)
{
    FMoveInput In;
    In.DeltaTime = DeltaTime;
    In.Axis = ReadMoveAxis();
    In.Seq = ++LocalSeq;

    ApplyMove(In);                  // 1) 本地立刻模拟
    UnackedInputs.Add(In);          // 2) 存起来，等待确认
    Server_SendMove(In);            // 3) 带序号上报
}

void AMyPawn::Client_ApplyCorrection_Implementation(
    FVector ServerLocation, uint32 AckedSeq)
{
    // 4) 丢掉服务器已确认的输入，回到权威状态再重放
    UnackedInputs.RemoveAll(
        [AckedSeq](const FMoveInput& In) { return In.Seq <= AckedSeq; });
    SetActorLocation(ServerLocation);
    for (const FMoveInput& In : UnackedInputs) { ApplyMove(In); }
}
```

上例是最小教学版，省略了碰撞、时间步长校正和误差阈值。真实项目里如果角色是 `ACharacter`，移动直接交给 `CharacterMovementComponent`；这段代码更适合理解“为什么需要序号”和“为什么要重放”。

**可观察验证**

```cpp
// 校正时打点：看误差大小与本次重放了多少条输入
UE_LOG(LogTemp, Log, TEXT("[Rollback] delta=%.1f replay=%d"),
    FVector::Dist(GetActorLocation(), ServerLocation), UnackedInputs.Num());
```

```plaintext
PIE 的 Network Emulation：设 In Packet Lag / Out Packet Loss，观察回滚频率
stat net                    # 移动 RPC 与校正包的带宽
```

- 把服务器移动速度改成客户端的 0.9 倍：日志里 `delta` 周期性变大、`replay` 非零，位置被拉回。
- 把误差阈值调大：`[Rollback]` 次数明显下降，但客户端与服务器的偏差变大。

### ③ 面试怎么讲

**30 秒口述稿**

> 预测就是客户端收到输入先本地执行，不等服务器，这样手感没有延迟；同时把输入带序号发给服务器。服务器按权威状态重算，回发结果和已确认序号。客户端对比，如果误差在阈值内就继续；超过阈值就回到服务器状态，再把还没确认的输入重放一遍。CharacterMovement 内置了这套移动预测，GAS 用预测键做技能预测。自定义系统要自己做输入缓存、状态快照和重放，成本很高，能复用引擎组件就别自己写。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 回滚会闪吗，怎么掩盖？ | 会。小误差用插值平滑，大误差才硬切；镜头、动画、特效单独做平滑或延迟，避免跟着位置一起抖。 |
| 哪些逻辑不适合预测？ | 不可逆或依赖全局权威的：掉落、扣钱、击杀判定、背包变更；客户端只做乐观表现，等服务器确认。 |
| 为什么需要输入序号？ | 服务器要告诉客户端“处理到哪一条”，客户端才能只重放未确认部分，避免重复模拟。 |
| 预测一定需要回滚吗？ | 不一定。纯表现预测可以只播效果不回滚；只要涉及权威状态，就必须能撤销错误预测。 |

### ④ 真实坑

1. **客户端和服务器模拟不一致**：移动参数、碰撞或时间步长处理不同，重放越跑越偏，角色持续被拉回；保证同一套参数和确定性逻辑。
2. **回滚后忘记重放**：只把位置改回服务器值，未确认输入丢了，玩家感觉“吞输入”；回滚必须跟重放成对出现。
3. **误差阈值拍脑袋**：太紧导致静止时也抖，太松导致穿墙、不同步；按角色速度和网络条件调，并配合平滑。
4. **在回滚里触发一次性表现**：每次重放都播脚步/特效，回滚一次播多次；表现层要做去重或与模拟解耦。
5. **预测不可逆操作**：客户端先扣钱、先掉装备，服务器拒绝后无法恢复；这类逻辑只做乐观 UI，状态等确认。

### ⑤ 练习

**A 写**：给一个非 Character 的简单 Pawn 实现上面的最小预测闭环：本地 Tick 累加位移并缓存输入序号，Server RPC 回传权威位置和 Ack，Client RPC 里丢弃已确认输入、回滚、重放。故意把服务器移动速度调成客户端的 0.9 倍，观察校正。

**提示**：① 固定 `DeltaTime` 和移动参数再对比，否则“客户端/服务器不一致”可能来自时间步长而不是算法；② 日志里同时打 `AckedSeq` 和重放条数，能立刻区分“没回滚”和“回滚了但忘了重放”；③ 用 PIE 的 Network Emulation 加延迟和丢包，零延迟下几乎看不到回滚问题。

验收标准：正常速度下客户端位置最终与服务器一致；速度不一致时能看到周期性回滚；把误差阈值调大后回滚次数明显减少但偏差变大。

**B 讲**：2 分钟口述“移动预测的四步闭环”，必须解释序号、阈值、重放三个关键词，并说明为什么 CharacterMovement 不建议自己重写。

验收标准：能画出客户端与服务器的消息往返；能说清“只回滚不重放”和“只预测不校正”各自的症状；能举一个不适合预测的例子。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-45"></a>
## U45 · Q45 状态同步和 RPC 怎么选？

> 来源：题库 UE 第 45 题 ｜ 速背卡：[Q45](./速背.md#ue-q45) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：判断标准只有一句——这个信息在几秒后还有意义、晚加入的玩家需不需要知道；需要就是状态走属性同步，只是一次性发生就是事件走 RPC。

**学完能做到**
- 写代码：把一个“开火”功能拆成状态部分（弹药、血量）和事件部分（枪口特效、命中反馈），分别用属性同步和 RPC 实现。
- 讲出来：用“晚加入、持续变化、带宽、可靠性”四个维度解释选型，并说明位置为什么是特例。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 状态和事件按“数据大小”分 | 按语义分：这个信息几秒后还有意义、晚加入的客户端要不要知道 |
| 属性同步可以当事件总线用 | 属性同步会节流并只收敛最终值，客户端不知道“发生了几次” |
| 位置也是普通状态，直接标 `Replicated` 就行 | 位置是特例，走 CharacterMovement 的移动复制通道，不要逐帧属性同步或 RPC |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 状态是“现在是什么样”，事件是“刚刚发生了什么” | 状态要能被晚加入的客户端直接读到；事件只对当时在场的人有意义 |
| 属性同步自带收敛、晚加入补齐、频率控制 | 血量、装备、任务进度适合属性同步，不需要补发历史事件 |
| RPC 直接、时序清楚，但可靠性要自己选 | 开火特效、音效、镜头抖动适合 Unreliable；购买结果适合 Reliable |
| 属性同步有带宽和频率上限，不能当事件总线 | 每帧变化的值要降频、量化或改成条件复制 |
| 位置是特例，走 CharacterMovement 的移动复制 | 不要用属性同步逐帧发位置，也不要每帧发 RPC |

状态和事件的分界不是“数据大小”，而是“语义”。血量从 100 变成 80，是一个状态；晚加入的玩家只需要知道现在是 80，不需要知道曾经扣过 20。开火是一个事件；晚加入的玩家不需要补看别人十秒前开的那一枪。把事件塞进属性同步，会变成“值变了但没人知道变了几次”；把状态塞进 RPC，会变成“新玩家进来得重放一整本历史”。

属性同步的优势是“自动收敛”：服务器不用关心哪个客户端漏了哪次更新，只要值不同就补。代价是它按 `NetUpdateFrequency` 节流，且受相关性和带宽预算限制，所以不适合毫秒级高频变化。RPC 的优势是“精确表达一次行为”，代价是可靠性和顺序要自己负责，而且接收端必须已经有这个 Actor。

实际项目里最常见的组合是：Server RPC 接收输入 → 服务器改状态（属性同步）→ 服务器发 Multicast 播一次性表现。三者各司其职，而不是二选一。比如开火：客户端发 Server RPC，服务器扣弹药（属性同步给所有相关客户端），再 Multicast 播枪口火光和音效。

位置之所以特殊，是因为它变化频率太高，逐帧属性同步或 RPC 都浪费；CharacterMovement 用专门的移动复制通道，压缩位置、旋转和移动模式，并配合预测与平滑。自己写的 Pawn 如果也要高频移动，应该考虑复用移动组件，而不是把 `FVector` 标成 `Replicated` 每帧刷。

**设计动机**：网络层只能做两件事：把“现在是什么”持续收敛过去，或把“发生了一次什么”投递一次。前者要容忍丢包和晚加入，后者要能精确计数。UE 因此保留属性同步与 RPC 两条通道，而不是让一条通道兼顾两种语义——否则要么丢失历史，要么被历史压垮。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 血量、弹药、任务进度 | `UPROPERTY(Replicated)` / `ReplicatedUsing` + `DOREPLIFETIME` |
| 开火特效、脚步、命中音效 | `UFUNCTION(NetMulticast, Unreliable)` |
| 购买、交互、结算等关键请求 | `UFUNCTION(Server, Reliable, WithValidation)` |
| 只给拥有者的私有状态 | `DOREPLIFETIME_CONDITION(..., COND_OwnerOnly)` |
| 高频变化的值 | 降 `NetUpdateFrequency`、量化、或改为只发变化的 RPC |

**示例说明**：以下片段来自 `AMyCharacter` 的成员声明与实现，依赖 UHT 生成的头文件，两个 RPC 的 `_Implementation` 未展开，不能脱离工程独立编译。

```cpp
// 状态：血量、弹药，走属性同步，晚加入也能看到
UPROPERTY(ReplicatedUsing = OnRep_Health)
float Health = 100.f;

UPROPERTY(Replicated)
int32 Ammo = 30;

// 事件：一次性表现，走多播，丢了也不影响逻辑
UFUNCTION(NetMulticast, Unreliable)
void Multicast_PlayFireFX();

// 事件：开火请求，漏了会出问题，走可靠 Server RPC
UFUNCTION(Server, Reliable, WithValidation)
void Server_Fire();

void AMyCharacter::OnFire()
{
    if (!IsLocallyControlled()) { return; }
    Server_Fire();                       // 输入上报，结算在服务器
}

void AMyCharacter::Server_Fire_Implementation()
{
    if (Ammo <= 0) { return; }
    Ammo = Ammo - 1;                     // 状态：属性同步负责结果
    Multicast_PlayFireFX();              // 事件：服务器广播表现
}
```

注意不要在客户端本地也调一次同一个 Multicast，否则拥有者会看到两次火光；如果确实要本地即时反馈，就让本地表现和服务器广播使用不同的去重标识。

**可观察验证**

```cpp
// 状态与事件分开打点：状态每端都有值，事件只在发生时打一次
UE_LOG(LogTemp, Log, TEXT("[State] auth=%d Health=%.0f Ammo=%d"),
    HasAuthority() ? 1 : 0, Health, Ammo);
UE_LOG(LogTemp, Log, TEXT("[Event] FireFX"));
```

```plaintext
stat net                    # 开/关事件 RPC 时的带宽差
stat game / stat unit       # 高频状态同步是否吃帧预算
```

- 关掉 `Multicast_PlayFireFX` 再跑：`stat net` 带宽下降，而血量、弹药逻辑完全正常——事件确实只是表现。
- 晚加入一个客户端：血量和弹药立刻正确，但看不到之前开火的火光——状态补齐、事件不补发。

### ③ 面试怎么讲

**30 秒口述稿**

> 状态用属性同步，事件用 RPC。持续存在、晚加入的客户端也要知道的状态，比如血量、位置、装备，走 Replicated；一次性、时效性强的，比如开火特效、播动画、音效，走 RPC。属性同步有频率和带宽控制，能自动收敛；RPC 更直接，但可靠性和顺序要自己选。频繁变化的值可以降频、量化，或者改成只发变化的 RPC。位置是特例，走 CharacterMovement 的移动复制，不要逐帧同步。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 位置为什么不用 RPC 同步？ | 频率太高，RPC 开销和可靠窗口都扛不住；移动组件有专门的压缩复制、预测和平滑。 |
| 属性同步会丢吗？ | 单个包可能丢，但状态会持续比较补发，最终收敛；如果 Actor 已不在相关性内或休眠，就不再更新。 |
| 一个功能既有状态又有事件怎么办？ | 拆开：Server RPC 收输入，服务器改状态走属性同步，表现走 Multicast。 |
| 高频状态一定要改成 RPC 吗？ | 不一定。先降频、量化、条件复制；确实是离散事件再改 RPC。 |

### ④ 真实坑

1. **用属性同步传事件**：连开三枪，客户端只看到血量/弹药最终值，不知道发生了几次；事件要用 RPC 或带计数的独立字段。
2. **用 RPC 传状态**：晚加入的玩家看不到之前的状态，必须等下一次变化；状态必须走属性同步。
3. **每帧同步位置**：带宽爆炸且抖动明显；用移动组件或降频+插值。
4. **把高频表现标 Reliable**：可靠窗口被特效占满，关键 RPC 反而延迟；表现一律优先 Unreliable。
5. **同一表现本地播一次、服务器 Multicast 又一次**：拥有者看到双份；本地预测表现要有去重或干脆不本地播。

### ⑤ 练习

**A 写**：选“拾取血包”功能，列出状态和事件两张表：血量、血包是否已拾取属于状态；拾取音效、飘字属于事件。分别用属性同步和 RPC 实现，并用 `stat net` 对比开/关特效 RPC 时的带宽。

**提示**：① 先写“状态表 / 事件表”再写代码，把判断标准（几秒后还有意义？晚加入要不要知道？）直接写进注释；② 验收时把事件 RPC 关掉重跑，逻辑仍然正确说明拆对了，反之说明它是状态；③ 本地即时反馈和服务器 Multicast 用不同触发源，确认拥有者不会看到两次特效。

验收标准：晚加入的客户端能看到正确的血量和血包状态；事件 RPC 丢失时逻辑仍然正确；关闭事件 RPC 后带宽明显下降。

**B 讲**：2 分钟口述“拿到一个功能，你怎么判断哪些走状态、哪些走事件”，用开火或拾取举例，并主动说出位置为什么特殊。

验收标准：四个判断维度各有一句结论；能说清“状态塞进 RPC”和“事件塞进属性”各自的症状；能给出一个混合方案的流程。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-46"></a>
## U46 · Q46 网络相关性（Relevancy）是什么？

> 来源：题库 UE 第 46 题 ｜ 速背卡：[Q46](./速背.md#ue-q46) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：相关性是服务器为每个连接维护的“这个客户端需不需要知道这个 Actor”的判定，决定 Actor 会不会被同步过去；它管的是网络预算，不是画面裁剪。

**学完能做到**
- 写代码：用 `NetCullDistanceSquared`、`bAlwaysRelevant`、`bOnlyRelevantToOwner` 和 `IsNetRelevantFor` 控制一个 Actor 对哪些客户端相关。
- 讲出来：解释 Owner 为什么总在相关集合里，以及 Dormancy 和相关性各自解决什么问题。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 相关性就是渲染裁剪 | 不是：相关性决定客户端有没有这个 Actor、占不占带宽、能不能收到 RPC；渲染只决定画不画 |
| Owner 会因距离远被裁掉 | 判定对 Owner 放行，保证自己的角色和武器始终存在、RPC 有落点 |
| Dormancy 会让 Actor 彻底断开 | 休眠只停属性更新，RPC 通常仍可送达；唤醒要靠 `FlushNetDormancy` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 相关性是 per-connection 的判定 | 同一个 Actor 可能对 A 客户端相关、对 B 不相关，服务器只给 A 建 channel |
| 默认按距离判定，距离阈值由 `NetCullDistanceSquared` 控制 | 超出范围的 Actor 不会同步，客户端根本不存在它，RPC 也没有落点 |
| `bAlwaysRelevant`、`bOnlyRelevantToOwner`、`bNetUseOwnerRelevancy` 可覆盖默认规则 | GameState、PlayerState 常用 AlwaysRelevant；私有物品用 OnlyRelevantToOwner |
| Owner 会被特殊放行 | 玩家自己的 Pawn/武器不会因为距离被裁掉，Server/Client RPC 才有稳定落点 |
| Dormancy 让静止 Actor 停止属性更新 | 交互物、掉落物唤醒时要 `FlushNetDormancy`，否则状态改了客户端不动 |

相关性的判定发生在服务器每次准备网络更新时。服务器遍历所有复制的 Actor，对每个连接调用 `IsNetRelevantFor`，决定要不要把这个 Actor 放进该连接的本轮更新列表。默认实现会检查 `bAlwaysRelevant`、Owner 关系、距离平方等；项目可以重写这个函数，加入视野、队伍、任务阶段等自定义规则。判定结果是“建不建 channel”，不是“这一帧发不发属性”。

因此相关性直接决定了客户端的“世界大小”。一个大地图如果所有 Actor 都 AlwaysRelevant，服务器要为每个连接维护海量 channel，带宽和 CPU 都会崩；反过来裁得太狠，玩家会看到 Actor 突然出现或交互物不存在。工程上的做法是分层：全局状态 AlwaysRelevant，玩家相关的东西按 Owner/队伍，场景物按距离，远处的一次性装饰直接不复制。

Owner 总在相关集合里，是 RPC 设计的基础。Server RPC 要沿 Owner 找连接，Client RPC 要发给 Owner；如果 Owner 因为距离被裁掉，这套路由就断了。所以引擎在相关性判定里对 Owner 做了放行，保证“自己的东西”始终存在。代价是 Owner 相关的 Actor 不能靠距离省带宽，需要靠条件复制或休眠来控制。

Dormancy 解决的是“相关但不变”的浪费。一个已经同步到客户端的箱子，如果一直静止，没必要每轮都检查属性；把它设为 `DORM_DormantAll` 后，属性更新停止，直到显式 `FlushNetDormancy` 唤醒。RPC 通常仍可送达，但具体行为视 Actor 和配置而定；不要把“休眠”理解成“完全断开”。相关性和休眠是两个正交的开关：前者决定“发不发给你”，后者决定“现在要不要更新”。

相关性和渲染裁剪不是一回事。渲染裁剪决定画不画，网络相关性决定客户端有没有这个 Actor、占不占带宽、能不能收到 RPC。一个 Actor 可能不在画面里但仍然相关（比如背后的队友），也可能在画面里但服务器根本没同步（比如纯本地特效）。调试时要分开看。

**设计动机**：服务器上行带宽随“玩家数 × 每人关心的 Actor 数”增长，不可能把所有 Actor 发给所有人；相关性把“这个连接要不要这个 Actor”做成 per-connection 判定，并允许项目重写规则；对 Owner 放行则是为了让 RPC 始终有落点——带宽预算和消息可达性必须同时满足。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 全局对象（GameState、比赛状态） | `bAlwaysRelevant = true` |
| 只给拥有者看的物品/UI 载体 | `bOnlyRelevantToOwner = true` |
| 继承 Owner 的相关性 | `bNetUseOwnerRelevancy = true` |
| 按距离控制场景物 | 构造里设置 `NetCullDistanceSquared`（单位是厘米的平方，示例值按项目定） |
| 自定义规则（队伍、视野、任务） | 重写 `IsNetRelevantFor` |
| 静止交互物省带宽 | `SetNetDormancy(DORM_DormantAll)`，状态变化时 `FlushNetDormancy()` |

**示例说明**：以下为模块内片段，`AMyPickup` 是 `bReplicates` 为真的 Actor 子类，`bAvailable` 为待声明成员；依赖 `CoreMinimal.h` 与 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
AMyPickup::AMyPickup()
{
    bReplicates = true;
    // 示例：只对大约 50 米内的连接相关；具体数值按项目调
    NetCullDistanceSquared = FMath::Square(5000.f);
}

bool AMyPickup::IsNetRelevantFor(const AActor* RealViewer, const AActor* ViewTarget, const FVector& SrcLocation) const
{
    // 任务要求必须可见的拾取物，无视距离
    if (bAlwaysRelevant) { return true; }

    // 拥有者始终相关，保证 RPC 和私有状态有落点
    if (IsOwnedBy(ViewTarget) || IsOwnedBy(RealViewer)) { return true; }

    // 其余交给默认的距离判定
    return Super::IsNetRelevantFor(RealViewer, ViewTarget, SrcLocation);
}

void AMyPickup::SetAvailable(bool bNewAvailable)
{
    if (!HasAuthority()) { return; }

    bAvailable = bNewAvailable;
    FlushNetDormancy();          // 休眠中的 Actor 必须唤醒才会同步这次变化
}
```

**可观察验证**

```cpp
// 服务器侧打点：看每个连接对它的判定结果
UE_LOG(LogTemp, Verbose, TEXT("[Relev] %s viewer=%s -> %d"),
    *GetName(), *GetNameSafe(ViewTarget),
    Super::IsNetRelevantFor(RealViewer, ViewTarget, SrcLocation) ? 1 : 0);
```

```plaintext
stat net                    # 该 Actor 的 channel 数与随距离的变化
```

- 把 `NetCullDistanceSquared` 设得极小，客户端走远再走回：走远后客户端上该 Actor 不存在（channel 被裁），走回后重新创建。
- 休眠的 Actor 在服务器改 `bAvailable`：不调 `FlushNetDormancy` 客户端毫无变化，调了立即同步。

### ③ 面试怎么讲

**30 秒口述稿**

> 相关性决定服务器把哪些 Actor 同步给哪个客户端。默认按距离，阈值是 NetCullDistanceSquared，也可以用 bAlwaysRelevant、bOnlyRelevantToOwner，或者重写 IsNetRelevantFor 做自定义规则。相关性之外还有 dormancy，静止的 Actor 可以休眠、不再更新属性，醒来要 FlushNetDormancy。Owner 会被特殊放行，保证自己的角色和武器始终存在，这样 RPC 才有落点。大地图必须控制同屏 Actor 数，否则带宽和 CPU 都扛不住。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 相关性和渲染裁剪是一回事吗？ | 不是。相关性决定网络层有没有这个 Actor、占不占带宽；渲染裁剪只决定画不画。 |
| 为什么 Owner 总能收到？ | 相关性判定对 Owner 放行，保证 Server/Client RPC 有稳定落点，也避免自己的角色被距离裁掉。 |
| Dormancy 和相关性什么关系？ | 正交。相关性决定发不发给你，Dormancy 决定相关之后现在要不要更新；唤醒要 FlushNetDormancy。 |
| 相关 Actor 被裁掉后 RPC 会怎样？ | 客户端没有这个 Actor，RPC 没有落点；要么保持相关，要么改由始终存在的 Actor 转发。 |

### ④ 真实坑

1. **远处交互物突然消失**：`NetCullDistanceSquared` 设太小，玩家走过去才创建，交互提示晚一拍；关键交互物设 AlwaysRelevant 或放大范围。
2. **休眠的 Actor 状态改了但客户端不动**：只改属性没 `FlushNetDormancy`；所有唤醒路径都要补上。
3. **私有物品设了 OnlyRelevantToOwner 又让其他玩家拾取**：别人客户端根本没有这个 Actor，表现和交互都失效；拾取前先让服务器转移 Owner 或改成相关。
4. **重写 `IsNetRelevantFor` 忘了调 Super**：自定义规则把 Owner 放行也一起覆盖，自己的角色可能被裁掉；先处理特例再交回默认。
5. **把所有 Actor 都设 AlwaysRelevant**：带宽和 channel 数量随人数线性爆炸；按全局/队伍/距离分层。

### ⑤ 练习

**A 写**：在 PIE 两客户端下放一个 `AMyPickup`，把 `NetCullDistanceSquared` 设成很小，让一个客户端走远再走回；再把它设为 `DORM_DormantAll`，在服务器改 `bAvailable`，对比调用/不调用 `FlushNetDormancy` 的结果。

**提示**：① 先把 `NetCullDistanceSquared` 设得极小复现“走远消失”，再按项目需求调回，比空想阈值可靠；② 重写 `IsNetRelevantFor` 时先处理 Owner/`bAlwaysRelevant` 特例、最后 `return Super::...`，否则会把默认的距离判定一起废掉；③ 休眠 Actor 的每条唤醒路径都要 `FlushNetDormancy`，列清单逐个补，漏一条就是一个“改了不动”的 bug。

验收标准：走远后客户端上该 Actor 不再更新或不存在；走回后重新出现；休眠时改属性客户端无变化，唤醒后立即同步。

**B 讲**：2 分钟口述“相关性、Owner、Dormancy 三者的关系”，用大地图和私有物品两个场景各举一例。

验收标准：能说清相关性和渲染裁剪的区别；能解释 Owner 放行的原因；能说出休眠后唤醒的手段。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-47"></a>
## U47 · Q47 Reliable 和 Unreliable 怎么选？带宽怎么控？

> 来源：题库 UE 第 47 题 ｜ 速背卡：[Q47](./速背.md#ue-q47) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：Reliable 不是“更安全”，而是“更贵”——它买的是到达和顺序，花的是可靠窗口；高频、可丢的表现用 Unreliable，真正漏不起的事件才用 Reliable，带宽优先靠降频、裁剪和量化。

**学完能做到**
- 写代码：给同一类表现 RPC 分别标 Reliable / Unreliable，用高频调用和 `stat net` 观察差异。
- 讲出来：解释可靠窗口、队头阻塞、`NetUpdateFrequency` 和量化各自解决什么问题。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| Reliable 更安全，能标就标 | 它买的是到达和顺序，花的是可靠窗口；堆积会队头阻塞，严重时断连 |
| 属性同步也占 RPC 的可靠窗口 | 两套机制：属性同步是最终一致，不占可靠队列，受 `NetUpdateFrequency` 节流 |
| 降带宽就是少发点 RPC | 优先级是裁人（相关性/休眠/条件复制）→ 降频 → 量化 → 最后才动可靠性 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Reliable 保证到达且有序，但占用可靠窗口 | 大量 Reliable 会阻塞后续可靠消息，严重时可靠缓冲溢出并断开连接 |
| Unreliable 可能丢、不重发，开销小 | 高频表现（脚步、粒子触发、瞬时音效）首选 |
| RPC 默认是 Unreliable | 只有“漏了会出逻辑问题”的事件才需要显式标 Reliable |
| 属性同步不走 Reliable RPC 的窗口，但受 `NetUpdateFrequency` 节流 | 降频、量化、条件复制比“全标 Reliable”更有效 |
| 量化能用更少比特表达近似值 | `FVector_NetQuantize` 系列、定点数、位域打包都能显著降带宽 |

可靠通道的本质是一条有序队列：每条 Reliable 消息都要等前面的确认，丢了就重传，后面的必须排队。这保证“不丢不乱”，但也意味着一条卡住的消息会拖住整条队列，这就是队头阻塞。高频表现如果都进这条队列，网络一抖就会积压，玩家看到的是“特效延迟几秒一起爆”，而不是“丢几个特效”。更严重时可靠缓冲写满，连接会被判定为异常并断开。

Unreliable 则是“发出去就不管”，丢了就丢了。对于枪口火光、脚步、命中飘字这类“当时没看到就不需要补”的表现，这是正确语义。它不是“低质量”，而是“语义匹配”。真正需要可靠的是购买结果、技能释放确认、背包变更这类漏了会导致状态机错乱的事件。

属性同步和 Reliable RPC 是两套机制。属性同步按“服务器当前值 vs 客户端已确认值”持续比较，语义上是可靠的最终一致：值会持续补发，不会因为单个包丢失就永久错；但它不占用 RPC 的可靠窗口，受 `NetUpdateFrequency` 限制，不是每条修改都立刻发包。`NetUpdateFrequency` 控制 Actor 每秒最多被网络更新的次数，`MinNetUpdateFrequency` 用于动态调整下限，`NetPriority` 影响带宽紧张时谁先发。具体默认值视引擎版本和项目配置，不要背数字，要知道调哪里。

带宽控制有一个优先级顺序：先砍“不需要发的人”（相关性、Dormancy、条件复制），再砍“不需要发的频率”（NetUpdateFrequency、事件合并），再砍“每个值的精度”（量化、位域），最后才考虑把可靠改成不可靠。全标 Reliable 是最差的做法，因为它既没省带宽，又把可靠性预算花在了不重要的表现上。度量工具用 `stat net`、Network Insights 和日志，先看谁在占带宽，再改。

**设计动机**：网络层给不了“既便宜又保证”的通道：保证到达和顺序就要重传和排队，而多数表现宁要新、不要全。于是引擎同时提供可靠与不可靠两条路，并把可靠预算做成有限窗口，逼项目按语义分配；带宽不够时先靠相关性、频率和量化去省，而不是把一切都塞进可靠通道。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 高频、可丢的表现 | `UFUNCTION(NetMulticast, Unreliable)` |
| 漏了会出逻辑问题的请求/结算 | `UFUNCTION(Server, Reliable, WithValidation)` |
| 降低 Actor 网络更新频率 | 调 `NetUpdateFrequency`，必要时配 `MinNetUpdateFrequency` |
| 减少位置/方向的精度开销 | 用 `FVector_NetQuantize` / `FVector_NetQuantize10` 等压缩类型 |
| 只给需要的人发 | `DOREPLIFETIME_CONDITION`、`bOnlyRelevantToOwner`、Dormancy |
| 带宽紧张时排优先级 | 调 `NetPriority`，让关键 Actor 先更新 |

**示例说明**：以下片段散落在 `AMyWeapon` 的声明与 `Tick` 实现里，`AimPoint` 还需要 `DOREPLIFETIME` 注册才会同步；依赖 `CoreMinimal.h` 与 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
// 高频表现：可丢，绝不能占可靠窗口
UFUNCTION(NetMulticast, Unreliable)
void Multicast_PlayFootstep();

// 关键结算：漏了会出逻辑问题，才用 Reliable
UFUNCTION(Server, Reliable, WithValidation)
void Server_SubmitScore(int32 Score);

// 量化：瞄准点不需要 float 全精度
UPROPERTY(Replicated)
FVector_NetQuantize10 AimPoint;

void AMyWeapon::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);

    // 反例：每帧发 Reliable 表现，网络一抖就积压
    // Multicast_PlayMuzzleFX();

    // 正确：高频表现用 Unreliable，或者合并成低频事件
    if (HasAuthority() && bIsFiring)     // 只有服务器发起广播
    {
        Multicast_PlayFootstep();
    }
}
```

上例的 `NetUpdateFrequency`、`NetPriority` 没有写死数值，因为合适值取决于 Actor 的重要性、玩家数量和项目带宽预算；在编辑器里调、用 `stat net` 验证，比抄一个默认值可靠。

**可观察验证**

```cpp
// 客户端在 Multicast 实现里计数：丢了多少次一目了然
++ReceivedFootsteps;
UE_LOG(LogTemp, Log, TEXT("[FX] recv=%d"), ReceivedFootsteps);
```

```plaintext
stat net                    # Reliable 的排队与延迟、Unreliable 的平稳带宽
Unreal Insights（-trace=net）：Network Trace 里看 RPC 与属性的带宽占比
```

- 同一 RPC 以每秒 100 次发送，先 Unreliable 跑 10 秒再换 Reliable：后者延迟与排队明显变差，客户端计数也追不上。
- 把同步向量换成 `FVector_NetQuantize10`：`stat net` 里该字段带宽下降，视觉误差可接受。

### ③ 面试怎么讲

**30 秒口述稿**

> Reliable 保证到达和顺序，但会占可靠窗口，消息一多就排队，严重时阻塞后续甚至把缓冲打满导致断开；Unreliable 可能丢，但开销小，适合高频、可丢的表现。RPC 默认是 Unreliable，重要事件才标 Reliable。属性同步语义上是可靠的最终一致，但不占用 RPC 的可靠窗口，受 NetUpdateFrequency 限制。带宽紧张时先降频、做相关性裁剪、量化，而不是全标 Reliable。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 全标 Reliable 会怎样？ | 可靠窗口被占满，队头阻塞导致延迟飙升，严重时可靠缓冲溢出并断开连接。 |
| 属性同步会阻塞吗？ | 语义上可靠，但不会像 Reliable RPC 那样挤占可靠队列；预算满时表现为更新延迟，不是可靠队列卡死。 |
| 怎么快速降带宽？ | 先裁相关性和休眠，再降 NetUpdateFrequency，再量化，最后才动可靠性。 |
| Unreliable 会不会导致逻辑错乱？ | 只用于可丢的表现就不会；涉及状态机的事件必须 Reliable 或改用属性同步。 |

### ④ 真实坑

1. **每帧发 Reliable 特效**：短时间堆积大量可靠消息，队头阻塞，玩家看到特效延迟爆发；表现改 Unreliable 或合并。
2. **关键事件用 Unreliable**：购买、扣费偶发丢失，玩家投诉“钱扣了东西没到”；关键结算必须 Reliable 或服务器权威状态。
3. **只降 `NetUpdateFrequency` 不调相关性**：远处 Actor 仍在占 channel；先裁人再降频。
4. **裸 `FVector` 同步高精度位置**：每个分量 float 很浪费；用 `FVector_NetQuantize` 系列按精度需求选。
5. **把 Reliable 当成业务成功**：它只保证消息到达，不保证服务器接受；请求被拒绝或重连后，仍要靠状态同步或重试来对齐。

### ⑤ 练习

**A 写**：做一个 `AMyFXSpammer`，用 Multicast 以每秒 100 次的频率发表现 RPC，先标 Unreliable 跑 10 秒，再改 Reliable 跑 10 秒，用 `stat net` 记录发送量和延迟；然后把一个同步向量改成 `FVector_NetQuantize10` 对比带宽。

**提示**：① 压力测试用固定频率循环发 RPC，并在客户端统计实际到达次数，才能同时看到 Reliable 的排队和 Unreliable 的丢弃；② 改带宽前先记一次基线 `stat net`，每次只改一个变量（频率/量化/条件复制），否则无法归因；③ Reliable 只保证消息到达，服务器是否接受要靠状态同步确认，别把“消息到了”当成“业务成功”。

验收标准：Reliable 版本的延迟/排队明显更差，严重时出现可靠缓冲告警；Unreliable 版本带宽平稳；量化后该字段带宽下降且视觉误差可接受。

**B 讲**：2 分钟口述“Reliable / Unreliable / 属性同步三者的成本模型”，并给出一个从“全 Reliable”改到合理方案的步骤。

验收标准：能解释队头阻塞和可靠缓冲溢出；能按“裁人 → 降频 → 量化 → 调可靠性”的顺序给方案；能说出一个必须 Reliable 的例子。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-48"></a>
## U48 · Q48 网络同步常见坑有哪些？

> 来源：题库 UE 第 48 题 ｜ 速背卡：[Q48](./速背.md#ue-q48) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：网络 bug 的共同特征是“静默”——不崩、不报错，只是某个端上的世界不一样；排查顺序永远是“有没有复制 → 有没有 Owner → 改在哪个端 → 时序对不对”。

**学完能做到**
- 写代码：写一个网络自检日志，打印 Actor 的复制状态、Authority、Role、Owner 和连接。
- 讲出来：按“复制、Owner、端、时序、销毁”五类说出常见坑和对应排查手段。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 网络 bug 会有报错 | 多数是静默的：不崩不报错，只是某个端上的世界不一样 |
| 单机能跑就说明逻辑对 | 单机没有角色差异，Authority/Role/Owner 的分支只有联机才暴露 |
| 排查从业务代码读起 | 先确认“这段逻辑跑在哪个端”，再按复制 → Owner → 端 → 注册 → 时序查 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Actor 没开 `bReplicates` | 客户端根本不会创建它，表现、碰撞、RPC 全部无从谈起 |
| 组件没开复制 | Actor 在了，但血条、技能冷却、物品栏等组件状态不同步 |
| 只在客户端改属性 | 本地看着变了，服务器不知道，下一次同步被覆盖，表现为“回档” |
| Server RPC 落在无 Owner 的 Actor 上 | 没有 owning connection，调用被丢弃或只留日志，表现为“按了没反应” |
| OnRep 里访问未同步对象 | 初始同步顺序不保证，空指针或读到默认值，表现为“第一次打开 UI 是错的” |
| Actor 销毁后继续发 RPC | 接收端没有落点，日志刷警告；生命周期结束要停掉定时器和回调 |

网络问题的难点不在 API，而在“同一份代码在多个角色上跑”：专用服务器、监听服务器主机、拥有者客户端、其他客户端。每个端的 Role、Authority、Owner 都不同，任何没有分支保护的逻辑都会在某个端上做出错误决定。所以排查的第一步不是读网络代码，而是确认“这段逻辑现在跑在哪个端”。

第二个难点是时序。Actor 的生成、属性的初始同步、`BeginPlay`、RPC 的到达顺序，并不是一个简单的线性过程。客户端可能先看到 Actor 再收到属性，也可能在属性还没到时先跑 `BeginPlay`。依赖“另一个对象已经存在”的代码，在单机上永远正确，在联机上偶发崩溃。正确做法是判空、延迟、或者把依赖改成事件驱动。

第三个难点是“静默失败”。RPC 路由不到、属性没注册、组件没复制，这些都不会抛异常，只会让状态停在默认值。所以工程上要主动加日志和自检，而不是等玩家报“有时候不对劲”。`stat net` 看流量和 Actor 数，Network Insights 看细节，`LogNet` 和 `-netlog` 看连接与 RPC 记录；UE5 里 Network Profiler 逐步被 Network Insights 替代，具体以项目引擎版本为准。

排查顺序可以固定成五步：第一，客户端有没有这个 Actor（`bReplicates`）；第二，它归谁（Owner/连接）；第三，这段代码该在哪个端跑（Authority/Role）；第四，值有没有注册同步（`DOREPLIFETIME`/组件复制）；第五，时序和销毁有没有问题。按这个顺序走，大多数“玄学不同步”都能定位。

**设计动机**：复制是一条数据驱动、按端分支的流水线：字段没注册就不在表里，Actor 没复制就没有 channel，RPC 找不到连接就直接丢弃——每一步都没有异常可抛，因为服务器不能因为某个客户端缺对象就中断整帧。静默是这套设计的必然结果，所以排查只能靠自检日志和工具，而不是等报错。

### ② 开发怎么用

| 现象 | 优先检查 |
| --- | --- |
| 客户端完全看不到 Actor | `bReplicates`、Spawn 是否在服务器、相关性是否把它裁掉 |
| Actor 在了但状态不动 | `DOREPLIFETIME` 是否注册、组件是否 `SetIsReplicatedByDefault(true)` |
| 客户端改了又跳回去 | 修改是否只在客户端发生，是否缺 `HasAuthority()` |
| Server RPC 没反应 | Owner 是否设置、Owner 链是否连到客户端、Actor 是否已同步 |
| OnRep 里崩溃或读到默认值 | 依赖对象是否已同步，是否判空，初始化是否只押在 OnRep 上 |
| 销毁后日志刷警告 | 定时器、委托、RPC 是否在 `EndPlay` 里清理 |

**示例说明**：以下为模块内片段，`AMyActor` 的 `EndPlay` 覆写需与父类签名一致；依赖 `CoreMinimal.h` 与 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
void AMyActor::BeginPlay()
{
    Super::BeginPlay();

    // 一行自检：确认这个 Actor 在每个端上的网络身份
    UE_LOG(LogTemp, Log,
        TEXT("[Net] %s Authority=%d Role=%d Owner=%s Replicated=%d Conn=%s"),
        *GetName(),
        HasAuthority() ? 1 : 0,
        static_cast<int32>(GetLocalRole()),
        *GetNameSafe(GetOwner()),
        GetIsReplicated() ? 1 : 0,
        *GetNameSafe(GetNetConnection()));
}

void AMyActor::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    GetWorldTimerManager().ClearAllTimersForObject(this);
    Super::EndPlay(EndPlayReason);
}
```

**可观察验证**

```cpp
// 排查记录：把位置与状态写进 Visual Logger，回放时能按端对比
UE_VLOG_LOCATION(this, LogTemp, Verbose, GetActorLocation(), 20.f,
    FColor::Green, TEXT("%s"), *GetName());
```

```plaintext
stat net                    # 每个连接的 channel 数与流量
Log LogNet Verbose          # RPC 路由与序列化告警
```

- 用 PIE 两客户端各看一遍自检日志：同一个 Actor 在三个端的 Role/Owner 不同，先按这行定位再去读业务代码。
- Visual Logger 回放同一段操作：把“服务器有、客户端没有”的 Actor 在时间轴上对齐，能直接看出是生成时序还是相关性裁掉。

### ③ 面试怎么讲

**30 秒口述稿**

> 常见坑分几类：Actor 忘了 bReplicates，客户端根本看不到；组件没设复制；只在客户端改属性，以为会同步；Server RPC 在没有 Owner 的 Actor 上调，静默失败；OnRep 里访问还没同步的对象；在模拟代理上跑本地输入逻辑；Actor 销毁后还发 RPC。排查先看客户端有没有这个 Actor，再看 Owner 和 Authority，再看属性有没有注册，最后看时序和销毁。工具用 stat net、Network Insights 和 LogNet。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 怎么快速判断一个 Actor 有没有同步？ | 客户端打印 `GetIsReplicated()`、`GetLocalRole()`、`GetOwner()`，再看 `stat net` 里有没有它的 channel；没有就是没复制或被裁。 |
| 模拟代理上哪些逻辑不能跑？ | 输入、预测、权威状态修改、依赖本地玩家的交互；模拟代理只做表现和插值。 |
| 为什么 OnRep 里会崩？ | 初始同步顺序不保证，依赖的 Actor 可能还没创建；判空或延迟到确认同步后。 |
| 网络问题为什么难复现？ | 单机没有角色差异，联机才出现 Authority/Role 分支；PIE 两客户端 + 固定延迟是基本复现手段。 |

### ④ 真实坑

1. **Spawn 在客户端**：客户端本地生成一个“影子 Actor”，服务器不知道，其他玩家也看不到；生成统一放服务器，客户端只收结果。
2. **Actor 复制了但组件没复制**：位置同步、血条不动；组件构造里开 `SetIsReplicatedByDefault(true)`，并确认所属 Actor 复制。
3. **OnRep 里直接解引用 Owner/Controller**：初始同步阶段可能为空；判空，或把逻辑推迟到 `BeginPlay` 之后的事件。
4. **销毁后 RPC/定时器还在跑**：日志刷“没有 channel”的警告，严重时访问无效对象；`EndPlay` 清理定时器、委托和挂起的 RPC。
5. **用 `GetWorld()->GetFirstPlayerController()` 做服务器逻辑**：在客户端/监听服务器上指向不同对象；网络逻辑用 Owner、`HasAuthority()`，不要靠“第一个玩家”。

### ⑤ 练习

**A 写**：故意制造四个坑并逐一修复：① 一个 Actor 不设 `bReplicates`；② 一个组件不设复制；③ 客户端直接改血量；④ 一个无 Owner 的 Actor 调 Server RPC。每个坑加自检日志，用 PIE 两客户端观察现象并记录修复前后差异。

**提示**：① 先写“一行自检”再写业务代码，任何“玄学不同步”都先排除复制 / Owner / 端这三类；② 复现用 PIE 两客户端加 Network Emulation 固定延迟，单机永远复现不出来；③ 每个坑先留住修复前的现象日志再改，否则改完分不清是修好了还是被别处掩盖了。

验收标准：四个坑都能稳定复现；日志能指出是“没复制 / 没 Owner / 改错端 / 没注册”中的哪一类；修复后同一操作在两个客户端表现一致。

**B 讲**：2 分钟口述“拿到一个‘客户端不同步’的 bug，你的排查顺序”，必须覆盖复制、Owner、端、注册、时序五步，并各举一个现象。

验收标准：顺序清晰不跳步；每步能说出一个具体检查点或工具；能解释为什么先查“有没有 Actor”而不是先读业务代码。

> ↑ 返回[目录](#toc)

---

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ⑧：性能与内存](#ch13)


<a id="ch13"></a>
# 第 13 章 · UE ⑧：性能与内存

> 对应速背 UE 主题 08（Q49–Q55），完整答题卡见 [速背 UE 08](./速背.md#ue-t08)。
> 上一篇：[UE ⑦：网络同步](#ch12) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-49"></a>
## U49 · Q49 Tick 开销怎么优化？

> 来源：题库 UE 第 49 题 ｜ 速背卡：[Q49](./速背.md#ue-q49) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：Tick 优化的第一步不是把函数写快，而是先决定谁根本不该被调度，再降低被调度者的频率，最后才抠单次执行的成本。

**学完能做到**
- 写代码：给一个 Actor 关掉不必要的 Tick，再用一个管理器统一驱动上千个轻量对象。
- 讲出来：说清 "数量 → 频率 → 单次成本" 三层顺序，以及每层对应的具体 API。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 把 Tick 函数体写成空的就是零成本 | 注册、排序、派发到任务图的成本照付；`bCanEverTick = false` 才是把它从调度里摘出去 |
| 设了 `TickInterval` 就等于只是变便宜 | 频率确实下降，但传进来的 `DeltaSeconds` 变成累积时长，任何“每帧一次”的假设都会失真 |
| `TickGroup` 设对了就能减少 Tick 开销 | 它只决定执行阶段与顺序，不减少工作量；依赖加多了还会把并行变成串行 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 每个 Actor 的 `PrimaryActorTick` 是一个 `FTickFunction`，注册进引擎的 Tick 任务管理，按 `TickGroup` 分组派发 | 一千个"函数体为空"的 Tick 也不是零成本，调度和任务图要付钱 |
| `bCanEverTick = false` 的对象根本不会注册 Tick 函数 | 这是"从调度里摘出去"，比在函数开头 `return` 更彻底 |
| `TickInterval` 让同一函数隔若干帧执行一次，传进来的 `DeltaSeconds` 是累积的真实时长 | 频率降下来后，任何"每帧一次"的假设都要重新检查 |
| `TickGroup` 只决定执行阶段与顺序，不减少工作量 | 顺序错了会出现一帧滞后；依赖加多了会把并行变成串行 |
| Tick 里 Spawn/Destroy 会改动正在遍历的数组，新对象要到 `TG_NewlySpawned` 才跑 | 大量增删容易造成顺序错乱和一帧延迟 |

Tick 的成本其实有两层：函数体本身，以及引擎把每个 Tick 函数注册、排序、派发到任务图的开销。前者靠写代码省，后者只能靠减少对象和降低频率省。所以顺序是数量 → 频率 → 单次成本；反过来做，你会花大力气把一个已经被调度 60 次的函数再优化 20%，却仍然要调度 60 次。

引擎里同一个 TickGroup 内的执行顺序并不保证。需要 A 先于 B，就用 `AddTickPrerequisiteActor` 显式声明依赖；但依赖会把本来能并行的批次串起来，链越长收益越低，环状依赖还会让顺序不可预期。

Tick 里最贵的东西往往不是数学运算，而是查找和分配：遍历所有 Actor、按名字找对象、拼字符串、`NewObject`/`SpawnActor`。这些操作要么是 O(n)，要么会改动正在遍历的数组，要么触发分配、给 GC 加活。

最后一件事是测量。先看 Game 线程是不是帧时间的大头，再看是哪个系统，最后才用 trace 看具体函数。没有测量的"优化"只是把代码改复杂。

**设计动机**：引擎默认让每个对象自己决定要不要 Tick，好处是逻辑内聚、写起来最直观，代价是对象一多，调度成本就随数量线性膨胀。所以引擎把杠杆拆成三个独立开关：注册处的 `bCanEverTick` 决定进不进调度，频率处的 `TickInterval` 决定多久进一次，分组处的 `TickGroup` 只决定先后顺序。这也解释了为什么优化顺序必须是数量 → 频率 → 单次成本：能动的只有这三个开关，前两个的收益随数量线性放大，第三个只有常数级收益。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 完全不参与逻辑的对象（静态装饰、纯数据） | 构造函数里 `PrimaryActorTick.bCanEverTick = false`，并确认别处没有再打开 |
| 只在特定阶段需要更新 | `bStartWithTickEnabled = false`，业务时机再 `SetActorTickEnabled(true)` |
| 要更新但不要求逐帧 | `TickInterval = 0.1f` 之类，按可接受延迟选值 |
| 物理之后跟随、相机/后处理放最后 | 设 `TickGroup`（`TG_PostPhysics`、`TG_PostUpdateWork` 等，顺序以引擎枚举为准） |
| 必须 A 先于 B | `B->AddTickPrerequisiteActor(A)`，同时评估是否真有必要 |
| 成百上千个同构对象 | 抽成管理器，用一个 Tick 驱动紧凑数组 |
| 纯表现逻辑 | `PrimaryActorTick.bAllowTickOnDedicatedServer = false`，让服务器不跑 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
// MyProjectile.cpp：只有活着的子弹才需要 Tick
AMyProjectile::AMyProjectile()
{
    PrimaryActorTick.bCanEverTick = true;
    PrimaryActorTick.bStartWithTickEnabled = false;   // 生成后由发射逻辑再打开
    PrimaryActorTick.TickInterval = 0.033f;           // 约 30Hz，够用就不逐帧
}
```

```cpp
// 管理器统一 Tick：N 发子弹只有 1 个 Tick 函数，数据连续、缓存友好
void UBulletManager::Tick(float DeltaTime)
{
    for (int32 i = Bullets.Num() - 1; i >= 0; --i)
    {
        FBullet& B = Bullets[i];
        B.Position += B.Velocity * DeltaTime;   // 纯数据结构，不碰 UObject
        if (B.Life <= 0.f)
        {
            Bullets.RemoveAtSwap(i);            // O(1)，不保序
        }
    }
}
```

**可观察验证**

```cpp
// 构造期先确认开关状态：没有注册 Tick 的对象根本不进调度
UE_LOG(LogTemp, Log, TEXT("CanEverTick=%d, TickEnabled=%d"),
    PrimaryActorTick.bCanEverTick ? 1 : 0, IsActorTickEnabled() ? 1 : 0);

// 给可疑 Tick 打点，Insights 时间线上按名字就能过滤
TRACE_CPUPROFILER_EVENT_SCOPE(MyProjectile_Tick);
```

```plaintext
stat unit / stat unitgraph     # 先确认 Game 线程是不是帧时间大头
stat game                      # 再看 Tick、蓝图、动画、物理各占多少
```

- 管理器版（1 个 Tick 驱动 1 万发）与逐 Actor 版（1000 个 Actor 各自 Tick）各跑一遍，对比 `stat unit` 的 Game 毫秒：差值来自调度次数，而不是函数体。
- 关掉 `bCanEverTick` 前后各抓一段 Insights：`MyProjectile_Tick` 事件消失、Game 毫秒同步下降，两者对得上才算找到了收益来源。

### ③ 面试怎么讲

**30 秒口述稿**

> Tick 优化我按三层做。第一层是数量：不需要 Tick 的 Actor 直接把 bCanEverTick 关掉，让它根本不进调度。第二层是频率：要更新但不急的，设 TickInterval 降频，或者在远处、不可见时停掉。第三层才是单次成本：Tick 里不要 Spawn、Destroy、遍历查找、拼字符串、同步加载，指针能缓存就缓存。对象特别多的同类逻辑，我会抽一个管理器统一 Tick，一百个子弹不需要一百个 Tick 函数。最后用 stat unit、stat game 和 Unreal Insights 验证到底省了多少。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| TickGroup 怎么用？ | 先想"这段逻辑属于这帧的哪个阶段"：物理前准备位置、物理后读结果、相机和后处理放 `PostUpdateWork`。同组内顺序不保证，要顺序就加 Tick 前置依赖，但会牺牲并行。 |
| 怎么找出 Tick 最多的对象？ | 先用 `stat unit` 确认 Game 线程是大头，再抓 CPU trace 按事件名看 Tick 相关条目的耗时和次数；给可疑 Tick 加 `TRACE_CPUPROFILER_EVENT_SCOPE` 标记最直观。 |
| 在 Tick 开头 return 不就行了？ | 只省了函数体，注册和调度成本还在。`bCanEverTick = false` 是把它从调度里摘掉。 |
| TickInterval 和 Timer 怎么选？ | 需要与帧对齐、状态随帧变化的用 Tick；固定节奏、不在乎帧对齐的用 Timer 更省，但要记得清 Timer。 |
| 关闭 Tick 后还能再打开吗？ | `bCanEverTick` 为 false 时 `SetActorTickEnabled(true)` 不会生效，必须先改 `bCanEverTick`。 |
| Tick 能并行吗？ | 引擎按组派发，但对象间共享 World 和组件，实际收益有限；大规模同构计算交给管理器配 `ParallelFor` 更可控。 |

### ④ 真实坑

1. **`bCanEverTick = false` 后又调 `SetActorTickEnabled(true)`**：引擎会直接忽略，因为 Tick 函数压根没注册，表现为"代码写了但没跑"。
2. **设了 `TickInterval` 却假设 `DeltaSeconds` 等于帧时间**：间隔模式下传进来的是累积时长，用它做"每帧一次"的计数或阈值判断会失真。
3. **在 Tick 里大量 Spawn/Destroy**：新对象要到 `TG_NewlySpawned` 才执行，且遍历中的数组可能被改动，容易出现一帧延迟和顺序错乱。
4. **用 Tick 前置依赖解决所有顺序问题**：依赖链越长并行度越低，环状依赖下顺序不可预期，调试极其费劲。
5. **只在 PIE 里测 Tick 开销**：编辑器开销、蓝图调试、视口渲染都会污染数据，结论要在 Standalone 或打包版复测。

### ⑤ 练习

**A 写**：写一个 `AProjectile`（自身 `bCanEverTick = false`）和一个 `UProjectileManager`，管理器每帧遍历 `TArray<FBullet>`（普通结构体：位置、速度、存活时间）更新位置并回收。先跑管理器的 1 万发，再跑"1000 个 Actor 各自 Tick"的版本，用 `stat unit` 记录两种实现的 Game 毫秒。

**提示**：① 管理器版和逐 Actor 版要跑同一场景、同一发弹数，否则 Game 毫秒不可比；② 关闭统一在构造函数里落 `bCanEverTick = false`，运行期的 `SetActorTickEnabled` 只对已注册的 Tick 有效，两者别混用；③ 结论以 Standalone 或打包版的 `stat unit` 为准，PIE 的编辑器开销会盖过调度差异。

验收标准：管理器版本的 Game 时间明显低于逐 Actor 版本；两次 `stat unit` 数据能说明差异；能解释差异来自调度开销还是函数体开销。

**B 讲**：2 分钟口述"给我一个 2000 个 Tick 对象的场景，你怎么把它降下来"。必须覆盖数量、频率、单次成本三层，每层给一个具体 API 或写法，并说明怎么验证。

验收标准：不看稿讲完；三层各有一个可落地的动作；能回答"确实关不掉 Tick 的对象怎么办"（降频、合并、异步、换更新机制）。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-50"></a>
## U50 · Q50 对象池怎么做？

> 来源：题库 UE 第 50 题 ｜ 速背卡：[Q50](./速背.md#ue-q50) ｜ 耗时 16 min ｜ 难度 ★★☆

**一句话**：对象池是用稳定的常驻内存，换掉 Spawn/Destroy 和 GC 的抖动；难点不在"取和还"，而在"还回来时状态是不是真的干净"。

**学完能做到**
- 写代码：实现一个带 Acquire/Release/Reset/Grow 四个动作的 Actor 池。
- 讲出来：说清池化的收益、代价，以及什么对象值得池化。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 对象池就是在 `TArray` 里缓存一批 Actor | 缓存只是第一步；池化真正的风险在 `Reset`，状态漏清就会出现“幽灵命中” |
| 池里的对象不标 `UPROPERTY` 也不会被回收 | 没有引用边就没有保活，下一轮 GC 直接收走，`Acquire` 拿到的是野指针 |
| 池化一定省性能 | 省的是 Spawn 的构造与注册开销；常驻内存上升、状态重置的维护成本也真实存在 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UE 没有开箱即用的通用对象池 | 每个项目自己封装；`NewObject` 和 `SpawnActor` 都不会帮你复用 |
| Spawn 的成本包括构造、组件注册、物理与渲染注册 | 池化复用只做显示、位置、碰撞开关，省掉的正是这些注册 |
| 池里的对象必须被强引用持有 | 没人引用就会被下一轮 GC 收走，取出来是失效对象 |
| 复用要求状态可重置，而状态散落在组件、计时器、委托里 | Reset 是池化最容易漏、也最容易出诡异 bug 的环节 |

值得池化的对象有三个特征：高频、短命、构造昂贵。子弹、伤害飘字、命中特效都属于这一类；Boss、关卡机关、玩家控制器则完全相反——数量少、生命周期长、状态复杂，池化只会把状态管理变难。池的最小接口是四个动作：`Acquire` 取、`Release` 还、`Reset` 清状态、`Grow` 不够时扩容；很多人只写了前两个，跑起来发现上一发子弹的命中回调还绑着、伤害值还是上一发的、计时器还在倒计时，于是出现"幽灵命中"。

池的所有者也关键：池本身是 UObject，挂在会被销毁的 Actor 上，关卡切换后池连同内容一起失效；放在 GameInstance 或 WorldSubsystem 里，生命周期才和"这一局"对齐。池化减少 GC 的原因很朴素——对象数量稳定、不再每帧产生垃圾对象，GC 工作量与对象数量正相关，稳定比"少"更重要；代价是常驻内存上升和状态重置容易漏。

**设计动机**：`SpawnActor`/`NewObject` 的代价不只在申请内存，而在构造、组件注册、物理与渲染注册这一整串流程，它们都发生在游戏线程上；同时每多一个 UObject，GC 的标记与清扫就多一个节点。池化把“申请—释放”换成“激活—失活”，让对象数量在稳态下恒定：构造成本一次性付掉，之后只改状态。代价也由此而来——状态必须能收敛回初值，池的生命周期必须与“这一局”对齐，否则池会先于使用方失效。

**版本差异**：UE5 用 `TObjectPtr` 持有池内对象（`UPROPERTY` 语义不变），UE4 用裸指针 `APooledActor*`；`UWorldSubsystem` 自 UE4.22 起可用，两代行为一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 高频短命的子弹、抛射物 | 池化 Actor，Release 时隐藏 + 关 Tick + 关碰撞 |
| 伤害飘字、飘血 | 池化 Widget 或 Actor，或者干脆改用 Niagara |
| 纯视觉、无需逐发逻辑的弹幕 | InstancedStaticMesh / Niagara，不要用 Actor |
| 池的存储 | `UPROPERTY() TArray<TObjectPtr<APooledActor>> FreeList;` 少写宏就会被 GC 收走 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Subsystems/WorldSubsystem.h` 与 UHT 生成的 `BulletPool.generated.h`，不能脱离工程独立编译。

```cpp
UCLASS()
class UBulletPool : public UWorldSubsystem   // 池跟着 World 走，切关卡自然重建
{
    GENERATED_BODY()
public:
    APooledBullet* Acquire();
    void Release(APooledBullet* Bullet);

private:
    UPROPERTY()
    TArray<TObjectPtr<APooledBullet>> FreeList;   // 不写 UPROPERTY 就会被 GC 收走
};

APooledBullet* UBulletPool::Acquire()
{
    for (int32 i = FreeList.Num() - 1; i >= 0; --i)
    {
        APooledBullet* Bullet = FreeList[i];
        FreeList.RemoveAtSwap(i);
        if (IsValid(Bullet))       // 池里的对象也可能被别的途径销毁
        {
            Bullet->Activate();    // 显示、开 Tick、开碰撞
            return Bullet;
        }
    }
    return Grow();                 // 不够就扩容，或降级成普通 Spawn
}

// 还池 = 彻底失活，不只是隐藏
void APooledBullet::Deactivate()
{
    SetActorTickEnabled(false);
    SetActorHiddenInGame(true);
    SetActorEnableCollision(false);
    GetWorldTimerManager().ClearAllTimersForObject(this);  // 清掉残留计时器
    OnHit.Clear();                                         // 清掉外部绑的委托
}
```

**可观察验证**

```cpp
// 还池后三个开关都应为 false、残留计时器要清零，才算真正失活
UE_LOG(LogTemp, Log, TEXT("tick=%d hidden=%d collision=%d"),
    IsActorTickEnabled() ? 1 : 0, IsHidden() ? 1 : 0, GetActorEnableCollision() ? 1 : 0);
```

```plaintext
obj list class=APooledBullet   # 池对象数量应保持恒定，不随发射次数增长
stat gc                        # 对比池化前后的收集次数与单次耗时
```

- 连续取还 100 次后 `obj list class=APooledBullet` 的数量不变，说明没有产生新对象。
- 临时注释掉 `Deactivate()` 再取还一次：对象仍在 Tick、仍带碰撞，`stat game` 里这部分开销会回来——这就是“隐藏不等于失活”的证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 对象池就是预创建一批，用完不销毁，而是隐藏、失活，下次直接复用。UE 没有通用池，我一般自己封装四个动作：取、还、重置、扩容。Actor 池靠隐藏、关 Tick、关碰撞来模拟回收；纯视觉的弹幕用 InstancedStaticMesh 或 Niagara，不走 Actor；UObject 池里的对象必须用 UPROPERTY 持有，不然会被 GC 收走。收益是少分配、少 GC、少 Spawn 的组件注册开销；代价是常驻内存和状态管理，尤其是重置漏了会出幽灵逻辑。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 池化对象的状态怎么重置？ | 位置和速度、伤害与命中标记、计时器、委托绑定、特效组件；统一收敛到一个 `Deactivate()`，Release 只调它，避免各处漏清。 |
| 为什么池化能减少 GC？ | 对象数量稳定、不再每帧产生垃圾对象；GC 耗时和对象数量正相关，稳定本身就减少清扫压力。 |
| 什么情况不该池化？ | 低频、唯一、状态复杂的对象，池化只会把状态管理变难，还白占内存。 |
| 池要不要预热？ | 要。在加载界面或关卡开始时预创建，避免第一次开火时的分配尖峰。 |
| 池满了怎么办？ | 要么扩容（要有上限），要么降级成普通 Spawn 并在回收时不还池。 |

### ④ 真实坑

1. **池没有被 `UPROPERTY` 持有**：`TArray<APooledBullet*>` 裸指针成员，GC 认为没人引用，下一轮直接回收，Acquire 返回野指针。
2. **Release 只隐藏不复位**：位置停在上一处、伤害还是上一发的、委托还绑着，出现"幽灵命中"或双重结算。
3. **池化对象仍在 Tick、仍有碰撞**：隐藏不等于失活，开销照付，池化只省了 Spawn 的成本。
4. **池挂在会销毁的 Actor 上**：关卡切换或宿主被 Destroy 后池和内容一起没了，新关卡里 Acquire 直接崩。

### ⑤ 练习

**A 写**：实现一个 10 个预创建、上限 20 的子弹池，包含 `Acquire/Release/Reset` 三个函数；每次取还都打印对象指针和 Active 状态；连续做 100 次取还，统计池内对象总数与场景里的 UObject 数量。

**提示**：① 先把 Reset 清单在一处收口（位置与速度、伤害与命中标记、计时器、委托绑定、特效），`Release` 只调 `Deactivate()`，别让每个调用点各漏一点；② 池的宿主放 `UWorldSubsystem` 或 `UGameInstanceSubsystem`，不要挂在会被 Destroy 的 Actor 上；③ 验证同时看 `obj list` 与 `stat gc`：只降内存不降 GC，说明池化没落到 UObject 数量上。

验收标准：同一个对象还回再取出后指针不变；UObject 数量不随发射次数增长；`Deactivate` 后 `IsActorTickEnabled()` 为 false 且 `GetActorEnableCollision()` 为 false。

**B 讲**：2 分钟口述"给你一个子弹系统，池怎么设计"。必须覆盖四个动作、Reset 具体清哪几样、池放在哪、什么时候不该池化。

验收标准：能列出一条完整的 Reset 清单；能回答"池满了怎么办"；不看稿。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-51"></a>
## U51 · Q51 GC 卡顿怎么优化？

> 来源：题库 UE 第 51 题 ｜ 速背卡：[Q51](./速背.md#ue-q51) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：GC 卡顿的本质是"一次性要标记和清扫的对象太多"，所以优化永远先做减法——对象更少、活得更久、把工作摊到多帧。

**学完能做到**
- 写代码：把每帧 `NewObject` 的临时对象改造成复用对象或普通结构体。
- 讲出来：说清标记-清扫的流程、对象数量与 GC 耗时的关系、增量 GC 的副作用。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 调大 GC 间隔就能减少卡顿 | 两次收集之间积了更多垃圾，单次标记清扫更久，长尾反而更明显 |
| 开增量 GC 就能消掉尖峰 | 单帧预算用完照样要停下来等，只是把一次长停顿换成多次中等停顿 |
| GC 耗时取决于内存总量 | 标记阶段沿引用图走，更取决于 UObject 数量；几个大 UTexture 节点少，标记并不痛 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UObject 的存活由引用图可达性决定，不是引用计数 | 没人用的对象不会立刻释放，要等下一轮 GC |
| `Destroy` 只把对象标记为待回收 | 调用后内存不会立刻下降，卡顿往往出现在真正回收那一刻 |
| 一次 GC 的耗时大致与对象数量成正比 | 减少对象是最长效的手段，比调参数更根本 |
| 增量 GC 把一次收集拆成多帧小步执行 | 单帧尖峰变小，但总时长变长、内存峰值变高，需要时间预算 |
| GC 集群让常驻/销毁同步的对象一起处理 | 减少遍历打断，但簇内一个成员被引用会让整簇常驻 |
| 大世界的常驻对象由流送决定 | 只能靠 World Partition / Level Streaming 控制"同时在内存里的世界多大" |

UE 的 GC 是标记-清扫：从根集和实现了引用收集的 C++ 对象出发，沿引用链遍历，能到的是活的，到不了的被标记为垃圾，随后清扫。所以 UObject 层面的"泄漏"几乎总是"还有一条强引用链指着它"，而不是"忘记 delete"。

短命对象为什么贵？每一轮 GC 都要遍历它们、清扫它们，销毁时还连带组件的反注册和资源释放。一次生成几百个只活两秒的对象，等于给每一轮 GC 都加了活。

对象数量为什么比总内存更影响 GC 时间？标记阶段是沿着引用图走的，对象越多，节点和边越多；反过来，几个几百 MB 的大 UTexture 虽然占内存，但节点少，标记阶段并不痛。

增量 GC 的收益是把一帧 30ms 的收集摊成十帧各 3ms，代价是对象释放被推迟、内存峰值上升。而且如果单帧分配太猛，增量也救不了——预算用完照样要停下来等，只是把长卡顿换成了多次中等卡顿。

集群解决的是访问模式问题：把一起加载、一起卸载的对象打成一组，减少遍历时的随机访问和打断。但如果把"可能单独存活"的对象塞进同一个簇，一个成员被引用就会拖着整簇不走，反而增加常驻。

**设计动机**：标记-清扫要能处理循环引用，就必须每轮看到完整的引用图，于是每次收集都是一次全图遍历——这既是它相对引用计数的优势，也是卡顿的来源：成本随对象数量线性上升。引擎给出的两条出路都来自这个约束：增量 GC 把同一张图分帧遍历，用时间预算换更长的总时长；GC 集群按“一起生一起死”重排遍历顺序，用局部性换更少的随机访问。它们都在“怎么走这张图”上做文章，绕不开“图有多大”，所以减对象永远是最根本的手段。

**版本差异**：UE5 默认增量 GC（标记分帧、清理按时间片），UE4 传统模式多为单帧全量 GC；`gc.*` 控制台变量的名字与默认值以对应引擎版本为准。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 减少对象 | 合并同类对象、复用池、删掉纯装饰的 UObject、用结构体代替 UObject |
| 避免短命 | 池化、`SetLifeSpan` 集中回收、把生成错开到多帧 |
| 分批生成 | 队列 + 每帧上限，或 Timer 一批一批来 |
| 开增量 GC | 项目设置里启用，并给每帧预算，同时盯着内存峰值 |
| 用集群 | 只给"一起生一起死"的资产打簇，不要全局一刀切 |
| 大世界 | World Partition / Level Streaming，控制单个流送单元的规模 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的头文件，不能脱离工程独立编译；`ini` 段只是配置写法示意。

```cpp
// 反例：每帧造一个 UObject 做临时计算，等于每帧给 GC 加活
void AMySpawner::Tick(float DeltaSeconds)
{
    UMyTempData* Data = NewObject<UMyTempData>(this);
    Data->Compute();
}

// 正例：长期使用的对象只建一次；短命表现交给池或粒子
void AMySpawner::Tick(float DeltaSeconds)
{
    CachedData->Compute();                       // 成员持有，生命周期与本 Actor 一致
    if (bFire) { Pool->Acquire()->Launch(); }    // 从池里取，不 NewObject
}
```

```ini
[ConsoleVariables]
; 仅示意写法，键名与默认值以当前引擎版本为准，数值必须按平台实测
gc.TimeBetweenPurgingPendingKillObjects=60
gc.CreateGCClusters=1
```

**可观察验证**

```cpp
// 快照：临时 UObject 的数量应稳定，而不是随运行时长增长
int32 LiveTempData = 0;
for (TObjectIterator<UMyTempData> It; It; ++It) { ++LiveTempData; }
UE_LOG(LogTemp, Log, TEXT("live UMyTempData=%d"), LiveTempData);
```

```plaintext
stat gc                        # 单次收集耗时与触发原因
stat memory / stat unit        # 内存分类，以及 Game 尖峰是否和 GC 时刻重合
obj list class=UMyTempData     # 临时对象数量不随帧数增长
```

- 改造前后各抓一段 Insights 的 GC 轨道：改造后单次收集的尖峰变矮，且不再与 Tick 里的分配同拍出现。
- 把 `gc.TimeBetweenPurgingPendingKillObjects` 调大再测一次：单次收集更久、长尾更明显，反证“减对象”比“调间隔”更根本。

### ③ 面试怎么讲

**30 秒口述稿**

> 降 GC 卡顿我先做减法：减少 UObject 数量，避免高频短命对象，用对象池复用，批量生成错开到多帧。然后才是调度手段：开增量 GC 并给每帧时间预算，用 GC 集群把一起生死的对象放一起，大世界靠 World Partition 或关卡流送控制常驻对象。定位时看 stat GC、Unreal Insights 的 GC 轨道，再用 obj list 按数量排序看是哪一类在涨。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 增量 GC 有什么副作用？ | 单帧变短但总时长变长，对象释放被推迟，内存峰值更高；预算给小了会跨很多帧，期间内存只增不减。 |
| 集群解决什么问题？ | 减少遍历时的随机访问和打断，让一起加载的资产被成组处理；它不解决"对象太多"，只是让同样的对象处理得更顺。 |
| 为什么不用引用计数？ | 环引用无法回收、每次赋值都有原子或额外开销，而且 UE 需要统一处理跨关卡和异步加载的对象图。 |
| 怎么确认卡顿真来自 GC？ | 看 Insights 的 GC 轨道和日志里的 GC 耗时，同时用 `stat unit` 确认 Game 线程尖峰是否与 GC 时刻重合。 |
| Destroy 之后内存为什么没降？ | Destroy 只是标记待回收，真正的清扫要等下一轮 GC；拿这个当泄漏判断会误判。 |
| Spawn 尖峰怎么错开？ | 队列 + 每帧上限，或 Timer 分批；能预生成的放到加载界面。 |

### ④ 真实坑

1. **只调 GC 间隔不减对象**：两次 GC 之间积累更多垃圾，单次时间更长，长尾更明显。
2. **以为 Destroy 就释放**：对象进待回收状态，内存要等下一轮 GC 才降；"销毁后内存没降"不能直接判成泄漏。
3. **每帧 NewObject 做纯数据**：临时数据用栈对象或普通结构体，不需要 UObject 就别造。
4. **把增量 GC 期间的峰值当泄漏**：判断标准是"操作结束后是否回落到基线"，不是过程中的最高点。
5. **集群一把梭**：把可独立存活的资源塞进一个簇，结果一个引用拖住整簇，常驻内存反而上去。

### ⑤ 练习

**A 写**：写两个版本的生成器：A 每帧 `NewObject` 100 个、两秒后丢弃；B 用对象池或普通结构体重写。分别记录 `stat memory` 数值和 `obj list` 的类计数，各跑两次取快照。

**提示**：① 先用 `obj list -countsort` 和 `stat gc` 找到数量最多、寿命最短的那一类，再决定合并、池化还是换结构体，别一上来调参数；② 判定口径是“同一操作两次后基线是否回落”，增量 GC 期间的内存上涨是预期行为，不要当泄漏处理；③ 集群只在确认“一起生一起死”的资产子集上开，先在单张地图对比常驻内存，再决定要不要全量。

验收标准：B 版本 UObject 数量稳定、不随运行时间增长；GC 时刻的 Game 尖峰明显下降；能解释下降来自"对象少"而不是"GC 间隔长"。

**B 讲**：2 分钟口述"开放世界切区时卡一下，你怀疑是 GC，怎么查、怎么办"。必须覆盖判定方法、三类手段（减对象、摊平、控世界）、以及验证方式。

验收标准：能说清增量 GC 与减少对象之间的取舍；至少给出一条"不减对象就减不了 GC"的因果链；不看稿。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-52"></a>
## U52 · Q52 内存分析有哪些手段？

> 来源：题库 UE 第 52 题 ｜ 速背卡：[Q52](./速背.md#ue-q52) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：内存分析就是把"总量、时间、归属"三个问题分别交给不同工具，再用两次快照把"正常波动"和"真泄漏"分开。

**学完能做到**
- 写代码：写一个按类统计 UObject 数量的小工具，用于前后快照对比。
- 讲出来：说清五类工具各自回答什么问题，以及它们的口径差异。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| `stat memory` 的各类相加应等于进程内存 | 它只统计引擎能追踪到的分配，分配器碎片、驱动、第三方库与未打标签部分都不在内 |
| 看一次快照就能判断有没有泄漏 | 单次数字只描述现状，泄漏要靠同一操作前后两次快照看基线是否回落 |
| 内存涨了就是泄漏 | 有上限、会淘汰的保留是缓存；先看有没有上限与淘汰策略，再定性 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `stat memory` 给的是分类总量 | 能快速看哪一类大，但看不出具体是谁、什么时候涨 |
| `memreport` 给的是明细快照 | 资产/对象/类级列表，适合离线比对两份报告 |
| LLM 给的是按标签记账的内存 | 需要启动时开启，本身有开销，标签粒度取决于埋点 |
| Insights 给的是时间线 | 能看到峰值出现在哪一帧、和哪个操作重合 |
| `obj list` / `obj refs` 给的是对象图 | 回答"有多少个""谁引用着它" |
| 单次数据只能描述现状 | 判断泄漏必须两次快照对比，且前后操作一致 |

先明确你要回答哪个问题。"内存总量够不够"看分类总量和平台水位；"为什么涨了 200MB"看标签差值或两份 memreport 的 diff；"什么时候涨的"看时间线；"谁没释放"看类计数和引用链。工具选错，数据再准也没用。

这些工具的口径并不完全一致。`stat memory` 统计的是引擎能追踪到的分配，进程实际占用还包括分配器碎片、驱动、第三方库和未打标签的部分，所以两边对不上是正常的，不要拿差值直接当结论。

判断泄漏的标准动作是：同一关卡、同样画质，做同一件事两次，看第二次结束后的基线有没有回到第一次结束时的水平。不回落才继续往下钻：先看总数，再看具体类，最后看引用链。

读 `obj refs` 的输出要带着目的：先看直接引用者的类型。如果是 `UPROPERTY` 容器，就去查谁在往里塞；如果是委托，就看有没有解绑；如果显示在根集里，就去查 `AddToRoot` 有没有配对。

**设计动机**：内存问题天然分三层——总量够不够、什么时候涨的、涨在谁身上。没有任何一个工具能同时回答三层：`stat memory` 只有分类总量，`memreport` 只有某一刻的明细，LLM 只有标签账本，Insights 只有时间轴，`obj list`/`obj refs` 只有对象图。引擎按“回答哪个问题”把工具拆开，而不是做一把万能尺；也正因为口径不同，跨工具的数字对不上是常态，结论只能落在同一工具的前后对比上。

**版本差异**：UE5 的默认性能分析入口是 Unreal Insights 的 trace 通道，UE4 项目更多依赖 `stat` 系列、`memreport` 与 `stat startfile`/`stopfile` 的文件分析；`memreport`、`obj list`、`obj refs` 两代都有，具体参数以引擎版本为准。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 快速看总量与分类占比 | `stat memory` |
| 出详细报告 | `memreport -full`，文件落在 `Saved/Profiling/MemReports`（路径随版本） |
| 看标签账本 | 启动参数开启 LLM，再配合相关控制台命令查看 |
| 看时间线峰值 | Unreal Insights 抓内存通道的 trace |
| 看对象数量与类分布 | `obj list class=XXX`、`obj list -countsort` |
| 查引用链 | `obj refs name=XXX` |

```plaintext
# 控制台 / 命令行；具体选项与可用性随引擎版本
stat memory
memreport -full
obj list -countsort
obj list class=StaticMeshComponent
obj refs name=BP_MyActor_C_0
```

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与 `UObject/UObjectIterator.h`，只是调试用工具函数，不能脱离工程独立编译。

```cpp
// 仅调试用：按类统计当前所有 UObject，用于两次快照做差
static void DumpObjectCounts(int32 TopN)
{
    TMap<UClass*, int32> Counts;
    for (TObjectIterator<UObject> It; It; ++It)
    {
        if (It->HasAnyFlags(RF_ClassDefaultObject)) { continue; }
        Counts.FindOrAdd(It->GetClass())++;
    }
    Counts.ValueSort([](int32 A, int32 B) { return A > B; });

    int32 Printed = 0;
    for (const TPair<UClass*, int32>& Pair : Counts)
    {
        if (++Printed > TopN) { break; }
        UE_LOG(LogTemp, Log, TEXT("%s : %d"), *Pair.Key->GetName(), Pair.Value);
    }
}
```

**可观察验证**

```plaintext
memreport -full                # 第一次快照，记下文件名与时间
obj list -countsort            # 按数量排序，看哪一类在涨
obj refs name=BP_MyActor_C_0   # 从对象往上追直接引用者
```

```cpp
// 前后各调一次，把类计数打到日志，用脚本做差
DumpObjectCounts(20);   // 第一次
// ...执行一次玩法...
DumpObjectCounts(20);   // 第二次
```

- 同一关卡做同一操作两次，对比两份 `memreport`：增长项应落在预期范围内，而不是每一轮都同幅上涨。
- 把 `stat memory` 的总和与进程实际占用并列看一次：两者本就不相等，这就是“口径不同”的直接证据。

### ③ 面试怎么讲

**30 秒口述稿**

> 内存工具我按问题分：stat memory 看分类总量，快速判断哪一类大；memreport -full 出详细快照，适合两份报告对比；LLM 看标签归属，需要启动时开启；Insights 的内存轨道看时间线，定位峰值出现在哪一帧；obj list 看 UObject 数量和类分布，obj refs 追谁引用着它。查泄漏就做同一操作两次，看基线是否回落，再按类往下钻，最后看引用链。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| LLM 和 memreport 怎么配合？ | LLM 先定位到标签或系统级别，memreport 再在资产和对象级给明细，先粗后细。 |
| 怎么判断是泄漏还是缓存？ | 做同一操作两次看是否回落；再看该对象有没有上限和淘汰策略，有上限的通常是缓存。 |
| 为什么 stat memory 加起来不等于进程内存？ | 口径不同：分配器碎片、驱动、第三方库、未打标签的分配都不在统计里。 |
| 编辑器里看到的数据可信吗？ | 编辑器世界、预览资产、缩略图都会占内存，线上问题要用打包版复测。 |
| 能不能自动化？ | 可以把 memreport 或对象计数挂到自动化用例前后，做差值告警，比人工看更可靠。 |

### ④ 真实坑

1. **只看一次快照**：内存涨不涨要靠对比，单次数字连"是否异常"都判断不了。
2. **拿编辑器数据当线上数据**：编辑器里资产预览和 PIE 世界都在，对象数和内存都偏高。
3. **把缓存当泄漏清掉**：先确认有没有上限和淘汰策略，盲目清理会让加载变慢、CPU 上去。
4. **`obj list` 只看总数不看类**：总数受临时对象干扰，按类排序才能看出是哪一类在涨。
5. **边开 LLM 边测性能**：LLM 自身有开销，内存排查和性能测试要分开做，否则两组数据都不可信。

### ⑤ 练习

**A 写**：设计一个三分钟流程：进关卡 → `stat memory` + `memreport -full` → 触发一次玩法 → 退出再进 → 再打一次 → 对比两份报告，列出增长最多的三个类，并用 `obj refs` 追其中一个的直接引用者。

**提示**：① 先定问题再选工具：总量看 `stat memory`、明细看 `memreport`、时间线看 Insights、归属看 `obj list`/`obj refs`，混用只会拿到互相矛盾的数字；② 对比必须同关卡、同画质、同操作，两次之间只改一个变量；③ 读 `obj refs` 先看直接引用者的类型——`UPROPERTY` 容器、委托槽位、根集，三种类型对应三种修法。

验收标准：两份报告都存在且时间可辨；能指出三个增长项并给出"缓存还是泄漏"的初判；能报出其中一个对象的直接引用者类型。

**B 讲**：2 分钟口述"线上反馈内存缓慢上涨，你给一套排查流程"。必须覆盖四类工具、两次对比法、缓存与泄漏的区分。

验收标准：顺序合理（先总量，再明细，再看引用）；能说出至少一个工具的口径局限；不看稿。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-53"></a>
## U53 · Q53 CPU 性能怎么定位？

> 来源：题库 UE 第 53 题 ｜ 速背卡：[Q53](./速背.md#ue-q53) ｜ 耗时 16 min ｜ 难度 ★★☆

**一句话**：CPU 定位先分层再切片——先用帧时间拆出是哪条线程或 GPU 在拖后腿，再进对应工具看是哪个系统、哪个函数。

**学完能做到**
- 写代码：给自己的耗时逻辑加 trace 标记和 cycle stat，能在 Insights 时间线上找到它。
- 讲出来：说清 Frame/Game/Draw/GPU 的关系，以及采样与插桩各自的盲区。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| Frame 时间就是 Game 线程时间 | Frame 大致由 Game/Draw/GPU 中最慢的一环决定；Frame 明显比它们都大，说明有等待或同步 |
| 抓一次全量 trace 就能定位所有问题 | trace 开销高、文件大，抓得越久越可能抓到被观测行为改变后的世界 |
| 采样里看不到的函数就没耗时 | 采样看不到很短的小函数；精确结论要对可疑段落插桩之后才有 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Frame 是这一帧的总时长 | 它大致由 Game/Draw/GPU 中最慢的一环决定，优化快的那条没用 |
| Game 是游戏线程逻辑 | Tick、蓝图、动画、物理、AI、GC 都在这里 |
| Draw 是渲染线程 | 场景渲染、绘制调用、材质相关工作 |
| GPU 是显卡耗时 | 像素与顶点、后处理、阴影、半透明 |
| `stat game` 是 Game 线程的系统细分 | 看是动画、物理、AI 还是别的子系统 |
| 采样看趋势，插桩看细节 | 采样无侵入但看不到短函数；插桩精确但有开销、会改变时序 |

`stat unit` 给几个毫秒数，先看谁最大。Frame 明显比 Game/Draw/GPU 都大，说明有等待或同步（任务图等待、加载、GPU 同步）；Game 最大就往逻辑查；Draw 最大往往是绘制调用和材质；GPU 最大先看分辨率和后处理。

不要一上来就抓全量 trace。trace 文件大、开销高，先把范围缩到某条线程、某个系统，再抓那几秒。抓得越久越全，越可能抓到的是被观测行为改变后的世界。

采样和插桩要配合。采样能看到真实的分布，但不含很短的小函数；插桩能精确到你关心的段落，可是埋点多了会拖慢，还会改变缓存行为。正确姿势是先采样定范围，再对可疑段落插桩确认。

测量环境同样重要。PIE 会掺入编辑器开销，蓝图断点、过多日志、编辑器视口都会污染数据；结论必须能在 Standalone 或打包版上复现，否则只是"编辑器里的性能"。

**设计动机**：帧时间是并行管线的合成结果——Game、Draw、GPU 各跑各的，最后在同步点对齐。所以任何单一统计页都只能回答“某条线程里发生了什么”，回答不了“这一帧被谁拖慢”。引擎因此先给分层视图（`stat unit` 的四个数），再给按系统的细分页（`stat game` 等），最后才用 trace 与插桩提供函数级证据；这套由粗到细的工具链，正是为“优化快的那条线程没有意义”这个前提设计的。

**版本差异**：UE5 首选 Unreal Insights（Trace 通道）做函数级分析，UE4 项目更多沿用 `stat startfile`/`stopfile` 生成文件再离线分析；`stat unit`、`stat game` 的读法两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 判断瓶颈线程 | `stat unit`，需要看趋势时配 `stat unitgraph` |
| 看游戏线程细分 | `stat game`，再按需 `stat anim` / `stat physics` / `stat ai` |
| 看渲染细分 | `stat scenerendering`、`stat rhi` |
| 抓函数级时间线 | Unreal Insights，抓 CPU 通道 |
| 老的抓文件流程 | `stat startfile` / `stat stopfile` |
| 给自己代码打点 | `TRACE_CPUPROFILER_EVENT_SCOPE` 或 `SCOPE_CYCLE_COUNTER` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`ProfilingDebugging/CpuProfilerTrace.h` 与 UHT 生成的头文件，埋点宏展开后才能编译，不能脱离工程独立编译。

```cpp
#include "ProfilingDebugging/CpuProfilerTrace.h"

DECLARE_CYCLE_STAT(TEXT("MySystem Tick"), STAT_MySystemTick, STATGROUP_Game);

void UMySystem::Tick()
{
    SCOPE_CYCLE_COUNTER(STAT_MySystemTick);        // 进 stat 统计，按组汇总
    TRACE_CPUPROFILER_EVENT_SCOPE(MySystem_Tick);  // 进 Insights 时间线

    for (AActor* A : CachedActors)
    {
        // 只处理缓存好的列表，不在循环里遍历世界
    }
}
```

**可观察验证**

```cpp
// 埋点是否进了时间线：Insights 里按这个名字过滤应能看到事件
TRACE_CPUPROFILER_EVENT_SCOPE(MySystem_Tick);

// 同一段同时挂进 stat 页面，两边耗时能互相印证
SCOPE_CYCLE_COUNTER(STAT_MySystemTick);
```

```plaintext
stat unit / stat unitgraph     # 先判断瓶颈在 Game、Draw 还是 GPU
stat game / stat anim / stat physics
stat scenerendering / stat rhi
```

- 同一段逻辑开关各跑一次：`stat unit` 的 Game 毫秒差应与 Insights 里 `MySystem_Tick` 的耗时吻合，不吻合说明埋点没包住全部工作。
- PIE 与 Standalone 各抓一次：绝对值不同属正常，趋势要一致；不一致说明编辑器开销或统计页本身在污染数据。

### ③ 面试怎么讲

**30 秒口述稿**

> 先用 stat unit 判断瓶颈在哪：Frame 是总时长，Game 是游戏线程，Draw 是渲染线程，GPU 是显卡；Frame 贴着谁，瓶颈就在谁那。确认是 Game 之后，用 stat game 看是 Tick、动画、物理还是 AI，再用 Unreal Insights 抓 CPU trace 看函数级耗时，也可以走 stat startfile、stopfile 的老流程。定位到系统后再决定优化手段，最后用同样的方法复测，避免凭感觉优化。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| stat unit 的几个数怎么看？ | Frame 是总时长，其余三个是分工时；Frame 接近哪一个，瓶颈就在哪；Frame 比它们都大说明有等待。 |
| 采样和插桩怎么选？ | 先采样定范围，再对可疑段落插桩确认；插桩只在需要时开，避免自身开销污染。 |
| GC 的耗时算在哪？ | 算在 Game 线程，会直接拉高 Game 和 Frame，看到周期性尖峰要先怀疑 GC。 |
| 怎么区分动画和物理？ | 分别看对应统计页，或在 Insights 里按事件名过滤；两者常常互相触发，要一起看。 |
| 编辑器里测的能用吗？ | 趋势可以参考，绝对值不可信；用 Standalone 或打包版复测。 |
| 抓 trace 会掉帧怎么办？ | 缩短抓取时长、只开必要通道，先小范围抓到证据再逐步扩大。 |

### ④ 真实坑

1. **只看 Frame 总数**：不知道瓶颈在谁身上，容易去优化已经很快的那条线程，白忙一场。
2. **在 PIE 里下结论**：编辑器开销把 Game 时间抬高，误判逻辑是瓶颈。
3. **开着 `stat scenerendering` 测帧率**：统计本身有开销，页越细越贵，测出来的数字不是真实运行数据。
4. **插桩埋太密**：每个函数一个 scope，开销和缓存扰动让 profile 结果本身失真。
5. **trace 通道全开**：文件巨大、帧率暴跌，抓到的行为已经不是线上行为。

### ⑤ 练习

**A 写**：在 Tick 里加一段可开关的"10000 次字符串拼接"，先用 `stat unit` 确认 Game 时间上涨，再加 `TRACE_CPUPROFILER_EVENT_SCOPE` 标记抓 Insights 确认事件出现且耗时吻合，最后改成预生成缓存验证回落。

**提示**：① 严格按 Frame → Game/Draw/GPU → 系统页 → 函数的顺序走，跳步得到的结论通常是在优化已经很快的那条线程；② 埋点先只包一层函数（`TRACE_CPUPROFILER_EVENT_SCOPE`），确认有收益再细化，别一次铺满；③ 复测固定同一台机器、同一画质，以打包版或 Standalone 为准，PIE 数据只当方向参考。

验收标准：关掉开关时 Game 回落；Insights 里能看到自定义事件名；能报出优化前后的毫秒差值。

**B 讲**：2 分钟口述"游戏跑到 45 帧，你怎么定位"。要求先分层（Frame/Game/Draw/GPU），再切片（系统/函数），最后给验证方案。

验收标准：能解释 Frame 与其它几个数的关系；能说出至少两种抓取方式及其代价；不看稿。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-54"></a>
## U54 · Q54 大资源怎么加载才不卡？

> 来源：题库 UE 第 54 题 ｜ 速背卡：[Q54](./速背.md#ue-q54) ｜ 耗时 18 min ｜ 难度 ★★★

**一句话**：大资源不卡的唯一原则是"主线程不等待"——用软引用把依赖延后，用异步加载兑现，再用 handle 和弱引用把生命周期管住。

**学完能做到**
- 写代码：把硬引用的类改成软引用，用 StreamableManager 异步加载并在回调里安全使用。
- 讲出来：说清同步加载贵在哪、handle 的所有权、以及软引用的 cook 风险。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 声明成 `TSoftObjectPtr` 就不会连带加载 | 软引用只存路径、不保证已加载；用前必须显式请求加载 |
| handle 用局部变量也无所谓 | handle 被释放会取消加载或卸载资源，回调可能永远不来，表现为“偶尔加载失败” |
| 纯软引用不会影响打包 | 没有任何硬引用、也没被资产管理器收录的资产可能不进包，运行期加载直接失败 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 硬引用（`UPROPERTY` 的对象指针）会随所属对象一起被加载 | 一个角色引用大材质，可能连带整条依赖链一起进来 |
| `TSoftObjectPtr` / `TSoftClassPtr` 只存路径 | 不保证已加载，使用前必须请求或检查 |
| StreamableManager 负责异步加载并返回 handle | handle 被释放会取消加载或卸载资源 |
| 异步加载完成回调发生在游戏线程 | 回调里访问的对象可能已经销毁，必须校验 |
| 关卡流送与资产异步是两个层次 | 前者管"世界里有什么"，后者管"某个资产何时就绪" |
| HLOD 与距离裁剪减少同时渲染和常驻 | 与流送配合才能把大世界压住 |

同步加载贵在三件事：IO、反序列化、依赖解析，这三件全在调用线程上做。所以放在 Tick 或 BeginPlay 里，就是一次肉眼可见的卡顿；放在加载界面里，用户有预期，反而可以接受。

异步加载把工作交给加载线程（是否独立线程取决于异步加载线程配置），回调再回到游戏线程。这意味着请求之后资源不会立刻可用：UI 要先显示占位，逻辑要能接受"暂时没有"，这是异步化真正的改造成本。

handle 是所有权凭证。`RequestAsyncLoad` 返回 `TSharedPtr<FStreamableHandle>`，你不持有它，它可能在加载中途被释放，回调不来，或者资源刚加载完就被卸掉。另一种做法是让管理器替你持有活动 handle，但要记得主动释放。

软引用还有个 cook 的坑：它只是字符串路径，打包时如果没有任何硬引用指向该资产、也没有被资产管理器规则收录，它可能不会被打进包。常见解法是通过 PrimaryAsset 配置或引用扫描保证被收集。

回调里的对象销毁问题，标准解法是弱引用加校验：用弱绑定创建委托，或在回调入口先判断对象是否仍然有效。

**设计动机**：硬引用让编译器替你保证“资源一定在”，代价是依赖链被整体算进包体与加载路径，一个角色引用大材质就可能连带整条链进来。软引用把“何时加载”从编译期推迟到运行期，换来按需加载与更小的常驻，代价是使用方必须自己处理三种状态：还没加载、已被卸载、没打进包。StreamableManager 与 handle 正是为第三种状态准备的——请求被变成一个带所有权的凭证，生命周期由持有者决定；回调回到游戏线程，是因为 UObject 的创建与绑定只能在游戏线程做。

**版本差异**：UE4.18 之后与 UE5 统一用 `TSoftObjectPtr`/`TSoftClassPtr`，更早的 `TAssetPtr` 已废弃；`FStreamableManager` 的请求与 handle 语义两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 声明"可能要用"的资产 | `TSoftObjectPtr<UTexture2D>` / `TSoftClassPtr<AActor>` |
| 运行时请求加载 | `UAssetManager::GetStreamableManager().RequestAsyncLoad(...)` |
| 保存加载凭证 | `TSharedPtr<FStreamableHandle> Handle;` 作为成员持有 |
| 加载完成后取资源 | `Handle->GetLoadedAsset()` 或软指针 `Get()` |
| 关卡按需加载 | Level Streaming / World Partition，配置流送单元 |
| 大世界远景 | HLOD + 距离裁剪，别让远景全精度常驻 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Engine/AssetManager.h`、`Engine/StreamableManager.h` 与 UHT 生成的头文件，不能脱离工程独立编译。

```cpp
void UMyLoader::LoadWeaponAsync(TSoftClassPtr<AActor> SoftClass)
{
    if (SoftClass.IsNull()) { return; }

    // handle 存成员：不持有的话，加载可能中途被取消
    LoadHandle = UAssetManager::GetStreamableManager().RequestAsyncLoad(
        SoftClass.ToSoftObjectPath(),
        FStreamableDelegate::CreateWeakLambda(this, [this, SoftClass]()
        {
            // 回调在游戏线程；弱绑定保证 this 已销毁时不会执行
            if (UClass* Loaded = SoftClass.Get())
            {
                OnWeaponLoaded(Loaded);
            }
            LoadHandle.Reset();   // 用完释放，不长期占着引用
        }));
}
```

**可观察验证**

```cpp
// handle 是否被持有：持有期间 IsValid 为真，Reset 之后为假
UE_LOG(LogTemp, Log, TEXT("handle=%d"), LoadHandle.IsValid() ? 1 : 0);

// 回调到达时资源应已就绪：软类指针能取到 UClass 才算成功
UE_LOG(LogTemp, Log, TEXT("class=%s"), SoftClass.Get() ? TEXT("ok") : TEXT("null"));
```

```plaintext
obj list class=UStaticMesh     # 换成目标资产的实际类，按键前不应出现
stat memory                    # 加载前后各看一次，增量应落在预期范围
```

- 第一次按键后看 `stat unit`：加载期间不应出现主线程尖峰；第二次按键命中缓存，耗时明显更低。
- 抓 Insights 的加载相关轨道：应看到请求、后台加载、回调三段，而不是一段同步阻塞。

### ③ 面试怎么讲

**30 秒口述稿**

> 大资源的原则是不让主线程等。声明依赖用 SoftObjectPtr 或 TSoftClassPtr，只存路径不加载；运行时用 StreamableManager 异步加载，并把返回的 handle 存住，不存住它可能中途被释放或者加载完就被卸掉；回调回到游戏线程后先校验对象还在，再做生成。关卡这一层用 Level Streaming 或 World Partition 按需加载，远景靠 HLOD 和距离裁剪。同步的 LoadObject 只放在加载界面，运行时的 Tick 和 BeginPlay 里绝不做同步加载。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| handle 为什么要持有？ | 它代表这次加载的所有权和这份引用；没人持有会被释放，加载被取消或资源被卸载。 |
| 异步加载期间对象被销毁怎么办？ | 用弱绑定或弱指针，回调入口先校验；加载可以继续，但结果丢弃，不访问已销毁对象。 |
| 软引用会不会导致资源没打进包？ | 会，纯软引用可能不被 cook；需要资产管理器规则或引用扫描兜底。 |
| 能不能提前预热？ | 可以，在上一关结束或加载界面发起请求，进场景时只等很短时间。 |
| 同步加载什么时候还能用？ | 只在加载界面、启动流程这类用户预期等待的地方。 |
| 怎么验证加载不卡？ | 看加载耗时的日志与 Insights 的加载相关轨道，同时用 `stat unit` 确认那几帧没有主线程尖峰。 |

### ④ 真实坑

1. **handle 是局部变量**：函数返回即销毁，加载被取消，回调永远不来，表现为"偶尔加载失败"。
2. **回调里直接解引用 Actor**：对象已销毁，崩溃或读到脏数据；必须先校验或用弱引用。
3. **把软引用当已加载**：直接解引用空指针崩溃；用前先 `Get()` 判空，或仅在加载界面同步加载。
4. **Tick 里同步 `LoadObject`**：主线程 IO 加反序列化，必然掉帧。
5. **切场景后回调访问旧 World**：World 也要弱引用，或在回调里确认仍是同一个 World。

### ⑤ 练习

**A 写**：把一个硬引用的武器类改成 `TSoftClassPtr`，进关卡后按键异步加载并生成；加载中显示"加载中"文本；加载完成后再按一次，验证命中缓存、几乎瞬间完成。

**提示**：① 把 handle 存成成员并在回调末尾 `Reset()`，让所有权显式可见；`CreateWeakLambda` 只保证回调安全，不代替 handle 的持有；② 软引用改造后必须打包验一次 cook 结果（启动日志或 `obj list` 确认目标资产在包里）；③ 回调里先校验对象与 World（弱指针或 `IsValid`）再做生成、UI 更新，别把“回调一定到”当前提。

验收标准：不按键时该资产未被加载（`obj list` 查不到）；按键后回调成功生成；第二次按键耗时明显更低。

**B 讲**：2 分钟口述"进关卡要加载 500MB 资源，怎么做到不卡"。必须覆盖软引用、异步、handle、流送、HLOD 五个点。

验收标准：能说清同步与异步差别发生在哪条线程；能回答"handle 不持有会怎样"；不看稿。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-55"></a>
## U55 · Q55 内存泄漏怎么排查？

> 来源：题库 UE 第 55 题 ｜ 速背卡：[Q55](./速背.md#ue-q55) ｜ 耗时 16 min ｜ 难度 ★★☆

**一句话**：所谓内存泄漏，在 UObject 世界是"还有一条你没注意的强引用链"，在原生世界是"分配和释放不配对"。

**学完能做到**
- 写代码：用 FGCObject 让非 UObject 的持有关系被 GC 看见，用 RAII 保证 Root 配对。
- 讲出来：说清三类常见 UObject 泄漏源，以及如何用引用链定位。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 委托绑定一定会延长对象生命周期 | `AddUObject` 是弱绑定，对象销毁后自动失效；延长生命的是 `AddSP`、捕获共享指针的 Lambda 与手工原生绑定 |
| UObject 泄漏是忘了 `delete` | UObject 不由你 delete，泄漏几乎都是还有一条没注意的强引用链 |
| 内存上涨就是泄漏 | 有上限、会淘汰的保留是缓存；判定标准是同一操作两次后基线是否回落 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UObject 不会被"忘记 delete"，只会被引用留着 | 排查重点是引用链，不是析构函数 |
| 根集里的对象永远存活 | `AddToRoot` 必须配对 `RemoveFromRoot` |
| 委托绑定有不同所有权语义 | `AddUObject` 是弱绑定不延长生命；`AddSP` 或捕获共享指针的 Lambda 会 |
| `TSharedPtr` 互相持有形成环 | 环里所有对象都不会释放，需要一端改成 `TWeakPtr` |
| 非 UObject 持有 UObject 又不报告引用 | 必须实现 `FGCObject::AddReferencedObjects`，否则既漏又可能悬垂 |
| Timer 或异步回调捕获强引用 | 只有清理 Timer / 取消请求才算真正断开 |

先分类。UObject 的"泄漏"九成是强引用还在：某个全局容器里塞了对象、某个 `UPROPERTY` 一直没清、某个 Subsystem 的缓存没有上限、`AddToRoot` 忘了取消。这类问题用 `obj refs` 从对象往上追引用者，通常两三跳就能看到源头。

原生内存是另一套：`new` / `malloc` / `FMemory::Malloc` 和第三方库句柄，看分配与释放是否配对，用平台工具或引擎的内存追踪定位分配点。这条线和 GC 无关，`obj list` 看不到。

一个容易被误解的点：委托不是天然泄漏源。`AddUObject` 绑定的是 UObject 的弱引用，对象销毁后委托自动失效，也不阻止 GC。真正延长生命周期的是 `AddSP`、手工管理的原生绑定，以及 Lambda 捕获了共享指针又没清理。

`FGCObject` 的作用是让非 UObject 的 C++ 对象告诉 GC：我引用着这些 UObject。不实现它，GC 不知道这条引用，轻则对象被回收后你还在用（悬垂），重则表现为"东西莫名没了"，而不是"内存涨了"。

最后是判定口径：泄漏是"该释放的没释放"，缓存是"有上限、会被淘汰的保留"。做同一操作两次看基线是否回落，是最便宜也最可靠的分辨方法。

**设计动机**：GC 只认反射引用图，它既不知道原生容器里塞了什么，也不知道 Lambda 捕获了谁。引擎因此给了两条补齐通道：`UPROPERTY`/`FGCObject` 让“我持有谁”进入引用图，`TStrongObjectPtr`/`AddToRoot` 让“我必须活着”被显式登记。两类声明都得由持有者自己维护：忘记声明，对象会被提前回收（悬垂）；忘记注销，对象永不回收（泄漏）。所以泄漏排查的本质，是找那条没被声明、或被遗忘了的边。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 查谁还引用着某个对象 | `obj refs name=XXX`，从直接引用者往上追 |
| 定位 Root 泄漏 | 搜索 `AddToRoot` / `RemoveFromRoot` 的配对，或检查对象是否在根集 |
| 查委托 | 检查 `AddSP` / `AddLambda` 的捕获，确认解绑是否执行 |
| 查循环引用 | 找双向 `TSharedPtr` 成员，一端改 `TWeakPtr` |
| 让原生类正确持有 UObject | 继承 `FGCObject`，实现引用收集与名称接口 |
| 临时保活 | 优先 `TStrongObjectPtr` 或作用域守卫，而不是裸 `AddToRoot` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`UObject/GCObject.h`、`Engine/Texture2D.h`，两个类型都是工程内定义，不能脱离工程独立编译。

```cpp
// 非 UObject 缓存持有 UObject：必须实现 FGCObject，GC 才知道这条引用
class FMyTextureCache : public FGCObject
{
public:
    virtual void AddReferencedObjects(FReferenceCollector& Collector) override
    {
        Collector.AddReferencedObject(CachedTexture);
    }
    virtual FString GetReferencerName() const override
    {
        return TEXT("FMyTextureCache");
    }

    UTexture2D* CachedTexture = nullptr;
};
```

```cpp
// 确实需要 Root 时，用作用域保证配对，别让早退路径漏掉 RemoveFromRoot
struct FRootScope
{
    explicit FRootScope(UObject* InObj) : Obj(InObj) { if (Obj) { Obj->AddToRoot(); } }
    ~FRootScope() { if (Obj) { Obj->RemoveFromRoot(); } }
    UObject* Obj = nullptr;
};
```

**可观察验证**

```cpp
// Root 是否配对：Root 期间为真，RemoveFromRoot 之后应变假
UE_LOG(LogTemp, Log, TEXT("rooted=%d"), Obj->IsRooted() ? 1 : 0);
```

```plaintext
obj list class=UMyTempData     # 类计数只增不减就是泄漏信号
obj refs name=BP_MyActor_C_0   # 追到直接引用者，判断是容器、委托还是根集
memreport -full                # 修复前后各一份，做差看基线是否回落
```

- 同一操作做两次（进图、退出、再进图）：修复前类计数只增不减，修复后回到基线，这是“泄漏 vs 缓存”的判定动作。
- 看 `obj refs` 的直接引用者类型：`UPROPERTY` 容器、委托槽位、根集，分别对应清容器、解绑或改弱引用、补 `RemoveFromRoot` 三种修法。

### ③ 面试怎么讲

**30 秒口述稿**

> 我先分两类看。UObject 的泄漏基本都是有强引用链：全局容器里塞了对象、UPROPERTY 没清、缓存没上限、AddToRoot 没 RemoveFromRoot，或者委托和 Timer 用共享指针把对象吊住了。排查用 obj refs 追引用链，memreport 对比两次快照，看哪一类只增不减。非 UObject 就另一套，看分配和释放是否配对。判断是泄漏还是缓存，就看同一操作做两次之后基线回不回落。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 怎么确认是 UObject 泄漏？ | 做两次同样操作，`obj list` 看类计数是否只增不减，再 `obj refs` 追到强引用者，改掉持有方式后复测。 |
| AddToRoot 什么时候必须用？ | 对象没有其他强引用但又必须活着，比如后台线程或引擎回调用到的对象；现代写法优先 `TStrongObjectPtr`。 |
| AddUObject 会泄漏吗？ | 不会延长生命周期，对象死了绑定自动失效；如果对象死后还依赖它执行，那是逻辑问题不是泄漏。 |
| TSharedPtr 环怎么发现？ | 看双向成员、加生命周期日志确认析构是否发生，然后用弱引用打断其中一条边。 |
| 非 UObject 的泄漏怎么看？ | 用平台内存工具或引擎追踪看分配点，核对配对的释放；对象级工具看不到这类问题。 |

### ④ 真实坑

1. **`AddToRoot` 后走早退或异常路径**：`RemoveFromRoot` 没执行，对象永久存活；用作用域守卫收口。
2. **全局容器放裸指针**：静态 `TArray<UMyObj*>` 里塞对象，GC 完全不知道，应改成 `UPROPERTY` 成员或接 `FGCObject`。
3. **长期委托里 Lambda 捕获 `this`**：UObject 销毁后委托仍被调用，直接崩溃；用弱绑定或弱指针。
4. **`TSharedPtr` 双向持有**：两个对象互相引用，谁都不析构，内存缓慢上涨；一端改 `TWeakPtr`。
5. **Timer 捕获共享指针又忘了清理**：定时器持有引用，对象一直活着；销毁时把 Timer 清掉。

### ⑤ 练习

**A 写**：故意制造两类问题：一个 UObject `AddToRoot` 不取消，一个 Lambda 捕获 `this` 绑到长期委托上。用 `obj list` / `obj refs` 定位，再分别用作用域守卫和弱绑定修复，前后各打一次快照。

**提示**：① 先复现“两次操作后基线不回落”，没有这个证据就分不清泄漏与缓存；② 每修一处只改一个变量再复测，多处同改会让你无法确认是哪条引用链断了；③ `AddToRoot` 用作用域守卫或 `TStrongObjectPtr` 替代裸调用，长期委托改弱绑定，Timer 在销毁路径里显式清理。

验收标准：修复前能复现"操作结束后对象数不回落"；修复后基线回落；能说出每个问题在 `obj refs` 输出里的样子。

**B 讲**：2 分钟口述"内存缓慢上涨，怎么区分泄漏和缓存、怎么定位"。必须覆盖 UObject 与原生两条线、两次对比法、引用链读法。

验收标准：能说出三类常见 UObject 泄漏源；能解释 `FGCObject` 解决什么问题；不看稿。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ⑨：工程与构建](#ch14)


<a id="ch14"></a>
# 第 14 章 · UE ⑨：工程与构建

> 对应速背 UE 主题 09（Q56–Q62），完整答题卡见 [速背 UE 09](./速背.md#ue-t09)。
> 上一篇：[UE ⑧：性能与内存](#ch13) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-56"></a>
## U56 · Q56 UE 的模块怎么划分？

> 来源：题库 UE 第 56 题 ｜ 速背卡：[Q56](./速背.md#ue-q56) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：模块是 UE 的编译与依赖边界——一个模块一个 `Build.cs`、一组 `Public/Private` 源文件，划分模块就是在划“谁能看见谁、改一处要连带重编多少”。

**学完能做到**
- 写代码：给工程新建一个 Runtime 模块，写对 `Build.cs` 的公共/私有依赖，并让上层模块正常 include。
- 讲出来：说清 `Public/Private` 的可见性、为什么禁止循环依赖、Runtime 与 Editor 为什么必须分开。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 模块就是文件夹 | 模块由 `Build.cs` 定义，决定编译分组与依赖；目录只是摆放位置 |
| 依赖写 Public 还是 Private 只是风格问题 | Public 会传染给下游、扩大重编范围；只在本模块 cpp 用到的依赖必须放 Private |
| 模块切得越多越解耦 | 模块是 DLL / 编译边界，切太细跨边界调用与链接成本上升，收益可能为负 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 一个模块对应一个 `Build.cs`，是编译和链接的最小分组 | 改一个模块的 `Private` 实现只重编该模块，不会牵动整棵依赖树 |
| `Public/` 暴露对外头文件，`Private/` 放实现和内部头文件 | 公共头里出现内部类型，等于把私有实现变成事实 API，改一次全项目重编 |
| 依赖必须用 `PublicDependencyModuleNames` / `PrivateDependencyModuleNames` 显式声明 | 只在本模块 cpp 用到的依赖写进 Private，就不会传染给下游，这是控制编译传播的开关 |
| 模块依赖图必须是 DAG，不能成环 | 循环依赖 UBT 直接拒绝，只能把公共部分下沉成第三个模块来破环 |
| 模块带类型和加载阶段（Runtime / Editor / Developer 等，`LoadingPhase`） | Runtime 依赖 Editor，编辑器里一切正常，打包时 Editor 模块不存在，直接失败 |

先想清楚“边界为谁而设”。模块的第一目的是编译时间：源码工程里 UBT 可以并行编译多个模块，模块越独立、并行度越高；第二目的是依赖治理：`Public/Private` 把“对外契约”和“内部实现”物理分开，下游只能看见你愿意给的那部分；第三目的是可选性：编辑器、平台、调试模块可以只在对应 Target 里出现，不进入最终包体。

粒度的权衡是这道题真正的考点。切得太细，每个模块都是一次 DLL 边界，跨模块调用有间接成本，`Build.cs` 和维护成本也上来了；切得太粗，一个模块几百个文件，任何公共头改动都是大面积重编，内部耦合也没人拦得住。经验值是“按变更频率和依赖方向切”，而不是按文件夹切。还要记住模块和反射的关系：UHT 按模块扫描头文件，`.generated.h` 也在模块内生成，类型放在哪个模块，决定了它的反射代码落在哪个 DLL 里。

**设计动机**：模块机制把“编译边界”和“依赖方向”做成可被工具检查的声明：`Build.cs` 显式列出依赖，UBT 才能并行编译、拒绝成环、按 Target 裁剪编辑器代码；`Public/Private` 把对外契约和内部实现物理隔开，下游只能看见你愿意给的那部分。没有这层边界，所有代码同属一个编译单元，改一个头就大面积重编，编辑器依赖也没人拦得住。所以划分模块不是在整理文件夹，而是在给编译器和链接器划可执行的规则。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 新增一个功能层 | 建模块目录，含 `Public/`、`Private/`、`Xxx.Build.cs` |
| 下游要用本模块的类型 | 模块名加进 `PublicDependencyModuleNames`，头文件走 `Public/` 路径 |
| 只在本模块 cpp 用 | 加进 `PrivateDependencyModuleNames` |
| 编辑器专用工具 | 模块类型设为 `Editor`，只被 Editor Target 引用 |
| 用引擎基础能力 | 至少依赖 `Core`、`CoreUObject`、`Engine` |
| 模块里要写 `UCLASS` | 该模块会被 UHT 扫描，头文件末尾 include 对应的 `.generated.h` |

**示例说明**：以下为模块内片段——`MyGame.Build.cs` 是 UBT 的 C# 构建脚本，`MyHealthComponent.h` 依赖 `CoreMinimal.h`、`Components/ActorComponent.h` 与 UHT 生成的 `MyHealthComponent.generated.h`，都不能脱离工程独立编译。

```plaintext
// MyGame.Build.cs（模块根目录）
public class MyGame : ModuleRules
{
    public MyGame(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        // 对外接口需要的依赖，会传染给下游
        PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine" });
        // 只在本模块 cpp 用，不传染给下游
        PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });
    }
}
```

```cpp
// MyGame/Public/MyHealthComponent.h —— 对外头文件只暴露稳定契约
#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "MyHealthComponent.generated.h"      // 必须是最后一个 include

UCLASS(ClassGroup = (MyGame), meta = (BlueprintSpawnableComponent))
class MYGAME_API UMyHealthComponent : public UActorComponent
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Health")
    float MaxHealth = 100.f;
};
```

**可观察验证**

```plaintext
Build.bat MyGameEditor Win64 Development -WaitMutex
# UBT 日志按模块列出编译动作：MyCombat 单独成段，不会被并进 MyGame
```

```plaintext
dir Intermediate\Build\Win64\x64\MyGameEditor\Development\MyCombat\*.obj
```

- 只改 `MyCombat/Private` 里的 cpp 再构建，日志里只有 `MyCombat` 的编译动作；改 `MyCombat/Public` 的头，重编范围明显变大，这就是模块与 `Public/Private` 划出的边界。
- 把 `MyGame` 对 `MyCombat` 的依赖从 Public 改成 Private，下游模块立刻编译失败，说明可见性真的生效。

### ③ 面试怎么讲

**30 秒口述稿**

> 模块是编译和依赖的边界，一个模块一个 `Build.cs`，分 `Public` 和 `Private`，对外的头文件放 `Public`。划分我一般按职责来：运行时核心、业务功能、编辑器工具、平台层，依赖只写真正需要的，能放 Private 就不放 Public，这样依赖不会往下游传染。模块之间禁止循环，破了环就说明有公共部分该下沉成独立模块。Runtime 和 Editor 一定要分开，因为打包时 Editor 模块不存在，运行时模块一旦依赖它，编辑器里没事、打包就崩。粒度上太细管理麻烦、跨 DLL 调用也多，太粗编译慢、耦合重。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 循环依赖怎么破？ | 把两边共用的类型抽到第三个更低层的模块；或者一方只依赖接口/前置声明，把反向调用改成委托或事件。 |
| Runtime 和 Editor 为什么要分开？ | 打包产物里没有 Editor 模块，Runtime 依赖 Editor 会在打包链接时失败；分开后编辑器工具也不进入玩家包体。 |
| `Public` 和 `Private` 到底影响什么？ | 前者是下游能 include 的路径和继承的依赖，后者只在本模块可见；放错位置不会立刻报错，但会把内部实现变成事实 API。 |
| 模块和 DLL 是一回事吗？ | 不完全是。模块是 UBT 的编译分组，是否编成独立 DLL 取决于 Target 的链接方式；静态链接时多个模块在同一个二进制里。 |

### ④ 真实坑

1. **Runtime 模块依赖 Editor 模块**：编辑器里编译运行都正常，打包时报模块不存在或链接失败。正确做法是把编辑器相关代码拆到独立 `Editor` 模块，运行时侧只留接口或委托回调。
2. **Public 头文件 include 了 Private 头**：本模块能编，下游 include 时找不到文件。规则是 `Public/` 里的头只能 include 其他模块的 `Public/` 或自己的 `Public/`。
3. **依赖漏写，靠 Unity Build 蒙混**：本机把多个 cpp 合成一个翻译单元，别人 include 过的头顺手可见；一关 Unity 或换 CI 配置就报未定义符号。谁用谁声明，别赌编译顺序。
4. **模块切得过细**：十几个小模块互相调用，跨 DLL 边界多、全量链接更慢，`Build.cs` 维护成本高于收益；按变更频率合并。

### ⑤ 练习

**A 写**：在现有工程里新建一个 Runtime 模块 `MyCombat`，只放一个 `UMyDamageType`（`UObject` 派生，带一个 `UPROPERTY` 字段），让 `MyGame` 模块通过 `PublicDependencyModuleNames` 使用它，并且 `MyGame` 的头文件里只前置声明、cpp 里才 include。

**提示**：① 新建模块后先重新生成工程文件，`Build.cs` 才会进入 UBT 的依赖图，否则 IDE 里连新文件都看不到；② `UMyDamageType` 的头文件末尾必须 include `MyDamageType.generated.h`，且它是最后一个 include；③ 验证可见性要在下游模块上编，`MyGame` 自己 include 自己的依赖不会报错。

验收标准：`MyCombat` 单独编译通过且生成 `.generated.h`；`MyGame` 在关闭 Unity Build 的配置下也能链接通过；把 `MyGame` 的依赖从 Public 改到 Private 后，下游模块立即报错，说明可见性生效。

**B 讲**：2 分钟口述“如果让你把一个单体 Game 模块拆成四个模块，你怎么切、先后顺序是什么”。

验收标准：能说出依赖方向（底层→业务→组装）和至少一条“先拆什么”的判断依据；能主动提到循环依赖的破法和 Runtime/Editor 分离；能给出粒度权衡的一句结论。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-57"></a>
## U57 · Q57 什么是 IWYU？为什么能加快编译？

> 来源：题库 UE 第 57 题 ｜ 速背卡：[Q57](./速背.md#ue-q57) ｜ 耗时 14 min ｜ 难度 ★★☆

**一句话**：IWYU 是“每个文件只 include 自己直接用到的东西”，把编译成本从“改一个头全项目重编”压回“改哪个文件编哪个”。

**学完能做到**
- 写代码：把一个靠聚合头过日子的类改成前置声明 + cpp 精确 include，并保持可编译。
- 讲出来：说清 include 的文本展开模型、前置声明什么时候不够、IWYU 与 PCH 为什么不冲突。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 前置声明能替代所有 include | 继承、按值成员、模板实参、`sizeof`、调用成员函数都必须完整定义 |
| 用了 PCH 就不必写全 include | PCH 只预编译公共前缀，不替代源文件写全依赖；换构建方式或调整 PCH 就立刻缺 include |
| 删掉 `Engine.h` 就等于做了 IWYU | 聚合头只是最大的一处；真正的要求是每个文件对自己直接用到的类型负责 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| `#include` 是文本展开，头文件被 N 个翻译单元包含就解析 N 次 | 一个被 500 个 cpp 包含的聚合头，改一行就是 500 次重编 |
| 前置声明只引入名字，不引入定义 | 指针/引用参数和成员可以只前置声明，依赖从“定义”降为“名字” |
| 继承、按值成员、模板实参、`sizeof`、调用成员函数都需要完整定义 | 这些场合前置声明不够，硬省就是编译错误 |
| `Xxx.generated.h` 必须是所在头文件的最后一个 include | UHT 生成的代码依赖前面所有声明，顺序错会报一堆看不懂的错 |
| PCH 只是“预编译的公共前缀”，不替代源文件写全依赖 | 依赖 PCH 带头的文件，换构建方式或调整 PCH 就立刻缺 include |

理解 include 的传播模型，这道题就通了。编译时间大致等于“所有翻译单元展开的头文件总量”，而 `Engine.h` 这类聚合头把上千个类型塞进每个 cpp。注意 include guard 只保证同一个翻译单元内不重复展开，跨翻译单元的成本一分都省不掉。所以“少 include”不是代码洁癖，是直接乘在编译时间上的系数。

前置声明的价值在于切断“定义依赖”。头文件里写 `class UStaticMeshComponent;` 再声明 `TObjectPtr<UStaticMeshComponent> Mesh;`，编译器只需要知道这是个类型名；真正需要布局和成员的地方（构造函数里 `CreateDefaultSubobject`、`BeginPlay` 里调它的方法）都在 cpp，那里再 include。这样改组件头不会重编你的头，也就不会重编所有包含你头的文件。边界也要说清楚：UHT 对反射类型有额外要求，多数 `UObject*` 指针属性前置声明即可，值类型成员、需要展开的容器、以及 UHT 报 `Unrecognized type` 的情况，就得老老实实 include 完整定义。判断标准不是“能不能编过”，而是“UHT 和编译器都认”。

**设计动机**：`#include` 是文本展开，编译成本直接乘在每个包含者身上，引擎不可能靠“少写代码”省这笔钱，只能约束每个文件的自包含性。IWYU 因此成了工程规范：头文件只暴露名字（前置声明），定义留给 cpp，聚合头只留在真正需要的地方——这样“改一个头”才会退化成“改一个 cpp”，日常增量编译才成立。PCH 和 Unity 是在同一笔成本上做预编译与合并，IWYU 是让成本本身变小，两者的层次不同。

**版本差异**：UE5 新建工程默认 IWYU 头顺序（`IncludeOrderVersion = EngineIncludeOrderVersion.Latest`），UE4 老工程多为 Legacy 顺序；两套顺序混用时，升版会一次性暴露大量缺失 include。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 头文件里只出现指针/引用 | `class UMyType;` / `struct FMyData;` |
| 只在一个 cpp 用到 | 把 include 从 `.h` 移到 `.cpp` |
| 要继承或做按值成员 | include 完整定义，不能省 |
| 头文件里写内联函数并调用成员 | 该成员类型必须完整定义 |
| 有 `UCLASS`/`USTRUCT` | 基础最小 include + `Xxx.generated.h` 放最后 |
| 排查某个头为什么慢 | 看它 include 了谁，优先删聚合头和编辑器头 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `MyActor.generated.h`；cpp 里 `CreateDefaultSubobject` 需要组件完整定义，不能脱离工程独立编译。

```cpp
// MyActor.h —— 只前置声明，不拖组件和资源类的完整定义
#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MyActor.generated.h"

class UStaticMeshComponent;     // 指针成员：前置声明足够
class UMyDataAsset;             // 只在 cpp 里读字段

UCLASS()
class MYGAME_API AMyActor : public AActor
{
    GENERATED_BODY()
public:
    AMyActor();
    UPROPERTY(VisibleAnywhere)
    TObjectPtr<UStaticMeshComponent> Mesh;
    UPROPERTY(EditAnywhere)
    TObjectPtr<UMyDataAsset> Data;
};
```

```cpp
// MyActor.cpp —— 谁用谁 include，不靠别人替自己带
#include "MyActor.h"
#include "Components/StaticMeshComponent.h"
#include "MyDataAsset.h"

AMyActor::AMyActor()
{
    // 这里需要 UStaticMeshComponent 的完整定义
    Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
}
```

**可观察验证**

```plaintext
# 只编一个 cpp：它必须自己把依赖写全，不能靠 Unity / PCH 带
Build.bat MyGameEditor Win64 Development -WaitMutex -SingleFile=MyActor.cpp
```

- 改造前后各改一次 `MyActor.h` 再构建，UBT 日志里的编译动作数量会明显下降，这就是“改一个头”退化成“改一个 cpp”的直接证据。
- 把 `Components/StaticMeshComponent.h` 从 cpp 挪回头文件再对比重编范围：越靠上游的头，改动代价越大。

### ③ 面试怎么讲

**30 秒口述稿**

> IWYU 是每个文件只 include 自己直接用到的东西，不靠 `Engine.h` 这种大杂烩。核心原因是 include 是文本展开：一个头被多少翻译单元包含，就要解析多少遍，改它就要重编多少遍。做法是三条：头文件里能前置声明就前置声明，只在 cpp 里 include 完整定义；必须 include 的按自己的依赖写全，别指望别人带；生成的 `generated.h` 永远放最后。好处是改一个头不会引发全项目重编，编译时间和耦合一起降。PCH 和它不冲突，PCH 是加速公共前缀，源文件仍然要写全自己的依赖。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 前置声明什么时候不够？ | 继承基类、按值成员、模板实参、`sizeof`、调用成员函数、以及 UHT 解析不到类型时，都必须完整定义。 |
| IWYU 和 PCH 冲突吗？ | 不冲突。PCH 预编译公共前缀减少重复解析，IWYU 要求源文件写全依赖，两者正交；只靠 PCH 会把正确性绑在 PCH 内容上。 |
| 为什么 `generated.h` 必须最后？ | 生成代码引用前面声明的类、枚举、委托，放前面会导致这些名字还不存在，报错常常指向 generated.h 内部，很难读。 |
| 一刀切删 `Engine.h` 行不行？ | 不行。会一次性炸出几百个错误，真错误被淹没；按文件迁移，一次修一类，先补最小 include 再删聚合头。 |

### ④ 真实坑

1. **前置声明后按值使用**：`class FMyStruct;` 然后写 `FMyStruct Value;` 成员，编译报 incomplete type。按值成员必须 include 定义。
2. **`TArray<FMyStruct>` 成员只前置声明**：容器需要完整类型来计算尺寸和析构，别指望前置声明；在头里 include 或改成指针/`TObjectPtr`。
3. **本机能编、CI 挂**：`.h` 里用了 `FVector` 却没 include `Math/Vector.h`，本机 Unity Build 把别的 cpp 的头串进来了。解决是补最小 include，而不是去关 Unity。
4. **改完 include 顺序打乱 `generated.h`**：整理时把它挪到中间，报 `GENERATED_BODY` 相关错误；任何整理后都确认它仍是最后一个。

### ⑤ 练习

**A 写**：找一个 include 了 `Engine.h`（或类似聚合头）的头文件，改造成“前置声明 + cpp 精确 include”，要求头文件里不再出现聚合头，且 `generated.h` 保持在最后。

**提示**：① 先在 cpp 里补齐 include，再删头文件里的聚合头，顺序反过来会先把真正的缺失依赖埋进一屏错误里；② UHT 需要的类型（`UCLASS`/`USTRUCT` 成员、容器元素）不能只前置声明，按报错补最小 include；③ 用 `-SingleFile` 只编改动的 cpp，能快速确认它没有靠 Unity 或别人替自己带 include。

验收标准：该模块单独编译通过；只改这个头文件时，重编的翻译单元数量明显少于改造前（可用构建日志对比）；把头文件单独预处理或做一次干净编译，不出现缺 include 的报错。

**B 讲**：2 分钟口述“include 是怎么变成编译时间的，以及 IWYU 的三条落地规则”。

验收标准：能讲清文本展开和翻译单元的关系；三条规则（前置声明、cpp include、generated.h 最后）各配一个反例；能回答“为什么不直接删聚合头”。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-58"></a>
## U58 · Q58 编译时间太长怎么优化？

> 来源：题库 UE 第 58 题 ｜ 速背卡：[Q58](./速背.md#ue-q58) ｜ 耗时 16 min ｜ 难度 ★★★

**一句话**：编译时间约等于“所有翻译单元展开的头文件量 × 模板实例化量 ÷ 并行度”，优化就是先测量，再分别压分子、提分母。

**学完能做到**
- 写代码：给一个 Target 配置 Unity Build / 共享 PCH，并把一个公共头里的实现搬到 cpp。
- 讲出来：说清 IWYU、拆模块、Unity Build、Live Coding 各自省的是哪一段成本，以及副作用。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 编译慢就先把 Unity Build 打开 | Unity 降并行度、掩盖缺失 include；先测量，再决定压解析、模板、重复编译还是提并行度 |
| PCH 加得越大越快 | 共享 PCH 越大，它自身重建越慢，增量编译会被它拖住 |
| Live Coding 能替代完整编译 | 不能改反射结构与类成员布局，这类改动仍要完整编译并重启编辑器 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 改头文件触发重编的范围由包含关系决定 | 越底层的公共头，改动代价越大，必须尽量稳定 |
| Unity Build 把多个 cpp 合成一个翻译单元 | 总 include 展开次数下降，但并行度下降、单文件变大 |
| PCH 预编译公共前缀，减少重复解析 | 共享 PCH 越大，增量编译时重建它的代价也越高 |
| 模板定义在头文件里，每个使用方各实例化一份 | 重模板代码堆在公共头是编译时间的隐形杀手 |
| 模块边界决定并行粒度 | 模块太少只能串行编，模块太多链接和 DLL 边界成本上升 |

优化的第一步永远是测量，而不是背技巧。UBT 提供 Timing 类统计（参数名随版本略有差异，以 `-help` 为准），配合构建日志能看到最慢的模块和最贵的头文件。没有数据就动手，最常见的结局是把 PCH 调大、把 Unity 打开，然后发现全量编译只快了一点、增量反而更慢。

从成本结构拆，编译时间由四块组成：头文件解析（IWYU 管这块）、模板实例化（减少公共头里的模板、把实现移到 cpp 管这块）、重复编译（PCH 和 Unity Build 管这块）、并行度（模块拆分和分布式编译管这块）。四块要分开开药，因为它们互相有反作用：Unity Build 提了重复编译的收益，却降了并行度；PCH 提了解析收益，却让“改 PCH 影响面”变大。

另外要区分全量编译和日常增量。日常开发里最痛的是“改一个头等十分钟”，这靠 IWYU 和减少公共头依赖；全量构建（CI、打包）靠 Unity Build、PCH、模块并行。回答时先问一句“你说的是全量还是增量”，会显得真的做过。

**设计动机**：编译时间是日常开发里持续付费的成本，而且分布极不均匀：少数底层公共头和重模板代码承担了大部分重复解析与实例化。所以优化必须先测量再开药，UBT 的 timing 统计把“感觉慢”变成“哪个模块、哪类成本慢”，Unity Build、共享 PCH、模块拆分、Live Coding 才能各自对应到重复编译、解析、并行度和小改验证这几块成本上，而不是互相抵消。

**版本差异**：Live Coding 自 UE4.22 起以实验特性引入、在 UE5 中成为日常默认的热重载路径；UE4 早期版本没有它，小改只能重启编辑器或借助第三方 Live++ 集成。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 日常增量慢 | IWYU + 前置声明，把实现从公共头移到 cpp |
| 全量构建慢 | 打开 Unity Build / 共享 PCH，确认并行度 |
| 小改逻辑想秒级生效 | Live Coding（不改反射结构的前提下） |
| 找到最慢的模块 | UBT Timing 统计 + 构建日志排序 |
| 编辑器依赖泄漏到运行时 | 检查公共头是否 include 了 Editor 模块 |
| 模板导致的慢 | 把模板实现收敛到少数 cpp，或用显式实例化 |

**示例说明**：以下为模块内片段——`MyGame.Target.cs` 是 UBT 的 C# 构建脚本，改动后需要重新生成工程文件；头文件与 cpp 片段依赖工程 include 路径，不能脱离工程独立编译。

```plaintext
// MyGame.Target.cs —— 构建策略，改完需要重新生成工程文件
public class MyGameTarget : TargetRules
{
    public MyGameTarget(TargetInfo Target) : base(Target)
    {
        Type = TargetType.Game;
        DefaultBuildSettings = BuildSettingsVersion.Latest;
        IncludeOrderVersion = EngineIncludeOrderVersion.Latest;   // 跟随引擎的 IWYU 头顺序

        bUseUnityBuild = true;          // 合并 cpp，减少重复展开
        bUseAdaptiveUnityBuild = true;  // 最近改过的文件移出 Unity，兼顾增量
        bUseSharedPCHs = true;          // 共享预编译头
    }
}
```

```cpp
// 反例：实现放在公共头里，每个包含者都要编译一遍
// MyMath.h
inline float HeavySolve(const TArray<FVector>& Points) { /* 几十行 */ }

// 正例：声明在头，实现在 cpp，只有一处编译
// MyMath.h
float HeavySolve(const TArray<FVector>& Points);

// MyMath.cpp
float HeavySolve(const TArray<FVector>& Points) { /* 几十行 */ }
```

**可观察验证**

```plaintext
Build.bat MyGameEditor Win64 Development -WaitMutex -Timing
# 日志末尾按模块给出耗时汇总：先看最慢的几个模块，再决定动哪一刀
```

- 改造前后各做一次干净全量构建，记录总耗时与模块级 timing；没有这两组数据就不要声称“变快了”。
- 关掉 Unity 再编一次：若失败，说明之前的加速是靠 Unity 串进来的 include 蒙的，而不是依赖写对了。

### ③ 面试怎么讲

**30 秒口述稿**

> 编译时间我分全量和增量看。增量最痛的是改头重编，第一杠杆是 IWYU：前置声明、把 include 从 h 挪到 cpp、去掉 `Engine.h` 这种聚合头。第二是减少模板实例化，重模板别堆在公共头里，实现尽量放 cpp。全量构建靠 Unity Build 合并 cpp、共享 PCH、拆模块提高并行度。日常小改用 Live Coding 热重载，但改反射结构不行。公共头绝对不能 include 编辑器模块，不然打包直接挂。真慢了先用 UBT 的 Timing 统计找最慢的模块，别凭感觉调。Unity Build 的副作用是并行度下降、单文件变大、还会掩盖缺失的 include。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| Unity Build 有什么副作用？ | 多个 cpp 合成一个翻译单元：并行度下降、内存占用高、静态符号可能重名冲突，还会掩盖“靠别人 include”的缺失依赖，非 Unity 构建才炸。 |
| 头文件里放实现为什么慢？ | 每个包含它的翻译单元都要编译一遍，代码生成也各来一份；改一次实现，所有包含者重编。 |
| PCH 开越大越好吗？ | 不是。共享 PCH 越大，它自身重建越慢，增量编译会被它拖住；PCH 只该放真正稳定、普遍需要的头。 |
| Live Coding 有什么限制？ | 不能改反射结构（增删 UCLASS/UPROPERTY/UFUNCTION 的布局变化），不能改类成员布局；这类改动仍要完整编译并重启编辑器。 |
| 拆模块一定更快吗？ | 不一定。拆到能并行编才快；拆得过细，DLL 边界和链接成本会吃掉收益。 |

### ④ 真实坑

1. **只开 Unity Build 不修 include**：本机很快，CI 一关 Unity 或改一个文件就暴露一堆未定义符号。Unity 是加速手段，不是依赖管理手段。
2. **公共头 include 编辑器头**：编辑器 Target 下正常，打包时 Editor 模块不存在直接失败；顺带把所有下游都拖上编辑器依赖。
3. **把大段实现塞进头文件**：以为 `inline` 就不会有成本，实际每个翻译单元都编一遍，还各自生成代码，包体也涨。
4. **长期用 Live Coding 掩盖结构改动**：加字段、加反射宏必须完整编译重启，硬用热重载会出现行为与源码不一致，排查成本极高。
5. **不测量就调 PCH/Unity**：调完觉得“好像快了”，实际全量没变、增量更慢；先拿到模块级耗时再动手。

### ⑤ 练习

**A 写**：选一个包含聚合头的公共头文件，把其中一段内联实现移到 cpp，并把不必要的 include 改成前置声明；然后在 Target 里确认 Unity 与共享 PCH 的配置，记录改动前后一次干净编译的耗时。

**提示**：① 计时前先做一次干净全量构建当基线，只比增量会得出误导结论；② 一次只改一个变量（先 IWYU，再 Unity / PCH），否则归因不到具体成本项；③ 最后关掉 Unity 编一次做回归，别让加速效果建立在被掩盖的缺失依赖上。

验收标准：改动后该模块单独编译通过；干净全量编译耗时下降或有明确的日志数据支撑；把 Unity 关掉再编一次，仍然通过（证明没有隐藏的缺失依赖）。

**B 讲**：2 分钟口述“一次真实的编译时间优化，你从测量到落地的完整过程”。

验收标准：能说出测量手段和看到的数据；优化措施能对应到成本结构（解析/模板/重复/并行）；能主动交代一项副作用和回滚方案。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-59"></a>
## U59 · Q59 常见编译错误怎么定位？

> 来源：题库 UE 第 59 题 ｜ 速背卡：[Q59](./速背.md#ue-q59) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：UE 的构建分 UHT 生成、编译、链接三个阶段，先判断错误属于哪一段，再按该段的固定顺序排查，比逐条背错误码有效。

**学完能做到**
- 写代码：写出一个顺序完全正确的反射头文件骨架，并说明每一行的作用。
- 讲出来：说清 `LNK2019` 的三类根因，以及为什么“只看第一条错误”是最高效的策略。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 报错逐条修才彻底 | 第一条错误会制造大量连锁，后续多为症状；修第一条、重编、再读新的第一条 |
| 链接错误也能按行号定位 | `LNK2019` 只给符号名，要从模块依赖、是否有实现、是否缺 `_API` 三处查 |
| 清 `Intermediate` / `Binaries` 算修复手段 | 它只是验证生成是否同步；根因（依赖缺失、UHT 没跑、模块没注册）还在 |

### ① 本质

| 阶段 | 典型现象 | 根因 |
| --- | --- | --- |
| UHT | `Unrecognized type 'XXX'` | 类型没 include，或用了反射不支持的类型 |
| UHT | `Expected a '{'` / 宏未闭合 | `UPROPERTY`/`UFUNCTION` 参数拼错 |
| UHT | `generated.h` 相关报错 | 不是最后一个 include，或文件名与生成名不匹配 |
| 编译 | 找不到 `Xxx.generated.h` | UHT 没跑、模块未注册、文件名改了没同步 |
| 编译 | `GENERATED_BODY` 报错 | 不在类体首行，或对应头文件没 include |
| 链接 | `LNK2019` / `undefined reference` | 缺模块依赖、只有声明没实现、跨模块缺 API 宏 |
| 链接 | 重复定义 `LNK2005` | 头文件里定义了非 `inline` 的全局变量或函数 |

三个阶段的错误有明确的“指纹”。UHT 错误带 `UnrealHeaderTool` 前缀、定位在头文件的宏附近，没有编译器错误码；编译错误带 `C####`（MSVC）或 `error:`（Clang），指向具体文件和行；链接错误只有符号名，没有行号，指向的是“谁引用了谁”。先认指纹，再谈修法。

“只看第一条错误”不是偷懒，是必要策略。UHT 的第一条错误往往会让后续几十条成为连锁反应；缺 `generated.h` 会让 `GENERATED_BODY` 展开失败，接着所有引用该类的代码全部报错。逐条修等于在修症状。正确做法是修第一条、重新构建、再读新的第一条。还有一个常被忽略的因素：Unity Build 会把多个 cpp 合成一个文件，报错行号指向合并后的临时文件，这时看报错上下文里的源文件注释才能找到真实文件；定位不到就临时关掉 Unity 编一次。

**设计动机**：UE 的构建被切成 UHT、编译、链接三段，每段的失败模式和信息形态都不同：UHT 没有编译器错误码、编译错误带 `C####` 与行号、链接错误只有符号名。把“先认阶段、再按阶段顺序修”固化成流程，是为了让排错从背错误码变成读日志结构——UHT 的第一条错误会制造几十条连锁，`LNK2019` 要回依赖与实现里查，Unity 还会改写行号，认清这些，前五分钟才不会花在修症状上。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 排查顺序 | UHT 错误 → 编译错误 → 链接错误，只修当前第一条 |
| 缺模块依赖 | `Build.cs` 的 Public/Private 依赖里补模块名 |
| 只有声明没实现 | 检查函数是否有定义，或是否是纯虚/事件函数 |
| 跨模块符号不可见 | 给类或函数加 `MODULENAME_API` |
| 头文件重复定义 | 全局变量改 `extern` + cpp 定义，或加 `inline` |
| 行号对不上 | 查 Unity Build 合并文件里的源文件注释，或临时关闭 Unity |

**示例说明**：以下为模块内片段，头文件骨架依赖 `CoreMinimal.h`、`GameFramework/Actor.h` 与 UHT 生成的 `MyActor.generated.h`；链接报错文本以 MSVC 工具链为准，不能脱离工程独立编译。

```cpp
// 一个“不会制造 UHT 噪声”的最小骨架
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MyActor.generated.h"        // 必须是最后一个 include

UCLASS()
class MYGAME_API AMyActor : public AActor
{
    GENERATED_BODY()               // 必须是类体第一行

public:
    // 参数之间用逗号分隔；写错会报 Expected a '{'
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "My")
    float Speed = 100.f;
};
```

```plaintext
// 链接期典型输出（MSVC，文本随工具链语言可能不同）
error LNK2019: 无法解析的外部符号
    "public: void __cdecl AMyActor::DoThing(void)"

// 排查顺序：
// 1) Build.cs 是否依赖了 DoThing 所在模块
// 2) DoThing 是否真的有实现（不是只声明）
// 3) 跨模块时是否加了 MYGAME_API
```

**可观察验证**

```plaintext
# 只编出错的那个文件，避免全量日志把第一条错误冲走
Build.bat MyGameEditor Win64 Development -WaitMutex -SingleFile=MyActor.cpp
```

- 日志里先出现 `UnrealHeaderTool` 段、后出现编译器的 `C####` / `error:` 段：第一条错误落在哪段，就按哪段的顺序修。
- `LNK2019` 没有行号只有符号名：拿符号名回 `Build.cs` 与实现文件里找，别在报错行附近猜。

### ③ 面试怎么讲

**30 秒口述稿**

> 我按阶段分。UHT 阶段：找不到类型多半是类型没 include 或反射不支持；`Expected a '{'` 一般是宏参数写错；`generated.h` 报错就检查它是不是最后一个 include、文件名对不对。编译阶段：`GENERATED_BODY` 报错基本是位置不对，或者忘了 include 生成头。链接阶段：`LNK2019` 三个原因，模块依赖没加、函数只有声明没实现、跨模块缺 API 宏；重复定义多半是头文件里定义了全局变量。最重要的习惯是只修第一条，UHT 的后续错误经常是连锁反应。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `LNK2019` 怎么快速定位？ | 看符号全名判断是成员函数还是变量，再查三件事：模块依赖、是否有实现、是否缺 `_API`；跨模块优先怀疑 API 宏。 |
| 为什么只修第一条？ | 前一条错误会让后续大量代码处在“类型不完整/宏未展开”的状态，后面的报错是症状不是病因。 |
| 什么时候该删 `Intermediate` / `Binaries`？ | 生成文件与源码明显不同步、改名后仍报旧错误时可以清；但它是验证手段不是修复手段，先看日志第一阶段。 |
| 重复定义和 `LNK2019` 会同时出现吗？ | 会。头文件里定义变量导致重复定义，同时别处又在找符号；先修定义位置。 |
| Unity Build 下行号不对怎么办？ | 看合并文件里每段代码前的源文件注释；仍不确定就临时关 Unity 编译一次。 |

### ④ 真实坑

1. **逐个修 UHT 报错**：几十条里只有第一条是真因，其余是连锁；修第一条、重编、再看，通常两次就干净。
2. **头文件里定义全局变量**：`int32 GCount = 0;` 被所有包含者各定义一份，链接期重复定义；改成 `extern` + cpp 定义，或 C++17 的 `inline` 变量。
3. **改了类名没改文件名**：`generated.h` 名字跟文件走，改名不同步会出现“找不到生成头”或类注册异常；一起改。
4. **把警告当噪音**：UE 很多配置把警告当错误，一个 `C4996` 或隐式转换警告会中断构建，也常是真实类型问题的前兆。
5. **一有问题就删 `Binaries` 和 `Intermediate`**：能“治好”一次，但根因（依赖缺失、UHT 没跑、模块没注册）还在；下次照样复现。

### ⑤ 练习

**A 写**：准备一份顺序正确的反射头文件骨架，然后人为制造三种错误：`UPROPERTY` 参数少逗号、`GENERATED_BODY` 挪到类体中间、头文件里定义全局变量；每次只改一处，记录日志首行并修复。

**提示**：① 每次只制造一处错误并记下日志首行，三处同时改就分不清哪条是根因；② 先判阶段再动手，`LNK2019` 去查符号与依赖，不要盯着报错行；③ Unity 下报错指向合并后的临时文件，定位不到就临时关 Unity 或用 `-SingleFile` 复现。

验收标准：能准确说出每个错误出现在哪个阶段；修复后构建通过；能写出一句话根因和对应修法，不依赖记忆错误码。

**B 讲**：2 分钟口述“拿到一份红色构建日志，你的前五分钟做什么”。

验收标准：能先分阶段再定位；至少覆盖 `LNK2019` 的三类根因；能说明为什么只看第一条以及何时该清生成目录。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-60"></a>
## U60 · Q60 UHT 报错和普通编译报错怎么区分？

> 来源：题库 UE 第 60 题 ｜ 速背卡：[Q60](./速背.md#ue-q60) ｜ 耗时 13 min ｜ 难度 ★★☆

**一句话**：UHT 是编译前跑的头文件扫描器，只认反射宏；它的错误没有编译器错误码，出现在 C++ 编译之前，所以必须先修它。

**学完能做到**
- 写代码：写出一个 UHT 能接受的反射声明，并说明为什么某些写法它解析不了。
- 讲出来：说清“UHT 不过为什么后面一堆 C++ 错误”，以及判断错误来源的三条线索。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| UHT 报错说明 C++ 写错了 | UHT 不是完整 C++ 解析器，它只按自己的规则检查反射声明与类型是否可反射 |
| 应该先把一堆 C++ 错误改完 | UHT 失败时那些错误是缺生成代码的连锁反应，先修 UHT 才是根因 |
| 反射声明可以写在 `.cpp` 或条件编译里 | UHT 只扫头文件类体；`#if` 包住的反射声明容易丢失或让布局错乱 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UHT 在 UBT 构建流程中先于编译器执行 | UHT 失败时编译器根本没启动，后续 C++ 错误都是缺生成代码导致的 |
| UHT 错误带 `UnrealHeaderTool` / `LogCompile` 上下文，指向头文件和宏 | 看到 `Unrecognized type`、`Expected`、宏不闭合，先归到 UHT |
| 编译器错误带 `C####`（MSVC）或 `error:`（Clang），有文件名行号 | 指向 `generated.h` 内部的行号，问题通常在自己写的声明上 |
| UHT 不是完整 C++ 解析器 | 模板技巧、宏拼接、条件编译里的反射声明容易解析失败 |

UHT 做的事很明确：扫描每个模块头文件里的 `UCLASS`/`USTRUCT`/`UPROPERTY`/`UFUNCTION`，检查语法和类型是否可反射，然后生成 `Xxx.generated.h` 与对应的 `.gen.cpp`，登记反射信息供运行时使用。它不做代码生成之外的语义分析，也不跑模板实例化，所以它对“C++ 是否合法”的判断是局部的、基于它自己的语法规则。

这解释了连锁错误：`GENERATED_BODY()` 宏本身定义在 `generated.h` 里。UHT 失败就没生成这个文件，类体第一行展开失败，编译器接着报“未知宏”“类型不完整”，然后所有引用该类的 cpp 一起报错。日志看起来像“改一行炸了三百行”，实际只有一个根因。

判断来源最实用的三条线索：一是有没有 `UnrealHeaderTool` 字样或 `LogCompile` 分类；二是有没有编译器错误码（`C` 开头或 `error:`）；三是错误指向 `.h` 的宏区域还是 `.cpp` 的普通语句。三者满足前两条基本就能定性。至于“单独跑 UHT”，实践上就是看构建日志的第一阶段，或者删掉 `Intermediate/Build` 下的生成目录后重建，观察它是否重新生成（具体路径和开关随版本有差异）。

**设计动机**：UHT 在编译器之前独立跑一遍头文件扫描，它生成的 `generated.h` 是后续 C++ 编译的输入。把生成阶段和编译阶段分开，是为了让反射元数据先被校验、再被使用：UHT 只按自己的规则解析声明，不做完整 C++ 语义分析，所以它能快速给出“反射声明是否合法”的结论。这也决定了它的错误必须先修——生成失败时，编译器那一屏报错只是“缺文件”的下游反应。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 判断是不是 UHT 错 | 搜日志里的 `UnrealHeaderTool` / `LogCompile` |
| 定位 UHT 根因 | 只看第一条，修完重新构建 |
| 确认生成是否成功 | 看 `Intermediate/Build` 下是否出现对应的 `.generated.h` |
| 反射类型报 `Unrecognized` | 换成 UE 容器/反射支持的类型，或补最小 include |
| 宏参数报语法错 | 对着 `UPROPERTY`/`UFUNCTION` 的参数列表逐个核对逗号与括号 |
| 只想验证头文件 | 修宏写法后单独构建该模块，不必全量 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h` 与 UHT 生成的 `Xxx.generated.h`；反射宏必须写在头文件的类体里，不能脱离工程独立编译。

```cpp
// 错：std:: 类型不在反射系统里，UHT 直接报 Unrecognized type
UFUNCTION(BlueprintCallable)
void SetTags(const std::vector<FName>& Tags);

// 对：换成 UE 容器，UHT 能解析
UFUNCTION(BlueprintCallable)
void SetTags(const TArray<FName>& Tags);
```

```cpp
// 错：宏参数少逗号，UHT 报 Expected a '{' 之类的语法错
UPROPERTY(EditAnywhere BlueprintReadWrite, Category = "My")
float Speed;

// 对：参数之间用逗号
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "My")
float Speed;
```

**可观察验证**

```plaintext
# 清掉生成目录后重建：构建日志的第一阶段就是 UHT，能直接看到它失败的第一条
rmdir /s /q Intermediate\Build\Win64\x64\MyGameEditor\Development\MyGame
Build.bat MyGameEditor Win64 Development -WaitMutex
```

- 生成成功后 `Intermediate/Build` 下会重新出现对应的 `.generated.h`；没有这个文件，后面的 C++ 报错都是连锁。
- 在日志里搜 `UnrealHeaderTool` / `LogCompile`：命中就是 UHT 错，不命中再去读 `C####` 或 `error:`。

### ③ 面试怎么讲

**30 秒口述稿**

> UHT 在编译之前跑，负责扫头文件里的反射宏、生成 `generated.h` 和注册代码。它的报错通常带 `UnrealHeaderTool` 或者 `LogCompile`，或者直接指向 `UPROPERTY`、`UFUNCTION` 的写法，没有编译器错误码。普通 C++ 报错是编译器给的，带 `C` 开头的错误码和具体行号。所以要**先修 UHT**，因为 UHT 不过就不会生成代码，`GENERATED_BODY` 展开失败，后面全是连锁错误。看日志里第一阶段失败的那条最有效，修完第一条再看新的第一条。想单独验证，就清掉生成目录重建，看 UHT 是否重新生成。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么 UHT 不过会有一堆 C++ 错误？ | `GENERATED_BODY` 等宏来自 `generated.h`，文件没生成，类体展开失败，所有引用该类的翻译单元一起报错。 |
| 怎么单独跑 UHT？ | 实践上看构建日志第一阶段，或清掉 `Intermediate/Build` 下的生成目录后重建；具体命令行开关随版本变化。 |
| UHT 错误指向 `generated.h` 怎么办？ | 那不是生成代码的问题，回到自己头文件里的声明和宏参数，通常是类型或顺序喂错了。 |
| UHT 会做模板检查吗？ | 不做完整实例化，只按自己的规则解析声明；模板技巧和宏拼接容易让它解析失败，反射声明要写得直白。 |
| 能在 `.cpp` 里写 `UPROPERTY` 吗？ | 不能生效，UHT 只扫头文件；反射声明必须放在头文件的类体里。 |

### ④ 真实坑

1. **先修一堆 C++ 错误**：UHT 没过时那些错误是幻觉，修完 UHT 大半会消失；顺序错了纯浪费时间。
2. **文件改名不同步**：`AMyActor` 从 `MyThing.h` 挪到 `MyActor.h`，include 的 `generated.h` 名字没改，报找不到；两者必须一致。
3. **把反射声明塞进条件编译**：`#if WITH_EDITOR` 包住 `UPROPERTY`，UHT 的预处理与编译器不完全一致，容易出现声明丢失或布局错乱。
4. **依赖 UHT 不认识的类型**：`std::function`、`std::vector`、非 `USTRUCT` 的自定义结构体，都会报 `Unrecognized type`；先换成 UE 类型或补 `USTRUCT`。
5. **无视 UHT 警告**：例如 `UPROPERTY` 缺 `Category`，不影响编译但影响编辑器面板与规范；警告堆多了会淹没真错误。

### ⑤ 练习

**A 写**：在一个测试类上依次制造三种 UHT 错误：使用 `std::vector` 参数、宏参数少逗号、`GENERATED_BODY` 位置错误；每次记录日志首行、判断归属阶段，再修复。

**提示**：① 先看日志阶段与前缀，`UnrealHeaderTool` / `LogCompile` 一律先修，`C####` 留到后面；② 修完第一条就重建，不要一口气改三处，否则无法确认哪条错误消失；③ 反射声明只写在头文件类体里，别塞进 `#if` 条件编译，UHT 的预处理与编译器并不完全一致。

验收标准：三种错误都能在日志里定位到第一条；修复后构建通过；能写出一句话说明为什么第三种的后续报错最多。

**B 讲**：2 分钟口述“UHT 是什么、它失败时日志长什么样、你怎么处理”。

验收标准：能讲清 UHT 与编译器在构建流程中的先后；能给出三条区分线索；能解释连锁错误的机制。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-61"></a>
## U61 · Q61 API 宏是做什么的？

> 来源：题库 UE 第 61 题 ｜ 速背卡：[Q61](./速背.md#ue-q61) ｜ 耗时 12 min ｜ 难度 ★★☆

**一句话**：`MODULENAME_API` 把符号标记为“可跨模块链接”，模块被编成独立二进制时，它是唯一的导出/导入通道。

**学完能做到**
- 写代码：给类、自由函数、全局变量分别加上正确位置的 API 宏，并解释模板为什么不加。
- 讲出来：说清“不加一定链接失败吗”的准确答案，以及静态库与动态库的差别。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 不加 API 宏一定链接失败 | 同一二进制内静态链接、或 `inline`/模板函数可能正常；跨动态库边界才必然 `LNK2019` |
| 成员函数要单独加宏 | 类导出会覆盖其非内联成员函数；但静态成员变量的定义处仍要写宏 |
| 模板也应该加宏导出 | 模板在使用方实例化，整模板加宏反而可能引起重复符号，定义放头文件即可 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 宏名是模块名大写加 `_API`，由 UBT 按模块自动定义 | 写成别的模块名，等于把符号导出到错误的二进制里 |
| 展开后是 `__declspec(dllexport/dllimport)`（MSVC）或可见性属性（Clang） | 编本模块时导出，被别的模块引用时导入 |
| 位置：类在 `class` 与类名之间，自由函数在返回类型前 | 位置写错要么语法错误，要么导出无效 |
| 模板类和模板函数一般不导出，定义放头文件 | 使用方各自实例化，不需要跨模块符号 |
| 模块以静态库方式链接时，宏可能为空或无关紧要 | “不加 API 宏一定失败”只在跨动态边界时才成立 |

API 宏解决的是名字可见性问题。UE 的模块在源码工程里通常编成 DLL（编辑器 Target 下尤其如此），DLL 默认只导出显式标记的符号。你写了一个 `UMyHealthComponent`，本模块内部随便用；别的模块 include 了头文件、编译完全通过，链接时却找不到构造函数和成员函数，因为它们在 DLL 里没被导出。

“不加一定失败吗”要答准确：如果两个模块最终被静态链接进同一个二进制，或者函数是头文件里的 `inline`/模板，那么不加宏也可能正常。但只要跨了动态库边界，缺宏就是 `LNK2019`。所以工程规范是“对外符号一律加”，因为它让代码在不同链接方式下都正确，而不是赌当前配置。细节上，类导出会覆盖其非内联成员函数，但静态成员变量的定义处仍要写宏；全局变量的声明和定义都要写；模板特化是普通类型，可以加，但整模板不要加。

**设计动机**：模块要能独立编译、又要能跨模块调用，就必须有一层显式的符号可见性约定。动态库默认只导出显式标记的符号，若让每个使用方自己写导入声明，链接行为会随链接方式漂移；于是 UBT 按模块自动定义 `MODULENAME_API`，编本模块时导出、被引用时导入，同一份头文件在静态链接和动态链接下都成立。这也解释了模板的例外：它在使用方实例化，本来就没有需要跨边界的符号。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 导出类 | `class MYGAME_API UMyHealthComponent : public UActorComponent` |
| 导出自由函数 | `MYGAME_API void MyGlobalFunc();` |
| 导出全局变量 | 头文件 `extern MYGAME_API int32 GVar;`，cpp 定义也带宏 |
| 模板 | 不加宏，定义放头文件 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`Components/ActorComponent.h` 与 UHT 生成的 `MyHealthComponent.generated.h`；`MYGAME_API` 由 UBT 按模块自动定义，不能脱离工程独立编译。

```cpp
// MyHealthComponent.h
#pragma once
#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "MyHealthComponent.generated.h"

// 类：API 宏在 class 关键字之后、类名之前
UCLASS()
class MYGAME_API UMyHealthComponent : public UActorComponent
{
    GENERATED_BODY()
public:
    UMyHealthComponent();
    void ApplyDamage(float Amount);      // 成员函数随类导出，不用单独加
    static int32 GetInstanceCount();     // 非内联静态成员：随类导出
};

// 全局变量：声明处 extern + API 宏
extern MYGAME_API int32 GMyHealthDebugLevel;
```

```cpp
// MyHealthComponent.cpp
#include "MyHealthComponent.h"

// 定义处同样要带 API 宏
MYGAME_API int32 GMyHealthDebugLevel = 0;

UMyHealthComponent::UMyHealthComponent()
{
    PrimaryComponentTick.bCanEverTick = false;
}

// 模板不放 API 宏：谁使用谁实例化
template<typename T> void MyGameSwap(T& A, T& B) { T Tmp = A; A = B; B = Tmp; }
```

**可观察验证**

```plaintext
# 链接失败先留符号名，再看导出表里到底有没有它
dumpbin /exports Binaries\Win64\UnrealEditor-MyGame.dll | findstr MyHealthComponent
```

- 先不加宏构建一次，把 `LNK2019` 的完整符号名抄下来；补宏后再看导出表，同一个符号出现、链接通过，这就是“导出/导入”的直接证据。
- 静态链接配置下同一份代码可能不报错，所以验收要在分模块或打包配置下跑一遍，别用单二进制结果判定。

### ③ 面试怎么讲

**30 秒口述稿**

> 模块里对外公开的符号要加“模块名大写加 `_API`”的宏，比如 `MYGAME_API`，引擎模块就是 `ENGINE_API`。作用是把符号标记成可跨模块链接：编这个模块时是导出，别的模块引用时是导入。不加的话，跨动态库边界链接时就会报 `LNK2019`，表现是“头文件明明 include 了，编译也过了，就是链接找不到”。位置有讲究：类加在 `class` 和类名之间，自由函数加在返回类型前面，全局变量声明定义都要加。模板一般不导出，定义直接放头文件里。要注意静态链接时可能不报错，所以别靠“本机能编”来判断。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 不加 API 宏一定链接失败吗？ | 不一定。同一二进制内静态链接、或 `inline`/模板函数可能没事；跨 DLL 边界则必然 `LNK2019`。 |
| 静态库和动态库有区别吗？ | 静态库链接时不需要导入导出，宏通常无实际作用；动态库必须有，所以统一加宏才能两种方式都正确。 |
| 为什么宏名要和模块名一致？ | 宏由 UBT 按模块定义，名字对不上就退化成未定义标识符或空，等于没导出；模块改名要全局同步。 |
| 模板为什么不加？ | 模板在使用方实例化，代码在头文件里生成，不需要从别的二进制导入符号；整模板加宏反而可能引起重复符号。 |

### ④ 真实坑

1. **宏位置写反**：`MYGAME_API class UMyClass` 这种写法不统一，部分编译器直接报错；标准写法是 `class MYGAME_API UMyClass`。
2. **只在编辑器配置下验证**：全源码单二进制时静态链接不暴露问题，打包或分模块构建才报 `LNK2019`；验收要在打包配置下过一遍。
3. **静态成员变量只给声明加宏**：定义处漏了宏，跨模块取地址或写值时链接失败；声明和定义成对处理。
4. **模块改名没改宏**：`MYGAME_API` 还是旧模块名，UBT 不再定义它，符号没有导出；重命名模块时全量搜索。

### ⑤ 练习

**A 写**：建两个模块 A 和 B，A 里写一个类和自由函数，B 调用它。先不加 API 宏，在分模块构建下复现 `LNK2019`；再按正确位置补上宏，重新构建。

**提示**：① 先复现 `LNK2019` 并把完整符号名保存下来，补宏后再确认它从日志里消失；② 全局变量的 `extern` 声明与 cpp 定义都要带宏，漏一处等于没导出；③ 用分模块或打包配置验收，别在全源码单二进制下判定“已经修好”。

验收标准：能复现一次链接失败并保留符号名；补宏后链接通过；能指出类、函数、全局变量三种位置分别在哪儿加。

**B 讲**：2 分钟口述“API 宏到底解决什么问题，为什么模板例外”。

验收标准：能说清导出/导入两个方向；能准确回答“不加一定失败吗”；能说明静态库与动态库的差异。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-62"></a>
## U62 · Q62 插件和模块有什么区别？

> 来源：题库 UE 第 62 题 ｜ 速背卡：[Q62](./速背.md#ue-q62) ｜ 耗时 14 min ｜ 难度 ★★★

**一句话**：模块是编译边界，插件是可插拔的分发单位——一个插件可以包含零个或多个模块，外加资源、配置和描述文件。

**学完能做到**
- 写代码：写一个带 Runtime + Editor 两个模块的 `.uplugin`，并让宿主项目引用它。
- 讲出来：说清“什么时候做插件、什么时候只做模块”，以及加载阶段选错的后果。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 插件就是模块的另一种叫法 | 插件是分发与开关单位，内部仍由模块承担编译；两者是容器与内容，不是替代关系 |
| 插件必须有 C++ 模块 | 纯资源插件只需 `CanContainContent`，`Modules` 数组可以没有 |
| 模块代码放对目录就会参与编译 | 模块必须在 `.uplugin` 的 `Modules` 里登记类型与加载阶段，否则代码不参与编译 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 模块是代码编译单元，一个模块一个 `Build.cs` | 决定编译、链接和依赖 |
| 插件是 `.uplugin` 描述的可选包 | 决定“装不装、何时加载、带不带内容” |
| 插件可以只放资源（`CanContainContent`） | 纯美术/数据插件不需要任何 C++ 模块 |
| 插件的 `Modules` 数组登记每个模块的类型与加载阶段 | 没登记就不编译；Runtime 插件不能塞 Editor 模块 |
| 插件可以在 `.uplugin` 里声明依赖其他插件 | 依赖缺失时引擎启动就报错，而不是等到链接 |

两者的关系是“容器与内容”。插件是分发和开关的单位：你在编辑器插件面板里勾选它，它就参与构建和加载；取消勾选，代码和资源一起消失。模块是插件内部的编译单位：一个插件可以有零个模块（纯资源）、一个模块，也可以有 Runtime 加 Editor 两个模块，用 `Type` 区分。

选择标准可以压缩成一句：需要跨项目复用、需要能整体开关、需要连资源一起带走，就做插件；只是当前项目内的功能分层和编译隔离，就做模块。反过来，为了“看起来整齐”把每个功能都做成插件，会让 `.uplugin` 数量爆炸、加载顺序和依赖关系变复杂，而且每次改插件都要处理工程文件重新生成。

加载阶段是插件特有的控制点。`PostConfigInit` 很早，适合改底层配置；`Default` 是常规运行时模块；`PostEngineInit` 在引擎初始化后，适合依赖引擎子系统的编辑器工具。选早了，访问 World/GameInstance 可能为空；选晚了，别人已经初始化完，你想注入的东西来不及。

**设计动机**：插件存在的理由是“可插拔”：同一套功能要能跨项目复用、能被整体关闭、能连资源一起分发，而模块只解决编译与依赖，不解决分发。于是 `.uplugin` 把模块清单、内容、加载阶段和插件间依赖收进一个描述文件，让引擎在启动与构建时决定装不装、何时加载，模块继续作为插件内部的编译单位。选插件还是模块，本质上是在问“这东西要不要能被整体拿掉、带到别的项目”。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 只在当前项目分层 | 普通模块，放 `Source/` 下 |
| 跨项目复用、要能关 | 插件，放 `Plugins/MyPlugin/` |
| 只发资源 | 插件 + `"CanContainContent": true`，不写 `Modules` |
| 编辑器工具 | 插件内 `"Type": "Editor"` 的模块 |
| 依赖第三方库 | 插件内 ThirdParty 模块，库文件按平台放 |
| 被宿主项目使用 | 项目里启用插件，模块名加进宿主 `Build.cs` 依赖 |

**示例说明**：以下为模块内片段——`.uplugin` 是插件的 JSON 描述文件，宿主侧 cpp 依赖插件模块导出的 `MyHealthWidget.h` 与 `CreateWidget`，都不能脱离工程独立编译。

```plaintext
// Plugins/MyHealthUI/MyHealthUI.uplugin
{
    "FileVersion": 3,
    "FriendlyName": "My Health UI",
    "Description": "血条与伤害飘字，可整体开关",
    "CanContainContent": true,          // 有资源，也可以是纯资源插件
    "Modules": [
        { "Name": "MyHealthUI",       "Type": "Runtime", "LoadingPhase": "Default" },
        { "Name": "MyHealthUIEditor", "Type": "Editor",  "LoadingPhase": "PostEngineInit" }
    ]
}
```

```cpp
// 宿主项目里使用插件暴露的类型：Build.cs 加插件模块名即可
#include "MyHealthWidget.h"

void AMyHUD::ShowHealthBar()
{
    if (UMyHealthWidget* Widget = CreateWidget<UMyHealthWidget>(GetWorld(), HealthWidgetClass))
    {
        Widget->AddToViewport();
    }
}
```

**可观察验证**

```plaintext
# 插件是否参与构建与加载：日志里搜模块名和 .uplugin 路径
findstr /i "MyHealthUI" Saved\Logs\MyGame.log
```

- 在插件面板里关掉插件再启动，日志里不再有该模块的加载记录、菜单入口也消失；重新打开即恢复。
- 用 Shipping 或打包配置构建一次：若报 Editor 模块不存在，就是 Runtime 模块违规依赖了 Editor 模块。

### ③ 面试怎么讲

**30 秒口述稿**

> 插件是可选、可复用的内容包，可以带自己的模块、资源、配置；模块是代码的编译单元。判断标准很简单：要跨项目复用、要能整体开关、要连资源一起走，就做插件；只是本项目内的功能分层，就做模块。插件里的模块一样有 `Build.cs`，另外要有一个 `.uplugin` 描述文件，里面登记模块的类型和加载阶段。纯资源插件可以没有模块，把 `CanContainContent` 打开就行。注意 Runtime 插件不能依赖 Editor 模块，加载阶段也不能乱选，选早了引擎子系统还没起来。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 插件能不能只放资源？ | 能。`CanContainContent` 设为 true、不写 `Modules`，就是一个纯内容插件，可整体启用或禁用。 |
| 插件模块的加载阶段怎么选？ | 常规运行时用 `Default`；依赖引擎子系统或编辑器工具的用 `PostEngineInit`；只有确实要改底层配置才用更早的阶段。 |
| 插件能依赖别的插件吗？ | 能。在 `.uplugin` 的插件依赖列表里声明，保证加载顺序；漏了会表现为启动报错或功能时好时坏。 |
| 插件和模块能互相替代吗？ | 不能。插件内部仍然是模块；插件解决“分发与开关”，模块解决“编译与依赖”。 |
| 预编译插件能改源码吗？ | 通常不行。Installed Build 下插件是预编译产物，改源码不生效，要用源码版引擎或把改动做成项目插件。 |

### ④ 真实坑

1. **模块写了但没登记进 `.uplugin`**：代码躺在目录里不参与编译，运行时找不到类，链接期报缺符号；先检查 `Modules` 数组。
2. **Runtime 插件依赖 Editor 模块**：编辑器里一切正常，打包失败；把编辑器逻辑拆到独立 `Editor` 类型模块。
3. **加载阶段选得太早**：`PostConfigInit` 阶段访问 World、GameInstance 往往拿不到，直接崩；按依赖的系统就绪时间往后放。
4. **插件依赖漏声明**：本地因为加载顺序碰巧正常，换台机器或打包就失效；依赖写进 `.uplugin`，别靠运气。
5. **在预编译插件上直接改源码**：改动不参与编译，出现“改了没效果”的灵异问题；确认插件是源码版还是安装版。

### ⑤ 练习

**A 写**：把项目里一块“UI 代码 + 若干控件蓝图”迁移成一个插件，拆成 Runtime 模块和 Editor 模块，`.uplugin` 里登记两个模块与各自加载阶段，然后在插件面板里关闭再打开验证。

**提示**：① `.uplugin` 的 `Modules` 数组漏登记模块，代码就不参与编译，先查这里再查代码；② Runtime 模块不要 include 或依赖 Editor 模块，编辑器逻辑放 `Editor` 类型模块，用接口或委托回调对接；③ 加载阶段从 `Default` 起步，确实依赖引擎子系统或编辑器环境时再往后挪。

验收标准：关闭插件后宿主项目仍能编译通过、菜单入口消失；打开后功能恢复；打包配置下构建通过（证明没有 Runtime 依赖 Editor）。

**B 讲**：2 分钟口述“给你一个新功能，你怎么决定做成模块还是插件”。

验收标准：能给出复用性、开关需求、资源归属三条判断依据；能说清 `.uplugin` 里至少两个关键字段；能举一个加载阶段选错的反例。

> ↑ 返回[目录](#toc)

---

> 下一篇：[UE ⑩：高频踩坑](#ch15)


<a id="ch15"></a>
# 第 15 章 · UE ⑩：高频踩坑

> 对应速背 UE 主题 10（Q63–Q68），完整答题卡见 [速背 UE 10](./速背.md#ue-t10)。
> 上一篇：[UE ⑨：工程与构建](#ch14) ｜ 返回[目录](#toc)。

---

<a id="ue-unit-63"></a>
## U63 · Q63 空指针和无效对象怎么判？

> 来源：题库 UE 第 63 题 ｜ 速背卡：[Q63](./速背.md#ue-q63) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：在 UE 里“非空”只说明地址还在，“有效”才说明对象还能用；判空要判到 `IsValid` 这一层，而且要在真正使用的那一行判。

**学完能做到**
- 写代码：用 `IsValid`、`TWeakObjectPtr` 写出一个跨帧缓存目标、随时能安全失效的引用。
- 讲出来：说清 GC 可达性和逻辑有效性是两件事，以及为什么 `UPROPERTY` 替代不了判空。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 判空就是判 `nullptr` | `Destroy()` 之后地址往往还在，`Ptr != nullptr` 会放过待销毁对象；判空要判到 `IsValid` 这一层 |
| 挂了 `UPROPERTY` 的对象就能安全用 | `UPROPERTY` 只让 GC 看见引用、不回收对象，不阻止销毁，也不代表业务上还能用 |
| `TWeakObjectPtr` 的 `Get()` 非空就可以放心用 | `Get()` 只回答“对象还在不在”；世界关闭、正在销毁这些层仍要自己判 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UObject 的销毁是“先标记、后回收”，`Destroy()` 之后到 GC 之前内存可能还在 | `if (Ptr != nullptr)` 会把待销毁对象当活对象用，逻辑错甚至崩 |
| `IsValid(Ptr)` 同时判断“是否为空”和“是否已被标记销毁/回收” | 解引用前统一用 `IsValid`，而不是裸判 `nullptr` |
| `UPROPERTY` 只保证 GC 能看见引用、不回收对象 | 有 `UPROPERTY` 的裸指针在 `Destroy` 后依然“非空但无效” |
| Actor 有独立的销毁状态，`IsActorBeingDestroyed()` 能识别“正在销毁” | 广播、回调、异步结果晚到时，需要额外判断这一层 |
| 跨帧缓存、委托回调、异步加载回调里，“拿到”与“使用”不在同一时刻 | 必须在使用点重新判，不能只在缓存时判一次 |

`nullptr` 检查回答的是“这个指针有没有地址”，而 UObject 的地址在对象失效后往往还保留一段时间。GC 采用标记-清扫的思路，`Destroy()` 只是把对象标记为待销毁并走 `EndPlay`，真正的内存回收要等到下一次 GC。这中间的窗口里，指针非空、字段可能还能读，但对象已经不再参与游戏逻辑，这时候任何访问都是在赌内存还没被覆盖。
`UPROPERTY` 解决的是另一个问题：让 GC 的引用图能遍历到这个成员，从而不回收它。它保证的是“可达”，不是“可用”。一个挂着 `UPROPERTY` 的 Actor 指针，在目标 `Destroy` 之后依然可达、依然非空，但业务上已经不该再用。反过来，一个没标 `UPROPERTY` 的裸指针成员，GC 根本看不见，下一次回收就悬垂。所以“会不会被回收”和“还能不能用”必须分开治理。

UE5 里成员引用更推荐 `TObjectPtr<T>`，它带访问追踪，也能在需要时解析；但它仍然只是“强引用的一种写法”，判空语义没变。真正的观察关系（我只是想找到它，不拥有它）应该用 `TWeakObjectPtr<T>`：对象失效后 `Get()` 给空，天然适合跨帧缓存。
还有一层容易漏：对象本身有效，但世界正在关闭。关卡切换、PIE 结束、`World->bIsTearingDown` 为真时，很多“有效”的对象也不能再操作。晚到的回调要连这一层一起判。

**设计动机**：UE 把“对象还能不能被回收”交给 GC、把“逻辑上还能不能用”留给游戏代码，两者的时间尺度不同；引擎也不可能在 `Destroy()` 时逐个去清空指过来的裸指针。所以这套判断只能靠类型和约定来分工：`UPROPERTY`/`TObjectPtr` 表达所有权的可达性，`TWeakObjectPtr` 表达观察关系的自动失效，`IsValid` 在使用点兜底。

**版本差异**：UE5 起成员引用推荐 `TObjectPtr<T>`（带访问追踪），UE4 普遍是裸指针 + `UPROPERTY`；`IsValid`、`TWeakObjectPtr` 的判空语义两代一致。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 函数内刚拿到的对象，马上用 | `if (IsValid(Obj)) { ... }` |
| 跨帧缓存一个目标 Actor | `TWeakObjectPtr<AActor> CachedTarget;`，用时 `CachedTarget.Get()` |
| 自己拥有的组件、子对象 | `UPROPERTY() TObjectPtr<UStaticMeshComponent> Mesh;` |
| 判断 Actor 是否正在销毁 | `A && !A->IsActorBeingDestroyed()` |
| 组件是否真的可用 | `IsValid(Comp) && Comp->IsRegistered()` |
| 世界是否在关闭 | `UWorld* W = GetWorld(); if (!W || W->bIsTearingDown) return;` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`AActor`/`UStaticMeshComponent` 与 UHT 生成的 `MyTurret.generated.h`，不能脱离工程独立编译。

```cpp
// AMyTurret.h / .cpp 片段（UE5）
UPROPERTY()
TObjectPtr<UStaticMeshComponent> Mesh;   // 强引用：组件归本 Actor 所有，跟着一起活

TWeakObjectPtr<AActor> CachedTarget;     // 观察关系：不阻止 GC，失效后自动给空

void AMyTurret::CacheTarget(AActor* InTarget)
{
    CachedTarget = InTarget;             // 只记录弱引用，不延长目标寿命
}

void AMyTurret::Fire()
{
    AActor* Target = CachedTarget.Get(); // 使用前重新取，而不是沿用缓存时的裸指针
    if (!IsValid(Target) || Target->IsActorBeingDestroyed())
    {
        CachedTarget.Reset();            // 目标已销毁：清掉缓存，避免反复访问
        return;
    }
    if (!IsValid(Mesh) || !Mesh->IsRegistered())
    {
        return;                          // 组件未注册时，相关 API 可能不起作用
    }
    // 到这里 Target 与 Mesh 才允许解引用
}
```

出处：UObject 指针有效性判断与 GC 语义见 Epic 文档《Object Pointers in Unreal Engine》；`TObjectPtr`、`TWeakObjectPtr` 的用途见 Epic 文档《Unreal Object Handling》。具体判定细节视引擎版本而定。

**可观察验证**

```cpp
// 同一帧内对比三种判断：地址在 ≠ 对象可用
AActor* Target = CachedTarget.Get();
UE_LOG(LogTemp, Log, TEXT("null=%d valid=%d beingDestroyed=%d"),
    Target == nullptr, IsValid(Target),
    Target ? Target->IsActorBeingDestroyed() : false);
```

```plaintext
stat gc                        # 看 Destroy 之后到下一次 GC 的窗口
obj list class=AMyTurret       # 确认目标是否还挂在对象表里
```

- 目标 `Destroy()` 后立刻跑上面这段：`null=0` 而 `valid=0`，这一行就是“非空但无效”的直接证据。
- 在 `EndPlay` 里再打一条 `bIsTearingDown` 的日志，能看到世界关闭阶段晚到的回调为什么要提前返回。

### ③ 面试怎么讲

**30 秒口述稿**

> UE 里判空不只是判 `nullptr`。对象可能已经被标记销毁但地址还在，所以解引用前要用 `IsValid`，Actor 还要看 `IsActorBeingDestroyed`，世界关闭时还要看 `bIsTearingDown`。`UPROPERTY` 只保证不被 GC 回收，不保证逻辑上还能用，这两件事要分开。跨帧缓存、委托回调、异步加载回调这种“拿到”和“使用”不在同一时刻的地方，必须在使用点重新判；长期持有就用 `TWeakObjectPtr`，不要存裸指针。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `IsValid` 能防住所有悬垂吗？ | 不能。它只能识别“仍指向一个可读 UObject、但已被标记销毁”的情况；如果内存已被回收，或指针指向的是非 UObject 的已释放内存，`IsValid` 自身就可能读到野内存。真正的防线是不长期持有裸指针。 |
| 为什么 `UPROPERTY` 不够？ | `UPROPERTY` 只让 GC 看见引用、不回收对象；它不阻止 `Destroy`，也不表达业务上还想不想用。可达不等于可用。 |
| `TObjectPtr` 判空就够了吗？ | 不够。`TObjectPtr` 解决的是 UE5 的访问追踪与自动解析，判空仍只回答“是不是空”，逻辑有效性还要 `IsValid`。 |
| Actor 明明 `Destroy` 了，为什么还能读到数据？ | 销毁是标记加延迟回收，GC 之前内存可能还在；能读到不代表合法，随时可能踩到正在清理的状态。 |
| 什么时候可以只用裸指针？ | 只在同一个函数、同一帧内、来源确定且期间不会被销毁时；一旦跨帧或跨回调，就换成弱引用并在使用点判。 |

### ④ 真实坑

1. **只判 `nullptr` 就调 API**：目标 Actor 上一帧被 `Destroy`，指针仍非空，`SetActorLocation` 走进已销毁对象的逻辑，轻则无效重则崩。正确做法是 `IsValid` 加 `IsActorBeingDestroyed`。
2. **缓存裸指针没标 `UPROPERTY`**：成员 `AActor* Target;` 没被 GC 看见，一次垃圾回收后地址悬垂，PIE 里表现为随机崩溃。改成 `UPROPERTY() TObjectPtr` 或 `TWeakObjectPtr`。
3. **异步加载回调里直接用捕获的 `this`**：加载完成前对象已销毁，回调仍然执行并访问成员。回调里先用弱引用取对象，再判 `IsValid`。
4. **组件 `IsValid` 通过但没注册**：构造期或 `Attach` 之前组件对象存在，但 `IsRegistered()` 为假，碰撞、Tick、网络复制都不生效，调试时像“代码没跑”。
5. **世界关闭阶段还在操作对象**：PIE 结束或关卡切换时 `bIsTearingDown` 为真，晚到的 Tick/定时器继续访问 Actor，日志里出现大量无效调用。进入逻辑前先判世界状态。

### ⑤ 练习

**A 写**：写一个 `UMyTargetingComponent`，提供 `SetTarget(AActor*)`，内部用 `TWeakObjectPtr` 保存目标；`TickComponent` 每 0.5 秒检查一次目标，目标为空或 `IsActorBeingDestroyed()` 时清空缓存并打一条日志，然后直接返回。

**提示**：① 缓存一律用 `TWeakObjectPtr`，每次使用前重新 `Get()`，别把 `Get()` 结果存成成员长期用；② 判断顺序固定成“空 → `IsValid` → `IsActorBeingDestroyed` → 世界 `bIsTearingDown`”，缺哪层补哪层，别压缩成一个 `if`；③ 配合 `EndPlay` 里的 `Reset()` 和 `stat gc`，观察 Destroy 到回收之间的窗口，验证“非空但无效”确实存在。

验收标准：编译无警告；PIE 中把目标 Actor 销毁后，0.5 秒内出现且只出现一次“目标失效”日志；日志之后不再有任何对目标的访问，能指着代码说明每一层判断拦住了什么。

**B 讲**：2 分钟口述“UE 里为什么不能只判 `nullptr`”。必须覆盖销毁的两阶段、`UPROPERTY` 的可达性不等于可用性、跨帧使用点复判三个点，并主动举一个异步回调晚到的例子。

验收标准：不看稿讲完；三个点各有一句明确结论；能说清 `TWeakObjectPtr` 与 `TObjectPtr` 的选用边界。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-64"></a>
## U64 · Q64 悬垂指针是怎么产生的，怎么防？

> 来源：题库 UE 第 64 题 ｜ 速背卡：[Q64](./速背.md#ue-q64) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：悬垂指针的本质是“持有引用的方式和对象真实生命周期不匹配”，防御手段就是把每一处持有都换成 GC 能看见、或能自动失效的引用。

**学完能做到**
- 写代码：把一个长期缓存裸指针的组件改成弱引用加清理，并在 `EndPlay` 里解绑、清 timer。
- 讲出来：说出悬垂的三类来源，以及弱引用“能检测但不阻止”的边界。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 悬垂指针只是“忘记判空”造成的 | 判空只能兜底；根因是持有方式（裸指针、裸 `this` 捕获、GC 看不见的容器）和对象真实生命周期不匹配 |
| 用了 `TWeakObjectPtr` 就不会悬垂 | 它只保证失效后 `Get()` 返回空；使用点不判、或拿到工作线程去解引用，照样崩 |
| `Destroy()` 之后指针就“安全”了 | `Destroy()` 只标记待销毁并走 `EndPlay`，内存回收延后，这中间的误用不会立刻报错，问题被推迟 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 没标 `UPROPERTY` 的裸指针成员不在 GC 引用图里 | 下一次 GC 直接回收对象，指针变成悬垂 |
| `Destroy()` 只标记待销毁并走 `EndPlay`，内存回收延后 | 销毁到回收之间指针可读，误用不会立刻报错，问题被推迟 |
| Lambda、`AddRaw` 捕获裸 `this`，生命周期与委托完全无关 | 对象先死、回调后到，直接野指针调用 |
| `TWeakObjectPtr`、`AddUObject` 不延长对象寿命，但失效后能返回空 | 这是“能检测”，不是“能防止”，使用点不判照样崩 |
| 非 UObject 的裸指针、引用没有 GC 兜底 | 需要 `shared_ptr/weak_ptr` 或明确的所有权约定 |

第一类来源是“GC 看不见”。GC 从根集合出发遍历引用图，只认 `UPROPERTY`、`TObjectPtr`、`AddReferencedObjects` 这些显式声明。一个普通 C++ 成员、一个局部 `TArray<AActor*>`、一个静态容器，GC 都不知道你在引用谁，对象一旦没有别的强引用就会被回收，你手里的地址立刻失去意义。
第二类来源是“销毁与回收的时间差”。Actor 的 `Destroy()` 是逻辑上的死亡，`EndPlay` 会跑，但内存要到 GC 才清扫。这段窗口里，裸指针读字段可能正常、调函数可能不崩，于是错误被掩盖到下一帧或下一次 GC，堆栈完全对不上现场。更麻烦的是组件、子对象往往随 Actor 一起走，外部还拿着它们的指针。

第三类来源是“回调捕获”。委托、定时器、异步任务、HTTP 回调都是“未来才执行”的代码，用裸 `this` 捕获相当于赌对象活得比回调久。引擎对 UObject 成员的委托绑定会用弱引用兜底，但 lambda 捕获裸指针、`AddRaw`、`std::thread` 里传 `this` 都没有这层保护。
防御的思路不是“记得判空”，而是分层：所有权用 `UPROPERTY`/`TObjectPtr` 明确；观察关系用 `TWeakObjectPtr`；未来执行的回调一律捕获弱引用；对象销毁时主动解绑、清定时器、清缓存。最后再用 `IsValid` 在使用点兜底。

**设计动机**：GC 只认反射引用图，引擎无法追踪 C++ 裸指针，也不可能在对象销毁时挨个通知持有者。安全只能靠“持有方式”来编码：所有权写成 `UPROPERTY`/`TObjectPtr` 进入引用图，观察关系写成 `TWeakObjectPtr` 拿到自动失效，未来才执行的回调在绑定处就带上弱引用上下文——这不是风格偏好，而是把“谁负责生命周期”写进类型里。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 长期观察另一个 Actor | `TWeakObjectPtr<AActor> CachedTarget;`，用时 `Get()` 加 `IsValid` |
| 自己拥有的组件、子对象 | `UPROPERTY() TObjectPtr<UXxxComponent> Comp;` |
| 定时器回调 | 保存 `FTimerHandle`，`EndPlay` 里 `ClearTimer` |
| 委托绑定 | `AddUObject` / `AddDynamic`（弱），或 `AddWeakLambda(this, ...)` |
| 销毁时统一清理 | `EndPlay` 里解绑、清 timer、`CachedTarget.Reset()` |
| 非 UObject 观察者引用 UObject | 继承 `FGCObject`，实现 `AddReferencedObjects` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`UMyEventManager` 子系统与 UHT 生成的 `MyListenerComponent.generated.h`，不能脱离工程独立编译。

```cpp
// UMyListenerComponent.cpp 片段：绑定、使用、清理三件事放在一起看
void UMyListenerComponent::BeginPlay()
{
    Super::BeginPlay();
    if (UMyEventManager* Mgr = GetWorld()->GetSubsystem<UMyEventManager>())
    {
        // AddUObject 内部是弱引用，不会阻止本组件被销毁
        Mgr->OnWaveStart.AddUObject(this, &UMyListenerComponent::HandleWaveStart);
    }
    GetWorld()->GetTimerManager().SetTimer(
        PollTimer, this, &UMyListenerComponent::Poll, 1.0f, true);
}
void UMyListenerComponent::Poll()
{
    AActor* Target = CachedTarget.Get();      // 弱引用：GC 后返回空
    if (IsValid(Target)) { /* 只有这里才允许解引用 */ }
    else { CachedTarget.Reset(); }            // 目标已回收，清掉观察
}
void UMyListenerComponent::EndPlay(const EEndPlayReason::Type Reason)
{
    if (UWorld* World = GetWorld())
    {
        if (UMyEventManager* Mgr = World->GetSubsystem<UMyEventManager>())
            Mgr->OnWaveStart.RemoveAll(this); // 槽位残留的根因在这里解决
        World->GetTimerManager().ClearTimer(PollTimer);
    }
    CachedTarget.Reset();
    Super::EndPlay(Reason);
}
```

出处：弱引用与对象生命周期管理见 Epic 文档《Object Pointers in Unreal Engine》；委托绑定的生命周期语义见 Epic 文档《Delegates and Lambda Functions》。不同版本的委托实现细节可能不同。

**可观察验证**

```cpp
// 绑定与清理各打一条，确认解绑路径真的执行过
UE_LOG(LogTemp, Log, TEXT("bound=%d"), BoundHandle.IsValid());
UE_LOG(LogTemp, Log, TEXT("weakAlive=%d"), CachedTarget.IsValid());
```

```plaintext
obj gc                          # 强制一次回收，观察弱引用与裸指针的差别
obj list class=AMyTargetActor   # 确认目标对象已不在列表里
```

- 目标 `Destroy()` 后打一次、`obj gc` 后再打一次：裸指针可能两次都非空，弱引用在回收后一定为空——差别就是“地址还在”和“还能不能用”。
- 若 `EndPlay` 之后仍出现 `HandleWaveStart` 日志，说明清理清单漏了某一条路径。

### ③ 面试怎么讲

**30 秒口述稿**

> 悬垂指针主要有三类来源：裸指针成员没标 `UPROPERTY`，GC 看不见就被回收；Actor `Destroy` 之后还拿着指针，销毁到回收之间还能读，问题被推迟；Lambda 或委托捕获了已经销毁的对象。防御分三层：所有权用 `UPROPERTY` 或 `TObjectPtr` 明确；观察关系用 `TWeakObjectPtr`，失效后返回空；回调用弱引用捕获，并在使用点判 `IsValid`。对象销毁时主动解绑、清定时器、清缓存。核心原则是不长期持有裸指针。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `TWeakObjectPtr` 一定能防住吗？ | 防不住“不判就用”。它只在对象失效后给你空，使用点不判照样崩；`Destroy` 到 GC 之间还可能返回非空，要配合 `IsValid`；工作线程里也不安全。 |
| 多线程下怎么处理？ | 对象销毁和 GC 都归游戏线程管。后台只传值或弱引用，回到游戏线程再 `Get()`，不要在后台解引用，也不要并发读写共享的弱指针。 |
| 用 `AddUObject` 绑定还会崩吗？ | 广播时引擎会跳过失效对象，通常不崩；但槽位残留、重复绑定、逻辑误触发仍然存在。lambda 捕获裸 `this` 没有这层保护。 |
| `TObjectPtr` 和 `TWeakObjectPtr` 怎么选？ | 所有权、生命周期由我负责，用 `UPROPERTY` + `TObjectPtr`；只是观察、可以随时没有，用 `TWeakObjectPtr`。 |

### ④ 真实坑

1. **成员裸指针漏标 `UPROPERTY`**：`AActor* Target;` 在 PIE 里跑几分钟后崩溃，堆栈指向已回收内存。漏标就是告诉 GC“这里没有引用”。
2. **`Destroy` 后继续用指针**：销毁逻辑里只 `Destroy()` 没清外部引用，下一帧别的系统还在 `SetActorLocation`。正确做法是销毁方发通知，持有方清缓存，使用方再判 `IsValid`。
3. **Lambda 捕获 `this` 做延时任务**：定时器或异步任务回调晚于对象销毁，访问成员直接崩。改成捕获 `TWeakObjectPtr`，回调里取不到就返回。
4. **全局容器存裸指针**：静态 `TArray<AActor*>` 跨关卡累积，旧关卡的对象被回收后全是悬垂，还阻止不了 GC。要么存弱引用，要么在关卡切换时清空。

### ⑤ 练习

**A 写**：把一个“组件里裸指针缓存目标 Actor 并每秒访问一次”的写法改成安全版本：目标用 `TWeakObjectPtr`，访问集中在定时器回调里，`EndPlay` 清 timer 和缓存。

**提示**：① 清理清单固定三项——委托 `RemoveAll(this)`、定时器 `ClearTimer`、缓存 `Reset()`，`EndPlay` 里一次写全；② lambda 与延时任务不用裸 `this`：改 `AddWeakLambda(this, ...)` 或捕获 `TWeakObjectPtr`，回调第一行先 `Get()`；③ 想复现漏标 `UPROPERTY` 的后果，把成员临时改回裸指针跑几分钟，看崩溃点落在哪。

验收标准：用 `obj gc` 之类的方式强制回收后，回调不再访问失效对象；销毁目标 Actor 后 1 秒内出现一次失效日志且无崩溃；代码里不存在跨帧传递的裸 Actor 指针。

**B 讲**：2 分钟口述“悬垂指针的三类来源和三层防御”。必须覆盖 GC 可达性、销毁与回收的时间差、回调捕获三个来源，并说清弱引用的能力边界。

验收标准：不看稿讲完；三类来源能各举一个项目里的例子；能说清为什么弱引用仍需要 `IsValid`。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-65"></a>
## U65 · Q65 Tick 里做什么会出事？

> 来源：题库 UE 第 65 题 ｜ 速背卡：[Q65](./速背.md#ue-q65) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：Tick 的成本是“单次开销 × 实例数 × 帧率”，任何“每帧都做但其实很少变”的事放进去，都会被这个乘法放大成卡顿。

**学完能做到**
- 写代码：把一段每帧轮询的逻辑改成降频加缓存，并保留真正需要逐帧的部分。
- 讲出来：按代价从高到低排出 Tick 里的危险操作，并给出替代方案。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| Tick 里只写几行，开销可以忽略 | 成本是“单次开销 × 实例数 × 帧率”，几行 O(N) 的调用在几百个实例上一样放大成卡顿 |
| 设了 `TickInterval` 就算优化完了 | 降频只是把成本除以一个系数，本质还是轮询；能事件驱动才算解决 |
| 调试绘制只影响 PIE，不会进包 | 是否编译进 Shipping 取决于配置，不能假设它一定自动消失；持久绘制还会累积对象 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| Tick 每帧执行，成本乘以实例数和帧率 | 单次 0.05ms 的小操作，200 个实例也能吃掉可观预算 |
| 每帧 `Spawn`/`Destroy` 触发构造、组件注册、GC 记账 | 分配抖动加 GC 尖峰，表现为周期性卡顿 |
| `GetAllActorsOfClass`、`FindActor` 是 O(N) 遍历 | 对象越多越慢，关卡流式加载时结果还不稳定 |
| 同步 `LoadObject` 在主线程做 IO 和解码 | 首次加载直接 hitch，包体越大越明显 |
| 每帧 `AddDynamic` 会累积槽位 | 一次广播调用多次，越跑越慢且难排查 |
| 调试绘制每帧生成图元，还可能留下持久对象 | PIE 里拖慢帧率；是否编译进 Shipping 取决于配置 |

Tick 最大的问题不是“某一行慢”，而是它出现在所有实例的热路径上。一个 Actor 的 Tick 里做一次全局查找，场上有 100 个同类 Actor，就是每帧 100 次全场景遍历；帧率越低 DeltaTime 越大，逻辑又可能补更多工作，形成恶性循环。
第二类问题是内存分配。每帧 `Spawn`、每帧构造大 `TArray`、每帧拼接字符串，都会让分配器持续工作，产生内存碎片和 GC 压力。GC 的扫描成本与对象数量正相关，对象越多，尖峰越长，而尖峰又落在游戏线程上。

第三类问题是“同步等待”。`LoadObject`、`LoadClass` 这类同步加载在第一次调用时真的要读盘、反序列化，主线程被卡住就是 hitch。异步加载把等待拆到后台，回调再回主线程，玩家感知的是流式加载而不是卡顿。
判断标准可以压缩成一句话：这段逻辑是“每帧都在变”，还是“事件发生时才变”？插值、朝向、位移这种连续量属于前者；血量变化、波次开始、进入范围属于后者。后者一律不该写在 Tick 里。
顺带一提，降频（`TickInterval`、累加器）只是把成本除以一个系数，不改变“轮询”的本质；能事件驱动就事件驱动，不能才降频。

**设计动机**：Tick 是引擎留给每帧逻辑的统一入口，写起来最直接，所以最容易被当成万能轮询点；但帧预算由整个关卡的所有 Actor 共享，引擎无从判断某段逻辑其实该由事件触发。于是只能按“每帧都在变”还是“事件发生才变”这条线自己分流，把该由事件驱动的东西挡在 Tick 之外。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 周期性检查（0.2–1 秒一次） | `SetTimer`，或 Tick 里累加时间做降频 |
| 状态变化才执行 | 委托、Overlap 事件、属性 `OnRep` |
| 需要找目标 Actor | `BeginPlay` 缓存，或用管理器维护 `TMap` 索引 |
| 加载资源 | 异步加载（如 `FStreamableManager::RequestAsyncLoad`），回调里再用 |
| 高频生成/销毁（子弹、特效） | 对象池复用，避免每帧分配 |
| 调试绘制 | 宏开关控制，或只在按键触发时画一次 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`AMySpawner` 的类声明与 UHT 生成的 `MySpawner.generated.h`，不能脱离工程独立编译。

```cpp
// AMySpawner.cpp 片段：把“每帧全场景找目标”改成“缓存 + 降频”
void AMySpawner::BeginPlay()
{
    Super::BeginPlay();
    // 目标列表在波次开始时构建一次，Tick 里只做轻量遍历
    RebuildTargetCache();
}

void AMySpawner::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    Accum += DeltaSeconds;
    if (Accum < PollInterval)   // PollInterval 例如 0.2s，按项目需要设
    {
        return;                 // 没到检查点就直接返回，连遍历都不做
    }
    Accum = 0.0f;
    for (const TWeakObjectPtr<AActor>& Weak : CachedTargets)
    {
        if (AActor* Target = Weak.Get())
        {
            if (IsValid(Target)) { /* 轻量逻辑，不做加载、不做 Spawn */ }
        }
    }
    UpdateAim(DeltaSeconds);    // 真正需要逐帧的只有插值/朝向这类连续量
}
```

出处：Tick 成本与常见性能陷阱见 Epic 文档《Common Memory and CPU Performance Considerations》。`TickInterval`、定时器与异步加载的具体接口视引擎版本而定。

**可观察验证**

```cpp
// 降频是否生效：用计数代替日志，对比 Tick 次数与真正轮询次数
UE_LOG(LogTemp, Log, TEXT("tick=%d poll=%d"), TickCount, PollCount);
```

```plaintext
stat unit         # 对比 Game / Draw 两项，Game 线程下降说明降频生效
stat game         # 细分 Game 线程里 Tick 与 GC 的占比
```

- 同一关卡跑 A/B 两版，在 `stat unit` 的 Game 列上读数差异最直接；对比时保持视角与关卡一致。
- 把每帧 `DrawDebug` 那几行临时注释掉再测一次，可确认调试绘制自己就吃掉了一部分帧预算。

### ③ 面试怎么讲

**30 秒口述稿**

> Tick 里最忌讳几类事：每帧 `Spawn` 或 `Destroy`，带来分配和 GC 压力；每帧 `GetAllActorsOfClass` 或 `FindActor`，O(N) 遍历还会随关卡变化；同步 `LoadObject`，直接卡主线程；频繁字符串拼接和大容器构造，制造分配抖动；每帧 `AddDynamic`，槽位越积越多、回调重复执行；还有每帧 `DrawDebug` 刷屏。这些要么事件驱动，要么缓存，要么降频，Tick 里只留真正逐帧的东西。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 为什么每帧 `Spawn` 特别伤？ | 不只是构造开销：组件注册、碰撞注册、网络复制登记、GC 对象数量增长都算在里面，销毁再触发一轮清理，最终表现为周期性 GC 尖峰。 |
| `DrawDebug` 有什么问题？ | 每帧生成线段和文字要走调试渲染管线，PIE 里明显拖帧；持久绘制还会累积对象。是否编译进 Shipping 取决于 `ENABLE_DRAW_DEBUG` 之类的配置，不能假设它一定自动消失。 |
| 设 `TickInterval` 就够了吗？ | 它只是降频，仍然是轮询，会牺牲响应精度。能事件驱动的场景优先事件驱动，降频是退而求其次。 |
| 必须轮询怎么办？ | 降频加分批：每帧只处理一部分对象（索引轮转），把一次大遍历摊到多帧，避免单帧尖峰。 |
| 每帧 `AddDynamic` 会怎样？ | 槽位不断累积，一次广播把同一函数调用 N 次，逻辑重复执行还可能互相覆盖状态。绑定放在 `BeginPlay`，或先 `Remove` 再 `Add`。 |

### ④ 真实坑

1. **Tick 里做全场景查找**：`GetAllActorsOfClass` 每帧返回新数组，既分配又遍历，场上单位一多直接掉帧。用管理器索引或事件维护列表。
2. **每帧生成弹壳再销毁**：短时间大量 `Spawn`/`Destroy`，GC 尖峰和内存碎片一起出现，表现为每隔几秒卡一下。用对象池复用。
3. **Tick 里同步加载**：第一次触发时主线程读盘解码，hitch 明显；网络差或包体大时更糟。改成异步加载，回调里再应用。
4. **Tick 里重复绑定委托**：每帧 `AddDynamic` 没去重，回调次数线性增长，日志刷屏且逻辑错乱。绑定移到 `BeginPlay`，或使用 `AddUniqueDynamic`。
5. **Tick 里拼字符串**：调试日志每帧 `FString::Printf`，堆分配持续发生，Profile 里分配热点全在这里。用 `FName`、按条件输出或直接删掉。

### ⑤ 练习

**A 写**：准备两个同类 Actor，各 100 个：A 版在 Tick 里每帧 `GetAllActorsOfClass` 找玩家，B 版在 `BeginPlay` 缓存玩家并在 Tick 里降频到 0.2 秒检查。用 `stat unit` 或 `stat game` 对比 Game 线程耗时。

**提示**：① 把 Tick 里每一行按“连续量 / 事件量”标一次，事件量全部移出去，剩下的才留；② 周期性检查优先 `SetTimer`，必须写在 Tick 里就用 `Accum += DeltaSeconds` 降频，遍历对象用 `TWeakObjectPtr` 缓存；③ A/B 对比时用同一关卡、同一视角，只看 `stat unit` 的 Game 列，别被编辑器自身开销干扰。

验收标准：B 版 Game 线程耗时明显低于 A 版；B 版逻辑结果与 A 版一致（能正确感知玩家存在）；代码中 Tick 内没有资源加载、没有 Spawn/Destroy、没有委托绑定。

**B 讲**：2 分钟口述“Tick 里按代价排序的危险操作及替代方案”。至少覆盖生成销毁、全局查找、同步加载、重复绑定、调试绘制五类，并给出判断标准。

验收标准：不看稿讲完；五类操作都能说出替代方案；能解释为什么“降频不等于解决”。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-66"></a>
## U66 · Q66 为什么构造函数里 GetWorld() 是空的？

> 来源：题库 UE 第 66 题 ｜ 速背卡：[Q66](./速背.md#ue-q66) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：构造函数跑在对象生命周期的最前端，那时 World、Level、组件注册都还没就位，而 CDO 更是一个连游戏实例都没有的模板对象。

**学完能做到**
- 写代码：把构造函数里依赖 World 的逻辑安全迁移到 `BeginPlay` 或 `PostInitializeComponents`。
- 讲出来：说清 CDO 为什么也会执行构造函数，以及构造期到底能做什么。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 构造函数只在实例化时跑一次 | CDO 也走同一个构造函数，那时没有 World、没有 GameInstance |
| `GetWorld()` 偶尔能拿到值，说明构造函数里可以用 | 是否非空取决于创建路径和引擎版本；按“可能为空”处理才安全 |
| `OnConstruction` 可以替代构造函数做初始化 | 编辑器改属性也会触发、执行频率高；只该跑一次的运行时初始化还是放 `BeginPlay` |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 构造函数在对象创建早期执行，World/Level 尚未关联 | `GetWorld()` 返回空，任何依赖世界的调用都失效 |
| CDO（类默认对象）也会走构造函数，且没有游戏实例 | 构造逻辑必须能在“无 World、无 GameInstance”下成立 |
| 组件在构造期只是被创建，尚未 `RegisterComponent` | 组件上的世界查询、碰撞、Tick 都还没生效 |
| Spawn 流程是“构造 → 关联 Level/World → 初始化组件 → `BeginPlay`” | World 的可用性随时机递增，越晚越安全 |
| 构造函数会在编辑器打开蓝图、热重载时反复执行 | 构造里的副作用（Spawn、绑委托）会在编辑器里重复发生 |

理解这题的关键是分清两种对象。第一种是 CDO：引擎为每个 UClass 创建一个默认对象，用来存默认属性、给编辑器展示、给蓝图继承做模板。它在引擎启动或类加载时构造，那时没有地图、没有 World、没有 GameInstance，所以构造函数里 `GetWorld()` 必然是空。

第二种是运行时实例。`SpawnActor` 的流程里，先分配对象并执行构造函数，然后才把 Actor 关联到 Level 和 World，再初始化组件、调用 `PostInitializeComponents`，最后在游戏开始时 `BeginPlay`。构造函数处在链条最前端，World 还没轮到赋值，组件也还没注册，很多 API 即使对象存在也不会生效。

这就是为什么“构造里设默认值”是正确用法，“构造里查世界”是错误用法。默认值、`CreateDefaultSubobject`、组件挂接关系、`ConstructorHelpers` 加载默认资源，这些都不依赖 World；而 `SpawnActor`、查其他 Actor、取 `TimerManager`、绑定外部委托，都必须等 World 就位。

`OnConstruction` 常被误当成构造函数用。它在对象构建完成后调用，编辑器中修改属性也会触发，World 通常可用，但执行频率高、可能在编辑器里跑，重逻辑会拖慢编辑器。真正只需要在游戏里执行一次的初始化，`BeginPlay` 才是默认答案。

**设计动机**：Actor 的创建被拆成“分配构造 → 关联 Level/World → 注册组件 → `BeginPlay`”多个阶段，是为了让同一套构造逻辑同时服务 CDO（编辑器展示、蓝图模板）、运行时 Spawn 和编辑器拖拽。代价就是构造函数跑在最前端，World 还没就位，凡依赖世界的动作都必须推迟到后面的阶段。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 设默认属性、创建子对象 | 构造函数：`CreateDefaultSubobject`、直接赋值 |
| 需要 World、TimerManager、其他 Actor | `BeginPlay`（或 `PostInitializeComponents`） |
| 需要组件已注册 | `OnRegister` / `PostInitializeComponents` |
| 编辑器里改属性就要看到效果 | `OnConstruction`，注意它也会在编辑器执行 |
| 运行时动态创建组件 | `NewObject` + `RegisterComponent` |
| 构造里加载默认资源 | `ConstructorHelpers::FObjectFinder`，只应在构造函数使用 |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`AMyTower` 的类声明与 UHT 生成的 `MyTower.generated.h`，不能脱离工程独立编译。

```cpp
// AMyTower.cpp 片段：构造只设默认值与子对象，世界相关逻辑推迟
AMyTower::AMyTower()
{
    PrimaryActorTick.bCanEverTick = true;
    Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
    SetRootComponent(Mesh);

    FireInterval = 1.0f;      // 纯默认值，不依赖 World
    // 这里不要 GetWorld()、SpawnActor、AddDynamic
}

void AMyTower::PostInitializeComponents()
{
    Super::PostInitializeComponents();
    // 组件已创建并注册，但游戏还没正式开始；适合做依赖组件的初始化
}

void AMyTower::BeginPlay()
{
    Super::BeginPlay();
    if (UWorld* World = GetWorld())   // 到这里 World 才可靠
    {
        World->GetTimerManager().SetTimer(
            FireTimer, this, &AMyTower::FireOnce, FireInterval, true);
    }
}
```

出处：Actor 生命周期阶段与 `GetWorld` 可用时机见 Epic 文档《Unreal Engine Actor Lifecycle》。不同创建路径（Spawn、编辑器、蓝图编译）下的细节视引擎版本而定。

**可观察验证**

```cpp
// 同一条日志贴进 构造函数 / PostInitializeComponents / BeginPlay，对比 World 可用性
UE_LOG(LogTemp, Log, TEXT("%s: World=%s"), *FString(__FUNCTION__),
    GetWorld() ? TEXT("valid") : TEXT("null"));
```

```plaintext
obj list class=AMyTower   # CDO 与实例都会出现在对象表里
stat unit                 # 确认定时逻辑在 BeginPlay 之后才启动，没有在构造期触发
```

- 编辑器里双击打开该蓝图：构造里若有 `GetWorld()->...`，Output Log 在 CDO 构造处就会报错或崩。
- 进 PIE 看三条日志顺序，`World` 一栏应当从 `null` 变为 `valid`。

### ③ 面试怎么讲

**30 秒口述稿**

> 构造函数执行时 World 还没创建或还没关联，`GetWorld()` 返回空，组件也未必注册好。而且每个类还有 CDO，它在引擎启动或类加载时就构造，根本没有游戏实例。所以构造函数里不能 `SpawnActor`、不能查其他 Actor、不能用需要 World 的 API，只能设默认值、建子对象、用 `ConstructorHelpers` 加载默认资源。要 World 就放到 `PostInitializeComponents` 或 `BeginPlay`，最稳的是 `BeginPlay` 加判空。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| `PostInitializeComponents` 里 World 一定有吗？ | Spawn 出来的实例到这一步通常已关联 World；但 CDO 不会走这里，编辑器某些创建路径也要小心。最稳仍是 `BeginPlay` 加判空，不能把“通常有”当保证。 |
| 构造函数里能做什么？ | 设默认值、`CreateDefaultSubobject`、设置组件挂接关系、`ConstructorHelpers` 加载默认资源、初始化纯 C++ 成员。不能依赖 World、其他 Actor、委托目标。 |
| 为什么 CDO 也要执行构造函数？ | 编辑器要展示默认属性，蓝图要继承默认值，`NewObject` 也要有模板。构造逻辑必须对“没有世界”成立，否则编辑器打开蓝图或引擎启动就可能崩。 |
| 构造函数里 `GetWorld()` 有时不是空？ | 某些已存在对象的路径可能出现，但不能依赖，行为随版本和创建路径变化。把它当“可能为空”处理才安全。 |
| `OnConstruction` 和 `BeginPlay` 有什么区别？ | `OnConstruction` 在对象构建后调用，编辑器改属性也会跑，适合可视化调整；`BeginPlay` 只在运行时一次，适合游戏逻辑初始化。 |

### ④ 真实坑

1. **构造函数里取 `TimerManager`**：`GetWorld()->GetTimerManager()` 在 CDO 构造时直接空指针崩溃，编辑器打开蓝图就复现。定时器统一放 `BeginPlay`。
2. **构造函数里 `SpawnActor` 生成默认武器**：CDO 也执行一遍，编辑器里反复生成，运行时还可能重复。默认对象用 `CreateDefaultSubobject`，运行时生成放 `BeginPlay`。
3. **构造函数里绑定全局委托**：CDO 持有一份绑定，每个实例再绑一份，广播时收到多次回调，且编辑器里也在积累。绑定放 `BeginPlay`，`EndPlay` 解绑。
4. **组件构造函数里用 `GetOwner()`**：默认子对象创建阶段 Owner 关系还没完全建立，拿到空指针或旧值。需要 Owner 的逻辑放到 `OnRegister` 或 `BeginPlay`。
5. **`OnConstruction` 里做重活**：编辑器里每改一个属性就重建、重查、重生成，蓝图编辑卡顿。把可视化调整与运行时逻辑拆开，重逻辑移到 `BeginPlay`。

### ⑤ 练习

**A 写**：找一个在构造函数里调用 `GetWorld()`（或 `GetWorld()->GetTimerManager()`）的 Actor，把逻辑迁移到 `BeginPlay`；如果它同时需要组件已注册，就拆一部分到 `PostInitializeComponents`。

**提示**：① 构造里只留默认值、`CreateDefaultSubobject`、`ConstructorHelpers`，带 `GetWorld()` 的行直接移走；② 迁移按依赖分层：只依赖组件 → `PostInitializeComponents`，依赖世界/其他 Actor → `BeginPlay`，编辑器可视化 → `OnConstruction`；③ 改完先在编辑器里打开该蓝图确认不崩，再进 PIE 验证定时逻辑只启动一次。

验收标准：编辑器打开该蓝图不崩、不报 ensure；PIE 中定时逻辑按预期启动；构造函数中不再出现任何 `GetWorld`、`SpawnActor`、`AddDynamic` 调用。

**B 讲**：2 分钟口述“Actor 从构造到 BeginPlay 的初始化顺序，以及各阶段能做什么”。必须覆盖 CDO、组件注册、World 关联、`OnConstruction` 与 `BeginPlay` 的区别。

验收标准：不看稿讲完；能画出简化顺序并说明每步的可用性；能解释为什么构造里的副作用会在编辑器里重复。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-67"></a>
## U67 · Q67 委托没解绑会怎样？

> 来源：题库 UE 第 67 题 ｜ 速背卡：[Q67](./速背.md#ue-q67) ｜ 耗时 15 min ｜ 难度 ★★☆

**一句话**：委托没解绑的后果是“槽位残留 + 生命周期错配”，弱引用绑定通常只是不崩，lambda 和裸指针绑定则会把问题直接变成崩溃或泄漏。

**学完能做到**
- 写代码：写出一对管理器与监听者，在 `BeginPlay` 绑定、`EndPlay` 解绑并清定时器。
- 讲出来：区分弱引用绑定、裸指针绑定、共享指针绑定三种生命周期语义。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 弱引用绑定不会出问题 | 它只是不崩；槽位残留、重复绑定、逻辑误触发照样存在 |
| `RemoveAll` 会把别人的绑定一起删掉 | 只移除该对象在这个委托上的绑定，其他监听者不受影响 |
| 解绑委托就清理干净了 | 定时器回调也是“未来才执行”，不清 `FTimerHandle`、不清缓存同样会悬垂 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| 委托保存的是绑定项（对象加函数名、lambda、裸指针），不会自动管理监听者生命周期 | 监听者销毁后槽位仍在，广播照常发生 |
| `AddDynamic` / `AddUObject` 内部是弱引用，广播时会跳过失效对象 | 通常不直接崩，但会静默失效、重复执行、难以排查 |
| `AddRaw`、捕获裸 `this` 的 lambda 没有有效性检查 | 对象先销毁、回调后执行，野指针直接崩 |
| 每帧 `AddDynamic` 不去重会累积槽位 | 一次广播调用 N 次，越跑越慢，逻辑互相覆盖 |
| 长生命周期对象持有委托，绑定项可能让监听者无法按预期释放 | `AddSP` 或 lambda 捕获 `shared_ptr` 时尤其明显 |

委托的本质是一张回调表，表里存的是“怎么找到这个函数”，不是“这个对象还活着”。绑定 UObject 成员函数时，引擎会记录对象弱引用加函数名，广播时检查对象是否还有效，无效就跳过。这层保护解释了为什么“忘了解绑”经常不崩，但也埋下了更隐蔽的问题：槽位一直占着，对象销毁后列表越来越长，某些逻辑还会因为残留绑定被误触发。

动态委托（`AddDynamic`）还有一个额外约束：它按函数名绑定，函数改名、蓝图重构、接口调整之后，绑定会静默失效。这类问题不会崩，只会“回调不来了”，排查成本很高。

Lambda 绑定是另一回事。`AddLambda` 捕获裸 `this` 时，委托只保存一个可调用对象，里面是裸地址，广播前没有任何有效性检查。对象销毁后广播，就是标准的悬垂调用。想保留 lambda 的写法又想安全，可以用 `AddWeakLambda(this, ...)`，把对象作为弱引用上下文。
第三种是共享指针绑定。`AddSP` 或 lambda 捕获 `TSharedPtr` 会延长非 UObject 对象的寿命，用得好是生命周期管理，用得不好就是泄漏：管理器活多久，监听者就被强留多久。

清理的责任在监听者自己：`EndPlay` 里解绑该委托、清掉定时器、清缓存。只做其中一两项，剩下的路径迟早会以“偶发崩溃”的形式回来。

**设计动机**：委托是一张“谁想被通知”的登记表，引擎只负责按登记项广播，并不知道监听者什么时候会死。UObject 侧用弱引用兜住“对象已销毁就跳过”，但“还该不该被通知”“是不是被绑了多次”属于业务语义，只能由监听者在销毁时主动注销——清理责任因此落在监听者身上，而不是委托本身。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 绑定 UObject 成员函数 | `AddDynamic(this, &UMyClass::OnX)` 或 `AddUObject(this, &UMyClass::OnX)` |
| 防止重复绑定 | `AddUniqueDynamic`，或先 `Remove` 再 `Add` |
| 精确移除某一条 | 保存 `FDelegateHandle` 后 `Remove(Handle)` |
| 对象销毁时统一清理 | `EndPlay`：`Delegate.RemoveAll(this)`、`ClearTimer` |
| 想用 lambda 又怕裸 `this` | `AddWeakLambda(this, [this]{ ... })` |
| 非 UObject 监听者共享生命周期 | `AddSP` / `AddSPLambda`，明确谁持有 `shared_ptr` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、`UMyEventManager` 子系统与 UHT 生成的 `MyListenerComponent.generated.h`，不能脱离工程独立编译。

```cpp
// 管理器与监听者：绑定一次，销毁时清干净
void UMyListenerComponent::BeginPlay()
{
    Super::BeginPlay();
    if (UMyEventManager* Mgr = GetWorld()->GetSubsystem<UMyEventManager>())
    {
        Mgr->OnWaveStart.AddDynamic(this, &UMyListenerComponent::HandleWaveStart);
    }
    GetWorld()->GetTimerManager().SetTimer(
        TickTimer, this, &UMyListenerComponent::OnTimer, 1.0f, true);
}
void UMyListenerComponent::HandleWaveStart(int32 WaveIndex)
{
    // 回调里不要假设自己一定还“逻辑上有效”
}

void UMyListenerComponent::EndPlay(const EEndPlayReason::Type Reason)
{
    if (UWorld* World = GetWorld())
    {
        if (UMyEventManager* Mgr = World->GetSubsystem<UMyEventManager>())
            Mgr->OnWaveStart.RemoveAll(this);   // 不移除就会留下失效槽位
        World->GetTimerManager().ClearTimer(TickTimer);
    }
    Super::EndPlay(Reason);
}
```

出处：委托绑定方式与生命周期语义见 Epic 文档《Delegates and Lambda Functions》。`AddWeakLambda`、`AddUniqueDynamic` 等接口在不同版本中可能存在差异。

**可观察验证**

```cpp
// 绑定返回的句柄是“精确移除”的凭据；解绑后 IsValid 应为 false
FDelegateHandle Handle = Mgr->OnWaveStart.AddUObject(this, &UMyListenerComponent::HandleWaveStart);
UE_LOG(LogTemp, Log, TEXT("handleValid=%d"), Handle.IsValid());
```

```plaintext
Unreal Insights：看 Game 线程里委托广播的耗时是否随监听者数量线性增长
stat game：重复绑定会表现为波次越多、回调耗时越长
```

- 连续 `StartWave()` 三次，日志里每次广播的回调行数应严格等于监听者数量；多出来的就是重复绑定。
- 销毁监听者后再广播一次：回调行数为 0，只剩管理器自己的日志。

### ③ 面试怎么讲

**30 秒口述稿**

> 后果分两种：对象销毁后槽位还在，广播时可能访问失效对象；或者委托强持有对象，导致它无法回收。`AddDynamic` 和 `AddUObject` 内部是弱引用，不会阻止销毁，广播时一般会跳过失效对象，但槽位残留、重复绑定、逻辑误触发仍然存在；lambda 捕获裸 `this`、`AddRaw` 的裸指针没有这层保护，会直接崩。所以绑定放 `BeginPlay`，`EndPlay` 里 `RemoveAll(this)`，定时器也一起清掉。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 弱引用为什么还会崩？ | 弱引用只在“通过委托调用”这条路径上兜底。lambda 捕获裸 `this`、`AddRaw`、或者你把裸指针另存到别处，都没有兜底；而且兜底不等于逻辑正确，重复绑定会让同一对象被调用多次。 |
| 动态委托怎么正确移除？ | 用 `RemoveDynamic(this, &UMyClass::OnX)` 或 `RemoveAll(this)`；保存了 `FDelegateHandle` 就用 `Remove(Handle)`；lambda 绑定必须保存句柄，否则只能整体 `Clear`。 |
| `RemoveAll` 会不会误删别人的绑定？ | 只移除该对象在这个委托上的绑定，不影响其他监听者。 |
| `EndPlay` 一定会被调用吗？ | 正常销毁、关卡切换、PIE 结束会调用；但对象可能没进入游戏，或进程直接退出，所以关键资源清理在 `BeginDestroy` 里也应兜底。 |

### ④ 真实坑

1. **每帧 `AddDynamic`**：槽位线性增长，一次广播回调 N 次，伤害重复结算、UI 重复刷新。绑定移到 `BeginPlay`，或用 `AddUniqueDynamic`。
2. **lambda 绑定后想按函数移除**：`AddLambda` 没有函数指针可匹配，`RemoveDynamic` 无效。必须保存 `FDelegateHandle` 再 `Remove`。
3. **捕获裸 `this` 的延时回调**：定时器 lambda 在对象销毁后触发，访问成员崩溃。改捕获弱引用或用 `AddWeakLambda`。
4. **只解绑委托没清定时器**：委托清了，`SetTimer` 的回调还在跑，同样是悬垂访问。清理清单要覆盖委托、定时器、缓存三样。
5. **管理器强持监听者**：`AddSP` 或 lambda 捕获 `shared_ptr`，监听者该销毁时被委托留住，内存和逻辑都泄漏。明确所有权，必要时用弱引用绑定。

### ⑤ 练习

**A 写**：写一个 `UMyEventManager`（子系统）和一个监听组件。监听组件 `BeginPlay` 绑定 `OnWaveStart`，`EndPlay` 用 `RemoveAll(this)` 解绑并清定时器；管理器提供 `StartWave()` 广播。

**提示**：① 绑定写在 `BeginPlay`、解绑写在 `EndPlay`，两处放在同一文件里成对出现，漏一处就能看出来；② 想用 lambda 就改 `AddWeakLambda(this, ...)`，捕获裸 `this` 的值捕获 lambda 一律换掉；③ 需要精确移除时保留 `FDelegateHandle` 在 `EndPlay` 里 `Remove(Handle)`，别只靠 `RemoveAll(this)` 兜底。

验收标准：销毁监听组件后再 `StartWave()`，不崩且日志显示没有回调；连续调用 `StartWave` 三次，回调次数严格为 3 的倍数且不重复；监听组件销毁后管理器上的绑定列表为空（可加日志验证）。

**B 讲**：2 分钟口述“委托没解绑的两种后果和三种绑定的生命周期语义”。必须区分弱引用、裸指针、共享指针，并说明 `EndPlay` 清理清单。

验收标准：不看稿讲完；三种绑定各有一句结论；能解释为什么弱引用绑定仍可能产生逻辑 bug。

> ↑ 返回[目录](#toc)

---

<a id="ue-unit-68"></a>
## U68 · Q68 多线程里能碰 UObject 吗？

> 来源：题库 UE 第 68 题 ｜ 速背卡：[Q68](./速背.md#ue-q68) ｜ 耗时 15 min ｜ 难度 ★★★

**一句话**：UObject 归游戏线程所有，工作线程只该算纯数据；跨过这条线的方式只有三种——值拷贝、只读不可变数据、或者把结果排队送回游戏线程。

**学完能做到**
- 写代码：用 `AsyncTask` 加 `ParallelFor` 把一段重计算移出游戏线程，再回主线程应用结果。
- 讲出来：说清 UObject 的线程归属、GC 的线程约束，以及跨线程传引用的正确姿势。

**常见误解**

| 误解 | 事实 |
| --- | --- |
| 工作线程只读 UObject 就不会出问题 | GC 和游戏线程可能同时在写同一对象，只读也是数据竞争；按“默认不安全”处理 |
| 把 `TWeakObjectPtr` 传过去就能跨线程用 | 它不是并发安全的，只应传递，回到游戏线程再 `Get()` 并判有效 |
| 用 `std::thread` 起线程更直接 | 任务图之外没有线程标记与断言语境，出问题极难定位 |

### ① 本质

| 事实 | 开发中的后果 |
| --- | --- |
| UObject 的创建、销毁、属性修改默认只在游戏线程安全 | 工作线程里 `NewObject`、`SpawnActor`、改 `UPROPERTY` 会断言或数据竞争 |
| GC 只在游戏线程运行，遍历全部 UObject 与引用图 | 工作线程持有裸指针不阻止回收，只是把崩溃延后 |
| 工作线程适合纯数据：值拷贝、POD、索引或句柄 | 并行算完必须回游戏线程再落到 UObject |
| 跨线程传 `TWeakObjectPtr` 也不是并发安全的 | 只传递，回到游戏线程再 `Get()` |
| 渲染资源归渲染线程，UObject 归游戏线程 | 渲染相关操作走 `ENQUEUE_RENDER_COMMAND` |

UE 的线程模型可以粗分成三块：游戏线程拥有 UObject，负责游戏逻辑、GC、委托广播；渲染线程拥有渲染资源和场景代理；工作线程做纯计算，比如寻路、动画解算、物理子步、资源解码。这条边界不是建议，而是大量代码里用 `check(IsInGameThread())` 写死的假设。
GC 是最硬的约束。它需要从根集合出发遍历所有 UObject 和引用，必须与游戏逻辑串行，否则遍历过程中对象图被改就是灾难。所以即使你只是在工作线程“读一下”某个 UObject 字段，也可能与 GC 的写、与游戏线程的写撞在一起，属于数据竞争。

常见的错误是“把指针传过去就行”。工作线程拿到 `AActor*`，读它的位置、调它的方法，看起来能跑，实际上是在赌游戏线程这一帧不动它。正确做法是把需要的数据在进入工作线程前拷贝出来，算完把结果（值、索引、句柄）排队回游戏线程，再由游戏线程写回对象。

异步加载稍微特殊：IO 和解码在工作线程，但完成回调通常在游戏线程触发，回调里可以安全创建和使用 UObject；具体线程取决于加载方式和引擎版本，不要凭感觉假设。
`ParallelFor` 也是同理：循环体里只碰传入的裸数据和局部变量，不要捕获 `this` 去改成员，不要在循环体里创建 UObject。需要写回时，先把结果写进预分配的数组，循环结束回游戏线程统一应用。

**设计动机**：UObject 的所有权收归游戏线程、纯计算交给任务图，是为了让 GC 的遍历与游戏逻辑严格串行——引用图一旦可能被并发修改，标记-清扫就无法成立。所以并行只能发生在不碰引用图的数据上，跨线程接口只能给值、句柄、索引，以及一条排队回游戏线程的通道。

### ② 开发怎么用

| 需求 | 写法 |
| --- | --- |
| 并行处理一批纯数据 | `ParallelFor(Count, [&](int32 i){ ... })`，只写预分配数组 |
| 后台跑一个重任务 | `AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, ...)` |
| 把结果送回游戏线程 | `AsyncTask(ENamedThreads::GameThread, ...)` |
| 跨线程引用一个 Actor | 传 `TWeakObjectPtr`，在游戏线程 `Get()` |
| 工作线程产出结果 | 值捕获、`TFuture`、或无锁队列 `TQueue` |
| 渲染相关更新 | `ENQUEUE_RENDER_COMMAND` |
| 断言调用线程 | `check(IsInGameThread())` |

**示例说明**：以下为模块内片段，依赖 `CoreMinimal.h`、任务图（`AsyncTask`/`ParallelFor`）与 `AMyActor` 的类声明，不能脱离工程独立编译。

```cpp
// 后台算完，回游戏线程应用；全程不跨线程解引用 UObject
void AMyActor::StartHeavyWork(const TArray<float>& Input)
{
    // 值拷贝进入任务，避免工作线程读游戏线程的容器
    AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask,
        [WeakThis = TWeakObjectPtr<AMyActor>(this), Data = Input]()
        {
            TArray<float> Results;
            Results.SetNum(Data.Num());
            ParallelFor(Data.Num(), [&Data, &Results](int32 Index)
            {
                Results[Index] = HeavyMath(Data[Index]);   // 只碰局部数据
            });
            // 回游戏线程再碰 UObject，弱引用兜住对象已销毁的情况
            AsyncTask(ENamedThreads::GameThread,
                [WeakThis, Results = MoveTemp(Results)]()
                {
                    if (AMyActor* Self = WeakThis.Get())
                    {
                        Self->ApplyResults(Results);
                    }
                });
        });
}
```

出处：UObject 的线程约束与 GC 行为见 Epic 文档《Unreal Object Handling》；任务图与后台任务的用法见 Epic 文档《Task Graph》相关章节。回调线程与接口细节视引擎版本而定。

**可观察验证**

```cpp
// 线程归属打点：任务体内应为 0，回主线程应用结果时应为 1
UE_LOG(LogTemp, Log, TEXT("gameThread=%d"), IsInGameThread() ? 1 : 0);
check(IsInGameThread());   // 给“只在游戏线程调用”的函数加断言
```

```plaintext
stat unit         # 对比改造前后 Game 线程耗时
Unreal Insights：任务图通道与 Game 线程时间条是否重叠
```

- 后台任务里打一条 `gameThread=0`、回主线程应用结果的那条 `1`，两条日志一对比就是“跨越必须排队”的证据。
- 连续触发两次重任务不出现 ensure，说明没有在后台绕过游戏线程直接写 UObject。

### ③ 面试怎么讲

**30 秒口述稿**

> UObject 不是线程安全的，GC 也只在游戏线程跑。工作线程不能随便碰 UObject，不能创建销毁，不能改 `UPROPERTY`。要并行就用 `FRunnable` 或 TaskGraph 处理纯数据，结果回游戏线程再应用；跨线程传 UObject 用弱指针也要小心，最好不要传引用，只传值、句柄或索引。异步加载的 IO 在后台，但完成回调通常回游戏线程，不能假设回调在哪个线程。

**追问预案**

| 追问 | 答法 |
| --- | --- |
| 异步加载回调在哪个线程？ | 常规异步加载的完成回调在游戏线程触发，IO 与解码在工作线程；具体取决于加载方式和版本，不能一概而论，回调里最稳的是先判 `IsInGameThread()`。 |
| 哪些 UObject API 是线程安全的？ | 几乎没有普遍保证。个别只读查询可能在特定版本下安全，但要以文档为准；工程上按“默认不安全”处理，需要就回游戏线程。 |
| `TWeakObjectPtr` 跨线程安全吗？ | 它不是为并发读写设计的。跨线程只传递，回到游戏线程再 `Get()` 和判 `IsValid`。 |
| 为什么 GC 只在游戏线程？ | GC 要遍历并可能修改所有对象的引用状态，必须和游戏逻辑串行；并行 GC 的增量阶段也仍在游戏线程推进。 |
| `ParallelFor` 里能改成员吗？ | 不能。改成预分配数组加索引写回，循环结束回游戏线程统一应用。 |

### ④ 真实坑

1. **工作线程里 `SpawnActor`**：直接触发线程断言，或在非 Shipping 下崩溃。生成逻辑回游戏线程，后台只准备参数。
2. **后台读 Actor 成员**：位置、血量这些字段可能正被游戏线程写，读到撕裂数据，表现为随机数值异常。进入任务前拷贝快照。
3. **后台任务持有裸 `this`**：对象销毁后任务才完成，回主线程访问成员崩溃。捕获弱引用，取不到就丢弃结果。
4. **用 `std::thread` 直接调 UObject API**：没有任务图的线程标记，断言语境都不对，出问题极难定位。统一走 `AsyncTask`、`FRunnable` 或 `ParallelFor`。
5. **工作线程改 `UPROPERTY` 容器**：GC 正在扫描引用图，容器结构被并发修改，轻则断言重则内存破坏。所有结构性修改都回游戏线程。

### ⑤ 练习

**A 写**：把一个“Tick 里对 10 万个浮点做重计算”的逻辑改成 `AsyncTask` 加 `ParallelFor`：进入任务前拷贝输入，后台只算局部数组，完成后回游戏线程用弱引用取 Actor 并应用结果。

**提示**：① 进任务前把要用的数据值拷贝出来，任务体内只碰拷贝和局部变量；② 回写统一走 `AsyncTask(ENamedThreads::GameThread, ...)`，用 `TWeakObjectPtr` 捕获 `this`，取不到就丢弃结果；③ 给“只在游戏线程调用”的函数加 `check(IsInGameThread())`，改造时靠它抓越界调用。

验收标准：计算结果与单线程版本逐元素一致；连续触发多次任务不崩、不出现 ensure；`stat unit` 中 Game 线程耗时明显下降，结果应用仍发生在游戏线程。

**B 讲**：2 分钟口述“UE 的线程分工与跨线程访问 UObject 的安全模式”。必须覆盖游戏线程所有权、GC 约束、三种安全跨越方式，并说明弱引用仍需判有效。

验收标准：不看稿讲完；能说清为什么“只读”也不安全；能给出一个把结果送回游戏线程的具体写法。

> ↑ 返回[目录](#toc)

---

> 全部单元结束，返回 [速背卡片](./速背.md) 按顺序刷题。


