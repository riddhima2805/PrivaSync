import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NotificationCenter from "@/components/notificationCenter";

const trainingJobs = [
  { id: "job-1", name: "Fraud Detection Model", status: "Running" },
  { id: "job-2", name: "Image Classifier v2", status: "Completed" },
];

export default function userdashboardPage() {
  return (
    <div className="p6 space-y-6">
      <h1 className="text 2xl font semibold">Dashboard</h1>
      <Card>
        <CardHeader><CardTitle>Recent Training Jobs</CardTitle></CardHeader>
        <CardContent className="space y 2">
          {trainingJobs.map((job) => (
            <div key={job.id} className="flex justify between text sm">
              <span>{job.name}</span>
              <Badge>{job.status}</Badge>
            </div>
          ))}</CardContent>
      </Card>
      <NotificationCenter />
    </div>
  );
}
