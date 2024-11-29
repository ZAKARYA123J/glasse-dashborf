"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Icon } from "@/components/ui/icon";
import EmptyProject from './components/empty';
import ProjectAction from './components/project-action';

// Define the API response structure
interface Project {
    nameEntreprise: string;
    namePersone: string;
    email: string;
    VotreFonction: string;
    Adress: string;
    codePostall: string;
    message: string;
    etage: string;
    surfaceId: string;
    status: string;
    numberPhon: string;
    ville: string;
    datecalendrier: string;
}
const ProjectGrid: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://ocean-dashbord-elzu.vercel.app/api/Devis'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data: Project[] = await response.json();
                setProjects(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (projects.length === 0) return <EmptyProject />;

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {projects.map((project, index) => (
                <Card key={index}>
                    <CardHeader className="flex-row gap-1 items-center space-y-0">
                        <div className="flex-1 flex items-center gap-4">
                            <Avatar className="flex-none h-10 w-10 rounded bg-default-200 text-default hover:bg-default-200">
                               
                            </Avatar>
                            <h3 className="text-default-900 text-lg font-medium max-w-[210px] truncate text-center capitalize">
                                {project.nameEntreprise}
                            </h3>
                        </div>
                        <ProjectAction />
                    </CardHeader>
                    <CardContent>
                        <div className="text-default-600 text-sm">{project.message}</div>
                        <div className="flex gap-4 mt-6">
                            <div>
                                <div className="text-xs text-default-400 mb-1">Ville</div>
                                <div className="text-xs text-default-600 font-medium">{project.ville}</div>
                            </div>
                            <div>
                                <div className="text-xs text-default-400 mb-1">Date</div>
                                <div className="text-xs text-default-600 font-medium">{project.datecalendrier}</div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex-1">
                                <div className="text-default-400 text-sm font-normal mb-3">Person</div>
                                <div className="text-default-600 font-medium">{project.namePersone}</div>
                            </div>
                            <div className="flex-none">
                                <div className="flex items-center gap-1 bg-destructive/10 text-destructive rounded-full px-2 py-0.5 text-xs mt-1">
                                    <Icon icon="heroicons-outline:phone" />
                                    {project.numberPhon}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ProjectGrid;
