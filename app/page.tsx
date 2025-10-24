"use client";
import { motion } from "framer-motion";
import { Heart, Activity, Brain, Users, Target, Calendar } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-gray-800 overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="w-full px-6 pt-12 pb-10 text-center bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Activity className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
            PrediCuori: Sistema Inteligente para Predição de Eventos
            Cardiovasculares Agudos
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Integração de ECG e dados clínicos usando inteligência artificial
          </p>
          <p className="text-sm text-gray-600 mb-8">
            Programa de Inovação Tecnológica (PIT - EBSERH / CNPq) • JAI 2025
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-sm p-2">
              <img
                src="/logos/ufsm.png"
                alt="UFSM"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-sm p-2">
              <img
                src="/logos/ct.png"
                alt="Centro de Tecnologia"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-sm p-2">
              <img
                src="/logos/css.png"
                alt="Centro de Ciências da Saúde"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Conteúdo principal */}
      <section className="w-full max-w-5xl mx-auto px-6 py-10 space-y-12 overflow-hidden">
        {/* Contexto e Problema */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-900 mb-3">
                O Desafio
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                As doenças cardiovasculares são a{" "}
                <strong>principal causa de mortalidade no Brasil</strong>,
                respondendo por mais de <strong>350 mil óbitos anuais</strong>{" "}
                no SUS. Representam 30% de todas as mortes no país e custam
                cerca de <strong>R$ 2,1 bilhões</strong> por ano em internações.
              </p>
              <p className="text-gray-700 leading-relaxed">
                68% destes custos estão relacionados a{" "}
                <strong>eventos agudos</strong> que poderiam ser prevenidos ou
                mitigados através de identificação precoce de pacientes de alto
                risco.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resumo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Sobre o PrediCuori
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            O PrediCuori é um <strong>sistema multimodal</strong> desenvolvido
            para prever eventos cardiovasculares agudos (infarto do miocárdio,
            arritmias graves e morte súbita), integrando dados de{" "}
            <strong>eletrocardiogramas (ECG)</strong> e{" "}
            <strong>informações clínicas</strong> do prontuário eletrônico em
            modelos de aprendizado profundo. O objetivo é permitir predição
            precoce em janelas de 30 a 90 dias e oferecer suporte à decisão
            médica com explicabilidade.
          </p>
        </motion.div>

        {/* Objetivos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Objetivos do Projeto
          </h2>

          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Objetivo Geral
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Desenvolver e validar um sistema inteligente baseado em IA para
            predição de eventos cardiovasculares agudos em pacientes
            hospitalizados, integrando análise automatizada de ECG com dados
            clínicos.
          </p>

          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Objetivos Específicos
          </h3>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <p>
                Construir base de dados retrospectiva com{" "}
                <strong>5.000 ECGs digitais</strong> associados a dados clínicos
                e desfechos em 90 dias
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <p>
                Desenvolver algoritmos de <strong>aprendizado profundo</strong>{" "}
                (CNN) para extração automatizada de características de ECG
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <p>
                Criar modelo preditivo <strong>multimodal</strong> integrando
                ECG e dados clínicos com ensemble learning
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <p>
                Implementar <strong>protótipo web</strong> para uso clínico em
                tempo real
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">5.</span>
              <p>
                Validar prospectivamente o modelo em coorte de{" "}
                <strong>300 pacientes consecutivos</strong>
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">6.</span>
              <p>
                Estabelecer <strong>protocolo clínico padronizado</strong> para
                implementação hospitalar
              </p>
            </div>
          </div>
        </motion.div>

        {/* Metodologia */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Metodologia
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">
                Coleta e Preparação
              </h3>
              <p className="text-sm text-gray-700">
                Extração de ECGs digitais e dados clínicos (comorbidades,
                medicações, exames laboratoriais) do sistema hospitalar, com
                seguimento de 90 dias para documentação de desfechos.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">
                Pré-processamento
              </h3>
              <p className="text-sm text-gray-700">
                Filtragem de ruído, normalização de amplitude, correção de linha
                de base, detecção e segmentação automática de complexos QRS.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">
                Deep Learning
              </h3>
              <p className="text-sm text-gray-700">
                Treinamento de rede neural convolucional (CNN 1D baseada em
                ResNet-18) para extração de características relevantes do ECG.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">
                Integração Multimodal
              </h3>
              <p className="text-sm text-gray-700">
                Combinação de features do ECG com dados clínicos estruturados
                usando modelo ensemble (Random Forest + XGBoost).
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Sistema Web</h3>
              <p className="text-sm text-gray-700">
                Desenvolvimento de plataforma web (Python Flask) com interface
                intuitiva para upload de ECG e visualização de predições em
                tempo real.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Validação</h3>
              <p className="text-sm text-gray-700">
                Métricas: AUC-ROC, sensibilidade, especificidade, calibração.
                Interpretabilidade com SHAP values para explicar contribuições
                dos fatores.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Inovações */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Diferenciais Inovadores
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Integração Multimodal:</strong> Primeira solução
                nacional combinando ECG automatizado com prontuário eletrônico
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Predição Temporal:</strong> Capacidade de prever eventos
                em janelas específicas (30, 60, 90 dias)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Adaptação Local:</strong> Algoritmos específicos para
                população brasileira
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Tecnologia Aberta:</strong> Software livre, transparente
                e auditável
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resultados Esperados */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Resultados Esperados
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800">
                Performance Técnica
              </h3>
              <p className="text-sm text-gray-700">
                Acurácia superior a <strong>85%</strong>, AUC-ROC &gt; 0.80,
                processamento em menos de 30 segundos
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800">Impacto Clínico</h3>
              <p className="text-sm text-gray-700">
                Redução de <strong>15-20%</strong> na mortalidade
                cardiovascular, melhoria de 20% na estratificação de risco
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800">Impacto Econômico</h3>
              <p className="text-sm text-gray-700">
                Redução de custos hospitalares estimada em{" "}
                <strong>R$ 10-20 milhões/ano</strong> em escala nacional
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800">Expansão</h3>
              <p className="text-sm text-gray-700">
                Implementação piloto em <strong>3-5 hospitais EBSERH</strong>,
                potencial para toda rede (40 hospitais)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cronograma */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Cronograma (12 meses)
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-3 items-start">
              <span className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-xs flex-shrink-0">
                M1-3
              </span>
              <p className="text-gray-700">
                Coleta e preparação de dados retrospectivos (5.000 ECGs)
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-xs flex-shrink-0">
                M4-6
              </span>
              <p className="text-gray-700">
                Desenvolvimento de algoritmos de deep learning e processamento
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-xs flex-shrink-0">
                M6-8
              </span>
              <p className="text-gray-700">
                Integração multimodal e desenvolvimento do sistema web
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-xs flex-shrink-0">
                M9-11
              </span>
              <p className="text-gray-700">
                Validação prospectiva com 300 pacientes consecutivos
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-xs flex-shrink-0">
                M12
              </span>
              <p className="text-gray-700">
                Protocolo clínico, documentação técnica e relatório final
              </p>
            </div>
          </div>
        </motion.div>

        {/* Podcast */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-3 border-l-4 border-blue-700 pl-3">
            Conheça o Projeto
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-3">
            Ouça uma explicação breve sobre o projeto:
          </p>
          <div className="aspect-video rounded-lg overflow-hidden shadow-md border border-blue-100">
            <iframe
              src="https://drive.google.com/file/d/1-qEh8bXHxNZrkUXktWaV7l-Cg587uC-r/preview"
              allow="autoplay"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-16 py-10 bg-blue-50 border-t border-blue-100 text-center text-sm text-gray-700 overflow-hidden">
        <div className="flex justify-center gap-6 mb-4">
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-sm p-2">
            <img
              src="/logos/ufsm.png"
              alt="UFSM"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-sm p-2">
            <img
              src="/logos/ct.png"
              alt="CT"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-sm p-2">
            <img
              src="/logos/css.png"
              alt="CSS"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-blue-900 mb-2">
            Pesquisador Responsável
          </p>
          <p>
            <strong>Leandro Dalla Nora</strong> —{" "}
            <a
              href="mailto:ldnora@inf.ufsm.br"
              className="underline hover:text-blue-600"
            >
              ldnora@inf.ufsm.br
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/leandro-dalla-nora"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              linkedin.com/in/leandro-dalla-nora
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/ldnora"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              github.com/ldnora
            </a>
          </p>
          <p>
            Lattes:{" "}
            <a
              href="https://wwws.cnpq.br/cvlattesweb/PKG_MENU.menu?f_cod=C41A2729F469EC2F2BDEE0B1A0C7918B#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              Currículo Lattes
            </a>
          </p>
        </div>
        <p className="mt-6 text-xs text-gray-600">
          Universidade Federal de Santa Maria — JAI 2025
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Programa de Inovação Tecnológica (PIT) - EBSERH / CNPq
        </p>
      </footer>
    </main>
  );
}
