import Image from "next/image";
import LogoStrip from "./components/LogoStrip";

const PROJECT_TITLE =
  "SISTEMA INTELIGENTE PARA PREDIÇÃO DE EVENTOS CARDIOVASCULARES AGUDOS";
const SUBTITLE =
  "Integração de ECG e dados clínicos usando inteligência artificial — Programa de Inovação Tecnológica (PIT) - EBSERH / CNPq";

const SUMMARY =
  "Desenvolvimento de sistema multimodal que integra análise automatizada de ECG com dados clínicos para predizer eventos cardiovasculares em 30–90 dias. Base retrospectiva de ~5.000 ECGs e validação prospectiva.";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/leandro-dalla-nora",
  github: "https://github.com/ldnora/",
  email: "mailto:ldnora@inf.ufsm.br",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* HERO */}
      <header className="px-5 py-10 max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
            {PROJECT_TITLE}
          </h1>
          <p className="text-sm sm:text-base text-gray-700">{SUBTITLE}</p>

          <div className="mt-4">
            <p className="text-sm text-gray-800">{SUMMARY}</p>
          </div>

          <div className="mt-6">
            <LogoStrip
              logos={[
                { src: "/logos/ufsm.png", alt: "UFSM" },
                {
                  src: "/logos/ct.png",
                  alt: "Centro de Tecnologia"
                },
                {
                  src: "/logos/css.png",
                  alt: "Centro Ciências da Saúde"
                },
              ]}
            />
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="px-5 pb-12 max-w-3xl mx-auto space-y-8">
        {/* Quick facts / metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-sm font-semibold">Classificação Primária</h3>
            <p className="text-sm text-gray-700 mt-2">
              Ciências da Saúde — Medicina — Cardiologia Clínica. Código CNPq:
              3.01.03.01-7
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-sm font-semibold">Classificação Secundária</h3>
            <p className="text-sm text-gray-700 mt-2">
              Engenharias — Engenharia Biomédica — Processamento de Sinais
              Biomédicos. Código CNPq: 1.02.03.01-0
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Objetivo Geral</h2>
          <p className="text-sm text-gray-800">
            Desenvolver e validar sistema baseado em IA para predição de IAM,
            arritmias graves e morte súbita em pacientes hospitalizados
            integrando ECG e prontuário eletrônico.
          </p>

          <h3 className="mt-4 font-semibold">Objetivos específicos</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Base retrospectiva com ~5.000 ECGs e metadados clínicos.</li>
            <li>Modelos de deep learning para extração de features do ECG.</li>
            <li>Modelo multimodal ensemble (ECG + dados clínicos).</li>
            <li>Protótipo web para upload e predições em tempo real.</li>
            <li>Validação prospectiva em coorte (300–500 pacientes).</li>
          </ul>
        </div>

        {/* Metodologia resumida */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Metodologia (resumo)</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
            <li>
              Coleta e padronização de ECGs (500 Hz, 10s), anotações e desfechos
              90 dias.
            </li>
            <li>
              Pré-processamento: filtros, remoção de artefatos e segmentação
              QRS.
            </li>
            <li>
              Treinamento CNN (ResNet-18 1D adaptada) + regularização e
              validação cruzada k=5.
            </li>
            <li>
              Integração multimodal: features ECG + dados clínicos (one-hot,
              z-score) e ensemble (RF + XGBoost).
            </li>
            <li>
              Validação prospectiva e análise estatística com AUC,
              sensibilidade, calibração e SHAP.
            </li>
          </ol>
        </div>

        {/* Cronograma curto */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Cronograma resumido</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Meses 1–3:</strong> coleta e limpeza de dados.
            </p>
            <p>
              <strong>Meses 4–7:</strong> desenvolvimento de modelos e
              integração.
            </p>
            <p>
              <strong>Meses 8–11:</strong> desenvolvimento web e validação
              prospectiva.
            </p>
            <p>
              <strong>Mês 12:</strong> documentação, protocolo e disseminação.
            </p>
          </div>
        </div>

        {/* Podcast embed */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Podcast</h2>
          <p className="text-sm text-gray-700 mb-3">
            Conversa sobre o projeto. Use fone ou som no máximo.
          </p>
          <div className="w-full">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://drive.google.com/file/d/1-qEh8bXHxNZrkUXktWaV7l-Cg587uC-r/preview"
                allow="autoplay"
                className="absolute inset-0 w-full h-full rounded-md border"
                title="Podcast do projeto"
              />
            </div>
          </div>
        </div>

        {/* Links e contato */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Contato</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              Email:{" "}
              <a className="underline" href={LINKS.email}>
                ldnora@inf.ufsm.br
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="underline"
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/leandro-dalla-nora
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                className="underline"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                github.com/ldnora
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 py-8 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-5">
          <LogoStrip
            logos={[
              { src: "/logos/ufsm.png", alt: "UFSM" },
              { src: "/logos/ct.png", alt: "CT" },
              { src: "/logos/css.png", alt: "CSS" },
            ]}
          />
          <p className="text-xs text-gray-600 text-center mt-4">
            Programa de Inovação Tecnológica (PIT) - EBSERH / CNPq — EDITAL No
            02/2025
          </p>
        </div>
      </footer>
    </main>
  );
}
