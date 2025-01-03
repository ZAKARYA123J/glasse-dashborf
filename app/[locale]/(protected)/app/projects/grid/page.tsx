"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { Eye, MoreVertical, SquarePen, Trash2 } from "lucide-react";
import EmptyProject from './components/empty';
import ProjectAction from './components/project-action';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import internal from 'stream';
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
    id:internal;
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
                        <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="icon"
                        className="flex-none bg-transparent ring-offset-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent w-6"
                    >
                        <MoreVertical className="h-4 w-4 text-default-700" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0 overflow-hidden" align="end" >
                    <DropdownMenuItem

                        className="py-2 border-b border-default-200 text-default-600 focus:bg-default focus:text-default-foreground rounded-none cursor-pointer"

                    >
                        <Link href={`/`} className=' flex  items-center w-full'>
                            <Eye className="w-3.5 h-3.5 me-1" />
                            View
                        </Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem
    className="py-2 border-b border-default-200 text-default-600 focus:bg-default focus:text-default-foreground rounded-none cursor-pointer"
>
    <Link href={`/en/app/${project.id}`} className='flex items-center w-full'>
        <SquarePen className="w-3.5 h-3.5 me-1" />
        Edit
    </Link>
</DropdownMenuItem>
<DropdownMenuItem
    onClick={async () => {
        const confirmDelete = confirm("Are you sure you want to delete this project?");
        if (confirmDelete) {
            try {
                const response = await fetch(`https://ocean-dashbord-elzu.vercel.app/api/Devis/${project.surfaceId}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error("Failed to delete the project.");
                }
                alert("Project deleted successfully.");
                setProjects((prevProjects) =>
                    prevProjects.filter((p) => p.surfaceId !== project.surfaceId)
                );
            } catch (err: any) {
                console.error(err.message);
                alert("Error deleting the project.");
            }
        }
    }}
    className="py-2 bg-destructive/30 focus:bg-destructive focus:text-destructive-foreground rounded-none cursor-pointer"
>
    <Trash2 className="w-3.5 h-3.5 me-1" />
    Delete
</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
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
