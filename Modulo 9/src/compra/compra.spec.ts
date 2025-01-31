import { calculaTicket } from "./compra";

describe("calculaTicket", () => {
  it("debería lanzar throw si es undefined", () => {
    let lineaTicket: any = undefined;

    const result = () => calculaTicket(lineaTicket);

    expect(result).toThrow("no es valido");
  });
  it("debería lanzar throw si es null", () => {
    let lineaTicket: any = null;

    const result = () => calculaTicket(lineaTicket);

    expect(result).toThrow("no es valido");
  });
  it("debería lanzar throw si es null", () => {
    let lineaTicket: any = null;

    const result = () => calculaTicket(lineaTicket);

    expect(result).toThrow("no es valido");
  });
});
