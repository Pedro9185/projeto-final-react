import './Tabs.css';
import { useState } from "react";
export default function Tabs() {
    const [activeTab, setActiveTab] = useState('meus-itens');
    return (
        <div className="Tabs">
            <button
                className={activeTab === 'meus-itens' ? 'active' : ''}
                onClick={() => setActiveTab('meus itens')} 
                >
                  Meus Itens               
                </button>
            <button
                className={activeTab=== 'propostas' ? 'active' : ''}
                onClick={() => setActiveTab('propostas')}
                >
                Propostas               
                </button>
            
            <button
                className={activeTab=== 'historico' ? 'active' : ''}
                onClick={() => setActiveTab('historico')} 
                >
                Histórico 
                </button>

                <div className="tab-contents">
                    {activeTab === 'meus-itens' & <p>Conteúdo dos meus itens</p>}
                    {activeTab === 'propostas' & <p>Conteúdo das propostas</p>}
                    {activeTab === 'historico' & <p>Conteúdo do histórico</p>}
                </div>
        </div>
    );
}