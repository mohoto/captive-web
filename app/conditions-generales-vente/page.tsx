
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12 pb-8 border-b-2 border-captive-secondary">
            <h1 className="text-4xl font-bold mb-4">Conditions générales de vente</h1>
            <div className="bg-blue-50 p-6 rounded-lg inline-block">
                <p className="font-semibold text-lg">CAPTIVE</p>
                <p className="text-gray-700">SIRET : 392 843 595 00035</p>
                <p className="text-gray-700">256 rue Gabriel Péri</p>
                <p className="text-gray-700">94230 Cachan</p>
            </div>
        </header>
        <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 1 - OBJET</h2>
                <p className="text-gray-700 leading-relaxed">
                    Les présentes Conditions Générales de Vente (CGV) définissent les conditions dans lesquelles la société CAPTIVE fournit ses services de création de sites web à ses clients.
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 2 - ACCEPTATION DES CONDITIONS</h2>
                <p className="text-gray-700 leading-relaxed">
                    La signature du devis par le client emporte acceptation pleine et entière des présentes conditions générales de vente, qui prévalent sur toutes autres conditions générales ou particulières non expressément agréées par CAPTIVE.
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 3 - PRESTATIONS</h2>
                <p className="text-gray-700 leading-relaxed mb-4">CAPTIVE propose des services de :</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Création et développement de sites web</li>
                    <li>Conception graphique et ergonomique</li>
                    <li>Intégration de contenus</li>
                    <li>Optimisation et référencement</li>
                    <li>Maintenance et support technique</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Les prestations sont détaillées dans chaque devis personnalisé remis au client.
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">ARTICLE 4 - DEVIS ET COMMANDES</h2>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">4.1 Établissement du devis</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Tout devis établi par CAPTIVE est valable 30 jours à compter de sa date d&#39;émission. Au-delà de ce délai, les prix sont susceptibles d&#39;être révisés.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2">4.2 Acceptation de commande</h3>
                        <p className="text-gray-700 leading-relaxed mb-2">La commande ne devient ferme et définitive qu&#39;après :</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Signature du devis par le client</li>
                            <li>Versement de l&#39;acompte requis</li>
                        </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">4.3 Acompte</h3>
                        <p className="text-yellow-800 leading-relaxed">
                            Un acompte représentant <strong>1/3 du montant total du devis</strong> sera exigible après signature du devis. Aucun travail ne sera entrepris avant réception de cet acompte.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">ARTICLE 5 - PRIX ET MODALITÉS DE PAIEMENT</h2>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">5.1 Prix</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Les prix sont exprimés en euros hors taxes. La TVA est non applicable, art. 293 du CGI.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">5.2 Modalités de paiement</h3>
                        <p className="text-gray-700 leading-relaxed mb-2">Les paiements s&#39;effectuent selon l&#39;échéancier suivant :</p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>1/3 à la commande (acompte)</li>
                                <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>1/3 à la validation de la maquette/prototype</li>
                                <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>1/3 à la livraison du site</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            Le paiement est immédiat, par virement bancaire ou chèque, par virement bancaire ou chèque.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">5.3 Retard de paiement</h3>
                        <p className="text-gray-700 leading-relaxed">
                            En cas de retard de paiement, des pénalités de 3 fois le taux d&#39;intérêt légal seront automatiquement appliquées, ainsi qu&#39;une indemnité forfaitaire de 40 euros pour frais de recouvrement.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 6 - DÉLAIS DE RÉALISATION</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Les délais de réalisation sont convenus lors de l&#39;établissement du devis. Ils ne deviennent contractuels qu&#39;après réception de l&#39;acompte et de tous les éléments nécessaires fournis par le client.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">Les délais peuvent être prolongés en cas de :</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Retard dans la fourniture des éléments par le client</li>
                    <li>Modifications demandées en cours de réalisation</li>
                    <li>Force majeure</li>
                </ul>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 7 - OBLIGATIONS DU CLIENT</h2>
                <p className="text-gray-700 leading-relaxed mb-2">Le client s&#39;engage à :</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Fournir tous les éléments nécessaires à la réalisation (textes, images, logos, etc.)</li>
                    <li>Respecter les délais de validation et de retour</li>
                    <li>S&#39;assurer de la légalité des contenus fournis</li>
                    <li>Disposer des droits d&#39;utilisation des éléments fournis</li>
                </ul>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">ARTICLE 8 - PROPRIÉTÉ INTELLECTUELLE</h2>
                
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">8.1 Droits d&#39;auteur</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Les créations réalisées par CAPTIVE demeurent sa propriété exclusive jusqu&#39;au paiement intégral du prix convenu.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2">8.2 Licence d&#39;utilisation</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Après paiement intégral, le client obtient une licence d&#39;utilisation non exclusive des créations pour l&#39;usage convenu.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2">8.3 Éléments fournis par le client</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Le client garantit disposer des droits nécessaires sur tous les éléments qu&#39;il fournit et indemnise CAPTIVE contre toute réclamation de tiers.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">ARTICLE 9 - GARANTIES ET RESPONSABILITÉ</h2>
                
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">9.1 Garanties</h3>
                        <p className="text-gray-700 leading-relaxed">
                            CAPTIVE garantit la conformité de ses prestations aux spécifications convenues. La garantie est limitée à la correction des défauts signalés dans les 30 jours suivant la livraison.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2">9.2 Limitation de responsabilité</h3>
                        <p className="text-gray-700 leading-relaxed">
                            La responsabilité de CAPTIVE est limitée au montant des sommes versées par le client. CAPTIVE ne saurait être tenue responsable des dommages indirects ou de perte d&#39;exploitation.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 10 - HÉBERGEMENT ET MAINTENANCE</h2>
                <p className="text-gray-700 leading-relaxed">
                    Les prestations d&#39;hébergement et de maintenance font l&#39;objet de contrats séparés avec des conditions spécifiques.
                </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 11 - RÉSILIATION</h2>
                <p className="text-gray-700 leading-relaxed">
                    En cas de manquement grave de l&#39;une des parties à ses obligations, l&#39;autre partie pourra résilier le contrat de plein droit après mise en demeure restée sans effet pendant 15 jours.
                </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 12 - FORCE MAJEURE</h2>
                <p className="text-gray-700 leading-relaxed">
                    CAPTIVE ne saurait être tenue responsable de l&#39;inexécution de ses obligations du fait d&#39;événements de force majeure tels que définis par la jurisprudence.
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">ARTICLE 13 - DONNÉES PERSONNELLES</h2>
                <p className="text-gray-700 leading-relaxed">
                    CAPTIVE s&#39;engage à respecter la réglementation en vigueur relative à la protection des données personnelles, notamment le RGPD.
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">ARTICLE 14 - DISPOSITIONS GÉNÉRALES</h2>
                
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">14.1 Modification</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Toute modification des présentes CGV doit faire l&#39;objet d&#39;un avenant écrit signé par les deux parties.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2">14.2 Nullité partielle</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Si une clause des présentes CGV était déclarée nulle, les autres clauses conserveraient leur validité.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2">14.3 Droit applicable</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Les présentes CGV sont soumises au droit français.
                        </p>
                    </div>             
                    <div>
                        <h3 className="text-lg font-semibold mb-2">14.4 Règlement des litiges</h3>
                        <p className="text-gray-700 leading-relaxed">
                            En cas de litige, les parties s&#39;efforceront de trouver une solution amiable. À défaut, les tribunaux de Paris seront seuls compétents.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <footer className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
            <div className="bg-gray-100 p-4 rounded-lg inline-block">
                <p className="text-gray-700 font-semibold">Date d&#39;entrée en vigueur : <span className="text-blue-600">01/01/2025</span></p>
                <p className="text-gray-700 font-semibold">Version : <span className="text-blue-600">1.0</span></p>
            </div>
        </footer>
    </div>
  )
}