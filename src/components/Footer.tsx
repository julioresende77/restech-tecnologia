import logo from "@/assets/restech-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="RESTECH" width={36} height={36} className="h-9 w-9" />
            <span className="font-display font-bold text-lg">RESTECH</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Tecnologia que vende por você. Sites, landing pages e automações sob medida para empresas que querem escalar de verdade.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Soluções</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#servicos" className="hover:text-primary transition">Criação de Sites</a></li>
            <li><a href="#servicos" className="hover:text-primary transition">Landing Pages</a></li>
            <li><a href="#servicos" className="hover:text-primary transition">Automações</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Contato</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>emailrestech@gmail.com</li>
            <li>(98) 98154-9151</li>
            <li>Atendimento Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} RESTECH TECNOLOGIA. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
