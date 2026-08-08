{ PcAnalyzer configuration unit }
unit PcAnalyzerConfig;

interface

const
  APP_NAME = 'PcAnalyzer';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'pc analyzer';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
