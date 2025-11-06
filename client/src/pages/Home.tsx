import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import {
  Zap,
  Truck,
  Users,
  Cog,
  Lightbulb,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Factory,
  Heart,
  Megaphone,
  ShoppingCart,
  Hammer,
  Waves,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    power: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with backend later)
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      power: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/GERAENERGY-LOGO(COLOR).png"
              alt="Gera Energy"
              className="h-10 md:h-12"
            />
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-2 lg:gap-4 text-xs lg:text-sm font-medium items-center flex-1 justify-center">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-[#006400] transition-colors px-2 py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#diferenciais"
                className="text-gray-700 hover:text-[#006400] transition-colors px-2 py-1"
              >
                Diferenciais
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-[#006400] transition-colors px-2 py-1"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-[#006400] transition-colors px-2 py-1"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#setores"
                className="text-gray-700 hover:text-[#006400] transition-colors px-2 py-1"
              >
                Setores
              </a>
            </li>
            <li>
              <a
                href="#processo"
                className="text-gray-700 hover:text-[#006400] transition-colors px-2 py-1"
              >
                Como Funciona
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-gray-700 hover:text-[#006400] transition-colors px-2 py-1"
              >
                Contato
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>

          <Button className="hidden sm:flex bg-[#006400] hover:bg-[#004d00] text-white text-xs md:text-sm px-3 md:px-4 py-2 md:py-2.5 whitespace-nowrap flex-shrink-0">
            <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">(21) 3851-0660</span>
            <span className="sm:hidden">Ligar</span>
          </Button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-[#006400] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  className="text-gray-700 hover:text-[#006400] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-700 hover:text-[#006400] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-700 hover:text-[#006400] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#setores"
                  className="text-gray-700 hover:text-[#006400] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Setores
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  className="text-gray-700 hover:text-[#006400] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-700 hover:text-[#006400] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
              <li className="pt-2 border-t border-gray-200">
                <Button className="w-full bg-[#006400] hover:bg-[#004d00] text-white text-xs py-2">
                  <Phone className="w-3 h-3 mr-2" />
                  (21) 3851-0660
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section with Video Background */}
      <section
        id="home"
        className="relative w-full h-screen min-h-[500px] md:min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-full">
          <div className="w-full max-w-2xl text-center text-white py-12 md:py-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Energia Segura e Confiável para o Seu Negócio
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-100 px-2">
              Suas operações sempre ativas. Soluções em geração de energia sob
              medida, com suporte técnico 24h e frota própria.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
              <Button
                size="lg"
                className="bg-[#FFD700] text-black hover:bg-[#FFED4E] font-bold text-sm md:text-base w-full sm:w-auto"
              >
                SOLICITE SEU ORÇAMENTO
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white/20 font-bold text-sm md:text-base w-full sm:w-auto"
              >
                Saiba Mais
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mt-8 md:mt-12 text-xs md:text-sm justify-center px-2">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700] flex-shrink-0" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700] flex-shrink-0" />
                <span>Instalação Rápida</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700] flex-shrink-0" />
                <span>Equipamentos Modernos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#006400]">
              Nossos Diferenciais
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              O que nos torna a melhor escolha para sua empresa
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: "Suporte 24h",
                description:
                  "Atendimento emergencial 24/7. Nossa equipe está sempre de prontidão.",
              },
              {
                icon: Truck,
                title: "Frota Própria",
                description:
                  "Logística ágil com caminhões munck e abastecimento móvel.",
              },
              {
                icon: Users,
                title: "Equipe Especializada",
                description:
                  "Profissionais treinados com mais de 14 anos de experiência.",
              },
              {
                icon: Cog,
                title: "Equipamentos de Ponta",
                description:
                  "Geradores de 20 a 1.350 kVA, silenciados e carenados.",
              },
              {
                icon: Lightbulb,
                title: "Distribuidor MWM",
                description:
                  "Parceiro oficial MWM com equipamentos econômicos e duráveis.",
              },
              {
                icon: CheckCircle,
                title: "Atendimento Personalizado",
                description:
                  "Cada projeto é único. Solução sob medida para sua necessidade.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#006400] mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/FOTO1.JPG"
                alt="Gera Energy - Galpão"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#006400]">
                Gera Energy: Solidez e Confiança em Energia
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                A Gera Energy atua há mais de <strong>14 anos</strong> oferecendo
                soluções completas em geração e segurança energética. Somos
                especialistas em manter empresas que <strong>não podem parar</strong>{" "}
                sempre ativas.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
                Fornecemos locação e venda de geradores, manutenção especializada e
                distribuição de equipamentos MWM. Atendemos demandas de diferentes
                portes com <strong>agilidade, estrutura própria</strong> e equipe
                técnica qualificada.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 border-l-4 border-[#006400] bg-white">
                  <h4 className="font-bold text-[#006400] mb-2">Missão</h4>
                  <p className="text-sm text-gray-600">
                    Oferecer soluções em energia com grupos geradores, atuando com
                    responsabilidade social e ambiental.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-[#FFD700] bg-white">
                  <h4 className="font-bold text-[#FFD700] mb-2">Visão</h4>
                  <p className="text-sm text-gray-600">
                    Ser reconhecida como empresa sólida, eficiente e confiável no
                    fornecimento de energia temporária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#006400]">
              Soluções Completas em Energia Temporária
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Locação, Venda, Manutenção e Acessórios. Tudo em um só lugar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                title: "Locação de Geradores",
                description:
                  "Aluguel de geradores de 20 a 1.350 kVA, silenciados e carenados.",
              },
              {
                title: "Venda de Geradores",
                description:
                  "Grupos geradores novos com garantia e orientação técnica.",
              },
              {
                title: "Manutenção e Suporte",
                description:
                  "Instalação, start-up, manutenção preventiva e corretiva.",
              },
              {
                title: "Fabricação de Quadros",
                description:
                  "Quadros de comando e transferência, manuais ou automáticos.",
              },
              {
                title: "Aluguel de Cabos",
                description:
                  "Cabos em diversas bitolas, seguros e certificados ABNT.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white text-center"
              >
                <h3 className="text-lg font-bold mb-3 text-[#006400]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setores Section */}
      <section id="setores" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#006400]">
              Energia Onde a Continuidade é Vital
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Atuamos em setores que exigem energia constante, confiável e com suporte
              rápido.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Factory,
                title: "Indústria",
                description:
                  "Geração de energia para linhas de produção que não podem sofrer interrupções.",
                image: "/FOTO1.JPG",
              },
              {
                icon: Heart,
                title: "Hospitalar",
                description:
                  "Energia de apoio para hospitais, clínicas e laboratórios.",
                image: "/FOTO5.JPG",
              },
              {
                icon: Megaphone,
                title: "Eventos",
                description:
                  "Geradores para shows, festas e eventos corporativos.",
                image: "/0fd5b0ad-9901-4cb8-9cdd-de4764f4f6f0.JPG",
              },
              {
                icon: ShoppingCart,
                title: "Comércio e Varejo",
                description:
                  "Evita perdas com quedas de energia em supermercados e shoppings.",
                image: "/9a7a75d7-2f21-4cbf-8411-9c49dbd1d39d.JPG",
              },
              {
                icon: Hammer,
                title: "Construção Civil",
                description:
                  "Energia para canteiros, ferramentas e instalações provisórias.",
                image: "/80c613f5-1086-474c-8cc4-cb40b0c6c837.JPG",
              },
              {
                icon: Waves,
                title: "On Shore e Off Shore",
                description:
                  "Soluções para operações exigentes com suporte especializado.",
                image: "/IMG_1114.JPG",
              },
            ].map((setor, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <img
                  src={setor.image}
                  alt={setor.title}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <setor.icon className="w-5 h-5 md:w-6 md:h-6 text-[#006400]" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {setor.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{setor.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="processo" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#006400]">
              Nosso Processo é Simples, Rápido e Eficiente
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Da necessidade à energia ligada, você conta com estrutura completa e
              equipe preparada.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                step: "1",
                title: "Entendimento",
                description:
                  "Analisamos sua necessidade, potência e tipo de aplicação.",
              },
              {
                step: "2",
                title: "Proposta Sob Medida",
                description:
                  "Montamos a solução técnica e comercial ideal para seu cenário.",
              },
              {
                step: "3",
                title: "Entrega e Instalação",
                description:
                  "Fazemos a entrega, instalação e deixamos o sistema pronto.",
              },
              {
                step: "4",
                title: "Suporte e Manutenção",
                description:
                  "Acompanhamento contínuo com suporte técnico 24h sempre.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#006400] text-white flex items-center justify-center font-bold text-lg md:text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-1 bg-[#FFD700]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section id="clientes" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#006400]">
              Quem Confia na Gera Energy
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
              Grandes marcas contam com nossa estrutura para garantir energia contínua
              e segura.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-8">
              Somos parceiros de empresas que não podem parar. Atendemos segmentos de
              varejo, indústria, entretenimento e saúde.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <img
                  src="/GERAENERGY-LOGO(COLOR).png"
                  alt="Gera Energy"
                  className="h-12 md:h-16 mb-2"
                />
                <p className="text-sm font-bold text-gray-900">Gera Energy</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#006400] rounded flex items-center justify-center text-white font-bold text-center px-2">
                  MWM
                </div>
                <p className="text-sm font-bold text-gray-900 mt-2">
                  Distribuidor Oficial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-20 bg-[#006400] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Fale com a Gera Energy
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-100">
                Se a sua empresa não pode correr o risco de ficar sem energia, fale
                com a Gera Energy. A gente cuida de tudo para você continuar operando
                com segurança e tranquilidade.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm md:text-base">(21) 3851-0660</p>
                    <p className="text-xs md:text-sm text-gray-200">
                      Atendimento 24/7
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm md:text-base">
                      comercial@gera-energy.com
                    </p>
                    <p className="text-xs md:text-sm text-gray-200">
                      Email comercial
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm md:text-base">
                      Duque de Caxias - RJ
                    </p>
                    <p className="text-xs md:text-sm text-gray-200">
                      Presença em RJ e SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded border border-white/30 bg-white/10 text-white placeholder-gray-300 text-sm md:text-base focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded border border-white/30 bg-white/10 text-white placeholder-gray-300 text-sm md:text-base focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded border border-white/30 bg-white/10 text-white placeholder-gray-300 text-sm md:text-base focus:outline-none focus:border-[#FFD700]"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded border border-white/30 bg-white/10 text-white placeholder-gray-300 text-sm md:text-base focus:outline-none focus:border-[#FFD700]"
              >
                <option value="" className="bg-gray-800 text-white">
                  Tipo de Serviço
                </option>
                <option value="locacao" className="bg-gray-800 text-white">
                  Locação de Geradores
                </option>
                <option value="venda" className="bg-gray-800 text-white">
                  Venda de Geradores
                </option>
                <option value="manutencao" className="bg-gray-800 text-white">
                  Manutenção
                </option>
                <option value="quadros" className="bg-gray-800 text-white">
                  Fabricação de Quadros
                </option>
                <option value="cabos" className="bg-gray-800 text-white">
                  Aluguel de Cabos
                </option>
              </select>
              <input
                type="text"
                name="power"
                placeholder="Potência Desejada (kVA)"
                value={formData.power}
                onChange={handleFormChange}
                className="w-full px-4 py-3 rounded border border-white/30 bg-white/10 text-white placeholder-gray-300 text-sm md:text-base focus:outline-none focus:border-[#FFD700]"
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-3 rounded border border-white/30 bg-white/10 text-white placeholder-gray-300 text-sm md:text-base focus:outline-none focus:border-[#FFD700] resize-none"
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-[#FFD700] text-black hover:bg-[#FFED4E] font-bold text-sm md:text-base py-3"
              >
                ENVIAR SOLICITAÇÃO
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center text-xs md:text-sm">
        <div className="container mx-auto px-4">
          <p>© 2025 Gera Energy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

