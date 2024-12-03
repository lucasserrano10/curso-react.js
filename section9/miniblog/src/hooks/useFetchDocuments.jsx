import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);  // Definido como true para começar carregando

    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (cancelled) return;

            setLoading(true);
            const collectionRef = collection(db, docCollection);

            try {
                let q 
                if(search){
                    q = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createAt", "desc"))
                }else{
                    q = await query(collectionRef,orderBy("createdAt", "desc"))
                }

                const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                    setDocuments(
                        QuerySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                    setLoading(false);
                });

                // Limpar o efeito quando o componente for desmontado
                return () => unsubscribe();

            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        }

        loadData();

        return () => setCancelled(true);

    }, [docCollection, search, uid, cancelled]);

    // Retorna um objeto com os dados
    return { documents, loading, error };
};
