import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - CAPTIVE WEB",
  description: "Politique de confidentialité CAPTIVE. Protection des données personnelles conforme RGPD pour nos clients.",
  robots: {
    index: true,
    follow: false,
  }
};

export default function Page() {
  return(
    <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12 pb-8">
            <h1 className="text-4xl font-bold mb-4">Politique de confidentialité</h1>
            <div className="bg-blue-50 p-6 rounded-lg inline-block">
                <p className="font-semibold text-lg text-blue-800">CAPTIVE</p>
                <p className="text-gray-700">SIRET : 392 843 595 00035</p>
                <p className="text-gray-700">256 rue Gabriel Péri</p>
                <p className="text-gray-700">94230 Cachan</p>
            </div>
            <p className="text-gray-600 mt-4 italic">Dernière mise à jour : 01/01/2025</p>
        </header>
        <section className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">INTRODUCTION</h2>
            <p className="text-gray-700 leading-relaxed">
                La société CAPTIVE s&#39;engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, conservons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française.
            </p>
        </section>
        <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">1. RESPONSABLE DU TRAITEMENT</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Le responsable du traitement des données personnelles est :
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800">CAPTIVE</p>
                    <p className="text-gray-700">SIRET : 392 843 595 00035</p>
                    <p className="text-gray-700">Adresse : 256 rue Gabriel Péri, 94230 Cachan</p>
                    <p className="text-gray-700">Email : contact@captive-web.fr</p>
                    <p className="text-gray-700">Téléphone : 01 57 83 71 10</p>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">2. DONNÉES COLLECTÉES</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Dans le cadre de nos services de création de sites web, nous sommes amenés à collecter les catégories de données suivantes :
                </p>
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Données d&#39;identification</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Nom et prénom</li>
                            <li>Raison sociale de l&#39;entreprise</li>
                            <li>Adresse postale</li>
                            <li>Adresse e-mail</li>
                            <li>Numéro de téléphone</li>
                            <li>SIRET/SIREN (pour les professionnels)</li>
                        </ul>
                    </div> 
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Données de projet</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Cahier des charges et besoins exprimés</li>
                            <li>Contenus fournis (textes, images, logos)</li>
                            <li>Préférences et commentaires</li>
                            <li>Historique des échanges et modifications</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-yellow-800 mb-2">Données techniques</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Adresse IP</li>
                            <li>Données de navigation sur notre site</li>
                            <li>Informations sur l&#39;appareil utilisé</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">3. FINALITÉS DU TRAITEMENT</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Vos données personnelles sont traitées pour les finalités suivantes :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Exécution du contrat</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                            <li>Réalisation des prestations de création de sites web</li>
                            <li>Communication et suivi de projet</li>
                            <li>Facturation et gestion comptable</li>
                            <li>Support technique et maintenance</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Intérêts légitimes</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                            <li>Amélioration de nos services</li>
                            <li>Prospection commerciale</li>
                            <li>Gestion des réclamations</li>
                            <li>Sécurité de nos systèmes</li>
                        </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-yellow-800 mb-2">Obligations légales</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                            <li>Conservation des factures</li>
                            <li>Respect des obligations comptables</li>
                            <li>Réponse aux demandes des autorités</li>
                        </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">Consentement</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                            <li>Newsletter et communications marketing</li>
                            <li>Cookies non essentiels</li>
                            <li>Témoignages et études de cas</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">4. DURÉE DE CONSERVATION</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Nous conservons vos données personnelles pendant les durées suivantes :
                </p>
                
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="border border-gray-300 p-3 text-left font-semibold text-blue-800">Type de données</th>
                                <th className="border border-gray-300 p-3 text-left font-semibold text-blue-800">Durée de conservation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 p-3 text-gray-700">Données contractuelles</td>
                                <td className="border border-gray-300 p-3 text-gray-700">10 ans après la fin du contrat</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3 text-gray-700">Données comptables</td>
                                <td className="border border-gray-300 p-3 text-gray-700">10 ans (obligation légale)</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 p-3 text-gray-700">Données de prospection</td>
                                <td className="border border-gray-300 p-3 text-gray-700">3 ans après le dernier contact</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3 text-gray-700">Cookies et données de navigation</td>
                                <td className="border border-gray-300 p-3 text-gray-700">13 mois maximum</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">5. DESTINATAIRES DES DONNÉES</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Vos données personnelles peuvent être transmises aux destinataires suivants :
                </p>
                
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Personnel autorisé de CAPTIVE</h3>
                        <p className="text-gray-700 text-sm">Accès strictement limité aux besoins de traitement</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Prestataires techniques</h3>
                        <p className="text-gray-700 text-sm">Hébergeurs, services de maintenance, outils de communication (sous contrat de sous-traitance)</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-yellow-800 mb-2">Partenaires commerciaux</h3>
                        <p className="text-gray-700 text-sm">Uniquement avec votre consentement explicite</p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-2">Autorités légales</h3>
                        <p className="text-gray-700 text-sm">En cas d&#39;obligation légale ou de demande judiciaire</p>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">6. TRANSFERTS INTERNATIONAUX</h2>
                <p className="text-gray-700 leading-relaxed">
                    Vos données personnelles sont principalement traitées en France. En cas de transfert vers un pays tiers à l&#39;Union européenne, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types, décision d&#39;adéquation de la Commission européenne, etc.).
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">7. SÉCURITÉ DES DONNÉES</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Mesures techniques</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                            <li>Chiffrement des données sensibles</li>
                            <li>Connexions sécurisées (HTTPS/SSL)</li>
                            <li>Sauvegardes régulières</li>
                            <li>Antivirus et pare-feu</li>
                            <li>Mise à jour des systèmes</li>
                        </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Mesures organisationnelles</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                            <li>Accès limité aux données</li>
                            <li>Formation du personnel</li>
                            <li>Contrats de confidentialité</li>
                            <li>Procédures de gestion des incidents</li>
                            <li>Audits de sécurité réguliers</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">8. VOS DROITS</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">🔍 Droit d&#39;accès</h3>
                        <p className="text-gray-700 text-sm">Obtenir une copie de vos données personnelles</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Droit de rectification</h3>
                        <p className="text-gray-700 text-sm">Corriger des données inexactes ou incomplètes</p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-2">Droit d&#39;effacement</h3>
                        <p className="text-gray-700 text-sm">Demander la suppression de vos données</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-yellow-800 mb-2">Droit de limitation</h3>
                        <p className="text-gray-700 text-sm">Restreindre le traitement de vos données</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">Droit à la portabilité</h3>
                        <p className="text-gray-700 text-sm">Récupérer vos données dans un format structuré</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-2">Droit d&#39;opposition</h3>
                        <p className="text-gray-700 text-sm">Vous opposer au traitement de vos données</p>
                    </div>
                </div>
                
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Comment exercer vos droits ?</h3>
                    <p className="text-gray-700 text-sm mb-2">
                        Pour exercer ces droits, contactez-nous par email à <strong>[email à compléter]</strong> ou par courrier à notre adresse.
                    </p>
                    <p className="text-gray-700 text-sm">
                        Nous répondrons à votre demande dans un délai maximum d&#39;un mois. Une pièce d&#39;identité pourra être demandée pour vérifier votre identité.
                    </p>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">9. COOKIES</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Notre site web utilise des cookies pour améliorer votre expérience de navigation :
                </p>
                
                <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Cookies essentiels</h3>
                        <p className="text-gray-700 text-sm">Nécessaires au fonctionnement du site (pas de consentement requis)</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Cookies de performance</h3>
                        <p className="text-gray-700 text-sm">Analytics et statistiques d&#39;utilisation (avec votre consentement)</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">Cookies marketing</h3>
                        <p className="text-gray-700 text-sm">Publicité ciblée et réseaux sociaux (avec votre consentement)</p>
                    </div>
                </div>
                
                <p className="text-gray-700 text-sm mt-4">
                    Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur ou notre bandeau de consentement.
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">10. RÉCLAMATIONS</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Si vous estimez que le traitement de vos données personnelles ne respecte pas la réglementation, vous pouvez :
                </p>
                
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">1. Nous contacter directement</h3>
                        <p className="text-gray-700 text-sm">Email : [email à compléter]</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">2. Saisir la CNIL</h3>
                        <p className="text-gray-700 text-sm">
                            Commission Nationale de l&#39;Informatique et des Libertés<br/>
                            3 Place de Fontenoy - TSA 80715<br/>
                            75334 PARIS CEDEX 07<br/>
                            <Link href="https://www.cnil.fr" className="text-blue-600 hover:underline">www.cnil.fr</Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">11. MODIFICATIONS</h2>
                <p className="text-gray-700 leading-relaxed">
                    Cette politique de confidentialité peut être mise à jour pour refléter les changements dans nos pratiques ou la réglementation. Nous vous informerons de toute modification importante par email ou via notre site web. La date de dernière mise à jour est indiquée en en-tête de ce document.
                </p>
            </section>
            <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">12. CONTACT</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, contactez-nous :
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold text-blue-800 mb-2">Par email</h3>
                            <p className="text-gray-700">[Email à compléter]</p>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-blue-800 mb-2">Par courrier</h3>
                            <p className="text-gray-700">
                                CAPTIVE<br/>
                                256 rue Gabriel Péri<br/>
                                94230 Cachan
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-blue-800 mb-2">Par téléphone</h3>
                            <p className="text-gray-700">[Téléphone à compléter]</p>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-blue-800 mb-2">Délai de réponse</h3>
                            <p className="text-gray-700">Maximum 1 mois</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <footer className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
            <div className="bg-gray-100 p-4 rounded-lg inline-block">
                <p className="text-gray-700 font-semibold">Document mis à jour le : <span className="text-blue-600">01/01/2025</span></p>
                <p className="text-gray-700 font-semibold">Version : <span className="text-blue-600">1.0</span></p>
            </div>
        </footer>
    </div>
  )
}
