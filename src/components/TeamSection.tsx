import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "David Durham",
      image: "/lovable-uploads/369b5521-95e6-428a-8ff6-3d8744067417.png",
      description: [
        "With more than 35 years of options trading and investing expertise, David is the originator of the Income Madness Week concept.",
        "During Income Madness, you'll learn with Dave as he shows you how to identify the best trade opportunities to generate income in 1 to 3 days and the right way to sell options on those trades so you can get that income!"
      ]
    },
    {
      name: "Emily Norris",
      image: "/lovable-uploads/2511ea4f-7db8-4311-b513-ff3ecee14b50.png",
      description: [
        "With more than 20 years of options trading and investing expertise, Emily has led the Income Madness Week events since 2016.",
        "During Income Madness, Emily hosts the live trading sessions, tracks and manages the trade recommendations and keeps you up to date with ongoing alerts during the Income Madness Week event."
      ]
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Your Income Madness Week Trading Team
          </h2>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold mb-6">{member.name}</h3>
                    <div className="space-y-4">
                      {member.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed">
                          {paragraph.includes('Income Madness Week') ? (
                            <>
                              {paragraph.split('Income Madness Week').map((part, partIndex) => (
                                <span key={partIndex}>
                                  {part}
                                  {partIndex < paragraph.split('Income Madness Week').length - 1 && (
                                    <em className="font-medium">Income Madness Week</em>
                                  )}
                                </span>
                              ))}
                            </>
                          ) : (
                            paragraph
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;