let r_b2fec =
    (typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : global)["r_b2fec"] ||
    ((typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : global)["r_b2fec"] = {}),
  u = r_b2fec;
const t_149e44 = (function () {
  let p = [
    {
      i: [
        0x3a,
        null,
        0x0,
        0x0,
        0x4b,
        0x1,
        0xa,
        null,
        0x0,
        0x2,
        0xa,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0x3,
        0x47,
        0x4,
        0x3,
        null,
        0x4,
        null,
        0x0,
        0x5,
        0x47,
        0x6,
        0x3,
        null,
        0x4,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0x7,
        0x47,
        0x8,
        0x3,
        null,
        0x47,
        0x9,
        0x3,
        null,
        0x4b,
        0xa,
        0x0,
        0xb,
        0x36,
        0x2,
        0x7a,
        null,
        0x7,
        0x0,
        0x6,
        0x0,
        0x46,
        0xc,
        0x20,
        null,
        0x34,
        null,
        0x4b,
        0xd,
        0x0,
        0xe,
        0x6,
        0x0,
        0x46,
        0xf,
        0xa,
        null,
        0x0,
        0x10,
        0xa,
        null,
        0x0,
        0x11,
        0x68,
        0x1,
        0x39,
        null,
        0x6,
        0x0,
        0x4,
        null,
        0x46,
        0x12,
        0x0,
        0x13,
        0x37,
        0x0,
        0x7a,
        null,
        0x38,
        null,
        0x3b,
        null,
        0x32,
        null,
        0x3c,
        0x14,
        0x0,
        0x15,
        0xd3,
        0x14,
        0x4b,
        0x16,
        0x4,
        null,
        0x46,
        0x17,
        0x0,
        0xb,
        0x37,
        0x2,
        0x3,
        null,
        0xd3,
        0x14,
        0x39,
        null,
        0x32,
        null,
        0x1,
        null,
        0x38,
        null,
      ],
      c: [
        "",
        "API_URL",
        "/tasks",
        "GET",
        "method",
        "cors",
        "mode",
        "application/json",
        "Content-Type",
        "headers",
        "fetch",
        0x2,
        "ok",
        "Error",
        "Erro ao buscar tasks (",
        "status",
        ")",
        0x1,
        "json",
        0x0,
        "error",
        "Não foi possivel buscar as tasks: ",
        "console",
        "log",
        "fetchTasks",
      ],
      p: 0x0,
      l: 0x1,
      j: { 0x1f: 0x2a, 0x32: 0x3f, 0x3e: 0x3f },
      x: { 0x0: [0x33, -0x1, 0x3f] },
      s: 0x1,
      ni: 0x18,
    },
    {
      i: [
        0x8,
        0x0,
        0x4,
        null,
        0x46,
        0x0,
        0x0,
        0x1,
        0x37,
        0x0,
        0x3,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x4b,
        0x2,
        0x46,
        0x3,
        0x47,
        0x4,
        0x3,
        null,
        0x7,
        0x1,
        0x3a,
        null,
        0x0,
        0x5,
        0x4b,
        0x6,
        0xa,
        null,
        0x0,
        0x7,
        0xa,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0x8,
        0x47,
        0x9,
        0x3,
        null,
        0x4,
        null,
        0x0,
        0xa,
        0x47,
        0xb,
        0x3,
        null,
        0x4,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0xc,
        0x47,
        0xd,
        0x3,
        null,
        0x4,
        null,
        0x0,
        0xc,
        0x47,
        0xe,
        0x3,
        null,
        0x47,
        0xf,
        0x3,
        null,
        0x4,
        null,
        0x6,
        0x1,
        0x4b,
        0x10,
        0x4,
        null,
        0x46,
        0x11,
        0x0,
        0x12,
        0x37,
        0x1,
        0x47,
        0x13,
        0x3,
        null,
        0x4b,
        0x14,
        0x0,
        0x15,
        0x36,
        0x2,
        0x7a,
        null,
        0x7,
        0x2,
        0x6,
        0x2,
        0x4,
        null,
        0x46,
        0x16,
        0x0,
        0x1,
        0x37,
        0x0,
        0x7a,
        null,
        0x7,
        0x3,
        0x6,
        0x2,
        0x46,
        0x17,
        0x20,
        null,
        0x34,
        null,
        0x4b,
        0x18,
        0x6,
        0x3,
        0x46,
        0x19,
        0x4,
        null,
        0x33,
        null,
        0x3,
        null,
        0x0,
        0x1a,
        0x6,
        0x2,
        0x46,
        0x1b,
        0xa,
        null,
        0x0,
        0x1c,
        0xa,
        null,
        0x0,
        0x12,
        0x68,
        0x1,
        0x39,
        null,
        0x4b,
        0x1d,
        0x0,
        0x1,
        0x36,
        0x0,
        0x3,
        null,
        0x4b,
        0x2,
        0x0,
        0x5,
        0x47,
        0x3,
        0x3,
        null,
        0x6,
        0x3,
        0x38,
        null,
        0x3b,
        null,
        0x32,
        null,
        0x3c,
        0x1e,
        0x0,
        0x1f,
        0xd3,
        0x1e,
        0x4b,
        0x20,
        0x4,
        null,
        0x46,
        0x21,
        0x0,
        0x15,
        0x37,
        0x2,
        0x3,
        null,
        0xd3,
        0x1e,
        0x39,
        null,
        0x32,
        null,
        0x1,
        null,
        0x38,
        null,
      ],
      c: [
        "preventDefault",
        0x0,
        "inputTask",
        "value",
        "title",
        "",
        "API_URL",
        "/tasks",
        "POST",
        "method",
        "cors",
        "mode",
        "application/json",
        "Accept",
        "Content-Type",
        "headers",
        "JSON",
        "stringify",
        0x1,
        "body",
        "fetch",
        0x2,
        "json",
        "ok",
        "Error",
        "message",
        "Erro ao criar task (",
        "status",
        ")",
        "loadTasks",
        "error",
        "Erro ao criar task: ",
        "console",
        "log",
        "addTask",
      ],
      p: 0x1,
      l: 0x3,
      j: { 0x40: 0x50, 0x45: 0x4d, 0x5b: 0x68, 0x67: 0x68 },
      x: { 0xd: [0x5c, -0x1, 0x68] },
      s: 0x1,
      ni: 0x22,
    },
    {
      i: [
        0x3a,
        null,
        0x0,
        0x0,
        0x4b,
        0x1,
        0xa,
        null,
        0x0,
        0x2,
        0xa,
        null,
        0x8,
        0x0,
        0xa,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0x3,
        0x47,
        0x4,
        0x3,
        null,
        0x4,
        null,
        0x0,
        0x5,
        0x47,
        0x6,
        0x3,
        null,
        0x4,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0x7,
        0x47,
        0x8,
        0x3,
        null,
        0x47,
        0x9,
        0x3,
        null,
        0x4b,
        0xa,
        0x0,
        0xb,
        0x36,
        0x2,
        0x7a,
        null,
        0x7,
        0x1,
        0x6,
        0x1,
        0x46,
        0xc,
        0x20,
        null,
        0x34,
        null,
        0x4b,
        0xd,
        0x0,
        0xe,
        0x6,
        0x1,
        0x46,
        0xf,
        0xa,
        null,
        0x0,
        0x10,
        0xa,
        null,
        0x4b,
        0x11,
        0x46,
        0x12,
        0x4,
        null,
        0x33,
        null,
        0x3,
        null,
        0x0,
        0x13,
        0xa,
        null,
        0x0,
        0x14,
        0x68,
        0x1,
        0x39,
        null,
        0x4b,
        0x15,
        0x0,
        0x16,
        0x36,
        0x0,
        0x3,
        null,
        0x3b,
        null,
        0x32,
        null,
        0x3c,
        0xd,
        0x0,
        0x17,
        0xd3,
        0xd,
        0x4b,
        0x18,
        0x4,
        null,
        0x46,
        0x19,
        0x0,
        0xb,
        0x37,
        0x2,
        0x3,
        null,
        0xd3,
        0xd,
        0x39,
        null,
        0x32,
        null,
        0x1,
        null,
        0x38,
        null,
      ],
      c: [
        "",
        "API_URL",
        "/tasks/",
        "DELETE",
        "method",
        "cors",
        "mode",
        "application/json",
        "Content-Type",
        "headers",
        "fetch",
        0x2,
        "ok",
        "error",
        "Erro ao deletar task (",
        "status",
        "): ",
        "data",
        "message",
        "Erro desconhecido",
        0x1,
        "loadTasks",
        0x0,
        "Não foi possivel deletar a task: ",
        "console",
        "log",
        "deleteTask",
      ],
      p: 0x1,
      l: 0x1,
      j: { 0x21: 0x33, 0x2c: 0x2f, 0x38: 0x45, 0x44: 0x45 },
      x: { 0x0: [0x39, -0x1, 0x45] },
      s: 0x1,
      ni: 0x1a,
    },
    {
      i: [
        0x8,
        0x0,
        0x4,
        null,
        0x46,
        0x0,
        0x7,
        0x0,
        0x4,
        null,
        0x46,
        0x1,
        0x7,
        0x1,
        0x4,
        null,
        0x46,
        0x2,
        0x7,
        0x2,
        0x3,
        null,
        0x3a,
        null,
        0x0,
        0x3,
        0x4b,
        0x4,
        0xa,
        null,
        0x0,
        0x5,
        0xa,
        null,
        0x6,
        0x0,
        0xa,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0x6,
        0x47,
        0x7,
        0x3,
        null,
        0x4,
        null,
        0x0,
        0x8,
        0x47,
        0x9,
        0x3,
        null,
        0x4,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0xa,
        0x47,
        0xb,
        0x3,
        null,
        0x4,
        null,
        0x0,
        0xa,
        0x47,
        0xc,
        0x3,
        null,
        0x47,
        0xd,
        0x3,
        null,
        0x4,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x6,
        0x1,
        0x47,
        0x1,
        0x3,
        null,
        0x4,
        null,
        0x6,
        0x2,
        0x47,
        0x2,
        0x3,
        null,
        0x4b,
        0xe,
        0x4,
        null,
        0x46,
        0xf,
        0x0,
        0x10,
        0x37,
        0x1,
        0x47,
        0x11,
        0x3,
        null,
        0x4b,
        0x12,
        0x0,
        0x13,
        0x36,
        0x2,
        0x7a,
        null,
        0x7,
        0x3,
        0x6,
        0x3,
        0x4,
        null,
        0x46,
        0x14,
        0x0,
        0x15,
        0x37,
        0x0,
        0x7a,
        null,
        0x7,
        0x4,
        0x6,
        0x3,
        0x46,
        0x16,
        0x20,
        null,
        0x34,
        null,
        0x4b,
        0x17,
        0x0,
        0x18,
        0x6,
        0x3,
        0x46,
        0x2,
        0xa,
        null,
        0x0,
        0x19,
        0xa,
        null,
        0x6,
        0x4,
        0x46,
        0x1a,
        0x4,
        null,
        0x33,
        null,
        0x3,
        null,
        0x0,
        0x1b,
        0xa,
        null,
        0x0,
        0x10,
        0x68,
        0x1,
        0x39,
        null,
        0x4b,
        0x1c,
        0x0,
        0x15,
        0x36,
        0x0,
        0x3,
        null,
        0x6,
        0x4,
        0x38,
        null,
        0x3b,
        null,
        0x32,
        null,
        0x3c,
        0x1d,
        0x0,
        0x1e,
        0xd3,
        0x1d,
        0x4b,
        0x1f,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0x13,
        0x37,
        0x2,
        0x3,
        null,
        0xd3,
        0x1d,
        0x39,
        null,
        0x32,
        null,
        0x1,
        null,
        0x38,
        null,
      ],
      c: [
        "id",
        "title",
        "status",
        "",
        "API_URL",
        "/tasks/",
        "PUT",
        "method",
        "cors",
        "mode",
        "application/json",
        "Accept",
        "Content-Type",
        "headers",
        "JSON",
        "stringify",
        0x1,
        "body",
        "fetch",
        0x2,
        "json",
        0x0,
        "ok",
        "Error",
        "Erro ao atualizar task (",
        "): ",
        "message",
        "Erro desconhecido",
        "loadTasks",
        "error",
        "Não foi possivel modificar a task: ",
        "console",
        "log",
        "updateTask",
      ],
      p: 0x0,
      l: 0x5,
      j: { 0x48: 0x5a, 0x53: 0x56, 0x61: 0x6e, 0x6d: 0x6e },
      x: { 0xb: [0x62, -0x1, 0x6e] },
      s: 0x1,
      ni: 0x21,
    },
    {
      i: [
        0x8,
        0x1,
        0x4,
        null,
        0x1,
        null,
        0x2a,
        null,
        0x34,
        null,
        0x3,
        null,
        0x0,
        0x0,
        0x9,
        0x1,
        0x32,
        null,
        0x3,
        null,
        0x8,
        0x2,
        0x4,
        null,
        0x1,
        null,
        0x2a,
        null,
        0x34,
        null,
        0x3,
        null,
        0x0,
        0x0,
        0x9,
        0x2,
        0x32,
        null,
        0x3,
        null,
        0x8,
        0x0,
        0x4b,
        0x1,
        0x4,
        null,
        0x46,
        0x2,
        0x0,
        0x3,
        0x37,
        0x1,
        0x7,
        0x3,
        0x8,
        0x1,
        0x34,
        null,
        0x6,
        0x3,
        0x8,
        0x1,
        0x47,
        0x4,
        0x3,
        null,
        0x32,
        null,
        0x6,
        0x3,
        0x8,
        0x2,
        0x47,
        0x5,
        0x3,
        null,
        0x6,
        0x3,
        0x38,
        null,
      ],
      c: ["", "document", "createElement", 0x1, "innerText", "innerHTML"],
      p: 0x3,
      l: 0x1,
      j: { 0x4: 0x9, 0x8: 0xa, 0xe: 0x13, 0x12: 0x14, 0x1c: 0x22, 0x21: 0x26 },
    },
    {
      i: [
        0x0,
        0x0,
        0x7,
        0x1,
        0x0,
        0x1,
        0x0,
        0x2,
        0x6,
        0x1,
        0x4b,
        0x3,
        0x0,
        0x4,
        0x36,
        0x3,
        0x7,
        0x2,
        0x6,
        0x2,
        0x8,
        0x0,
        0x47,
        0x5,
        0x3,
        null,
        0x6,
        0x2,
        0x38,
        null,
      ],
      c: [
        '\n        <option value="pendente">Pendente</option>\n        <option value="em andamento">Em andamento</option>\n        <option value="concluída">Concluída</option>\n    ',
        "select",
        "",
        "createElement",
        0x3,
        "value",
      ],
      p: 0x1,
      l: 0x2,
    },
    {
      i: [
        0xd5,
        0x0,
        0xd2,
        0x0,
        0x8,
        0x0,
        0x4,
        null,
        0x46,
        0x0,
        0x7,
        0x0,
        0x3,
        null,
        0x4d,
        null,
        0xd3,
        0x1,
        0x51,
        null,
        0x4,
        null,
        0x6,
        0x0,
        0x46,
        0x2,
        0x47,
        0x3,
        0x3,
        null,
        0x4b,
        0x4,
        0x0,
        0x5,
        0x36,
        0x1,
        0x3,
        null,
      ],
      c: ["target", "task", "value", "status", "updateTask", 0x1],
      p: 0x1,
      l: 0x1,
      a: 0x1,
    },
    {
      i: [
        0xd5,
        0x0,
        0xd2,
        0x0,
        0x8,
        0x0,
        0x4,
        null,
        0x46,
        0x0,
        0x0,
        0x1,
        0x37,
        0x0,
        0x3,
        null,
        0x4d,
        null,
        0x4,
        null,
        0xd3,
        0x2,
        0x47,
        0x2,
        0x3,
        null,
        0x4,
        null,
        0xd3,
        0x3,
        0x46,
        0x4,
        0x47,
        0x5,
        0x3,
        null,
        0x4,
        null,
        0xd3,
        0x6,
        0x47,
        0x6,
        0x3,
        null,
        0x4b,
        0x7,
        0x0,
        0x8,
        0x36,
        0x1,
        0x3,
        null,
      ],
      c: [
        "preventDefault",
        0x0,
        "id",
        "editInput",
        "value",
        "title",
        "status",
        "updateTask",
        0x1,
      ],
      p: 0x1,
      l: 0x0,
      a: 0x1,
    },
    {
      i: [
        0xd5,
        0x0,
        0xd2,
        0x0,
        0xd3,
        0x0,
        0x0,
        0x1,
        0x47,
        0x2,
        0x3,
        null,
        0xd3,
        0x3,
        0xd3,
        0x0,
        0x4,
        null,
        0x46,
        0x4,
        0x0,
        0x5,
        0x37,
        0x1,
        0x3,
        null,
      ],
      c: ["tdTitle", "", "innerText", "editForm", "appendChild", 0x1],
      p: 0x0,
      l: 0x0,
      a: 0x1,
    },
    {
      i: [
        0xd5,
        0x0,
        0xd2,
        0x0,
        0xd3,
        0x0,
        0x4b,
        0x1,
        0x0,
        0x2,
        0x36,
        0x1,
        0x3,
        null,
      ],
      c: ["id", "deleteTask", 0x1],
      p: 0x0,
      l: 0x0,
      a: 0x1,
    },
    {
      i: [
        0xd2,
        0x0,
        0x8,
        0x0,
        0xd7,
        0x0,
        0x3,
        null,
        0xda,
        0x1,
        0xda,
        0x2,
        0xda,
        0x3,
        0xda,
        0x4,
        0xda,
        0x5,
        0xda,
        0x6,
        0xd3,
        0x0,
        0x4,
        null,
        0x46,
        0x1,
        0xd9,
        0x1,
        0x4,
        null,
        0x46,
        0x2,
        0xd9,
        0x2,
        0x4,
        null,
        0x46,
        0x3,
        0xd9,
        0x3,
        0x4,
        null,
        0x46,
        0x7,
        0x7,
        0x4,
        0x3,
        null,
        0x4d,
        null,
        0x4,
        null,
        0x0,
        0x8,
        0x47,
        0x9,
        0x3,
        null,
        0x4,
        null,
        0x0,
        0xa,
        0x47,
        0xb,
        0x3,
        null,
        0x7,
        0x5,
        0x0,
        0xc,
        0x4b,
        0xd,
        0x0,
        0xe,
        0x36,
        0x1,
        0x7,
        0x6,
        0x0,
        0xf,
        0xd3,
        0x2,
        0x4b,
        0xd,
        0x0,
        0x10,
        0x36,
        0x2,
        0xd9,
        0x4,
        0x0,
        0xf,
        0x4b,
        0xd,
        0x0,
        0xe,
        0x36,
        0x1,
        0x7,
        0x8,
        0x0,
        0xf,
        0x0,
        0x11,
        0x6,
        0x5,
        0x4b,
        0x12,
        0x6,
        0x4,
        0x0,
        0xe,
        0x68,
        0x1,
        0x4,
        null,
        0x46,
        0x13,
        0x0,
        0x10,
        0x37,
        0x2,
        0x4b,
        0xd,
        0x0,
        0x10,
        0x36,
        0x2,
        0x7,
        0x9,
        0x0,
        0xf,
        0x4b,
        0xd,
        0x0,
        0xe,
        0x36,
        0x1,
        0x7,
        0xa,
        0xd3,
        0x3,
        0x4b,
        0x14,
        0x0,
        0xe,
        0x36,
        0x1,
        0x7,
        0xb,
        0x0,
        0x15,
        0x0,
        0x16,
        0x64,
        null,
        0x6,
        0xb,
        0x4,
        null,
        0x46,
        0x17,
        0x0,
        0x10,
        0x37,
        0x2,
        0x3,
        null,
        0x0,
        0x18,
        0x0,
        0x19,
        0x0,
        0x1a,
        0x4b,
        0xd,
        0x0,
        0x1b,
        0x36,
        0x3,
        0x7,
        0xc,
        0x0,
        0x18,
        0x0,
        0x19,
        0x0,
        0x1c,
        0x4b,
        0xd,
        0x0,
        0x1b,
        0x36,
        0x3,
        0x7,
        0xd,
        0x0,
        0x1d,
        0x4b,
        0xd,
        0x0,
        0xe,
        0x36,
        0x1,
        0xd9,
        0x5,
        0x0,
        0x1e,
        0x4b,
        0xd,
        0x0,
        0xe,
        0x36,
        0x1,
        0xd9,
        0x6,
        0xd3,
        0x6,
        0xd3,
        0x2,
        0x47,
        0x1f,
        0x3,
        null,
        0xd3,
        0x6,
        0xd3,
        0x5,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x0,
        0x21,
        0x0,
        0x22,
        0x64,
        null,
        0xd3,
        0x5,
        0x4,
        null,
        0x46,
        0x17,
        0x0,
        0x10,
        0x37,
        0x2,
        0x3,
        null,
        0x0,
        0x23,
        0x0,
        0x24,
        0x64,
        null,
        0x6,
        0xc,
        0x4,
        null,
        0x46,
        0x17,
        0x0,
        0x10,
        0x37,
        0x2,
        0x3,
        null,
        0x0,
        0x25,
        0x6,
        0xc,
        0x46,
        0x26,
        0x4,
        null,
        0x46,
        0x27,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x0,
        0x25,
        0x6,
        0xd,
        0x46,
        0x26,
        0x4,
        null,
        0x46,
        0x27,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x0,
        0x23,
        0x0,
        0x28,
        0x64,
        null,
        0x6,
        0xd,
        0x4,
        null,
        0x46,
        0x17,
        0x0,
        0x10,
        0x37,
        0x2,
        0x3,
        null,
        0x6,
        0xb,
        0x6,
        0x8,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x6,
        0xc,
        0x6,
        0xa,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x6,
        0xd,
        0x6,
        0xa,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0xd3,
        0x4,
        0x6,
        0x6,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x6,
        0x8,
        0x6,
        0x6,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x6,
        0x9,
        0x6,
        0x6,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x6,
        0xa,
        0x6,
        0x6,
        0x4,
        null,
        0x46,
        0x20,
        0x0,
        0xe,
        0x37,
        0x1,
        0x3,
        null,
        0x6,
        0x6,
        0x38,
        null,
        0xd6,
        0x0,
        0x1,
        null,
        0x38,
        null,
      ],
      c: [
        "task",
        "id",
        "title",
        "status",
        "tdTitle",
        "editForm",
        "editInput",
        "created_at",
        "long",
        "dateStyle",
        "short",
        "timeStyle",
        "tr",
        "createElement",
        0x1,
        "td",
        0x2,
        "pt-BR",
        "Date",
        "toLocaleString",
        "createSelect",
        "change",
        0x6,
        "addEventListener",
        "button",
        "",
        '<span class="material-symbols-outlined">edit</span>',
        0x3,
        '<span class="material-symbols-outlined">delete</span>',
        "form",
        "input",
        "value",
        "appendChild",
        "submit",
        0x7,
        "click",
        0x8,
        "btn-action",
        "classList",
        "add",
        0x9,
      ],
      p: 0x1,
      l: 0xf,
    },
    {
      i: [
        0xda,
        0x0,
        0x8,
        0x0,
        0x4b,
        0x1,
        0x0,
        0x2,
        0x36,
        0x1,
        0x7,
        0x1,
        0x6,
        0x1,
        0x4b,
        0x3,
        0x4,
        null,
        0x46,
        0x4,
        0x0,
        0x2,
        0x37,
        0x1,
        0x3,
        null,
      ],
      c: ["tr", "createRow", 0x1, "tBody", "appendChild"],
      p: 0x1,
      l: 0x1,
      a: 0x1,
    },
    {
      i: [
        0x4b,
        0x0,
        0x0,
        0x1,
        0x36,
        0x0,
        0x7a,
        null,
        0x7,
        0x0,
        0x4b,
        0x2,
        0x0,
        0x3,
        0x47,
        0x4,
        0x3,
        null,
        0x0,
        0x5,
        0x64,
        null,
        0x6,
        0x0,
        0x4,
        null,
        0x46,
        0x6,
        0x0,
        0x7,
        0x37,
        0x1,
        0x3,
        null,
        0x1,
        null,
        0x38,
        null,
      ],
      c: ["fetchTasks", 0x0, "tBody", "", "innerHTML", 0xb, "forEach", 0x1],
      p: 0x0,
      l: 0x1,
      s: 0x1,
    },
  ];
  function j(S) {
    return p[S];
  }
  for (let S = 0x0; S < p["length"]; S++) {
    let D = p[S];
    if (D["c"])
      for (let W = 0x0; W < D["c"]["length"]; W++) {
        let l = D["c"][W];
        if (
          typeof l === "string" &&
          l["length"] > 0x1 &&
          l[l["length"] - 0x1] === "n"
        )
          try {
            D["c"][W] = BigInt(l["slice"](0x0, -0x1));
          } catch (B) {}
      }
  }
  let P = {
      0x0: 0x9f,
      0x1: 0x10b,
      0x2: 0xf6,
      0x3: 0xe3,
      0x4: 0x2b,
      0x5: 0x1c9,
      0x6: 0xc1,
      0x7: 0x11b,
      0x8: 0x139,
      0x9: 0x1cc,
      0xa: 0x1c2,
      0xb: 0x60,
      0xc: 0xf9,
      0xd: 0x42,
      0xe: 0x1ae,
      0xf: 0x145,
      0x10: 0x1bb,
      0x11: 0x83,
      0x12: 0x68,
      0x13: 0x82,
      0x14: 0x62,
      0x15: 0x193,
      0x16: 0x1ef,
      0x17: 0xd,
      0x18: 0x63,
      0x19: 0x197,
      0x1a: 0x34,
      0x20: 0x9e,
      0x28: 0xd4,
      0x29: 0xca,
      0x2a: 0xd5,
      0x2b: 0x84,
      0x2c: 0x1eb,
      0x2d: 0x17b,
      0x2e: 0xf3,
      0x2f: 0x7,
      0x32: 0x7f,
      0x33: 0xcf,
      0x34: 0xc2,
      0x35: 0x4f,
      0x36: 0x5,
      0x37: 0x87,
      0x38: 0x1a3,
      0x39: 0xfb,
      0x3a: 0xf4,
      0x3b: 0xb,
      0x3c: 0x10,
      0x3d: 0x11c,
      0x3e: 0x2,
      0x3f: 0x11d,
      0x40: 0xb2,
      0x41: 0xdc,
      0x46: 0x172,
      0x47: 0xac,
      0x48: 0x92,
      0x49: 0x48,
      0x4a: 0x65,
      0x4b: 0x6d,
      0x4c: 0x93,
      0x4d: 0x80,
      0x4e: 0xaf,
      0x4f: 0x11f,
      0x50: 0x43,
      0x51: 0x6,
      0x52: 0x124,
      0x5a: 0xcb,
      0x5b: 0x13e,
      0x5c: 0x51,
      0x5d: 0x188,
      0x5e: 0x1d6,
      0x64: 0x1a6,
      0x65: 0x1ce,
      0x66: 0x1f0,
      0x67: 0x18b,
      0x68: 0x2e,
      0x69: 0xba,
      0x6a: 0xd1,
      0x6b: 0x113,
      0x6e: 0x176,
      0x6f: 0xa2,
      0x70: 0x1b3,
      0x78: 0x159,
      0x79: 0x1e3,
      0x7a: 0x24,
      0x7b: 0x144,
      0x7c: 0x46,
      0x7d: 0x107,
      0x7e: 0x1ab,
      0x7f: 0x40,
      0x80: 0x17c,
      0x8c: 0x1c,
      0x8d: 0x179,
      0x8e: 0xb0,
      0x90: 0x1db,
      0x91: 0xc9,
      0x92: 0x53,
      0x93: 0x19f,
      0x94: 0x18e,
      0x95: 0xe5,
      0x96: 0x183,
      0x97: 0x1fc,
      0x98: 0x0,
      0x99: 0x17d,
      0x9a: 0x130,
      0x9b: 0x1ad,
      0x9c: 0x142,
      0x9d: 0x19e,
      0x9e: 0xbb,
      0xa0: 0x15b,
      0xa1: 0x10a,
      0xa2: 0xc0,
      0xa3: 0x1c1,
      0xa4: 0xcc,
      0xa6: 0x1bf,
      0xa7: 0xb5,
      0xa8: 0xc8,
      0xa9: 0xd7,
      0xaa: 0x10f,
      0xab: 0x1f9,
      0xac: 0x16b,
      0xad: 0x131,
      0xae: 0xfd,
      0xaf: 0x1b8,
      0xc8: 0x191,
      0xc9: 0x1da,
      0xca: 0x1fa,
      0xd2: 0xe4,
      0xd3: 0x135,
      0xd4: 0xf7,
      0xd5: 0x1b4,
      0xd6: 0x114,
      0xd7: 0x175,
      0xd8: 0x8b,
      0xd9: 0x166,
      0xda: 0x1f7,
      0xfa: 0x152,
      0xfb: 0x1d8,
      0xfc: 0x11a,
      0xfd: 0x56,
      0xfe: 0x1b1,
      0xff: 0x18a,
      0x100: 0x1aa,
      0x101: 0x98,
      0x102: 0x16c,
      0x103: 0x1a0,
      0x104: 0x5c,
      0x105: 0x134,
    },
    o = new WeakSet();
  function U(d, T) {
    let c = [];
    for (let m = 0x0; m < T; m++) {
      let M = d["pop"]();
      if (M && typeof M === "object" && o["has"](M)) {
        let y = M["value"];
        if (Array["isArray"](y))
          for (let R = y["length"] - 0x1; R >= 0x0; R--) {
            c["push"](y[R]);
          }
      } else c["push"](M);
    }
    return c["reverse"](), c;
  }
  let Q = ![],
    L = 0x0,
    K = 0x0,
    g = ![],
    f = 0x1388,
    V = 0x3;
  function H() {
    if (!Q || g) return;
    let d = Date["now"]();
    if (L === 0x0) {
      L = d;
      return;
    }
    let T = d - L;
    L = d;
    if (T > f) {
      K++;
      if (K >= V) {
        g = !![];
        for (let c in P) {
          P[c] = (P[c] + 0x1) & 0x1ff;
        }
      }
    } else K = 0x0;
  }
  function* I(d, T, c, m, M, y) {
    let R = [],
      n = new Array((d["p"] || 0x0) + (d["l"] || 0x0)),
      h = 0x0,
      b = d["c"],
      Y = d["i"],
      w = d["j"] || {},
      X = d["x"] || {},
      q = Y["length"] >> 0x1,
      v = [],
      O = null,
      G = { hasReturn: ![], value: undefined },
      C = { hasBreak: ![], target: 0x0 },
      s0 = { hasContinue: ![], target: 0x0 },
      s1 = d["o"] || P;
    var s2 = 0x0,
      s3 = null;
    let s4 = d["jk"] || 0x0,
      s5 = d["bk"] || 0x0,
      s6 = function (sE) {
        return s4 ? sE ^ s4 : sE;
      },
      s7 = function (sE) {
        return s5 ? sE ^ s5 : sE;
      },
      s8 = { parent: c, vars: {} };
    if (T)
      for (let sE = 0x0; sE < Math["min"](T["length"], d["p"] || 0x0); sE++) {
        n[sE] = T[sE];
      }
    let s9 = null;
    if (d["nfe"] && d["ni"] !== undefined && m) {
      let si = d["c"][d["ni"]];
      s8["vars"][si] = m;
      if (!s8["constVars"]) s8["constVars"] = {};
      s8["constVars"][si] = !![];
      try {
        Object["defineProperty"](m, "name", {
          value: si,
          writable: ![],
          enumerable: ![],
          configurable: !![],
        });
      } catch (sJ) {}
    }
    let ss = 0x0;
    while (h < q) {
      try {
        while (h < q) {
          ++ss > 0x64 && ((ss = 0x0), H());
          let st = h << 0x1,
            sA = s7(Y[st]),
            sZ = sA;
          if (s3) {
            let sr = _smComputeState(s2, h),
              su = s3[sr];
            su && (sZ = su[sA]);
          }
          let sx = s1[sZ],
            sa = Y[st + 0x1],
            sF = sa === null ? undefined : typeof sa === "number" ? s7(sa) : sa;
          if (sZ === 0x7a) {
            let sp = R["pop"](),
              sj = yield { t: 0x1, v: sp };
            R["push"](sj), h++;
            continue;
          }
          if (sZ === 0x78) {
            let sP = R["pop"](),
              so = yield { t: 0x2, v: sP };
            R["push"](so), h++;
            continue;
          }
          if (sZ === 0x79) {
            let se = R["pop"](),
              sU = yield { t: 0x3, v: se };
            R["push"](sU), h++;
            continue;
          }
          switch (sx) {
            case s1[0x0]: {
              R["push"](b[sF]), h++;
              break;
            }
            case s1[0x1]: {
              R["push"](undefined), h++;
              break;
            }
            case s1[0x2]: {
              R["push"](null), h++;
              break;
            }
            case s1[0x3]: {
              R["pop"](), h++;
              break;
            }
            case s1[0x4]: {
              let sQ = R["pop"]();
              R["push"](sQ), R["push"](sQ), h++;
              break;
            }
            case s1[0x5]: {
              let sL = R["length"],
                sK = R[sL - 0x1];
              (R[sL - 0x1] = R[sL - 0x2]), (R[sL - 0x2] = sK), h++;
              break;
            }
            case s1[0x6]: {
              R["push"](n[sF]), h++;
              break;
            }
            case s1[0x7]: {
              (n[sF] = R["pop"]()), h++;
              break;
            }
            case s1[0x8]: {
              R["push"](T[sF]), h++;
              break;
            }
            case s1[0x9]: {
              (T[sF] = R["pop"]()), h++;
              break;
            }
            case s1[0xa]: {
              let sg = R["pop"](),
                sf = R["pop"]();
              R["push"](sf + sg), h++;
              break;
            }
            case s1[0xb]: {
              let sV = R["pop"](),
                sH = R["pop"]();
              R["push"](sH - sV), h++;
              break;
            }
            case s1[0xc]: {
              let sI = R["pop"](),
                sz = R["pop"]();
              R["push"](sz * sI), h++;
              break;
            }
            case s1[0xd]: {
              let sk = R["pop"](),
                sN = R["pop"]();
              R["push"](sN / sk), h++;
              break;
            }
            case s1[0xe]: {
              let sS = R["pop"](),
                sD = R["pop"]();
              R["push"](sD % sS), h++;
              break;
            }
            case s1[0xf]:
              R["push"](-R["pop"]()), h++;
              break;
            case s1[0x13]:
              R["push"](+R["pop"]()), h++;
              break;
            case s1[0x12]: {
              let sW = R["pop"](),
                sl = R["pop"]();
              R["push"](Math["pow"](sl, sW)), h++;
              break;
            }
            case s1[0x14]: {
              let sB = R["pop"](),
                sd = R["pop"]();
              R["push"](sd & sB), h++;
              break;
            }
            case s1[0x15]: {
              let sT = R["pop"](),
                sc = R["pop"]();
              R["push"](sc | sT), h++;
              break;
            }
            case s1[0x16]: {
              let sm = R["pop"](),
                sM = R["pop"]();
              R["push"](sM ^ sm), h++;
              break;
            }
            case s1[0x17]:
              R["push"](~R["pop"]()), h++;
              break;
            case s1[0x18]: {
              let sy = R["pop"](),
                sR = R["pop"]();
              R["push"](sR << sy), h++;
              break;
            }
            case s1[0x19]: {
              let sn = R["pop"](),
                sh = R["pop"]();
              R["push"](sh >> sn), h++;
              break;
            }
            case s1[0x1a]: {
              let sb = R["pop"](),
                sY = R["pop"]();
              R["push"](sY >>> sb), h++;
              break;
            }
            case s1[0x20]:
              R["push"](!R["pop"]()), h++;
              break;
            case s1[0x28]: {
              let sw = R["pop"](),
                sX = R["pop"]();
              R["push"](sX == sw), h++;
              break;
            }
            case s1[0x29]: {
              let sq = R["pop"](),
                sv = R["pop"]();
              R["push"](sv != sq), h++;
              break;
            }
            case s1[0x2a]: {
              let sO = R["pop"](),
                sG = R["pop"]();
              R["push"](sG === sO), h++;
              break;
            }
            case s1[0x2b]: {
              let sC = R["pop"](),
                E0 = R["pop"]();
              R["push"](E0 !== sC), h++;
              break;
            }
            case s1[0x2c]: {
              let E1 = R["pop"](),
                E2 = R["pop"]();
              R["push"](E2 < E1), h++;
              break;
            }
            case s1[0x2d]: {
              let E3 = R["pop"](),
                E4 = R["pop"]();
              R["push"](E4 <= E3), h++;
              break;
            }
            case s1[0x2e]: {
              let E5 = R["pop"](),
                E6 = R["pop"]();
              R["push"](E6 > E5), h++;
              break;
            }
            case s1[0x2f]: {
              let E7 = R["pop"](),
                E8 = R["pop"]();
              R["push"](E8 >= E7), h++;
              break;
            }
            case s1[0x32]: {
              h = s6(w[h]);
              break;
            }
            case s1[0x33]: {
              R["pop"]() ? (h = s6(w[h])) : h++;
              break;
            }
            case s1[0x34]: {
              !R["pop"]() ? (h = s6(w[h])) : h++;
              break;
            }
            case s1[0x35]: {
              let E9 = R["pop"]();
              E9 !== null && E9 !== undefined ? (h = s6(w[h])) : h++;
              break;
            }
            case s1[0x36]: {
              let Es = R["pop"](),
                EE = R["pop"](),
                Ei = r_b2fec["_$8A1Cxu"];
              r_b2fec["_$8A1Cxu"] = undefined;
              try {
                R["push"](EE["apply"](undefined, U(R, Es)));
              } finally {
                r_b2fec["_$8A1Cxu"] = Ei;
              }
              h++;
              break;
            }
            case s1[0x37]: {
              let EJ = R["pop"](),
                Et = R["pop"](),
                EA = R["pop"]();
              if (typeof Et !== "function")
                throw new TypeError(Et + " is not a function");
              let EZ = r_b2fec["_$so8CAp"],
                Ex = EZ && EZ["get"](Et),
                Ea = r_b2fec["_$8A1Cxu"];
              Ex && ((r_b2fec["_$ihP7L5"] = !![]), (r_b2fec["_$8A1Cxu"] = Ex));
              try {
                R["push"](Et["apply"](EA, U(R, EJ)));
              } finally {
                Ex && ((r_b2fec["_$ihP7L5"] = ![]), (r_b2fec["_$8A1Cxu"] = Ea));
              }
              h++;
              break;
            }
            case s1[0x38]: {
              if (v["length"] > 0x0) {
                let EF = v[v["length"] - 0x1];
                if (EF["finallyIndex"] !== undefined) {
                  (G["hasReturn"] = !![]),
                    (G["value"] = R["pop"]()),
                    (h = EF["finallyIndex"]);
                  break;
                }
              }
              return (
                G["hasReturn"] &&
                  ((G["hasReturn"] = ![]), (G["value"] = undefined)),
                R["pop"]()
              );
            }
            case s1[0x39]: {
              throw R["pop"]();
            }
            case s1[0x3f]: {
              if (v["length"] > 0x0) {
                let Er = v[v["length"] - 0x1];
                if (Er["finallyIndex"] !== undefined) {
                  (C["hasBreak"] = !![]),
                    (C["target"] = s6(w[h])),
                    (h = Er["finallyIndex"]);
                  break;
                }
              }
              h = s6(w[h]);
              break;
            }
            case s1[0x40]: {
              if (v["length"] > 0x0) {
                let Eu = v[v["length"] - 0x1];
                if (Eu["finallyIndex"] !== undefined) {
                  (s0["hasContinue"] = !![]),
                    (s0["target"] = s6(w[h])),
                    (h = Eu["finallyIndex"]);
                  break;
                }
              }
              h = s6(w[h]);
              break;
            }
            case s1[0x3a]: {
              let Ep = X[h];
              v["push"]({
                catchIndex: Ep[0x0] >= 0x0 ? s6(Ep[0x0]) : undefined,
                finallyIndex: Ep[0x1] >= 0x0 ? s6(Ep[0x1]) : undefined,
                endIndex: Ep[0x2] >= 0x0 ? s6(Ep[0x2]) : undefined,
                stackSize: R["length"],
              }),
                h++;
              break;
            }
            case s1[0x3b]: {
              v["pop"](), h++;
              break;
            }
            case s1[0x3c]: {
              let Ej = R["pop"]();
              if (sF >= 0x0) {
                let EP = b[sF];
                s8["vars"][EP] = Ej;
              }
              h++;
              break;
            }
            case s1[0x3d]: {
              if (v["length"] > 0x0) {
                let Eo = v[v["length"] - 0x1];
                Eo["finallyIndex"] === h &&
                  (Eo["pendingException"] !== undefined &&
                    (O = Eo["pendingException"]),
                  v["pop"]());
              }
              h++;
              break;
            }
            case s1[0x3e]: {
              if (G["hasReturn"]) {
                let Ee = G["value"];
                return (G["hasReturn"] = ![]), (G["value"] = undefined), Ee;
              }
              if (C["hasBreak"]) {
                let EU = C["target"];
                (C["hasBreak"] = ![]), (C["target"] = 0x0), (h = EU);
                break;
              }
              if (s0["hasContinue"]) {
                let EQ = s0["target"];
                (s0["hasContinue"] = ![]), (s0["target"] = 0x0), (h = EQ);
                break;
              }
              if (O !== null) {
                let EL = O;
                O = null;
                throw EL;
              }
              h++;
              break;
            }
            case s1[0x46]: {
              let EK = R["pop"](),
                Eg = b[sF];
              if (EK === null || EK === undefined)
                throw new TypeError(
                  "Cannot read property '" + String(Eg) + "' of " + EK
                );
              R["push"](EK[Eg]), h++;
              break;
            }
            case s1[0x47]: {
              let Ef = R["pop"](),
                EV = R["pop"](),
                EH = b[sF];
              if (EV === null || EV === undefined)
                throw new TypeError(
                  "Cannot set property '" + String(EH) + "' of " + EV
                );
              (EV[EH] = Ef), R["push"](Ef), h++;
              break;
            }
            case s1[0x48]: {
              let EI = R["pop"](),
                Ez = R["pop"]();
              if (Ez === null || Ez === undefined)
                throw new TypeError(
                  "Cannot read property '" + String(EI) + "' of " + Ez
                );
              R["push"](Ez[EI]), h++;
              break;
            }
            case s1[0x49]: {
              let Ek = R["pop"](),
                EN = R["pop"](),
                ES = R["pop"]();
              if (ES === null || ES === undefined)
                throw new TypeError(
                  "Cannot set property '" + String(EN) + "' of " + ES
                );
              (ES[EN] = Ek), R["push"](Ek), h++;
              break;
            }
            case s1[0x4a]: {
              let ED, EW;
              sF !== undefined
                ? ((EW = R["pop"]()), (ED = b[sF]))
                : ((ED = R["pop"]()), (EW = R["pop"]()));
              let El = delete EW[ED];
              R["push"](El), h++;
              break;
            }
            case s1[0x4b]: {
              let EB = b[sF],
                Ed,
                ET =
                  typeof globalThis !== "undefined"
                    ? globalThis
                    : typeof window !== "undefined"
                    ? window
                    : global;
              if (EB in r_b2fec) Ed = r_b2fec[EB];
              else {
                if (u && EB in u) Ed = u[EB];
                else {
                  if (EB in ET) Ed = ET[EB];
                  else throw new ReferenceError(EB + " is not defined");
                }
              }
              R["push"](Ed), h++;
              break;
            }
            case s1[0x4c]: {
              let Ec = R["pop"](),
                Em = b[sF];
              u && Em in u ? (u[Em] = Ec) : (r_b2fec[Em] = Ec);
              R["push"](Ec), h++;
              break;
            }
            case s1[0x4d]: {
              R["push"]({}), h++;
              break;
            }
            case s1[0x4e]: {
              let EM = R["pop"](),
                Ey = b[sF];
              EM === null || EM === undefined
                ? R["push"](undefined)
                : R["push"](EM[Ey]);
              h++;
              break;
            }
            case s1[0x4f]: {
              let ER = R["pop"](),
                En = R["pop"]();
              R["push"](En in ER), h++;
              break;
            }
            case s1[0x51]: {
              let Eh = R["pop"](),
                Eb = R[R["length"] - 0x1];
              Eh !== null && Eh !== undefined && Object["assign"](Eb, Eh);
              h++;
              break;
            }
            case s1[0x52]: {
              let EY = R["pop"](),
                Ew = R["pop"]();
              Ew === null || Ew === undefined
                ? R["push"](undefined)
                : R["push"](Ew[EY]);
              h++;
              break;
            }
            case s1[0x91]: {
              let EX = R["pop"](),
                Eq = R[R["length"] - 0x1],
                Ev = b[sF],
                EO =
                  typeof Eq === "function" && Eq["prototype"]
                    ? Eq["prototype"]
                    : Eq;
              Object["defineProperty"](EO, Ev, {
                get: EX,
                enumerable: EO === Eq,
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0x92]: {
              let EG = R["pop"](),
                EC = R[R["length"] - 0x1],
                i0 = b[sF],
                i1 =
                  typeof EC === "function" && EC["prototype"]
                    ? EC["prototype"]
                    : EC;
              Object["defineProperty"](i1, i0, {
                set: EG,
                enumerable: i1 === EC,
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0x8c]: {
              let i2 = R["pop"](),
                i3 = R["pop"](),
                i4 = sF,
                i5 = (function (i6, i7, i8) {
                  let i9;
                  return (
                    i8
                      ? (i9 = function () {
                          if (i7) {
                            r_b2fec["_$M4cmBB"] = i9;
                            let is = "_$M8uup2" in r_b2fec;
                            !is && (r_b2fec["_$M8uup2"] = new.target);
                            try {
                              let iE = [];
                              for (
                                let ii = 0x0;
                                ii < arguments["length"];
                                ii++
                              ) {
                                iE["push"](arguments[ii]);
                              }
                              return i7["apply"](this, iE);
                            } finally {
                              delete r_b2fec["_$M4cmBB"],
                                !is && delete r_b2fec["_$M8uup2"];
                            }
                          }
                        })
                      : (i9 = function () {
                          if (i7) {
                            let is = "_$M8uup2" in r_b2fec;
                            !is && (r_b2fec["_$M8uup2"] = new.target);
                            try {
                              let iE = [];
                              for (
                                let ii = 0x0;
                                ii < arguments["length"];
                                ii++
                              ) {
                                iE["push"](arguments[ii]);
                              }
                              return i7["apply"](this, iE);
                            } finally {
                              !is && delete r_b2fec["_$M8uup2"];
                            }
                          }
                        }),
                    i9
                  );
                })(i2, i3, i4);
              i2 &&
                Object["defineProperty"](i5, "name", {
                  value: i2,
                  configurable: !![],
                });
              R["push"](i5), h++;
              break;
            }
            case s1[0x8d]: {
              let i6 = R["pop"](),
                i7 = R[R["length"] - 0x1];
              Object["setPrototypeOf"](i7["prototype"], i6["prototype"]),
                Object["setPrototypeOf"](i7, i6),
                (i7["_$RvB7m7"] = i6),
                h++;
              break;
            }
            case s1[0x8e]: {
              let i8 = R["pop"](),
                i9 = R["pop"](),
                is = r_b2fec["_$8A1Cxu"],
                iE = is
                  ? Object["getPrototypeOf"](is)
                  : Object["getPrototypeOf"](Object["getPrototypeOf"](i9)),
                ii = null,
                iJ = iE;
              while (iJ !== null) {
                ii = Object["getOwnPropertyDescriptor"](iJ, i8);
                if (ii) break;
                iJ = Object["getPrototypeOf"](iJ);
              }
              let it;
              if (ii && ii["get"]) (it = ii["get"]["call"](i9)), R["push"](it);
              else {
                if (ii && ii["set"] && !("value" in ii)) R["push"](undefined);
                else {
                  it = iJ ? iJ[i8] : iE[i8];
                  if (typeof it === "function") {
                    let iA = iJ || iE,
                      iZ = it["bind"](i9),
                      ix = it["constructor"] && it["constructor"]["name"],
                      ia =
                        ix === "GeneratorFunction" ||
                        ix === "AsyncFunction" ||
                        ix === "AsyncGeneratorFunction";
                    !ia &&
                      (!r_b2fec["_$so8CAp"] &&
                        (r_b2fec["_$so8CAp"] = new WeakMap()),
                      r_b2fec["_$so8CAp"]["set"](iZ, iA)),
                      R["push"](iZ);
                  } else R["push"](it);
                }
              }
              h++;
              break;
            }
            case s1[0x8f]: {
              let iF = R["pop"](),
                ir = R["pop"](),
                iu = R["pop"](),
                ip = Object["getPrototypeOf"](Object["getPrototypeOf"](iu));
              (ip[ir] = iF), R["push"](iF), h++;
              break;
            }
            case s1[0x90]: {
              let ij = R["pop"](),
                iP = R[R["length"] - 0x1],
                io = b[sF];
              Object["defineProperty"](iP["prototype"], io, {
                value: ij,
                writable: !![],
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0x93]: {
              let ie = R["pop"](),
                iU = R[R["length"] - 0x1],
                iQ = b[sF];
              Object["defineProperty"](iU, iQ, {
                value: ie,
                writable: !![],
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0x94]: {
              let iL = R["pop"](),
                iK = R[R["length"] - 0x1],
                ig = b[sF];
              Object["defineProperty"](iK, ig, {
                get: iL,
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0x95]: {
              let iV = R["pop"](),
                iH = R[R["length"] - 0x1],
                iI = b[sF];
              Object["defineProperty"](iH, iI, {
                set: iV,
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0xaa]: {
              let iz = R["pop"](),
                ik = R["pop"](),
                iN = R[R["length"] - 0x1];
              Object["defineProperty"](iN["prototype"], ik, {
                value: iz,
                writable: !![],
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0xab]: {
              let iS = R["pop"](),
                iD = R["pop"](),
                iW = R[R["length"] - 0x1];
              Object["defineProperty"](iW, iD, {
                value: iS,
                writable: !![],
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0xac]: {
              let il = R["pop"](),
                iB = R["pop"](),
                iT = R[R["length"] - 0x1],
                ic =
                  typeof iT === "function" && iT["prototype"]
                    ? iT["prototype"]
                    : iT;
              Object["defineProperty"](ic, iB, {
                get: il,
                enumerable: ic === iT,
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0xad]: {
              let im = R["pop"](),
                iM = R["pop"](),
                iy = R[R["length"] - 0x1],
                iR =
                  typeof iy === "function" && iy["prototype"]
                    ? iy["prototype"]
                    : iy;
              Object["defineProperty"](iR, iM, {
                set: im,
                enumerable: iR === iy,
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0xae]: {
              let ih = R["pop"](),
                ib = R["pop"](),
                iY = R[R["length"] - 0x1];
              Object["defineProperty"](iY, ib, {
                get: ih,
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0xaf]: {
              let iw = R["pop"](),
                iX = R["pop"](),
                iq = R[R["length"] - 0x1];
              Object["defineProperty"](iq, iX, {
                set: iw,
                enumerable: ![],
                configurable: !![],
              }),
                h++;
              break;
            }
            case s1[0x96]: {
              let iv = R["pop"](),
                iO = b[sF];
              !r_b2fec["_$hLiTY6"] && (r_b2fec["_$hLiTY6"] = new Map());
              let iG = r_b2fec["_$hLiTY6"],
                iC = iG["get"](iO);
              if (iC && iC["has"](iv)) {
                R["push"](iC["get"](iv)), h++;
                break;
              }
              let J0 = "_$11iHoR" + iO["substring"](0x1) + "_$0jucvI";
              if (J0 in iv) {
                R["push"](iv[J0]), h++;
                break;
              }
              throw new TypeError(
                "Cannot read private member " +
                  iO +
                  " from an object whose class did not declare it"
              );
            }
            case s1[0x97]: {
              let J1 = R["pop"](),
                J2 = R["pop"](),
                J3 = b[sF];
              !r_b2fec["_$hLiTY6"] && (r_b2fec["_$hLiTY6"] = new Map());
              let J4 = r_b2fec["_$hLiTY6"],
                J5 = J4["get"](J3);
              if (J5 && J5["has"](J2)) {
                J5["set"](J2, J1), R["push"](J1), h++;
                break;
              }
              let J6 = "_$11iHoR" + J3["substring"](0x1) + "_$0jucvI";
              if (J6 in J2) {
                (J2[J6] = J1), R["push"](J1), h++;
                break;
              }
              throw new TypeError(
                "Cannot write private member " +
                  J3 +
                  " to an object whose class did not declare it"
              );
            }
            case s1[0x98]: {
              let J7 = R["pop"](),
                J8 = R["pop"](),
                J9 = b[sF];
              !r_b2fec["_$hLiTY6"] && (r_b2fec["_$hLiTY6"] = new Map());
              let Js = r_b2fec["_$hLiTY6"];
              !Js["has"](J9) && Js["set"](J9, new WeakMap());
              let JE = Js["get"](J9);
              if (JE["has"](J8))
                throw new TypeError(
                  "Cannot initialize " + J9 + " twice on the same object"
                );
              JE["set"](J8, J7), h++;
              break;
            }
            case s1[0x99]: {
              let Ji = R["pop"](),
                JJ = b[sF],
                Jt = ![];
              if (r_b2fec["_$hLiTY6"]) {
                let JA = r_b2fec["_$hLiTY6"],
                  JZ = JA["get"](JJ);
                Jt = JZ && JZ["has"](Ji);
              }
              R["push"](Jt), h++;
              break;
            }
            case s1[0x9a]: {
              let Jx = R["pop"](),
                Ja = R["pop"](),
                JF = b[sF];
              if (!r_b2fec["_$hLiTY6"])
                throw new TypeError(
                  "Cannot read private member " +
                    JF +
                    " from an object whose class did not declare it"
                );
              let Jr = r_b2fec["_$hLiTY6"],
                Ju = Jr["get"](JF);
              if (!Ju || !Ju["has"](Ja))
                throw new TypeError(
                  "Cannot read private member " +
                    JF +
                    " from an object whose class did not declare it"
                );
              let Jp = Ju["get"](Ja);
              if (typeof Jp !== "function")
                throw new TypeError(JF + " is not a function");
              let Jj = [];
              for (let Jo = 0x0; Jo < Jx; Jo++) {
                Jj["unshift"](R["pop"]());
              }
              let JP = Jp["apply"](Ja, Jj);
              R["push"](JP), h++;
              break;
            }
            case s1[0x9b]: {
              let Je = R["pop"](),
                JU = b[sF];
              if (Je == null) {
                R["push"](undefined), h++;
                break;
              }
              !r_b2fec["_$hLiTY6"] && (r_b2fec["_$hLiTY6"] = new Map());
              let JQ = r_b2fec["_$hLiTY6"],
                JL = JQ["get"](JU);
              if (!JL || !JL["has"](Je))
                throw new TypeError(
                  "Cannot read private member " +
                    JU +
                    " from an object whose class did not declare it"
                );
              R["push"](JL["get"](Je)), h++;
              break;
            }
            case s1[0x9c]: {
              let JK = R["pop"]();
              R["pop"]();
              let Jg = R[R["length"] - 0x1],
                Jf = b[sF];
              !r_b2fec["_$hLiTY6"] && (r_b2fec["_$hLiTY6"] = new Map());
              let JV = r_b2fec["_$hLiTY6"];
              !JV["has"](Jf) && JV["set"](Jf, new WeakMap());
              let JH = JV["get"](Jf);
              JH["set"](Jg, JK), h++;
              break;
            }
            case s1[0x9d]: {
              let JI = R["pop"](),
                Jz = b[sF];
              if (r_b2fec["_$hLiTY6"]) {
                let JN = r_b2fec["_$hLiTY6"],
                  JS = JN["get"](Jz);
                if (JS && JS["has"](JI)) {
                  R["push"](JS["get"](JI)), h++;
                  break;
                }
              }
              let Jk = "_$11iHoR" + Jz["substring"](0x1) + "_$0jucvI";
              if (Jk in JI) {
                R["push"](JI[Jk]), h++;
                break;
              }
              throw new TypeError(
                "Cannot read private member " +
                  Jz +
                  " from an object whose class did not declare it"
              );
            }
            case s1[0x9e]: {
              let JD = R["pop"](),
                JW = R["pop"](),
                Jl = b[sF];
              if (r_b2fec["_$hLiTY6"]) {
                let Jd = r_b2fec["_$hLiTY6"],
                  JT = Jd["get"](Jl);
                if (JT && JT["has"](JW)) {
                  JT["set"](JW, JD), R["push"](JD), h++;
                  break;
                }
              }
              let JB = "_$11iHoR" + Jl["substring"](0x1) + "_$0jucvI";
              if (JB in JW) {
                (JW[JB] = JD), R["push"](JD), h++;
                break;
              }
              throw new TypeError(
                "Cannot write private member " +
                  Jl +
                  " to an object whose class did not declare it"
              );
            }
            case s1[0x69]: {
              let Jc = R["pop"](),
                Jm = U(R, Jc),
                JM = R["pop"]();
              if (sF === 0x1) {
                R["push"](Jm), h++;
                break;
              }
              if (typeof JM !== "function")
                throw new TypeError("Super expression must be a constructor");
              r_b2fec["_$M8uup2"] = M;
              try {
                JM["apply"](y, Jm);
              } finally {
                delete r_b2fec["_$M8uup2"];
              }
              h++;
              break;
            }
            case s1[0x64]: {
              let Jy = R["pop"](),
                JR = j(Jy),
                Jn = JR && JR["a"],
                Jh = JR && JR["s"],
                Jb = JR && JR["g"],
                JY = s8,
                Jw = z,
                JX = k,
                Jq = N,
                Jv =
                  JR && JR["ni"] !== undefined ? JR["c"][JR["ni"]] : undefined,
                JO = Jn ? y : undefined,
                JG = (function (JC, t0, t1, t2, t3, t4, t5, t6, t7, t8) {
                  let t9, ts;
                  if (t3)
                    ts = function () {
                      let tE = [];
                      for (let ti = 0x0; ti < arguments["length"]; ti++) {
                        tE["push"](arguments[ti]);
                      }
                      return t6["call"](this, JC, tE, t0, t9);
                    };
                  else
                    t2
                      ? (ts = async function () {
                          let tE = [];
                          for (let tJ = 0x0; tJ < arguments["length"]; tJ++) {
                            tE["push"](arguments[tJ]);
                          }
                          let ti =
                            new.target !== undefined
                              ? new.target
                              : r_b2fec["_$M8uup2"];
                          return t1
                            ? await t5["call"](t8, JC, tE, t0, t9, undefined)
                            : await t5["call"](this, JC, tE, t0, t9, ti);
                        })
                      : (ts = function () {
                          let tE = [];
                          for (let tJ = 0x0; tJ < arguments["length"]; tJ++) {
                            tE["push"](arguments[tJ]);
                          }
                          let ti =
                            new.target !== undefined
                              ? new.target
                              : r_b2fec["_$M8uup2"];
                          return t1
                            ? t4["call"](t8, JC, tE, t0, t9, undefined)
                            : t4["call"](this, JC, tE, t0, t9, ti);
                        });
                  t9 = ts;
                  if (t7)
                    try {
                      Object["defineProperty"](t9, "name", {
                        value: t7,
                        writable: ![],
                        enumerable: ![],
                        configurable: !![],
                      });
                    } catch (tE) {}
                  return t9;
                })(Jy, JY, Jn, Jh, Jb, Jw, JX, Jq, Jv, JO);
              if (!JG) throw new Error("VM Error: Failed to create closure");
              R["push"](JG), h++;
              break;
            }
            case s1[0x68]: {
              let JC = R["pop"](),
                t0 = U(R, JC),
                t1 = R["pop"]();
              if (typeof t1 !== "function")
                throw new TypeError(t1 + " is not a constructor");
              let t2 = r_b2fec["_$8A1Cxu"];
              r_b2fec["_$8A1Cxu"] = undefined;
              let t3;
              try {
                t3 = Reflect["construct"](t1, t0);
              } finally {
                r_b2fec["_$8A1Cxu"] = t2;
              }
              R["push"](t3), h++;
              break;
            }
            case s1[0x6a]: {
              let t4 = R["pop"]();
              R["push"](import(t4)), h++;
              break;
            }
            case s1[0x5a]: {
              R["push"]([]), h++;
              break;
            }
            case s1[0x5b]: {
              let t5 = R["pop"](),
                t6 = R[R["length"] - 0x1];
              t6["push"](t5), h++;
              break;
            }
            case s1[0x5d]: {
              let t7 = R["pop"](),
                t8 = { value: t7 };
              o["add"](t8), R["push"](t8), h++;
              break;
            }
            case s1[0x5e]: {
              let t9 = R["pop"](),
                ts = R[R["length"] - 0x1];
              if (Array["isArray"](t9))
                Array["prototype"]["push"]["apply"](ts, t9);
              else
                for (let tE of t9) {
                  ts["push"](tE);
                }
              h++;
              break;
            }
            case s1[0x6e]: {
              R["push"](typeof R["pop"]()), h++;
              break;
            }
            case s1[0x6f]: {
              let ti = R["pop"](),
                tJ = R["pop"]();
              R["push"](tJ instanceof ti), h++;
              break;
            }
            case s1[0x70]: {
              let tt = b[sF],
                tA =
                  typeof globalThis !== "undefined"
                    ? globalThis
                    : typeof window !== "undefined"
                    ? window
                    : global;
              if (tt in r_b2fec) R["push"](typeof r_b2fec[tt]);
              else
                u && tt in u
                  ? R["push"](typeof u[tt])
                  : R["push"](typeof tA[tt]);
              h++;
              break;
            }
            case s1[0xd2]: {
              let tZ = R["pop"](),
                tx = { vars: {}, constVars: {}, tdzVars: {}, parent: tZ };
              (s8 = tx), h++;
              break;
            }
            case s1[0xd3]: {
              let ta = b[sF],
                tF = s8,
                tr,
                tu = ![];
              while (tF) {
                if (tF["tdzVars"] && ta in tF["tdzVars"])
                  throw new ReferenceError(
                    "Cannot access '" + ta + "' before initialization"
                  );
                if (ta in tF["vars"]) {
                  (tr = tF["vars"][ta]), (tu = !![]);
                  break;
                }
                tF = tF["parent"];
              }
              ta === "__this__" && ((tr = y), (tu = !![]));
              if (!tu) {
                if (ta in r_b2fec) tr = r_b2fec[ta];
                else
                  u && ta in u
                    ? (tr = u[ta])
                    : (tr = (
                        typeof globalThis !== "undefined"
                          ? globalThis
                          : typeof window !== "undefined"
                          ? window
                          : global
                      )[ta]);
              }
              R["push"](tr), h++;
              break;
            }
            case s1[0xd4]: {
              let tp = b[sF],
                tj = R["pop"](),
                tP = s8,
                to = ![];
              while (tP) {
                if (tp in tP["vars"]) {
                  if (tP["constVars"] && tp in tP["constVars"])
                    throw new TypeError("Assignment to constant variable.");
                  tP["tdzVars"] &&
                    tp in tP["tdzVars"] &&
                    delete tP["tdzVars"][tp];
                  (tP["vars"][tp] = tj), (to = !![]);
                  break;
                }
                tP = tP["parent"];
              }
              !to &&
                (s8["tdzVars"] &&
                  tp in s8["tdzVars"] &&
                  delete s8["tdzVars"][tp],
                (s8["vars"][tp] = tj));
              h++;
              break;
            }
            case s1[0xd5]: {
              R["push"](s8), h++;
              break;
            }
            case s1[0xd6]: {
              s8 && s8["parent"] && (s8 = s8["parent"]);
              h++;
              break;
            }
            case s1[0xd7]: {
              let te = b[sF],
                tU = R["pop"]();
              if (s8["tdzVars"]) {
                te in s8["tdzVars"] && delete s8["tdzVars"][te];
                let tQ = te["split"]("$$")[0x0];
                tQ !== te && tQ in s8["tdzVars"] && delete s8["tdzVars"][tQ];
              }
              (s8["vars"][te] = tU), h++;
              break;
            }
            case s1[0xd8]: {
              let tL = b[sF],
                tK = R["pop"](),
                tg = s8,
                tf = ![];
              while (tg) {
                if (tL in tg["vars"]) {
                  if (tg["constVars"] && tL in tg["constVars"]) break;
                  tg["vars"][tL] = tK;
                  !tg["constVars"] && (tg["constVars"] = {});
                  (tg["constVars"][tL] = !![]), (tf = !![]);
                  break;
                }
                tg = tg["parent"];
              }
              !tf &&
                (s8["tdzVars"] &&
                  tL in s8["tdzVars"] &&
                  delete s8["tdzVars"][tL],
                (s8["vars"][tL] = tK),
                !s8["constVars"] && (s8["constVars"] = {}),
                (s8["constVars"][tL] = !![]));
              h++;
              break;
            }
            case s1[0xd9]: {
              let tV = b[sF],
                tH = R["pop"]();
              if (s8["tdzVars"]) {
                tV in s8["tdzVars"] && delete s8["tdzVars"][tV];
                let tI = tV["split"]("$$")[0x0];
                tI !== tV && tI in s8["tdzVars"] && delete s8["tdzVars"][tI];
              }
              s8["vars"][tV] = tH;
              !s8["constVars"] && (s8["constVars"] = {});
              (s8["constVars"][tV] = !![]), h++;
              break;
            }
            case s1[0xda]: {
              let tz = b[sF];
              !s8["tdzVars"] && (s8["tdzVars"] = {});
              (s8["tdzVars"][tz] = !![]), h++;
              break;
            }
            case s1[0xa0]: {
              R["push"](y), h++;
              break;
            }
            case s1[0xa1]: {
              if (s9 === null) {
                s9 = Array["prototype"]["slice"]["call"](T || []);
                try {
                  s9["callee"] = m;
                } catch (tk) {}
              }
              R["push"](s9), h++;
              break;
            }
            case s1[0xa4]: {
              R["push"](M), h++;
              break;
            }
            case s1[0xa2]: {
              let tN = sF & 0xffff,
                tS = sF >> 0x10,
                tD = b[tN],
                tW = b[tS];
              R["push"](new RegExp(tD, tW)), h++;
              break;
            }
            case s1[0xa3]: {
              R["pop"](), R["push"](undefined), h++;
              break;
            }
            case s1[0xa7]: {
              if (sF === -0x1) R["push"](Symbol());
              else {
                let tl = R["pop"]();
                R["push"](Symbol(tl));
              }
              h++;
              break;
            }
            case s1[0xa8]: {
              let tB = b[sF];
              R["push"](Symbol["for"](tB)), h++;
              break;
            }
            case s1[0xa9]: {
              let td = R["pop"]();
              R["push"](Symbol["keyFor"](td)), h++;
              break;
            }
            case s1[0xaa]: {
              h++;
              break;
            }
            case s1[0xc8]: {
              debugger;
              h++;
              break;
            }
            case s1[0xc9]: {
              h++;
              break;
            }
            case s1[0xca]: {
              return R["length"] > 0x0 ? R["pop"]() : undefined;
            }
            case s1[0x7f]: {
              let tT = R["pop"]();
              if (tT == null) throw new TypeError("Cannot iterate over " + tT);
              let tc = tT[Symbol["iterator"]];
              if (typeof tc !== "function")
                throw new TypeError("Object is not iterable");
              R["push"](tc["call"](tT)), h++;
              break;
            }
            case s1[0x7b]: {
              let tm = R["pop"](),
                tM = tm["next"]();
              R["push"](tM), h++;
              break;
            }
            case s1[0x80]: {
              let ty = R["pop"]();
              R["push"](!!ty["done"]), h++;
              break;
            }
            default:
              throw new Error(
                "Unknown opcode: " + sx + " (logical: " + sZ + ")"
              );
          }
        }
        break;
      } catch (tR) {
        if (v["length"] > 0x0) {
          let tn = v[v["length"] - 0x1];
          R["length"] = tn["stackSize"];
          if (tn["catchIndex"] !== undefined)
            R["push"](tR),
              (h = tn["catchIndex"]),
              (tn["catchIndex"] = undefined),
              tn["finallyIndex"] === undefined && v["pop"]();
          else
            tn["finallyIndex"] !== undefined
              ? ((h = tn["finallyIndex"]), (tn["pendingException"] = tR))
              : ((h = tn["endIndex"]), v["pop"]());
          continue;
        }
        throw tR;
      }
    }
    return R["length"] > 0x0 ? R["pop"]() : undefined;
  }
  let z = function (d, T, c, m, M) {
      r_b2fec["_$ihP7L5"]
        ? (r_b2fec["_$ihP7L5"] = ![])
        : (r_b2fec["_$8A1Cxu"] = undefined);
      let y = j(d),
        R = I(y, T, c, m, M, this),
        n = R["next"]();
      while (!n["done"]) {
        throw new Error("Unexpected async/generator operation in sync context");
      }
      return n["value"];
    },
    k = async function (d, T, c, m, M, y) {
      let R = j(d),
        n = I(R, T, c, m, M, this),
        h = n["next"]();
      while (!h["done"]) {
        if (h["value"]["t"] === 0x1)
          try {
            let b = await Promise["resolve"](h["value"]["v"]);
            (r_b2fec["_$8A1Cxu"] = y), (h = n["next"](b));
          } catch (Y) {
            (r_b2fec["_$8A1Cxu"] = y), (h = n["throw"](Y));
          }
        else throw new Error("Unexpected yield in async context");
      }
      return h["value"];
    },
    N = function (d, T, c, m, M) {
      let y = j(d),
        R = I(y, T, c, m, undefined, this),
        n = ![],
        h = null,
        b = this;
      function Y(X, q) {
        if (n) return { value: undefined, done: !![] };
        r_b2fec["_$8A1Cxu"] = M;
        if (h) {
          let O;
          try {
            O = q
              ? typeof h["throw"] === "function"
                ? h["throw"](X)
                : ((h = null),
                  (function () {
                    throw X;
                  })())
              : h["next"](X);
          } catch (G) {
            h = null;
            try {
              let C = R["throw"](G);
              return w(C);
            } catch (s0) {
              n = !![];
              throw s0;
            }
          }
          if (!O["done"]) return { value: O["value"], done: ![] };
          (h = null), (X = O["value"]), (q = ![]);
        }
        let v;
        try {
          v = q ? R["throw"](X) : R["next"](X);
        } catch (s1) {
          n = !![];
          throw s1;
        }
        return w(v);
      }
      function w(X) {
        if (X["done"]) return (n = !![]), { value: X["value"], done: !![] };
        let q = X["value"];
        if (q["t"] === 0x2) return { value: q["v"], done: ![] };
        if (q["t"] === 0x3) {
          let v = q["v"],
            O = v;
          O &&
            typeof O[Symbol["iterator"]] === "function" &&
            (O = O[Symbol["iterator"]]());
          if (O && typeof O["next"] === "function") {
            let G = O["next"]();
            if (!G["done"]) return (h = O), { value: G["value"], done: ![] };
            return Y(G["value"], ![]);
          }
          return Y(undefined, ![]);
        }
        throw new Error("Unexpected signal in generator");
      }
      return {
        next: function (X) {
          return Y(X, ![]);
        },
        return: function (X) {
          if (n) return { value: X, done: !![] };
          n = !![];
          try {
            R["return"](X);
          } catch (q) {}
          return { value: X, done: !![] };
        },
        throw: function (X) {
          if (n) throw X;
          return Y(X, !![]);
        },
        [Symbol["iterator"]]: function () {
          return this;
        },
      };
    };
  return function (d, T, c, m, M) {
    let y = j(d);
    if (y && y["g"]) {
      let R = r_b2fec["_$8A1Cxu"];
      return N["call"](this, d, T, c, m, R);
    } else {
      if (y && y["s"]) {
        let n = r_b2fec["_$8A1Cxu"];
        return k["call"](this, d, T, c, m, M, n);
      } else return z["call"](this, d, T, c, m, M);
    }
  };
})();
(r_b2fec["updateTask"] = updateTask),
  (r_b2fec["deleteTask"] = deleteTask),
  (r_b2fec["addTask"] = addTask),
  (r_b2fec["fetchTasks"] = fetchTasks);
const tBody = document["querySelector"]("tbody");
(r_b2fec["tBody"] = tBody), (r_b2fec["tBody"] = r_b2fec["tBody"]);
const addForm = document["querySelector"](".add-form");
(r_b2fec["addForm"] = addForm), (r_b2fec["addForm"] = r_b2fec["addForm"]);
const inputTask = document["querySelector"](".input-task");
(r_b2fec["inputTask"] = inputTask),
  (r_b2fec["inputTask"] = r_b2fec["inputTask"]);
async function fetchTasks() {
  return t_149e44["call"](
    this,
    0x0,
    Array["from"](arguments),
    undefined,
    fetchTasks
  );
}
async function addTask(p) {
  return t_149e44["call"](
    this,
    0x1,
    Array["from"](arguments),
    undefined,
    addTask
  );
}
async function deleteTask(p) {
  return t_149e44["call"](
    this,
    0x2,
    Array["from"](arguments),
    undefined,
    deleteTask
  );
}
async function updateTask({ id: p, title: j, status: P }) {
  return t_149e44["call"](
    this,
    0x3,
    Array["from"](arguments),
    undefined,
    updateTask
  );
}
const createElement = (p, j = "", P = "") => {
  return t_149e44["call"](
    this,
    0x4,
    [p, arguments[0x1], arguments[0x2]],
    undefined,
    undefined
  );
};
(r_b2fec["createElement"] = createElement),
  (r_b2fec["createElement"] = r_b2fec["createElement"]);
const createSelect = (p) => {
  return t_149e44["call"](this, 0x5, [p], undefined, undefined);
};
(r_b2fec["createSelect"] = createSelect),
  (r_b2fec["createSelect"] = r_b2fec["createSelect"]);
const createRow = (p) => {
  return t_149e44["call"](this, 0xa, [p], undefined, undefined);
};
(r_b2fec["createRow"] = createRow),
  (r_b2fec["createRow"] = r_b2fec["createRow"]);
const loadTasks = async () => {
  return t_149e44["call"](this, 0xc, [], undefined, undefined);
};
(r_b2fec["loadTasks"] = loadTasks),
  (r_b2fec["loadTasks"] = r_b2fec["loadTasks"]),
  r_b2fec["addForm"]["addEventListener"]("submit", addTask),
  r_b2fec["loadTasks"]();
